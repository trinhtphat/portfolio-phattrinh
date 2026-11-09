import {
  escapeHtml,
  localizeField,
  localizeList,
  getPublishedEntries,
  filterEntries,
  computeGroupCounts,
  parseLibraryUrlState,
  buildLibraryUrlSearch,
  getRelatedEntries,
} from './library-core.js';

export function mountLibraryApp(rootEl, options = {}) {
  if (!rootEl) throw new Error('mountLibraryApp requires a root DOM element');

  const {
    entries = [],
    brands = [],
    meta = {},
    initialUrlSearch = typeof window !== 'undefined' ? window.location.search : '',
    initialUrlHash = typeof window !== 'undefined' ? window.location.hash : '',
    storage = typeof window !== 'undefined' ? window.localStorage : null,
    syncHistory = true,
  } = options;

  const publishedEntries = getPublishedEntries(entries);
  const brandById = new Map(brands.map((b) => [b.id, b]));
  const entryBySlug = new Map(publishedEntries.map((e) => [e.slug, e]));

  const readStoredLang = () => {
    try {
      const saved = storage ? storage.getItem('bio-lang') : null;
      return saved === 'vi' ? 'vi' : 'en';
    } catch {
      return 'en';
    }
  };

  const parsedInitial = parseLibraryUrlState(initialUrlSearch, initialUrlHash);

  const state = {
    lang: readStoredLang(),
    entry: entryBySlug.has(parsedInitial.entry) ? parsedInitial.entry : '',
    group: parsedInitial.group || 'all',
    brand: parsedInitial.brand || 'all',
    query: parsedInitial.query || '',
    topic: 'all',
  };

  function t(field) {
    return localizeField(field, state.lang).text;
  }

  function pushUrlState(replace = false) {
    if (!syncHistory || typeof window === 'undefined' || !window.history) return;
    const search = buildLibraryUrlSearch({
      entry: state.entry,
      group: state.group,
      brand: state.brand,
      query: state.query,
    });
    const nextUrl = `${window.location.pathname}${search}`;
    if (replace) {
      window.history.replaceState(null, '', nextUrl);
    } else {
      window.history.pushState(null, '', nextUrl);
    }
  }

  function syncDocumentMeta() {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = state.lang;
    const activeEntry = state.entry ? entryBySlug.get(state.entry) : null;
    if (activeEntry) {
      document.title = `${t(activeEntry.title)} · ${t(meta.name)} | Phat Trinh`;
    } else {
      document.title = `${t(meta.name)} | Phat Trinh`;
    }

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      if (activeEntry) {
        descMeta.setAttribute('content', t(activeEntry.summary));
      } else {
        descMeta.setAttribute('content', t(meta.subtitle));
      }
    }
  }

  function renderSidebarInner() {
    const counts = computeGroupCounts(publishedEntries, {
      brand: 'all',
      query: '',
      lang: state.lang,
    });

    const groupItems = ['all', 'origins', 'brands', 'recipes']
      .map((gKey) => {
        const isActive = !state.entry && state.group === gKey && state.brand === 'all';
        return `
          <li>
            <button type="button" class="lib-nav-btn${isActive ? ' is-active' : ''}" data-action="set-group" data-nav="1" data-group="${gKey}">
              <span>${escapeHtml(t(meta.groups?.[gKey]))}</span>
              <span class="lib-nav-count">${counts[gKey]}</span>
            </button>
          </li>
        `;
      })
      .join('');

    const brandItems = brands
      .map((b) => {
        const isActive = state.brand === b.id;
        const isIslay = b.parentHouseId === 'bruichladdich-distillery';
        return `
          <li>
            <button type="button" class="lib-brand-nav-btn${isActive ? ' is-active' : ''}" data-action="set-brand" data-brand="${escapeHtml(b.id)}">
              <span class="lib-brand-dot${isIslay ? ' is-islay' : ''}" aria-hidden="true"></span>
              <span class="lib-brand-nav-text">${escapeHtml(b.name)}</span>
            </button>
          </li>
        `;
      })
      .join('');

    return `
      <div class="lib-sidebar-group">
        <div class="lib-sidebar-heading">${escapeHtml(state.lang === 'vi' ? 'Danh mục tra cứu' : 'Collections')}</div>
        <ul class="lib-nav-list">
          ${groupItems}
        </ul>
      </div>
      <div class="lib-sidebar-group">
        <div class="lib-sidebar-heading">${escapeHtml(t(meta.brandFilterHeading))}</div>
        <ul class="lib-nav-list">
          <li>
            <button type="button" class="lib-brand-nav-btn${state.brand === 'all' ? ' is-active' : ''}" data-action="set-brand" data-brand="all">
              <span class="lib-brand-dot" aria-hidden="true"></span>
              <span class="lib-brand-nav-text">${escapeHtml(t(meta.allBrandsLabel))}</span>
            </button>
          </li>
          ${brandItems}
        </ul>
        <p class="lib-islay-note">${escapeHtml(t(meta.islayHouseNote))}</p>
      </div>
    `;
  }

  function renderDrawerInner() {
    const counts = computeGroupCounts(publishedEntries, {
      brand: 'all',
      query: '',
      lang: state.lang,
    });

    const groupButtons = ['all', 'origins', 'brands', 'recipes'].map((gKey) => {
      const isSel = state.group === gKey;
      return `
        <button type="button" class="lib-drawer-item${isSel ? ' is-active' : ''}" data-action="drawer-set-group" data-group="${gKey}">
          <span class="lib-drawer-item-label">${escapeHtml(t(meta.groups?.[gKey]))}</span>
          <span class="lib-drawer-item-count">${counts[gKey]}</span>
        </button>
      `;
    }).join('');

    const brandButtons = [
      `<button type="button" class="lib-drawer-brand-btn${state.brand === 'all' ? ' is-active' : ''}" data-action="drawer-set-brand" data-brand="all">${escapeHtml(t(meta.allBrandsLabel))}</button>`,
      ...brands.map((b) => `
        <button type="button" class="lib-drawer-brand-btn${state.brand === b.id ? ' is-active' : ''}" data-action="drawer-set-brand" data-brand="${escapeHtml(b.id)}">${escapeHtml(b.name)}</button>
      `),
    ].join('');

    return `
      <div class="lib-drawer-section">
        <div class="lib-drawer-section-title">${escapeHtml(state.lang === 'vi' ? 'Danh mục tra cứu' : 'Collections')}</div>
        <div class="lib-drawer-list">${groupButtons}</div>
      </div>
      <div class="lib-drawer-section">
        <div class="lib-drawer-section-title">${escapeHtml(t(meta.brandFilterHeading))}</div>
        <div class="lib-drawer-chips">${brandButtons}</div>
      </div>
    `;
  }

  function renderEntryCard(entry) {
    const brand = entry.brandId ? brandById.get(entry.brandId) : null;
    const titleObj = localizeField(entry.title, state.lang);
    const summaryObj = localizeField(entry.summary, state.lang);
    const catObj = localizeField(entry.categoryLabel, state.lang);

    let topVisualHtml = '';
    if (entry.coverImage) {
      topVisualHtml = `
        <div class="lib-entry-cover-frame">
          <img src="${escapeHtml(entry.coverImage)}" alt="${escapeHtml(titleObj.text)}" class="lib-entry-cover-img" loading="lazy">
          <span class="lib-card-cat-badge">${escapeHtml(catObj.text)}</span>
        </div>
      `;
    } else {
      const badgeLogo = brand
        ? `<span class="lib-logo-tile"><img src="${escapeHtml(brand.logo)}" alt="${escapeHtml(brand.name)}" loading="lazy"></span>`
        : `<span class="lib-origin-monogram" aria-hidden="true">${escapeHtml(state.lang === 'vi' ? 'LS' : 'OH')}</span>`;

      topVisualHtml = `
        <div class="lib-entry-card-top">
          ${badgeLogo}
          <div class="lib-entry-card-meta">
            <span class="lib-meta-line">${escapeHtml(catObj.text)}</span>
          </div>
        </div>
      `;
    }

    const ctaText = entry.shortCta
      ? localizeField(entry.shortCta, state.lang).text
      : (state.lang === 'vi' ? 'Xem tài liệu tra cứu →' : 'Open reference sheet →');

    return `
      <article class="lib-entry-card${entry.coverImage ? ' has-cover' : ''}" data-entry-card="${escapeHtml(entry.slug)}" tabindex="0" role="button" aria-label="${escapeHtml(titleObj.text)}">
        ${topVisualHtml}
        <h2 class="lib-entry-card-title">${escapeHtml(titleObj.text)}</h2>
        <p class="lib-entry-card-summary">${escapeHtml(summaryObj.text)}</p>
        <div class="lib-entry-card-foot">
          <span class="lib-open-prompt">${escapeHtml(ctaText)}</span>
        </div>
      </article>
    `;
  }

  function renderListView() {
    const counts = computeGroupCounts(publishedEntries, {
      brand: state.brand,
      query: state.query,
      lang: state.lang,
    });

    let filtered = filterEntries(publishedEntries, {
      group: state.group,
      brand: state.brand,
      query: state.query,
      lang: state.lang,
    });

    if (state.group === 'origins' && state.topic && state.topic !== 'all') {
      filtered = filtered.filter((e) => e.topicId === state.topic);
    }

    const countCardsHtml = ['all', 'origins', 'brands', 'recipes']
      .map((gKey) => {
        const selected = state.group === gKey;
        return `
          <button type="button" class="lib-count-card${selected ? ' is-selected' : ''}" data-ui="count-card" data-action="set-group" data-group="${gKey}" aria-pressed="${selected ? 'true' : 'false'}">
            <span class="lib-count-label">${escapeHtml(t(meta.groups?.[gKey]))}</span>
            <span class="lib-count-value">${counts[gKey]}</span>
          </button>
        `;
      })
      .join('');

    let categoryNavigationHtml = '';
    if (state.group === 'all') {
      categoryNavigationHtml = `
        <div class="lib-count-strip" data-ui="count-strip" role="group" aria-label="Content type filter">
          ${countCardsHtml}
        </div>
      `;
    } else {
      categoryNavigationHtml = `
        <div class="lib-category-hero" data-ui="cat-hero">
          <div class="lib-cat-hero-top">
            <span class="lib-cat-hero-breadcrumb">
              <button type="button" class="lib-crumb-btn" data-action="set-group" data-group="all">${escapeHtml(state.lang === 'vi' ? '← Tất cả chuyên mục' : '← All Modules')}</button>
            </span>
            <div class="lib-cat-hero-meta">
              <span class="lib-cat-count-badge">${filtered.length} ${escapeHtml(state.lang === 'vi' ? 'bài viết' : 'modules')}</span>
              ${state.group === 'recipes' ? `<span class="lib-status-badge">⏳ ${escapeHtml(t(meta.recipesStatusBadge))}</span>` : ''}
            </div>
          </div>
          <h2 class="lib-cat-hero-title">${escapeHtml(t(meta.groups?.[state.group]))}</h2>
          <p class="lib-cat-hero-desc">${escapeHtml(t(meta.groupDescriptions?.[state.group]))}</p>
          
          ${state.group === 'origins' ? `
            <div class="lib-topic-strip" role="group" aria-label="${escapeHtml(state.lang === 'vi' ? 'Lọc theo chủ đề' : 'Filter by topic')}">
              ${(meta.originTopics || []).map((topic) => {
                const isActive = (state.topic || 'all') === topic.id;
                return `
                  <button type="button" class="lib-topic-chip${isActive ? ' is-active' : ''}" data-action="set-topic" data-topic="${escapeHtml(topic.id)}">
                    ${escapeHtml(t(topic.label))}
                  </button>
                `;
              }).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }

    const mobileBrandChips = [
      `<button type="button" class="lib-brand-chip${state.brand === 'all' ? ' is-active' : ''}" data-ui="chip" data-action="set-brand" data-brand="all">${escapeHtml(t(meta.allBrandsLabel))}</button>`,
      ...brands.map(
        (b) =>
          `<button type="button" class="lib-brand-chip${state.brand === b.id ? ' is-active' : ''}" data-ui="chip" data-action="set-brand" data-brand="${escapeHtml(b.id)}">${escapeHtml(b.name)}</button>`
      ),
    ].join('');

    const verificationGates = Array.isArray(meta.recipesVerificationGates?.[state.lang])
      ? meta.recipesVerificationGates[state.lang]
      : (meta.recipesVerificationGates?.en || []);

    const recipesPendingHtml = `
      <section class="lib-empty-panel lib-pending-panel" data-role="recipes-pending-state">
        <div class="lib-pending-header">
          <div class="lib-pending-badge">
            <span class="lib-pending-pulse" aria-hidden="true"></span>
            ${escapeHtml(state.lang === 'vi' ? 'Tiêu chuẩn thẩm định khắt khe' : 'Strict Bar Quality Gates')}
          </div>
          <h2 class="lib-empty-title">${escapeHtml(t(meta.recipesPendingTitle))}</h2>
          <p class="lib-empty-body">${escapeHtml(t(meta.recipesPendingBody))}</p>
        </div>

        <div class="lib-gates-grid">
          ${verificationGates.map((gate) => `
            <div class="lib-gate-card">
              <span class="lib-gate-num">${escapeHtml(gate.num)}</span>
              <h4 class="lib-gate-title">${escapeHtml(gate.title)}</h4>
              <p class="lib-gate-desc">${escapeHtml(gate.desc)}</p>
            </div>
          `).join('')}
        </div>

        <div class="lib-pending-suggestions">
          <p class="lib-suggestions-title">${escapeHtml(state.lang === 'vi' ? 'Tra cứu trước cội nguồn & các dòng rượu nền tảng đã thẩm định:' : 'Explore verified foundation spirit profiles & terroir:')}</p>
          <div class="lib-suggestions-chips">
            <button type="button" class="lib-sug-chip" data-action="open-entry" data-slug="cointreau-lunique">Cointreau L'Unique</button>
            <button type="button" class="lib-sug-chip" data-action="open-entry" data-slug="the-botanist-islay-dry-gin">The Botanist Gin</button>
            <button type="button" class="lib-sug-chip" data-action="open-entry" data-slug="remy-martin">Rémy Martin Cognac</button>
            <button type="button" class="lib-sug-chip" data-action="open-entry" data-slug="bruichladdich-classic-laddie">The Classic Laddie</button>
          </div>
        </div>

        <div class="lib-empty-actions">
          <button type="button" class="lib-primary-pill" data-action="set-group" data-group="brands">${escapeHtml(t(meta.groups?.brands))}</button>
          <button type="button" class="lib-secondary-pill" data-ui="pill" data-action="set-group" data-group="origins">${escapeHtml(t(meta.groups?.origins))}</button>
        </div>
      </section>
    `;

    let bodyHtml = '';
    if (filtered.length > 0) {
      bodyHtml = `<div class="lib-cards-grid">${filtered.map(renderEntryCard).join('')}</div>`;
    } else if (state.group === 'recipes' && !state.query.trim()) {
      bodyHtml = recipesPendingHtml;
    } else {
      bodyHtml = `
        <section class="lib-empty-panel" data-role="no-results-state">
          <h2 class="lib-empty-title">${escapeHtml(t(meta.noSearchResultsTitle))}</h2>
          <p class="lib-empty-body">${escapeHtml(t(meta.noSearchResultsBody))}</p>
          <div class="lib-empty-actions">
            <button type="button" class="lib-primary-pill" data-action="reset-filters">${escapeHtml(t(meta.resetFiltersLabel))}</button>
          </div>
        </section>
      `;
    }

    const activeBrandObj = state.brand !== 'all' ? brandById.get(state.brand) : null;
    const scopeTitle = activeBrandObj ? activeBrandObj.name : t(meta.name);
    const scopeSubtitle = activeBrandObj
      ? `${t(activeBrandObj.category)} · ${t(activeBrandObj.origin)}`
      : t(meta.subtitle);

    return `
      <div class="lib-list-stage">
        <header class="lib-title-row">
          <div class="lib-title-block">
            <h1 class="lib-page-title">${escapeHtml(scopeTitle)}</h1>
            <p class="lib-page-subtitle">${escapeHtml(scopeSubtitle)}</p>
          </div>
          <div class="lib-title-actions">
            <button type="button" class="lib-mobile-filter-trigger" data-action="open-drawer" aria-label="Open filter drawer">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
              <span>${state.lang === 'vi' ? 'Bộ lọc' : 'Filter'}</span>
            </button>
            ${
              state.brand !== 'all' || state.query.trim()
                ? `<button type="button" class="lib-secondary-pill" data-ui="pill" data-action="reset-filters">${escapeHtml(t(meta.resetFiltersLabel))}</button>`
                : ''
            }
          </div>
        </header>

        ${categoryNavigationHtml}

        <div class="lib-mobile-brands" data-ui="mobile-brands" role="group" aria-label="Brand filter">
          ${mobileBrandChips}
        </div>

        ${bodyHtml}
      </div>
    `;
  }

  function renderDetailView(entry) {
    const brand = entry.brandId ? brandById.get(entry.brandId) : null;
    let hasMissingTranslation = false;

    const loc = (field) => {
      const r = localizeField(field, state.lang);
      if (r.missingTranslation) hasMissingTranslation = true;
      return r.text;
    };

    const locArr = (field) => {
      const r = localizeList(field, state.lang);
      if (r.missingTranslation) hasMissingTranslation = true;
      return r.items;
    };

    const titleText = loc(entry.title);
    const subtitleText = loc(entry.subtitle);
    const catText = loc(entry.categoryLabel);
    const summaryText = loc(entry.summary);
    const takeaways = locArr(entry.keyTakeaways);
    const originParagraphs = locArr(entry.originStory);
    const productionParagraphs = locArr(entry.production);
    const servingItems = locArr(entry.serving);
    const methodSteps = locArr(entry.method);

    const related = getRelatedEntries(publishedEntries, entry);
    const headings = meta.sectionHeadings || {};

    const coverHtml = entry.coverImage
      ? `<div class="lib-detail-cover-well"><img src="${escapeHtml(entry.coverImage)}" alt="${escapeHtml(titleText)}" class="lib-detail-cover-img"></div>`
      : (brand
          ? `<div class="lib-detail-logo-well"><img src="${escapeHtml(brand.logo)}" alt="${escapeHtml(brand.name)}"></div>`
          : `<div class="lib-detail-monogram" aria-hidden="true">${escapeHtml(state.lang === 'vi' ? 'LS' : 'OH')}</div>`);

    const specsRowsHtml = Array.isArray(entry.specs)
      ? entry.specs
          .map(
            (s) => `
              <tr>
                <th scope="row">${escapeHtml(loc(s.label))}</th>
                <td>${escapeHtml(loc(s.value))}</td>
              </tr>
            `
          )
          .join('')
      : '';

    const glancePills = [];
    if (Array.isArray(entry.specs)) {
      for (const s of entry.specs) {
        const lbl = loc(s.label);
        const val = loc(s.value);
        if (lbl && val) glancePills.push({ label: lbl, value: val });
      }
    }

    const isOrigin = entry.group === 'origins';
    const glanceBadgeTitle = isOrigin
      ? t(headings.atAGlanceOrigins || headings.atAGlance)
      : t(headings.atAGlance);
    const glanceNoteTitle = isOrigin
      ? (state.lang === 'vi' ? 'Khái niệm cốt lõi cần nhớ' : 'Core concepts to master')
      : (state.lang === 'vi' ? 'Tra cứu thực chiến tại quầy' : 'On-bar speed cheat-sheet');

    const atAGlanceHtml = glancePills.length > 0
      ? `
        <div class="lib-glance-box" data-ui="at-a-glance">
          <div class="lib-glance-header">
            <span class="lib-glance-badge">⚡ ${escapeHtml(glanceBadgeTitle)}</span>
            <span class="lib-glance-note">${escapeHtml(glanceNoteTitle)}</span>
          </div>
          <div class="lib-glance-grid">
            ${glancePills.slice(0, 4).map(p => `
              <div class="lib-glance-item">
                <span class="lib-glance-lbl">${escapeHtml(p.label)}</span>
                <span class="lib-glance-val">${escapeHtml(p.value)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `
      : '';

    const tocStripHtml = `
      <nav class="lib-toc-strip" aria-label="${escapeHtml(state.lang === 'vi' ? 'Mục lục bài viết' : 'Table of Contents')}">
        <span class="lib-toc-lbl">📑 ${escapeHtml(t(headings.toc))}:</span>
        <div class="lib-toc-links">
          ${takeaways.length ? `<a href="#section-takeaways" class="lib-toc-link">${escapeHtml(t(headings.takeaways))}</a>` : ''}
          ${specsRowsHtml ? `<a href="#section-specs" class="lib-toc-link">${escapeHtml(t(headings.specs))}</a>` : ''}
          ${originParagraphs.length ? `<a href="#section-origin" class="lib-toc-link">${escapeHtml(t(headings.originStory))}</a>` : ''}
          ${productionParagraphs.length ? `<a href="#section-production" class="lib-toc-link">${escapeHtml(t(headings.production))}</a>` : ''}
          ${servingItems.length ? `<a href="#section-serving" class="lib-toc-link">${escapeHtml(t(headings.serving))}</a>` : ''}
          ${Array.isArray(entry.glossary) && entry.glossary.length ? `<a href="#section-glossary" class="lib-toc-link">${escapeHtml(t(headings.glossary))}</a>` : ''}
          ${Array.isArray(entry.faq) && entry.faq.length ? `<a href="#section-faq" class="lib-toc-link">FAQ</a>` : ''}
        </div>
      </nav>
    `;

    const glossaryHtml = Array.isArray(entry.glossary) && entry.glossary.length > 0
      ? `
        <section class="lib-grid-card lib-span-6" id="section-glossary">
          <h2 class="lib-panel-heading">📖 ${escapeHtml(t(headings.glossary))}</h2>
          <div class="lib-glossary-grid">
            ${entry.glossary.map(g => `
              <div class="lib-glossary-item">
                <dt class="lib-glossary-term">${escapeHtml(loc(g.term))}</dt>
                <dd class="lib-glossary-def">${escapeHtml(loc(g.def))}</dd>
              </div>
            `).join('')}
          </div>
        </section>
      `
      : '';

    const nextStepHtml = entry.nextStep
      ? `
        <section class="lib-next-step-box lib-span-6" data-ui="next-step">
          <div class="lib-next-step-header">
            <span class="lib-next-step-badge">🚀 ${escapeHtml(t(headings.nextStep))}</span>
          </div>
          <h3 class="lib-next-step-title">${escapeHtml(loc(entry.nextStep.title))}</h3>
          <button type="button" class="lib-primary-pill" data-action="open-entry" data-slug="${escapeHtml(entry.nextStep.slug)}">
            ${escapeHtml(loc(entry.nextStep.actionLabel))}
          </button>
        </section>
      `
      : '';

    const referencesHtml = entry.sourceNote
      ? `
        <div class="lib-references-card lib-span-6">
          <span class="lib-ref-badge">🏛️ ${escapeHtml(t(headings.references))}:</span>
          <span class="lib-ref-text">${escapeHtml(loc(entry.sourceNote))}</span>
        </div>
      `
      : '';

    const recipeBlocksHtml =
      entry.group === 'recipes' && Array.isArray(entry.ingredients)
        ? `
          <section class="lib-grid-card lib-span-3">
            <h2 class="lib-panel-heading">${escapeHtml(t(headings.ingredients))}</h2>
            <table class="lib-spec-table">
              <tbody>
                ${entry.ingredients
                  .map(
                    (ing) => `
                      <tr>
                        <th scope="row">${escapeHtml(loc(ing.item))}</th>
                        <td>${escapeHtml(ing.amount || '')}</td>
                      </tr>
                    `
                  )
                  .join('')}
              </tbody>
            </table>
          </section>
          <section class="lib-grid-card lib-span-3">
            <h2 class="lib-panel-heading">${escapeHtml(t(headings.method))}</h2>
            <ol class="lib-prose-list lib-ordered-steps">
              ${methodSteps.map((step) => `<li>${escapeHtml(step)}</li>`).join('')}
            </ol>
          </section>
        `
        : '';

    const heritageAndProductionHtml =
      originParagraphs.length || productionParagraphs.length
        ? `
          ${
            originParagraphs.length
              ? `
                <section class="lib-grid-card lib-span-3" id="section-origin">
                  <h2 class="lib-panel-heading">${escapeHtml(t(headings.originStory))}</h2>
                  <div class="lib-prose-stack">
                    ${originParagraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
                  </div>
                </section>
              `
              : ''
          }
          ${
            productionParagraphs.length
              ? `
                <section class="lib-grid-card lib-span-3" id="section-production">
                  <h2 class="lib-panel-heading">${escapeHtml(t(headings.production))}</h2>
                  <div class="lib-prose-stack">
                    ${productionParagraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
                  </div>
                </section>
              `
              : ''
          }
        `
        : '';

    const videoHtml =
      entry.media && entry.media.video
        ? `
          <section class="lib-grid-card lib-span-6 lib-video-section">
            <div class="lib-video-header">
              <h2 class="lib-panel-heading">🎬 ${escapeHtml(entry.media.title ? loc(entry.media.title) : (state.lang === 'vi' ? 'Video Giới Thiệu &amp; Masterclass' : 'Brand Masterclass &amp; Video Overview'))}</h2>
              ${entry.media.duration ? `<span class="lib-abv-pill">⏱ ${escapeHtml(entry.media.duration)}</span>` : ''}
            </div>
            <div class="lib-video-wrapper">
              <video
                class="lib-video-player"
                controls
                playsinline
                preload="metadata"
                ${entry.media.thumbnail ? `poster="${escapeHtml(entry.media.thumbnail)}"` : ''}
              >
                <source src="${escapeHtml(entry.media.video)}" type="video/mp4">
                ${state.lang === 'vi' ? 'Trình duyệt của bạn không hỗ trợ phát video.' : 'Your browser does not support the video tag.'}
              </video>
            </div>
          </section>
        `
        : '';

    const expressionsHtml =
      Array.isArray(entry.expressions) && entry.expressions.length > 0
        ? `
          <section class="lib-grid-card lib-span-6">
            <h2 class="lib-panel-heading">${escapeHtml(t(headings.expressions))}</h2>
            <div class="lib-expressions-grid">
              ${entry.expressions
                .map(
                  (exp) => `
                    <div class="lib-expression-panel">
                      <div class="lib-expression-head">
                        <h3>${escapeHtml(exp.name)}</h3>
                        <span class="lib-abv-pill">${escapeHtml(exp.abv || '')}</span>
                      </div>
                      <p>${escapeHtml(loc(exp.profile))}</p>
                    </div>
                  `
                )
                .join('')}
            </div>
          </section>
        `
        : '';

    const tastingHtml = entry.tasting
      ? `
        <section class="lib-grid-card lib-span-4">
          <h2 class="lib-panel-heading">${escapeHtml(t(headings.tasting))}</h2>
          <table class="lib-spec-table">
            <tbody>
              <tr>
                <th scope="row">${escapeHtml(state.lang === 'vi' ? 'Hương mũi (Nose)' : 'Nose')}</th>
                <td>${escapeHtml(loc(entry.tasting.nose))}</td>
              </tr>
              <tr>
                <th scope="row">${escapeHtml(state.lang === 'vi' ? 'Vòm miệng (Palate)' : 'Palate')}</th>
                <td>${escapeHtml(loc(entry.tasting.palate))}</td>
              </tr>
              <tr>
                <th scope="row">${escapeHtml(state.lang === 'vi' ? 'Hậu vị (Finish)' : 'Finish')}</th>
                <td>${escapeHtml(loc(entry.tasting.finish))}</td>
              </tr>
            </tbody>
          </table>
        </section>
      `
      : '';

    const servingHtml = servingItems.length
      ? `
        <section class="lib-grid-card lib-span-2" id="section-serving">
          <h2 class="lib-panel-heading">${escapeHtml(t(headings.serving))}</h2>
          <ul class="lib-prose-list">
            ${servingItems.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}
          </ul>
        </section>
      `
      : '';

    const connectedItems = [...related.origins, ...related.brands];
    const relatedRecipesHtml =
      entry.group !== 'recipes'
        ? `
          <section class="lib-grid-card lib-span-3" data-role="related-recipes">
            <h2 class="lib-panel-heading">${escapeHtml(t(headings.relatedRecipes))}</h2>
            ${
              related.recipes.length > 0
                ? `<div class="lib-related-links">
                    ${related.recipes
                      .map(
                        (r) => `
                          <button type="button" class="lib-related-row" data-ui="row" data-action="open-entry" data-slug="${escapeHtml(r.slug)}">
                            <span>${escapeHtml(t(r.title))}</span>
                            <span class="lib-row-arrow">→</span>
                          </button>
                        `
                      )
                      .join('')}
                  </div>`
                : `<p class="lib-muted-note">${escapeHtml(
                    state.lang === 'vi'
                      ? 'Các công thức cocktail chính thức dùng sản phẩm này đang trong bước đối chiếu định lượng cuối cùng trước khi hiển thị.'
                      : 'Official cocktail serves featuring this expression are undergoing final ratio verification before publication.'
                  )}</p>`
            }
          </section>
        `
        : '';

    const relatedReadingHtml =
      connectedItems.length > 0
        ? `
          <section class="lib-grid-card ${entry.group !== 'recipes' ? 'lib-span-3' : 'lib-span-6'}" data-role="related-entries">
            <h2 class="lib-panel-heading">${escapeHtml(t(headings.relatedEntries))}</h2>
            <div class="lib-related-links">
              ${connectedItems
                .map(
                  (item) => `
                    <button type="button" class="lib-related-row" data-ui="row" data-action="open-entry" data-slug="${escapeHtml(item.slug)}">
                      <div>
                        <div class="lib-related-title">${escapeHtml(t(item.title))}</div>
                        <div class="lib-related-sub">${escapeHtml(t(item.categoryLabel))}</div>
                      </div>
                      <span class="lib-row-arrow">→</span>
                    </button>
                  `
                )
                .join('')}
            </div>
          </section>
        `
        : '';

    const faqHtml =
      Array.isArray(entry.faq) && entry.faq.length > 0
        ? `
          <section class="lib-grid-card lib-span-6" id="section-faq">
            <h2 class="lib-panel-heading">${escapeHtml(t(headings.faq))}</h2>
            <div class="lib-faq-list" data-ui="faq">
              ${entry.faq
                .map(
                  (item) => `
                    <details class="lib-faq-item">
                      <summary>${escapeHtml(loc(item.q))}</summary>
                      <p>${escapeHtml(loc(item.a))}</p>
                    </details>
                  `
                )
                .join('')}
            </div>
          </section>
        `
        : '';

    return `
      <article class="lib-detail-stage">
        <div class="lib-detail-back-row">
          <button type="button" class="lib-back-inline" data-action="close-entry">${escapeHtml(t(meta.backToList))}</button>
        </div>

        <header class="lib-object-header" data-ui="object-header">
          <div class="lib-object-main">
            ${coverHtml}
            <div class="lib-object-titles">
              <div class="lib-meta-line">${escapeHtml(catText)}</div>
              <h1 class="lib-detail-title">${escapeHtml(titleText)}</h1>
              <p class="lib-detail-subtitle">${escapeHtml(subtitleText)}</p>
            </div>
          </div>
        </header>

        ${
          hasMissingTranslation
            ? `<div class="lib-translation-banner" data-role="missing-translation-banner">${escapeHtml(t(meta.missingTranslationNote))}</div>`
            : ''
        }

        <p class="lib-detail-lead">${escapeHtml(summaryText)}</p>

        ${atAGlanceHtml}

        ${tocStripHtml}

        <div class="lib-detail-grid">
          ${
            takeaways.length
              ? `
                <section class="lib-grid-card lib-span-4" id="section-takeaways">
                  <h2 class="lib-panel-heading">${escapeHtml(t(headings.takeaways))}</h2>
                  <ul class="lib-prose-list">
                    ${takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                  </ul>
                </section>
              `
              : ''
          }

          ${
            specsRowsHtml
              ? `
                <section class="lib-grid-card ${takeaways.length ? 'lib-span-2' : 'lib-span-6'}" id="section-specs">
                  <h2 class="lib-panel-heading">${escapeHtml(t(headings.specs))}</h2>
                  <table class="lib-spec-table">
                    <tbody>${specsRowsHtml}</tbody>
                  </table>
                </section>
              `
              : ''
          }

          ${recipeBlocksHtml}
          ${heritageAndProductionHtml}
          ${videoHtml}
          ${expressionsHtml}
          ${tastingHtml}
          ${servingHtml}
          ${glossaryHtml}
          ${relatedRecipesHtml}
          ${relatedReadingHtml}
          ${faqHtml}
          ${nextStepHtml}
          ${referencesHtml}
        </div>
      </article>
    `;
  }

  function renderMainStage() {
    if (state.entry && entryBySlug.has(state.entry)) {
      return renderDetailView(entryBySlug.get(state.entry));
    }
    return renderListView();
  }

  function renderFullShell() {
    syncDocumentMeta();
    rootEl.innerHTML = `
      <div class="lib-shell" data-ui="shell">
        <header class="lib-topbar" data-ui="topbar">
          <div class="lib-topbar-left">
            <a href="../index.html" class="lib-back-portfolio" data-action="back-portfolio">${escapeHtml(t(meta.backToPortfolio))}</a>
            <button type="button" class="lib-wordmark-btn" data-action="go-home">${escapeHtml(t(meta.name))}</button>
          </div>
          <div class="lib-topbar-search">
            <input
              type="search"
              class="lib-search-input"
              data-role="search-input"
              value="${escapeHtml(state.query)}"
              placeholder="${escapeHtml(t(meta.searchPlaceholder))}"
              aria-label="${escapeHtml(t(meta.searchPlaceholder))}"
              autocomplete="off"
            >
          </div>
          <div class="lib-topbar-controls">
            <button type="button" class="lib-theme-btn" data-action="toggle-theme" aria-label="Toggle Light / Dark mode" title="Chuyển giao diện Sáng / Tối">
              <svg class="theme-icon theme-sun" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              <svg class="theme-icon theme-moon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
            <div class="lib-topbar-lang" data-ui="lang-switch" role="group" aria-label="Language switcher">
              <button type="button" class="lib-lang-btn${state.lang === 'vi' ? ' is-active' : ''}" data-action="set-lang" data-lang="vi" aria-label="Tiếng Việt" title="Tiếng Việt">
                <svg class="lib-flag-icon" viewBox="0 0 640 480" width="22" height="15" aria-hidden="true"><rect width="640" height="480" fill="#da251d" rx="20"/><polygon fill="#ff0" points="320,80 367,225 520,225 396,315 443,460 320,370 197,460 244,315 120,225 273,225"/></svg>
              </button>
              <button type="button" class="lib-lang-btn${state.lang === 'en' ? ' is-active' : ''}" data-action="set-lang" data-lang="en" aria-label="English" title="English">
                <svg class="lib-flag-icon" viewBox="0 0 60 30" width="22" height="15" aria-hidden="true"><clipPath id="uk-flag-lib"><rect width="60" height="30" rx="3"/></clipPath><g clip-path="url(#uk-flag-lib)"><clipPath id="s-lib"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t-lib"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#s-lib)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t-lib)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></g></svg>
              </button>
            </div>
          </div>
        </header>

        <div class="lib-body-frame">
          <aside class="lib-sidebar" data-ui="sidebar" data-role="sidebar-body" aria-label="Library navigation">
            ${renderSidebarInner()}
          </aside>
          <main class="lib-main" data-role="main-stage" id="library-main">
            ${renderMainStage()}
          </main>
        </div>

        <div class="lib-drawer-backdrop" data-ui="drawer-backdrop" aria-hidden="true">
          <div class="lib-drawer-sheet" data-ui="drawer-sheet" role="dialog" aria-modal="true" aria-label="${state.lang === 'vi' ? 'Bộ lọc tra cứu F&B' : 'Library Filter'}">
            <div class="lib-drawer-header">
              <h3 class="lib-drawer-title">${state.lang === 'vi' ? 'Bộ lọc tra cứu F&B' : 'Library Filter'}</h3>
              <button type="button" class="lib-drawer-close" data-action="close-drawer" aria-label="Close filters">✕</button>
            </div>
            <div class="lib-drawer-content" data-role="drawer-body">
              ${renderDrawerInner()}
            </div>
            <div class="lib-drawer-footer">
              <button type="button" class="lib-primary-pill" data-action="close-drawer">${state.lang === 'vi' ? 'Xem kết quả' : 'View Results'}</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function updateRegionsWithoutTouchingSearchInput() {
    syncDocumentMeta();
    const sidebarEl = rootEl.querySelector('[data-role="sidebar-body"]');
    const mainEl = rootEl.querySelector('[data-role="main-stage"]');
    const drawerEl = rootEl.querySelector('[data-role="drawer-body"]');
    if (sidebarEl) sidebarEl.innerHTML = renderSidebarInner();
    if (mainEl) mainEl.innerHTML = renderMainStage();
    if (drawerEl) drawerEl.innerHTML = renderDrawerInner();
  }

  rootEl.addEventListener('click', (ev) => {
    if (ev.target && ev.target.getAttribute && ev.target.getAttribute('data-ui') === 'drawer-backdrop') {
      ev.target.classList.remove('is-open');
      ev.target.setAttribute('aria-hidden', 'true');
      return;
    }

    const actionEl = ev.target.closest('[data-action], [data-entry-card]');
    if (!actionEl || !rootEl.contains(actionEl)) return;

    if (actionEl.hasAttribute('data-entry-card')) {
      const slug = actionEl.getAttribute('data-entry-card');
      if (entryBySlug.has(slug)) {
        state.entry = slug;
        pushUrlState(false);
        updateRegionsWithoutTouchingSearchInput();
        if (typeof window !== 'undefined' && window.scrollTo) window.scrollTo({ top: 0, behavior: 'auto' });
      }
      return;
    }

    const action = actionEl.getAttribute('data-action');
    if (action === 'back-portfolio') {
      return; // allow normal anchor navigation to ../index.html
    }

    ev.preventDefault();

    if (action === 'open-drawer') {
      const drawer = rootEl.querySelector('[data-ui="drawer-backdrop"]');
      if (drawer) {
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
      }
      return;
    }

    if (action === 'close-drawer') {
      const drawer = rootEl.querySelector('[data-ui="drawer-backdrop"]');
      if (drawer) {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
      }
      return;
    }

    if (action === 'drawer-set-group') {
      state.group = actionEl.getAttribute('data-group') || 'all';
      state.entry = '';
      const drawer = rootEl.querySelector('[data-ui="drawer-backdrop"]');
      if (drawer) {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
      }
      pushUrlState(false);
      updateRegionsWithoutTouchingSearchInput();
      return;
    }

    if (action === 'drawer-set-brand') {
      state.brand = actionEl.getAttribute('data-brand') || 'all';
      state.entry = '';
      const drawer = rootEl.querySelector('[data-ui="drawer-backdrop"]');
      if (drawer) {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
      }
      pushUrlState(false);
      updateRegionsWithoutTouchingSearchInput();
      return;
    }

    if (action === 'toggle-theme') {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try {
        if (storage) storage.setItem('theme-pref', next);
      } catch (e) {}
      return;
    }

    if (action === 'set-lang') {
      const nextLang = actionEl.getAttribute('data-lang') === 'vi' ? 'vi' : 'en';
      if (nextLang !== state.lang) {
        state.lang = nextLang;
        try {
          if (storage) storage.setItem('bio-lang', nextLang);
        } catch {}
        renderFullShell();
      }
    } else if (action === 'set-group') {
      state.group = actionEl.getAttribute('data-group') || 'all';
      state.topic = 'all';
      if (actionEl.hasAttribute('data-nav')) {
        state.brand = 'all';
      }
      state.entry = '';
      pushUrlState(false);
      updateRegionsWithoutTouchingSearchInput();
    } else if (action === 'nav-group') {
      state.group = actionEl.getAttribute('data-group') || 'all';
      state.topic = 'all';
      state.brand = 'all';
      state.entry = '';
      pushUrlState(false);
      updateRegionsWithoutTouchingSearchInput();
    } else if (action === 'set-topic') {
      state.topic = actionEl.getAttribute('data-topic') || 'all';
      updateRegionsWithoutTouchingSearchInput();
    } else if (action === 'set-brand') {
      state.brand = actionEl.getAttribute('data-brand') || 'all';
      state.entry = '';
      pushUrlState(false);
      updateRegionsWithoutTouchingSearchInput();
    } else if (action === 'reset-filters') {
      state.group = 'all';
      state.topic = 'all';
      state.brand = 'all';
      state.query = '';
      state.entry = '';
      pushUrlState(false);
      renderFullShell();
    } else if (action === 'go-home' || action === 'close-entry') {
      state.entry = '';
      pushUrlState(false);
      updateRegionsWithoutTouchingSearchInput();
    } else if (action === 'open-entry') {
      const slug = actionEl.getAttribute('data-slug') || '';
      if (entryBySlug.has(slug)) {
        state.entry = slug;
        pushUrlState(false);
        updateRegionsWithoutTouchingSearchInput();
        if (typeof window !== 'undefined' && window.scrollTo) window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }
  });

  rootEl.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      const card = ev.target.closest('[data-entry-card]');
      if (card && rootEl.contains(card)) {
        ev.preventDefault();
        card.click();
      }
    }
  });

  rootEl.addEventListener('input', (ev) => {
    if (ev.target && ev.target.matches('[data-role="search-input"]')) {
      state.query = ev.target.value || '';
      if (state.entry) {
        state.entry = '';
      }
      pushUrlState(true);
      updateRegionsWithoutTouchingSearchInput();
    }
  });

  if (syncHistory && typeof window !== 'undefined') {
    window.addEventListener('popstate', () => {
      const parsed = parseLibraryUrlState(window.location.search, window.location.hash);
      state.entry = entryBySlug.has(parsed.entry) ? parsed.entry : '';
      state.group = parsed.group || 'all';
      state.brand = parsed.brand || 'all';
      state.query = parsed.query || '';
      renderFullShell();
    });
  }

  renderFullShell();

  return {
    getState() {
      return { ...state };
    },
    setLang(nextLang) {
      state.lang = nextLang === 'vi' ? 'vi' : 'en';
      try {
        if (storage) storage.setItem('bio-lang', state.lang);
      } catch {}
      renderFullShell();
    },
  };
}
