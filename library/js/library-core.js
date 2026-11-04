// Pure core logic for The Drinks Library (zero DOM coupling, shared by app & tests).

const VALID_GROUPS = new Set(['all', 'origins', 'brands', 'recipes']);

export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function normalizeSearchText(input) {
  if (input == null) return '';
  return String(input)
    .toLowerCase()
    .replace(/đ/g, 'd')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’'`]/g, '')
    .replace(/[^a-z0-9%.\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function localizeField(field, lang = 'en') {
  const targetLang = lang === 'vi' ? 'vi' : 'en';
  const fallbackLang = targetLang === 'vi' ? 'en' : 'vi';

  if (field == null) {
    return { text: '', langUsed: targetLang, missingTranslation: false };
  }
  if (typeof field === 'string') {
    return { text: field, langUsed: targetLang, missingTranslation: false };
  }
  if (typeof field === 'object') {
    const direct = typeof field[targetLang] === 'string' ? field[targetLang].trim() : '';
    if (direct) {
      return { text: field[targetLang], langUsed: targetLang, missingTranslation: false };
    }
    const fallback = typeof field[fallbackLang] === 'string' ? field[fallbackLang].trim() : '';
    if (fallback) {
      return { text: field[fallbackLang], langUsed: fallbackLang, missingTranslation: true };
    }
  }
  return { text: '', langUsed: targetLang, missingTranslation: false };
}

export function localizeList(listField, lang = 'en') {
  if (!listField) {
    return { items: [], missingTranslation: false };
  }
  if (Array.isArray(listField)) {
    let missing = false;
    const items = listField
      .map((item) => {
        if (typeof item === 'string') return item;
        const res = localizeField(item, lang);
        if (res.missingTranslation) missing = true;
        return res.text;
      })
      .filter(Boolean);
    return { items, missingTranslation: missing };
  }
  if (typeof listField === 'object') {
    const targetLang = lang === 'vi' ? 'vi' : 'en';
    const fallbackLang = targetLang === 'vi' ? 'en' : 'vi';
    if (Array.isArray(listField[targetLang]) && listField[targetLang].length > 0) {
      return { items: listField[targetLang], missingTranslation: false };
    }
    if (Array.isArray(listField[fallbackLang]) && listField[fallbackLang].length > 0) {
      return { items: listField[fallbackLang], missingTranslation: true };
    }
  }
  return { items: [], missingTranslation: false };
}

export function getPublishedEntries(entries = []) {
  if (!Array.isArray(entries)) return [];
  return entries.filter((entry) => entry && entry.status === 'approved' && typeof entry.slug === 'string');
}

export function entryMatchesBrand(entry, brand = 'all') {
  if (!brand || brand === 'all') return true;
  if (!entry) return false;
  if (entry.brandId === brand) return true;
  if (Array.isArray(entry.brandIds) && entry.brandIds.includes(brand)) return true;
  if (entry.parentHouseId === brand) return true;
  return false;
}

function collectStringsDeep(node, bucket) {
  if (node == null) return;
  if (typeof node === 'string' || typeof node === 'number') {
    bucket.push(String(node));
    return;
  }
  if (Array.isArray(node)) {
    for (const item of node) collectStringsDeep(item, bucket);
    return;
  }
  if (typeof node === 'object') {
    for (const [key, val] of Object.entries(node)) {
      if (key === 'status' || key === 'logo' || key === 'heroImage') continue;
      collectStringsDeep(val, bucket);
    }
  }
}

const haystackCache = new WeakMap();

export function getEntrySearchHaystack(entry) {
  if (!entry || typeof entry !== 'object') return '';
  if (haystackCache.has(entry)) return haystackCache.get(entry);
  const parts = [];
  collectStringsDeep(entry, parts);
  const normalized = normalizeSearchText(parts.join(' '));
  haystackCache.set(entry, normalized);
  return normalized;
}

export function filterEntries(entries = [], { group = 'all', brand = 'all', query = '' } = {}) {
  const published = getPublishedEntries(entries);
  const normalizedGroup = VALID_GROUPS.has(group) ? group : 'all';
  const normalizedBrand = brand || 'all';
  const tokens = normalizeSearchText(query)
    .split(' ')
    .filter(Boolean);

  return published.filter((entry) => {
    if (normalizedGroup !== 'all' && entry.group !== normalizedGroup) {
      return false;
    }
    if (!entryMatchesBrand(entry, normalizedBrand)) {
      return false;
    }
    if (tokens.length > 0) {
      const haystack = getEntrySearchHaystack(entry);
      for (const token of tokens) {
        if (!haystack.includes(token)) return false;
      }
    }
    return true;
  });
}

export function computeGroupCounts(entries = [], { brand = 'all', query = '', lang = 'en' } = {}) {
  const matchingAll = filterEntries(entries, { group: 'all', brand, query, lang });
  const counts = {
    all: matchingAll.length,
    origins: 0,
    brands: 0,
    recipes: 0,
  };
  for (const entry of matchingAll) {
    if (entry.group === 'origins') counts.origins += 1;
    else if (entry.group === 'brands') counts.brands += 1;
    else if (entry.group === 'recipes') counts.recipes += 1;
  }
  return counts;
}

export function parseLibraryUrlState(search = '', hash = '') {
  const cleanSearch = typeof search === 'string' ? search : '';
  const params = new URLSearchParams(cleanSearch.startsWith('?') ? cleanSearch.slice(1) : cleanSearch);

  const rawGroup = (params.get('group') || 'all').trim().toLowerCase();
  const group = VALID_GROUPS.has(rawGroup) ? rawGroup : 'all';
  const brand = (params.get('brand') || 'all').trim();
  const query = params.get('q') || '';
  let entry = (params.get('entry') || '').trim();

  if (!entry && typeof hash === 'string' && hash.startsWith('#') && hash.length > 1) {
    const hashCandidate = decodeURIComponent(hash.slice(1)).trim();
    if (/^[a-z0-9-]+$/i.test(hashCandidate)) {
      entry = hashCandidate;
    }
  }

  return { entry, group, brand: brand || 'all', query };
}

export function buildLibraryUrlSearch({ entry = '', group = 'all', brand = 'all', query = '' } = {}) {
  const params = new URLSearchParams();
  if (entry) params.set('entry', entry);
  if (group && group !== 'all' && VALID_GROUPS.has(group)) params.set('group', group);
  if (brand && brand !== 'all') params.set('brand', brand);
  if (query && query.trim()) params.set('q', query.trim());
  const str = params.toString();
  return str ? `?${str}` : '';
}

export function getRelatedEntries(entries = [], currentEntry = null) {
  const published = getPublishedEntries(entries);
  if (!currentEntry) return { origins: [], brands: [], recipes: [] };

  const bySlug = new Map(published.map((e) => [e.slug, e]));
  const relatedMap = new Map();

  if (Array.isArray(currentEntry.relatedSlugs)) {
    for (const slug of currentEntry.relatedSlugs) {
      const target = bySlug.get(slug);
      if (target && target.slug !== currentEntry.slug) {
        relatedMap.set(target.slug, target);
      }
    }
  }

  // Also link approved recipes that reference this bottle or brand
  for (const candidate of published) {
    if (candidate.slug === currentEntry.slug) continue;
    if (
      candidate.group === 'recipes' &&
      (candidate.productSlug === currentEntry.slug ||
        (currentEntry.brandId && candidate.brandId === currentEntry.brandId))
    ) {
      relatedMap.set(candidate.slug, candidate);
    }
  }

  const allRelated = [...relatedMap.values()];
  return {
    origins: allRelated.filter((e) => e.group === 'origins'),
    brands: allRelated.filter((e) => e.group === 'brands'),
    recipes: allRelated.filter((e) => e.group === 'recipes'),
  };
}
