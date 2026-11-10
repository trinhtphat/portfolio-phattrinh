// Curated bilingual (EN/VI) dataset for The Drinks Library.
// Maintainability: add approved articles, bottles, or verified cocktail serves to LIBRARY_ENTRIES.
// Only entries with status: 'approved' are rendered publicly.

export const LIBRARY_META = {
  name: {
    en: 'The Drinks Library',
    vi: 'The Drinks Library',
  },
  subtitle: {
    en: 'Bilingual field reference for spirits, Champagne, liqueurs, terroir history, and bar craft.',
    vi: 'Thư viện tra cứu song ngữ về rượu mạnh, Champagne, rượu mùi, thổ nhưỡng và kỹ nghệ pha chế.',
  },
  backToPortfolio: {
    en: '← Back to portfolio',
    vi: '← Về portfolio',
  },
  backToList: {
    en: '← All entries',
    vi: '← Tất cả mục tra cứu',
  },
  searchPlaceholder: {
    en: 'Search spirits, origins, cocktails...',
    vi: 'Tìm kiến thức, thương hiệu, cocktail...',
  },
  groups: {
    all: { en: 'All Modules', vi: 'Tất cả mục' },
    origins: { en: 'The Basics', vi: 'Kiến thức nền tảng' },
    brands: { en: 'Spirits & Houses', vi: 'Dòng rượu & Thương hiệu' },
    recipes: { en: 'Cocktail Recipes', vi: 'Công thức Cocktail' },
  },
  groupDescriptions: {
    all: {
      en: 'Comprehensive spirits encyclopedia, terroir foundations, and bar knowledge.',
      vi: 'Bách khoa toàn thư F&B: Cội nguồn, dòng rượu di sản và chuẩn mực quầy bar.',
    },
    origins: {
      en: 'Foundational modules on terroir, raw ingredients, and distillation for bartenders.',
      vi: '6 chuyên đề cốt lõi về thổ nhưỡng, nguyên liệu và kỹ nghệ chưng cất cho bartender mới.',
    },
    brands: {
      en: 'Heritage houses, signature expressions, and technical tasting specifications.',
      vi: 'Khám phá các nhà chưng cất biểu tượng, dòng sản phẩm di sản và thông số nếm vị.',
    },
    recipes: {
      en: 'Verified classic serves with exact ratios, ice format, and glassware.',
      vi: 'Công thức cocktail kinh điển đối chiếu chuẩn mực từng ml, chuẩn đá và dáng ly.',
    },
  },
  recipesStatusBadge: {
    en: 'Coming Soon',
    vi: 'Sắp có',
  },
  originTopics: [
    { id: 'all', label: { en: 'All Topics', vi: 'Tất cả chủ đề' } },
    { id: 'brandy', label: { en: 'Brandy & Cognac', vi: 'Brandy & Cognac' } },
    { id: 'liqueur', label: { en: 'Triple Sec & Liqueurs', vi: 'Triple Sec & Rượu mùi cam' } },
    { id: 'gin', label: { en: 'Gin & Botanicals', vi: 'Gin & Thảo mộc' } },
    { id: 'champagne', label: { en: 'Champagne & Sparkling', vi: 'Champagne & Vang sủi' } },
    { id: 'rum', label: { en: 'Rum & Sugarcane', vi: 'Rum & Mía đường' } },
    { id: 'whisky', label: { en: 'Islay Single Malt', vi: 'Islay Single Malt' } },
    { id: 'agave', label: { en: 'Agave, Tequila & Mezcal', vi: 'Agave, Tequila & Mezcal' } },
  ],

  brandFilterHeading: {
    en: 'Portfolio Houses & Expressions',
    vi: 'Nhà sản xuất & Thương hiệu',
  },
  allBrandsLabel: {
    en: 'All brands',
    vi: 'Tất cả thương hiệu',
  },
  islayHouseNote: {
    en: 'Bruichladdich Distillery (Islay) crafts Bruichladdich, Port Charlotte, Octomore, and The Botanist.',
    vi: 'Nhà chưng cất Bruichladdich (Islay) chế tác Bruichladdich, Port Charlotte, Octomore và The Botanist.',
  },
  recipesPendingTitle: {
    en: 'Official Cocktails Under Strict Verification',
    vi: 'Công thức Cocktail chính thức đang trong bước đối chiếu chuẩn mực',
  },
  recipesPendingBody: {
    en: 'To maintain bar-ready professional integrity, every cocktail serve in The Drinks Library must pass 4 verification gates before release: precise ml specs, calibrated ice dilution, correct glassware ergonomics, and garnish ritual. In the meantime, study the core spirits and terroir foundations below.',
    vi: 'Để đảm bảo tính chuẩn xác và thực chiến tại quầy bar, mọi công thức cocktail trong The Drinks Library đều trải qua 4 chốt kiểm duyệt: tỷ lệ ml vàng, độ tan đá già/đá khối, dáng ly chuẩn vị và kỹ thuật thao tác/garnish. Trong thời gian hoàn thiện bản phát hành đầu tiên, bạn có thể tra cứu kiến thức nền tảng của các dòng rượu cốt lõi bên dưới.',
  },
  recipesVerificationGates: {
    en: [
      { num: '01', title: 'Exact ml Ratios', desc: 'Strict measurements tested for balance' },
      { num: '02', title: 'Ice Format', desc: 'Block vs cube thermal dilution calibration' },
      { num: '03', title: 'Glassware', desc: 'Aroma focus & serving temperature preservation' },
      { num: '04', title: 'Garnish Ritual', desc: 'Essential oils express, rims & sensory balance' },
    ],
    vi: [
      { num: '01', title: 'Tỷ lệ ml vàng', desc: 'Định lượng chuẩn xác cân bằng vị giác' },
      { num: '02', title: 'Chuẩn đá già & đá khối', desc: 'Kiểm soát tốc độ tan và độ lạnh tối ưu' },
      { num: '03', title: 'Dáng ly chuẩn vị', desc: 'Tập trung tầng hương và giữ độ lạnh' },
      { num: '04', title: 'Nghi thức viền ly & Garnish', desc: 'Kích hoạt tinh dầu và trải nghiệm thưởng thức' },
    ],
  },
  noSearchResultsTitle: {
    en: 'No matching entries found',
    vi: 'Không tìm thấy mục phù hợp',
  },
  noSearchResultsBody: {
    en: 'Try clearing the brand filter or searching with another keyword such as Angers, Fine Champagne, 40 PPM, or Damery.',
    vi: 'Hãy thử bỏ bộ lọc thương hiệu hoặc tìm bằng từ khóa khác như Angers, Fine Champagne, 40 PPM, vỏ cam, hoặc Damery.',
  },
  resetFiltersLabel: {
    en: 'Reset filters',
    vi: 'Đặt lại bộ lọc',
  },
  copyLinkLabel: {
    en: 'Copy link',
    vi: 'Sao chép link',
  },
  copiedLinkLabel: {
    en: 'Link copied',
    vi: 'Đã chép link',
  },
  qrButtonLabel: {
    en: 'QR code',
    vi: 'Mã QR',
  },
  qrModalTitle: {
    en: 'Scan to open this entry on mobile',
    vi: 'Quét mã để mở trực tiếp mục này trên điện thoại',
  },
  closeLabel: {
    en: 'Close',
    vi: 'Đóng',
  },
  missingTranslationNote: {
    en: 'Some fields are shown in their verified source language while translation is reviewed.',
    vi: 'Một số thông tin đang hiển thị theo ngôn ngữ gốc đã xác thực trong khi bản dịch đang được rà soát.',
  },
  sectionHeadings: {
    atAGlanceOrigins: { en: 'Key Concepts to Remember', vi: 'Thông tin cần nhớ' },
    atAGlance: { en: 'At-A-Glance · Quick Bar Specs', vi: 'Thông số thực chiến tại quầy' },
    toc: { en: 'Table of Contents', vi: 'Mục lục bài viết' },
    glossary: { en: 'Spirits Terminology', vi: 'Giải thích thuật ngữ' },
    nextStep: { en: 'Next Learning Step', vi: 'Bước học tiếp theo' },
    references: { en: 'Authoritative Sources', vi: 'Nguồn tham khảo chuẩn mực' },
    takeaways: { en: 'Key Takeaways', vi: 'Điểm cốt lõi' },
    specs: { en: 'Technical Specifications', vi: 'Thông số kỹ thuật' },
    originStory: { en: 'Origin & Heritage', vi: 'Nguồn gốc & Di sản' },
    production: { en: 'Terroir & Production Craft', vi: 'Thổ nhưỡng & Kỹ nghệ chế tác' },
    expressions: { en: 'Core Expressions Compared', vi: 'So sánh các phiên bản tiêu biểu' },
    tasting: { en: 'Tasting Profile', vi: 'Hồ sơ hương vị' },
    serving: { en: 'Service & Pairing Guide', vi: 'Chuẩn phục vụ & Thưởng thức' },
    ingredients: { en: 'Formula & Proportions', vi: 'Định lượng nguyên liệu' },
    method: { en: 'Preparation Method', vi: 'Kỹ thuật pha chế' },
    relatedRecipes: { en: 'Signature Serves', vi: 'Cocktail tiêu biểu' },
    relatedEntries: { en: 'Connected Reading', vi: 'Bài viết liên quan' },
    faq: { en: 'Common Bar & Trade Questions', vi: 'Câu hỏi chuyên môn & tại quầy bar' },
    provenance: { en: 'Source & Verification', vi: 'Nguồn đối chiếu & Cập nhật' },
  },
};

export const BRANDS = [
  {
    id: 'remy-martin',
    name: 'Rémy Martin',
    category: { en: 'Cognac Fine Champagne', vi: 'Cognac Fine Champagne' },
    origin: { en: 'Cognac, France (1724)', vi: 'Cognac, Pháp (1724)' },
    logo: '../brand-logos/remy-martin.png',
    parentHouseId: null,
  },
  {
    id: 'cointreau',
    name: 'Cointreau',
    category: { en: 'Triple Sec & Spicy Orange Liqueur', vi: 'Rượu mùi cam Triple Sec & Dòng cay Spicy' },
    origin: { en: 'Angers, France (1849)', vi: 'Angers, Pháp (1849)' },
    logo: '../brand-logos/cointreau.png',
    parentHouseId: null,
  },
  {
    id: 'the-botanist',
    name: 'The Botanist',
    category: { en: 'Islay Dry Gin', vi: 'Islay Dry Gin' },
    origin: { en: 'Islay, Scotland', vi: 'Đảo Islay, Scotland' },
    logo: '../brand-logos/botanist.png',
    parentHouseId: 'bruichladdich-distillery',
  },
  {
    id: 'telmont',
    name: 'Telmont',
    category: { en: 'Champagne', vi: 'Champagne' },
    origin: { en: 'Damery, Champagne, France (1912)', vi: 'Damery, Champagne, Pháp (1912)' },
    logo: '../brand-logos/telmont.png',
    parentHouseId: null,
  },
  {
    id: 'mount-gay',
    name: 'Mount Gay',
    category: { en: 'Barbados Rum', vi: 'Rượu Rum Barbados' },
    origin: { en: 'St. Lucy, Barbados (1703)', vi: 'St. Lucy, Barbados (1703)' },
    logo: '../brand-logos/mount-gay.png',
    parentHouseId: null,
  },
  {
    id: 'bruichladdich',
    name: 'Bruichladdich',
    category: { en: 'Unpeated Islay Single Malt', vi: 'Islay Single Malt không than bùn (Unpeated)' },
    origin: { en: 'Islay, Scotland (1881)', vi: 'Đảo Islay, Scotland (1881)' },
    logo: '../brand-logos/bruichladdich.png',
    parentHouseId: 'bruichladdich-distillery',
  },
  {
    id: 'port-charlotte',
    name: 'Port Charlotte',
    category: { en: 'Heavily Peated Islay Single Malt', vi: 'Islay Single Malt khói đậm (40 PPM)' },
    origin: { en: 'Islay, Scotland', vi: 'Đảo Islay, Scotland' },
    logo: '../brand-logos/port-charlotte.png',
    parentHouseId: 'bruichladdich-distillery',
  },
  {
    id: 'octomore',
    name: 'Octomore',
    category: { en: 'Super Heavily Peated Single Malt', vi: 'Single Malt siêu khói (Super Heavily Peated)' },
    origin: { en: 'Islay, Scotland', vi: 'Đảo Islay, Scotland' },
    logo: '../brand-logos/octomore.png',
    parentHouseId: 'bruichladdich-distillery',
  },
];

export const LIBRARY_ENTRIES = [
  {
    slug: 'history-of-cognac',
    status: 'approved',
    group: 'origins',
    topicId: 'brandy',
    image: 'media/origins/01-brandy-cognac.png',
    coverImage: 'media/origins/01-brandy-cognac.png',
    coverImageWebp: 'media/origins/01-brandy-cognac.webp',
    imageAlt: {
      vi: 'Nồi chưng cất Cognac bằng đồng, nho trắng và thùng gỗ sồi',
      en: 'Copper Cognac still with white grapes and an oak barrel',
    },
    brandId: null,
    brandIds: ['remy-martin'],
    categoryLabel: { en: 'Category History · Brandy & Cognac', vi: 'Lịch sử phân loại · Brandy & Cognac' },
    title: {
      en: 'What is Cognac? From Grape to Glass',
      vi: 'Cognac là gì? Từ vùng nho đến ly rượu',
    },
    subtitle: {
      en: 'How Charente white wines became a protected AOC wine brandy defined by six crus and copper Charentais pot stills.',
      vi: 'Hành trình rượu vang trắng vùng Charente trở thành dòng brandy được bảo hộ AOC với 6 phân vùng cru và nồi đồng Charentais.',
    },
    summary: {
      en: 'Master the 6 grape crus, double Charentais distillation, and French oak aging that define world-class Cognac.',
      vi: 'Nắm vững 6 phân vùng nho Cru, quy tắc chưng cất nồi đồng kép và nghệ thuật ủ thùng sồi Pháp tạo nên chuẩn mực hương vị Cognac.',
    },
    readMinutes: 4,
    keyTakeaways: {
      en: [
        'Six official crus radiate around Cognac; Grande Champagne and Petite Champagne sit on friable Campanian chalk that yields the longest-aging eaux-de-vie.',
        'Cognac Fine Champagne is a legal AOC designation requiring 100% Grande and Petite Champagne eaux-de-vie, with at least 50% from Grande Champagne.',
        'Traditional Charentais alembic distillation runs twice (chauffe du vin -> brouillis -> bonne chauffe) before maturation in Limousin or Tronçais oak.',
      ],
      vi: [
        'Sáu vùng trồng nho (cru) phân bổ quanh Cognac; Grande Champagne và Petite Champagne sở hữu lớp đất đá phấn xốp giữ ẩm tự nhiên, tạo nên rượu tâm có tiềm năng ủ lâu năm nhất.',
        'Cognac Fine Champagne là danh xưng AOC hợp pháp đòi hỏi 100% rượu tâm từ hai vùng trên, trong đó tối thiểu 50% phải đến từ Grande Champagne.',
        'Quy trình chưng cất kép truyền thống (alembic Charentais) tách lọc phần rượu tâm tinh khiết nhất trước khi ủ trong thùng sồi Pháp Limousin hoặc Tronçais.',
      ],
    },
    specs: [
      { label: { en: 'Protected Region', vi: 'Vùng bảo hộ' }, value: { en: 'Cognac AOC, Charente & Charente-Maritime, France', vi: 'Cognac AOC, vùng Charente & Charente-Maritime, Pháp' } },
      { label: { en: 'Primary Grape', vi: 'Giống nho chủ đạo' }, value: { en: 'Ugni Blanc (plus Folle Blanche, Colombard)', vi: 'Ugni Blanc (cùng Folle Blanche, Colombard)' } },
      { label: { en: 'Still Type', vi: 'Thiết bị chưng cất' }, value: { en: 'Copper Charentais alembic pot still (double distillation)', vi: 'Nồi đồng Charentais truyền thống (chưng cất 2 lần)' } },
      { label: { en: 'Age Classifications', vi: 'Phân hạng tuổi ủ tối thiểu' }, value: { en: 'VS (2+ yrs), VSOP (4+ yrs), XO (10+ yrs), XXO (14+ yrs youngest eau-de-vie)', vi: 'VS (từ 2 năm), VSOP (từ 4 năm), XO (từ 10 năm), XXO (rượu tâm trẻ nhất từ 14 năm theo BNIC)' } },
    ],
    originStory: {
      en: [
        'From the 16th and 17th centuries, Dutch merchants trading salt and wine along the Charente River distilled fragile local white wines into brandewijn ("burnt wine") so they could survive sea voyages. Growers soon noticed that wine spirits stored in local French oak casks developed remarkable floral, orchard-fruit, and spice complexity.',
        'In 1909 France delimited the geographic Cognac production zone, and in 1938 codified the six crus based on geology: Grande Champagne, Petite Champagne, Borderies, Fins Bois, Bons Bois, and Bois Ordinaires. Note that "Champagne" here comes from the Latin campania ("open chalky countryside"), sharing ancient marine limestone geology rather than a geographic border with sparkling Champagne.',
      ],
      vi: [
        'Từ thế kỷ 16–17, các thương nhân Hà Lan giao thương dọc sông Charente đã chưng cất rượu vang trắng địa phương thành "brandewijn" để bảo quản qua các chuyến hải trình dài. Khi lưu trữ trong thùng gỗ sồi Pháp, thứ rượu tâm này chuyển mình thành chất rượu giàu hương hoa trắng, trái cây chín và gia vị.',
        'Năm 1909, Pháp khoanh vùng địa lý Cognac và đến năm 1938 chính thức phân định 6 vùng cru dựa trên địa chất: Grande Champagne, Petite Champagne, Borderies, Fins Bois, Bons Bois và Bois Ordinaires. Từ "Champagne" tại đây bắt nguồn từ tiếng Latin campania (cánh đồng đá phấn), chỉ đặc tính địa chất đá vôi cổ đại.',
      ],
    },
    production: {
      en: [
        'Base wine is fermented dry without added sugar or sulfur dioxide, keeping high natural acidity (~8–9% ABV) to preserve delicate aromatics. Distillation must finish by March 31 following the harvest.',
        'Houses differ on lees: distilling on fine lees inside small copper pot stills deepens texture and pastry-like richness, whereas distilling clear wine emphasizes crisp floral lift. Wide-grained Limousin oak accelerates oxygen exchange and vanilla-spice extraction.',
      ],
      vi: [
        'Rượu vang nền được lên men khô hoàn toàn, không thêm đường hay SO2 nhằm giữ độ chua tự nhiên cao (khoảng 8–9% ABV) và bảo toàn hương thơm thanh mảnh. Quá trình chưng cất bắt buộc hoàn tất trước ngày 31/3 sau vụ thu hoạch.',
        'Tùy triết lý từng nhà, việc chưng cất nguyên cặn men mịn (on fine lees) giúp rượu dày dặn, đậm đà; trong khi chưng cất rượu vang trong lại tôn vinh hương hoa thanh thoát. Thùng sồi Limousin thớ rộng giúp đẩy nhanh trao đổi oxy và chiết xuất gia vị.',
      ],
    },
    tasting: {
      nose: { en: 'Vine peach, white blossom, apricot, vanilla pod, toasted oak', vi: 'Đào chín, hoa trắng, mơ khô, vani và gỗ sồi nướng' },
      palate: { en: 'Silky orchard fruit transitioning into candied citrus, hazelnut, and warm baking spices with age', vi: 'Mượt mà vị trái cây chín, phát triển dần sang mứt cam chanh, hạt phỉ và gia vị ấm theo tuổi ủ' },
      finish: { en: 'Long, dry-balanced, lingering floral rancio on mature blends', vi: 'Kéo dài, cân bằng thanh thoát; xuất hiện tầng hương rancio quý phái ở các dòng ủ lâu năm' },
    },
    serving: {
      en: [
        'Neat in a tulip glass (preferred over wide balloon snifters, which trap harsh alcohol vapors rather than concentrating floral aromatics).',
        'Over a single large clear ice block, topped with ginger ale or soda in highballs, or anchored in classic sours such as the Sidecar.',
      ],
      vi: [
        'Uống nguyên chất (neat) trong ly tulip thon miệng để gom hương hoa trái tinh tế tốt hơn ly bầu snifter miệng rộng.',
        'Dùng cùng đá khối lớn trong suốt, pha Highball với ginger ale hoặc làm nền cho các cocktail cổ điển như Sidecar.',
      ],
    },
    faq: [
      {
        q: { en: 'Are all Cognacs brandies, and are all brandies Cognac?', vi: 'Mọi Cognac đều là Brandy hay ngược lại?' },
        a: { en: 'All Cognac is grape brandy, but only grape brandy grown, double-distilled in copper Charentais stills, and oak-aged under strict AOC rules in Cognac, France may legally bear the name Cognac.', vi: 'Mọi Cognac đều là Brandy chưng cất từ nho, nhưng chỉ loại rượu tuân thủ trọn vẹn quy chuẩn giống nho, nồi đồng Charentais và ủ sồi tại vùng Cognac (Pháp) mới được mang tên Cognac.' },
      },
      {
        q: { en: 'What do VS, VSOP, XO, and XXO mean on a Cognac label?', vi: 'Các ký hiệu VS, VSOP, XO và XXO trên nhãn Cognac có ý nghĩa gì?' },
        a: {
          en: 'These are official BNIC aging grades based on the youngest eau-de-vie in the blend: VS (Very Special) is aged at least 2 years; VSOP (Very Superior Old Pale) at least 4 years; XO (Extra Old) at least 10 years; and XXO (Extra Extra Old, established in 2018) at least 14 years.',
          vi: 'Đây là các cấp phân hạng tuổi ủ chính thức do BNIC quy định, tính theo giọt rượu tâm trẻ nhất trong mẻ phối trộn: VS (Very Special) tối thiểu 2 năm; VSOP (Very Superior Old Pale) tối thiểu 4 năm; XO (Extra Old) tối thiểu 10 năm; và XXO (Extra Extra Old, ban hành từ 2018) tối thiểu 14 năm.'
        },
      },
    ],
    relatedSlugs: ['remy-martin'],
    glossary: [
      {
            "term": {
                  "en": "Eau-de-vie",
                  "vi": "Eau-de-vie (Rượu tâm)"
            },
            "def": {
                  "en": "Colorless, fragrant wine spirit produced after double Charentais distillation, before entering oak casks.",
                  "vi": "Dòng rượu tâm trong suốt, đậm hương hoa trái sau 2 lần chưng cất nồi đồng Charentais trước khi ủ thùng sồi."
            }
      },
      {
            "term": {
                  "en": "Cru",
                  "vi": "Cru (Phân vùng địa chất)"
            },
            "def": {
                  "en": "Six legally defined growing zones in Cognac, classified by soil chalk content from Grande Champagne to Bois Ordinaires.",
                  "vi": "Sáu phân vùng địa chất trồng nho được bảo hộ tại Cognac, xếp hạng theo hàm lượng đá phấn từ Grande Champagne đến Bois Ordinaires."
            }
      },
      {
            "term": {
                  "en": "Cognac Fine Champagne",
                  "vi": "Cognac Fine Champagne"
            },
            "def": {
                  "en": "Official AOC requiring 100% eaux-de-vie from Grande and Petite Champagne, with at least 50% from Grande Champagne.",
                  "vi": "Danh xưng AOC bắt buộc 100% rượu tâm từ hai vùng Grande và Petite Champagne, trong đó ít nhất 50% từ Grande Champagne."
            }
      },
      {
            "term": {
                  "en": "Rancio Charentais",
                  "vi": "Rancio Charentais"
            },
            "def": {
                  "en": "A complex, tertiary aromatic profile of dried fruit, mushroom, leather, and walnut that develops only after 15–20+ years in oak.",
                  "vi": "Tầng hương thứ cấp quý giá gồm nấm rừng, da thuộc, hạt phỉ và mứt khô chỉ hình thành sau hơn 15–20 năm oxy hóa êm đềm trong thùng sồi."
            }
      }
],
    nextStep: {
      "title": {
            "en": "Study Rémy Martin Fine Champagne & Master the Sidecar",
            "vi": "Nghiên cứu Rémy Martin Fine Champagne & Luyện kỹ thuật Sidecar"
      },
      "slug": "remy-martin",
      "actionLabel": {
            "en": "View Rémy Martin Profile →",
            "vi": "Xem hồ sơ Rémy Martin →"
      }
},
    sourceNote: { en: 'BNIC Cognac AOC regulations & Rémy Martin Brand Education archive', vi: 'Quy chuẩn AOC của BNIC & Tài liệu đào tạo Rémy Martin' },
    lastUpdated: '2026-11-03',
  },
  {
    slug: 'history-of-orange-liqueur',
    status: 'approved',
    group: 'origins',
    topicId: 'liqueur',
    image: 'media/origins/02-triple-sec-orange-liqueur.png',
    coverImage: 'media/origins/02-triple-sec-orange-liqueur.png',
    coverImageWebp: 'media/origins/02-triple-sec-orange-liqueur.webp',
    imageAlt: {
      vi: 'Cam đắng, vỏ cam và nồi chưng cất rượu mùi cam',
      en: 'Bitter orange, orange peel and an orange liqueur still',
    },
    brandId: null,
    brandIds: ['cointreau'],
    categoryLabel: { en: 'Category History · Triple Sec & Orange Liqueurs', vi: 'Lịch sử phân loại · Triple Sec & Rượu mùi cam' },
    title: {
      en: 'Orange Liqueurs & Triple Sec: Backbone of Classics',
      vi: 'Triple Sec & Rượu mùi cam: Trụ cột Cocktail cổ điển',
    },
    subtitle: {
      en: 'From 19th-century French distillation to the structural backbone of the Margarita, Sidecar, and Cosmopolitan.',
      vi: 'Từ kỹ nghệ chưng cất thế kỷ 19 tại Pháp đến trụ cột cân bằng hương vị của Margarita, Sidecar và Cosmopolitan.',
    },
    summary: {
      en: 'Distinguish Curaçao from Triple Sec and understand essential orange oils in balancing Margarita and Sidecar.',
      vi: 'Phân biệt Curaçao và Triple Sec, hiểu vai trò tinh dầu vỏ cam trong việc giữ cấu trúc cân bằng cho Margarita và Sidecar.',
    },
    readMinutes: 4,
    keyTakeaways: {
      en: [
        'Early Curaçao-style liqueurs were often dark, sweet, and brandy-based; mid-19th-century French distillers pioneered crystal-clear, drier expressions known as Triple Sec.',
        'Citrus brightness comes from the flavedo (outer peel) rich in limonene and linalool, never from orange juice.',
        'High-proof essential oils trigger the "louche" (opalescent cloud) when diluted with water or ice, proving dense natural oil concentration.',
      ],
      vi: [
        'Các dòng rượu cam thời kỳ đầu thường sẫm màu và ngọt đậm; đến giữa thế kỷ 19, các bậc thầy chưng cất tại Pháp khai sinh phong cách Triple Sec trong suốt, khô thanh và sắc nét.',
        'Hương cam tự nhiên đến từ lớp vỏ ngoài (flavedo) giàu tinh dầu limonene và linalool, không phải từ nước ép cam.',
        'Hàm lượng tinh dầu tự nhiên đậm đặc tạo hiện tượng chuyển đục nhẹ như sương mờ (louche) khi gặp đá hoặc nước.',
      ],
    },
    specs: [
      { label: { en: 'Core Botanical', vi: 'Nguyên liệu cốt lõi' }, value: { en: 'Dried & fresh sweet (Citrus sinensis) and bitter (Citrus aurantium) orange peels', vi: 'Vỏ cam ngọt (Citrus sinensis) và cam đắng (Citrus aurantium) tươi và phơi khô' } },
      { label: { en: 'Classic Style', vi: 'Phong cách tiêu biểu' }, value: { en: 'Triple Sec (crystal-clear neutral beet/grain spirit distillate + sugar + water)', vi: 'Triple Sec (chưng cất trong suốt từ vỏ cam, cồn trung tính, nước và đường)' } },
      { label: { en: 'Cocktail Role', vi: 'Vai trò trong pha chế' }, value: { en: 'Aromatic bridge, sweetener, and acidity modifier in Daisy & Sour families', vi: 'Cầu nối hương thơm, tạo độ ngọt thanh và cân bằng vị chua cho nhóm Sour & Daisy' } },
    ],
    originStory: {
      en: [
        'European orange liqueurs trace back to Dutch traders bringing sun-dried bitter Laraha peels from the Caribbean island of Curaçao. By the 1800s, French confectioners and distillers sought a purer, less sugary distillate suited to aperitifs and the emerging golden age of mixed drinks.',
        'In Angers, Édouard Cointreau perfected a crystal-clear recipe in 1875–1885 using both dried and fresh sweet and bitter orange peels. Because "Triple Sec" could not be trademarked as a generic descriptive term, quality diverged sharply between true copper-distilled expressions and low-ABV artificially flavored syrups.',
      ],
      vi: [
        'Lịch sử rượu mùi cam châu Âu khởi nguồn từ những vỏ cam đắng phơi nắng vùng Caribe. Bước sang thế kỷ 19, các nhà chưng cất Pháp tìm kiếm một chất rượu tinh khiết, ít ngọt gắt hơn để phục vụ văn hóa khai vị và kỷ nguyên sơ khai của cocktail.',
        'Tại Angers, Édouard Cointreau hoàn thiện công thức rượu cam trong suốt vào giai đoạn 1875–1885 kết hợp cả vỏ cam tươi lẫn vỏ phơi khô. Do cụm từ "Triple Sec" là thuật ngữ mô tả chung không thể bảo hộ độc quyền, giới bartender luôn phân biệt rõ giữa dòng chưng cất tinh dầu thật bằng nồi đồng với các loại siro pha hương liệu nồng độ thấp.',
      ],
    },
    production: {
      en: [
        'Peels are hand-selected, trimmed of bitter white pith (albedo), macerated in neutral alcohol, and distilled in copper alembics. Master distillers cut heads and tails precisely to capture bright zesty top notes alongside deeper marmalade and white-flower undertones.',
        'Contemporary craft extensions also infuse real spice macerations such as Bird’s Eye chilli and botanical distillates onto an orange-peel distillate base to serve modern spicy-sour cocktails cleanly.',
      ],
      vi: [
        'Vỏ cam được loại bỏ phần cùi trắng đắng (albedo), ngâm ủ trong cồn trung tính rồi chưng cất bằng nồi đồng đỏ. Người chưng cất cắt bỏ đầu – cuối mẻ rượu để giữ trọn tầng hương vỏ cam tươi mát cùng hậu vị hoa trắng và mứt cam.',
        'Ngày nay, kỹ nghệ này còn phát triển sang hướng kết hợp dịch ngâm ớt tự nhiên trên nền tinh chất vỏ cam chưng cất, phục vụ xu hướng cocktail cay thanh hiện đại.',
      ],
    },
    tasting: {
      nose: { en: 'Freshly expressed orange zest, neroli blossom, candied peel', vi: 'Tinh dầu vỏ cam tươi, hoa cam neroli, mứt vỏ cam thanh dịu' },
      palate: { en: 'Crisp citrus entry with balanced sweetness and warming alcohol structure', vi: 'Vị cam sắc nét mở đầu, độ ngọt vừa vặn hài hòa cùng cấu trúc cồn ấm' },
      finish: { en: 'Clean bitter-sweet citrus oil persistence without sticky residue', vi: 'Hậu vị tinh dầu vỏ cam đắng nhẹ, sạch vị, không khé cổ' },
    },
    serving: {
      en: [
        'Essential modifier in the Margarita, Sidecar, Cosmopolitan, White Lady, Corpse Reviver No. 2, and Pegu Club.',
        'Served long with fresh lime and soda (Fizz style) or over ice with a twist of citrus peel.',
      ],
      vi: [
        'Thành phần định hình cấu trúc của Margarita, Sidecar, Cosmopolitan, White Lady và Corpse Reviver No. 2.',
        'Pha kiểu Fizz cùng nước cốt chanh tươi và soda, hoặc thưởng thức cùng đá viên lớn.',
      ],
    },
    faq: [
      {
        q: { en: 'Why does high-craft Triple Sec turn milky over ice?', vi: 'Vì sao rượu Triple Sec chuẩn lại chuyển màu trắng mờ khi thêm đá?' },
        a: { en: 'Hydrophobic citrus essential oils stay dissolved at 40% ABV; adding water or melting ice lowers solubility and releases microscopic aromatic oil droplets.', vi: 'Tinh dầu vỏ cam tự nhiên tan trong cồn 40% ABV; khi gặp nước đá làm giảm nồng độ cồn, các hạt tinh dầu vi mô giải phóng tạo hiệu ứng sương mờ tự nhiên và tỏa hương mạnh mẽ.' },
      },
    ],
    relatedSlugs: ['cointreau-lunique', 'cointreau-spicy'],
    glossary: [
      {
            "term": {
                  "en": "Triple Sec",
                  "vi": "Triple Sec"
            },
            "def": {
                  "en": "Clear, dry-style orange liqueur crafted by distilling neutral spirit with dried bitter and sweet orange peels, marked by low sugar and intense aromatics.",
                  "vi": "Dòng rượu mùi cam trong suốt phong cách khô thanh (sec), chưng cất từ vỏ cam ngọt và cam đắng, nổi bật bởi vị ngọt thanh và tinh dầu cam bùng nổ."
            }
      },
      {
            "term": {
                  "en": "Curaçao",
                  "vi": "Curaçao"
            },
            "def": {
                  "en": "Traditional orange liqueur originally made from dried peel of the bitter Laraha orange on the Caribbean island of Curaçao, typically sweeter with pot-still character.",
                  "vi": "Rượu mùi cam truyền thống làm từ vỏ cam đắng Laraha trên đảo Curaçao, vị đậm đà và ngọt hơn so với phong cách Triple Sec."
            }
      },
      {
            "term": {
                  "en": "Louche Effect",
                  "vi": "Hiệu ứng vẩn đục (Louche)"
            },
            "def": {
                  "en": "Natural cloudy opalescence occurring when high concentrations of essential orange peel oils precipitate upon dilution with cold water or ice.",
                  "vi": "Hiện tượng ngả mờ đục tự nhiên khi tinh dầu cam tinh khiết cô đặc trong rượu tiếp xúc với nhiệt độ lạnh hoặc nước đá."
            }
      }
],
    nextStep: {
      "title": {
            "en": "Deep dive into Cointreau L'Unique & Balance the Margarita",
            "vi": "Khám phá Cointreau L'Unique & Cân bằng vị chua ngọt Margarita"
      },
      "slug": "cointreau-lunique",
      "actionLabel": {
            "en": "View Cointreau Profile →",
            "vi": "Xem hồ sơ Cointreau →"
      }
},
    sourceNote: { en: 'Classic cocktail historiography & Maison Cointreau Angers archives', vi: 'Lịch sử pha chế cổ điển & Tư liệu lưu trữ Maison Cointreau Angers' },
    lastUpdated: '2026-11-03',
  },
  {
    slug: 'history-of-gin',
    status: 'approved',
    group: 'origins',
    topicId: 'gin',
    image: 'media/origins/03-gin-botanicals.png',
    coverImage: 'media/origins/03-gin-botanicals.png',
    coverImageWebp: 'media/origins/03-gin-botanicals.webp',
    imageAlt: {
      vi: 'Nồi chưng cất Gin cùng quả bách xù và các loại thảo mộc',
      en: 'Gin still surrounded by juniper berries and botanicals',
    },
    brandId: null,
    brandIds: ['the-botanist'],
    categoryLabel: { en: 'Category History · Gin & Botanical Spirits', vi: 'Lịch sử phân loại · Gin & Thảo mộc chưng cất' },
    title: {
      en: 'Gin: From Juniper to Botanical Artistry',
      vi: 'Gin: Từ quả bách xù đến nghệ thuật thảo mộc',
    },
    subtitle: {
      en: 'Tracing Genever, London Dry standards, vapor infusion, and contemporary provenance-focused gins.',
      vi: 'Hành trình từ Genever Hà Lan, chuẩn mực London Dry đến kỹ thuật chưng cất hơi thảo mộc mang dấu ấn vùng đất.',
    },
    summary: {
      en: 'Understand London Dry standards, maceration vs vapor infusion, and how botanicals craft modern terroir gin.',
      vi: 'Hiểu rõ chuẩn mực London Dry, phương pháp ngâm ủ - chưng cất hơi và cách thảo mộc bản địa định hình phong vị Gin hiện đại.',
    },
    readMinutes: 4,
    keyTakeaways: {
      en: [
        'Juniper must remain the recognizable anchor in every legal gin, supported by seeds (coriander), roots (angelica, orris), citrus peels, and regional herbs.',
        '"London Dry" is a production method (all natural botanicals redistilled together, max 0.1g/L sugar added post-still, no artificial flavors), not a geographic restriction.',
        'Slow low-pressure boiling and vapor-basket infusion preserve delicate floral and leafy notes that aggressive direct boiling would scorch.',
      ],
      vi: [
        'Quả bách xù (juniper) bắt buộc là nốt hương cốt lõi, nâng đỡ bởi nhóm hạt (hạt mùi), rễ (bạch chỉ, diên vĩ), vỏ cam chanh và thảo mộc địa phương.',
        '"London Dry" là quy chuẩn kỹ thuật chưng cất (chưng cất lại toàn bộ thảo mộc tự nhiên, lượng đường bổ sung sau đó tối đa chỉ 0,1 g/L, không dùng hương liệu nhân tạo), không bắt buộc sản xuất tại London.',
        'Chưng cất áp suất thấp tốc độ chậm kết hợp giỏ hấp hơi (vapor infusion) giúp giữ trọn hương hoa lá mỏng manh.',
      ],
    },
    specs: [
      { label: { en: 'Mandatory Botanical', vi: 'Thảo mộc bắt buộc' }, value: { en: 'Juniper berries (Juniperus communis)', vi: 'Quả bách xù (Juniperus communis)' } },
      { label: { en: 'Minimum Bottling Strength', vi: 'Nồng độ đóng chai tối thiểu' }, value: { en: '37.5% ABV (EU/UK) · 40%+ ABV standard for bar craft', vi: '37,5% ABV (EU/Anh) · Chuẩn pha chế chuyên nghiệp thường từ 40–46% ABV' } },
      { label: { en: 'Extraction Techniques', vi: 'Kỹ thuật chiết xuất hương' }, value: { en: 'Pot maceration, vapor infusion basket, vacuum distillation', vi: 'Ngâm ủ trực tiếp trong nồi, hấp hơi qua giỏ thảo mộc, hoặc chưng cất chân không' } },
    ],
    originStory: {
      en: [
        'Distilled juniper tonics emerged in the Low Countries as Genever, built on a malted grain spirit base ("maltwine"). British soldiers encountered it during the Eighty Years’ War ("Dutch Courage") and brought the taste back to England.',
        'In the 19th century, the invention of the continuous Coffey column still delivered clean high-proof neutral grain spirit, enabling crisp, unsweetened London Dry gins that powered the Martini, Negroni, Gimlet, and Gin & Tonic. In the 21st century, distillers pushed beyond generic spice bills toward sustainable local foraging.',
      ],
      vi: [
        'Tiền thân của Gin là rượu thuốc Genever vùng Hà Lan – Bỉ nấu từ dịch mạch nha lên men cùng quả bách xù. Khi du nhập sang Anh, thức uống này dần chuyển mình nhờ sự ra đời của tháp chưng cất liên tục Coffey ở thế kỷ 19.',
        'Cồn nền tinh khiết cao độ đã mở đường cho phong cách Dry Gin khô ráo, thanh sắc – linh hồn của Martini, Negroni, Gimlet và Gin & Tonic. Bước sang thế kỷ 21, làn sóng Gin thủ công đưa khái niệm "terroir" vào từng mẻ rượu thông qua thảo mộc thu hái bền vững tại địa phương.',
      ],
    },
    production: {
      en: [
        'Hearty roots, bark, and dried seeds tolerate warm maceration directly in diluted neutral spirit, releasing earthy fixative oils that bind the bouquet together.',
        'Fragile blossoms, mints, and wild meadow herbs perform best when alcohol vapors pass gently through suspended botanical baskets, carrying volatile aromatics straight to the condenser.',
      ],
      vi: [
        'Các loại rễ cây, vỏ quế và hạt khô chịu nhiệt tốt thường được ngâm trực tiếp trong nồi để chiết xuất lớp nền trầm ấm và giữ mùi.',
        'Ngược lại, các loài hoa dại, lá bạc hà và thảo mộc tươi mỏng manh được đặt trong khoang hấp để hơi cồn đi qua nhẹ nhàng, cuốn theo tinh dầu thanh khiết sang ống ngưng tụ.',
      ],
    },
    tasting: {
      nose: { en: 'Piney juniper, crushed coriander seed, bright citrus peel, wild meadow herbs', vi: 'Hương thông bách xù, hạt mùi nghiền, vỏ cam chanh tươi và hoa cỏ tự nhiên' },
      palate: { en: 'Dry, crisp botanical layers moving from citrus-herbal lift to grounding root spice', vi: 'Khô thanh, lớp lang thảo mộc chuyển từ cam chanh tươi mát sang vị ấm của rễ cây' },
      finish: { en: 'Refreshing, mineral-clean, aromatic', vi: 'Sảng khoái, sạch vị và lưu hương thảo mộc dài lâu' },
    },
    serving: {
      en: [
        'Highball with premium tonic water or soda garnished to echo the gin’s seasonal or regional botanicals.',
        'Stirred cold in a Martini or Negroni, or shaken with fresh lime in a Gimlet or Southside.',
      ],
      vi: [
        'Pha Gin & Tonic cùng đá già, chọn thảo mộc trang trí đồng điệu với nhóm hương bản địa của chai Gin.',
        'Khuấy lạnh chuẩn mực trong Martini, Negroni hoặc lắc tươi mát cùng chanh trong Gimlet và Southside.',
      ],
    },
    faq: [
      {
        q: { en: 'Why do bartenders prefer 43–46% ABV gins for cocktails?', vi: 'Vì sao bartender thường ưu tiên Gin có nồng độ 43–46% ABV?' },
        a: { en: 'Higher ABV carries denser botanical essential oils, keeping juniper and herbal structure vivid after dilution with ice, vermouth, citrus, or tonic.', vi: 'Nồng độ 43–46% ABV giữ được hàm lượng tinh dầu thảo mộc dồi dào hơn, giúp hương vị không bị nhạt nhòa khi pha cùng đá, vermouth, chanh hay nước tonic.' },
      },
    ],
    relatedSlugs: ['the-botanist-islay-dry-gin'],
    glossary: [
      {
            "term": {
                  "en": "Juniperus communis",
                  "vi": "Quả bách xù (Juniper)"
            },
            "def": {
                  "en": "The defining piney, resiny botanical cone that must legally dominate the aroma profile of all authentic gin.",
                  "vi": "Quả nón có hương nhựa thông ấm áp bắt buộc phải chiếm ưu thế áp đảo về hương vị trong mọi sản phẩm Gin hợp pháp."
            }
      },
      {
            "term": {
                  "en": "London Dry Gin",
                  "vi": "Chuẩn mực London Dry"
            },
            "def": {
                  "en": "Strict legal category requiring all botanicals to be distilled simultaneously in traditional stills; zero artificial flavors or sugar may be added after distillation.",
                  "vi": "Cấp bậc Gin khắt khe nhất: toàn bộ thảo mộc phải được chưng cất đồng thời trong nồi đồng; tuyệt đối không thêm hương liệu hay phẩm màu sau chưng cất."
            }
      },
      {
            "term": {
                  "en": "Vapor Infusion",
                  "vi": "Chưng cất hơi (Vapor Infusion)"
            },
            "def": {
                  "en": "Suspending delicate botanicals in a copper basket inside the still neck so rising alcohol vapor extracts fragrant floral oils without boiling or stewing them.",
                  "vi": "Kỹ thuật treo thảo mộc trong giỏ đồng ở cổ nồi để hơi cồn đi qua chiết xuất hương hoa tinh khiết mà không làm chín nẫu lá."
            }
      }
],
    nextStep: {
      "title": {
            "en": "Explore 22 Foraged Islay Botanicals in The Botanist",
            "vi": "Khám phá 22 loại thảo mộc bản địa trong The Botanist Islay Dry Gin"
      },
      "slug": "the-botanist-islay-dry-gin",
      "actionLabel": {
            "en": "View The Botanist Profile →",
            "vi": "Xem hồ sơ The Botanist →"
      }
},
    sourceNote: { en: 'EU Spirit Drinks Regulation 2019/787 & Bruichladdich Botanical archives', vi: 'Quy chuẩn Đồ uống có cồn Châu Âu 2019/787 & Tư liệu thực vật học Bruichladdich' },
    lastUpdated: '2026-11-03',
  },
  {
    slug: 'history-of-champagne',
    status: 'approved',
    group: 'origins',
    topicId: 'champagne',
    image: 'media/origins/04-champagne-sparkling-wine.png',
    coverImage: 'media/origins/04-champagne-sparkling-wine.png',
    coverImageWebp: 'media/origins/04-champagne-sparkling-wine.webp',
    imageAlt: {
      vi: 'Chai vang sủi, nho trắng, bọt khí và lớp đất đá phấn',
      en: 'Sparkling wine bottle, white grapes, bubbles and chalk soil',
    },
    brandId: null,
    brandIds: ['telmont'],
    categoryLabel: { en: 'Category History · Sparkling Wine & Champagne', vi: 'Lịch sử phân loại · Rượu vang sủi & Champagne' },
    title: {
      en: 'Champagne: Chalk Soils & Traditional Method',
      vi: 'Champagne: Đất đá phấn & Phương pháp truyền thống',
    },
    subtitle: {
      en: 'Why chalk subsoils, reserve wines, and patient bottle autolysis set Champagne apart from every other sparkling wine.',
      vi: 'Vì sao tầng đá phấn cổ đại, rượu dự trữ lâu năm và quá trình ủ trên xác men tạo nên chuẩn mực riêng biệt của Champagne.',
    },
    summary: {
      en: 'Discover why ancient chalk soils and patient lees autolysis create fine effervescence and peerless depth.',
      vi: 'Khám phá vì sao thổ nhưỡng đá phấn cổ đại và quá trình ủ cặn men tạo nên bọt sủi mịn màng cùng chiều sâu vị giác độc nhất.',
    },
    readMinutes: 4,
    keyTakeaways: {
      en: [
        'Three classic grapes lead the appellation: Chardonnay (finesse, minerality), Pinot Noir (structure, red-fruit backbone), and Meunier (supple orchard fruit, roundness).',
        'Méthode Champenoise requires a second fermentation inside the sealed bottle (~6 atmospheres of pressure), minimum 15 months sur lie for Non-Vintage and 36 months for Vintage.',
        'Organic viticulture and lightweight recycled bottles have become decisive frontiers in protecting Champagne’s fragile cool-climate vineyards.',
      ],
      vi: [
        'Ba giống nho trụ cột của vùng gồm: Chardonnay (thanh tao, khoáng chất), Pinot Noir (cấu trúc vững chãi) và Meunier (tròn vị, giàu hương trái cây chín).',
        'Phương pháp truyền thống (Méthode Champenoise) lên men lần hai trực tiếp trong chai kín (áp suất khoảng 6 bar), ủ cặn men tối thiểu 15 tháng với dòng không niên vụ (NV) và 36 tháng với dòng có niên vụ (Vintage).',
        'Canh tác hữu cơ và giảm trọng lượng vỏ chai thủy tinh tái chế đang là bước chuyển mình quan trọng nhằm bảo vệ hệ sinh thái vùng Champagne.',
      ],
    },
    specs: [
      { label: { en: 'Appellation', vi: 'Vùng bảo hộ' }, value: { en: 'Champagne AOC, northeastern France', vi: 'Champagne AOC, Đông Bắc nước Pháp' } },
      { label: { en: 'Core Grape Trio', vi: 'Ba giống nho chính' }, value: { en: 'Chardonnay, Pinot Noir, Meunier', vi: 'Chardonnay, Pinot Noir, Meunier' } },
      { label: { en: 'Method', vi: 'Phương pháp sản xuất' }, value: { en: 'Méthode Champenoise (in-bottle secondary fermentation, riddling, disgorgement)', vi: 'Méthode Champenoise (lên men lần 2 trong chai, xoay chai remuage, tách cặn dégorgement)' } },
      { label: { en: 'Key Sweetness Levels', vi: 'Cấp độ lượng đường (Dosage)' }, value: { en: 'Brut Nature (0–3 g/L), Extra Brut (0–6 g/L), Brut (<12 g/L)', vi: 'Brut Nature (0–3 g/L), Extra Brut (0–6 g/L), Brut (<12 g/L)' } },
    ],
    originStory: {
      en: [
        'For centuries Champagne’s northern latitude halted fermentation during cold winters, only for dormant yeasts to reawaken in spring inside sealed bottles. Once stronger English glass and cork closures arrived in the late 17th century, houses learned to harness and refine that natural sparkle.',
        'Innovations in assemblage (blending parcels, grape varieties, and multi-vintage reserve wines) and 19th-century riddling racks (pupitres) transformed cloudy sparkling wine into crystal-bright Champagne.',
      ],
      vi: [
        'Nằm ở vĩ độ cao lạnh giá, rượu vang vùng Champagne xưa kia thường ngừng lên men vào mùa đông và tự tái kích hoạt nấm men khi xuân về ngay trong chai kín. Cuối thế kỷ 17, nhờ vỏ chai thủy tinh dày và nút bần chịu lực, các nhà làm vang đã làm chủ được dòng bọt sủi tự nhiên này.',
        'Nghệ thuật phối trộn (assemblage) giữa nhiều thửa ruộng, giống nho và rượu vang dự trữ từ các niên vụ trước, cùng kỹ thuật xoay chai lắng cặn thế kỷ 19 đã định hình nên Champagne trong trẻo ngày nay.',
      ],
    },
    production: {
      en: [
        'Whole grape bunches are pressed gently without skin maceration so dark-skinned Pinot Noir and Meunier yield pale base wines (vins clairs). After assemblage, liqueur de tirage (yeast and sugar) initiates secondary fermentation inside the bottle.',
        'As spent yeast cells break down (autolysis), they release mannoproteins and amino acids that build creamy texture, toasted brioche notes, and pinpoint mousse before riddling, disgorgement, and dosage.',
      ],
      vi: [
        'Nho nguyên chùm được ép nhẹ nhàng để kể cả nho vỏ sẫm như Pinot Noir và Meunier vẫn cho ra nước ép trắng trong (vins clairs). Sau bước phối trộn, hỗn hợp men và đường (liqueur de tirage) được thêm vào để lên men lần hai trong chai.',
        'Khi tế bào nấm men tự phân hủy (autolysis) suốt nhiều năm, chúng giải phóng hợp chất tạo kết cấu kem mịn, hương bánh mì nướng brioche và chuỗi bọt nhỏ li ti trước khi tách cặn và định lượng đường (dosage).',
      ],
    },
    tasting: {
      nose: { en: 'Citrus blossom, green pear, chalky Wet stone, toasted brioche, roasted almond', vi: 'Hoa cam chanh, lê xanh, khoáng chất đá phấn, bánh brioche nướng và hạnh nhân' },
      palate: { en: 'Crisp linear acidity cushioned by fine creamy mousse and orchard fruit', vi: 'Độ chua thanh sắc nét hòa quyện cùng lớp bọt mịn mượt và hương trái cây tươi' },
      finish: { en: 'Saline mineral snap and long citrus-pastry persistence', vi: 'Hậu vị khoáng mặn nhẹ đặc trưng, dư vị cam chanh và bánh nướng kéo dài' },
    },
    serving: {
      en: [
        'Serve chilled at 8–10 °C in a white-wine tulip glass rather than a narrow flute or wide coupe so aromas open fully while keeping effervescence.',
        'Pairs naturally with raw oysters, sashimi, tempura, aged Comté, or roast poultry; anchors classic Champagne cocktails such as the French 75.',
      ],
      vi: [
        'Phục vụ ở nhiệt độ 8–10 °C trong ly vang trắng dáng tulip thay vì ly flute quá hẹp hay ly coupe miệng rộng, giúp mở trọn tầng hương mà vẫn giữ bọt bền.',
        'Kết hợp tuyệt vời với hàu tươi, sashimi, món chiên giòn thanh nhẹ, phô mai ủ già hoặc pha chế các cocktail kinh điển như French 75.',
      ],
    },
    faq: [
      {
        q: { en: 'How does Champagne differ from Prosecco?', vi: 'Champagne khác Prosecco ở điểm cốt lõi nào?' },
        a: { en: 'Champagne ferments a second time inside each individual bottle and ages at least 15 months on yeast lees in Champagne, France; most Prosecco undergoes tank fermentation (Charmat method) in northeastern Italy using Glera grapes for primary fruit.', vi: 'Champagne lên men lần hai trực tiếp trong từng chai và ủ cặn men tối thiểu 15 tháng tại Pháp; trong khi phần lớn Prosecco lên men trong bồn thép kín (phương pháp Charmat) tại Ý từ nho Glera, thiên về hương trái cây tươi ngắn hạn.' },
      },
    ],
    relatedSlugs: ['champagne-telmont'],
    glossary: [
      {
            "term": {
                  "en": "Méthode Traditionnelle",
                  "vi": "Phương pháp truyền thống"
            },
            "def": {
                  "en": "Inducing secondary fermentation directly inside the sealed bottle to trap natural carbon dioxide, creating microscopic, persistent bubbles.",
                  "vi": "Quy trình tạo bọt sủi tự nhiên bằng cách kích hoạt lên men lần hai ngay bên trong từng chai thủy tinh dày."
            }
      },
      {
            "term": {
                  "en": "Lees Autolysis",
                  "vi": "Ủ cặn men (Autolysis)"
            },
            "def": {
                  "en": "Enzymatic breakdown of spent yeast cells during bottle aging, imparting signature brioche, toast, cream, and almond complexity.",
                  "vi": "Quá trình xác men tự phân giải trong hầm tối qua nhiều năm, giải phóng hợp chất tạo hương bánh mì nướng, kem bơ và hạt ngậy."
            }
      },
      {
            "term": {
                  "en": "Dosage (Liqueur d'expédition)",
                  "vi": "Định lượng Dosage"
            },
            "def": {
                  "en": "Wine and sugar solution added after disgorging to balance acidity and establish sweetness categories from Brut Nature to Demi-Sec.",
                  "vi": "Hỗn hợp rượu và đường mía bổ sung sau khi tống cặn để cân bằng độ chua và xác lập phân hạng vị ngọt."
            }
      }
],
    nextStep: {
      "title": {
            "en": "Study Organic Vision & In the Name of Mother Nature at Telmont",
            "vi": "Tìm hiểu triết lý hữu cơ và di sản thủ công tại Champagne Telmont"
      },
      "slug": "champagne-telmont",
      "actionLabel": {
            "en": "View Telmont Profile →",
            "vi": "Xem hồ sơ Champagne Telmont →"
      }
},
    sourceNote: { en: 'Comité Champagne AOC specifications & Maison Telmont viticultural dossier', vi: 'Quy chuẩn AOC của Comité Champagne & Hồ sơ canh tác Maison Telmont' },
    lastUpdated: '2026-11-03',
  },
  {
    slug: 'history-of-rum',
    status: 'approved',
    group: 'origins',
    topicId: 'rum',
    image: 'media/origins/05-rum-sugarcane.png',
    coverImage: 'media/origins/05-rum-sugarcane.png',
    coverImageWebp: 'media/origins/05-rum-sugarcane.webp',
    imageAlt: {
      vi: 'Cây mía, mật mía và nồi chưng cất Rum bằng đồng',
      en: 'Sugarcane, molasses and a copper rum still',
    },
    brandId: null,
    brandIds: ['mount-gay'],
    categoryLabel: { en: 'Category History · Sugarcane & Rum', vi: 'Lịch sử phân loại · Mía đường & Rượu Rum' },
    title: {
      en: 'Rum: Sugarcane, Coral Water & Tropical Aging',
      vi: 'Rum: Cây mía, Nước đá san hô & Quá trình ủ nhiệt đới',
    },
    subtitle: {
      en: 'How Barbados birthed documented rum distillation in the early 18th century and shaped pot-and-column blending.',
      vi: 'Cách hòn đảo Barbados khai sinh lịch sử chưng cất Rum có chứng thư từ đầu thế kỷ 18 và định hình nghệ thuật phối trộn nồi đồng – tháp cột.',
    },
    summary: {
      en: 'Learn molasses vs cane juice styles, pot-column blending, and how tropical maturation transforms rum in Barbados.',
      vi: 'Học cách phân biệt Rum mật mía và Rhum Agricole, nghệ thuật phối trộn nồi đồng - tháp cột và tốc độ trưởng thành nhiệt đới.',
    },
    readMinutes: 4,
    keyTakeaways: {
      en: [
        'Barbados holds the earliest surviving legal deed for a rum distillery (1703), pioneering balanced blends of copper pot still and column still distillates.',
        'Coral-limestone islands act as natural aquifers, filtering groundwater free of iron and enriching calcium minerals for clean fermentation.',
        'Tropical Caribbean aging accelerates oak interaction – evaporating 6–8%+ per year ("angel’s share") compared to ~2% in cool European cellars.',
      ],
      vi: [
        'Barbados lưu giữ chứng thư pháp lý cổ xưa nhất thế giới về nhà chưng cất Rum (năm 1703), tiên phong trong nghệ thuật phối trộn giữa rượu nồi đồng (pot still) và tháp cột (column still).',
        'Địa chất đảo đá vôi san hô đóng vai trò tầng lọc nước ngầm tự nhiên, loại bỏ sắt và giàu khoáng canxi giúp quá trình lên men sạch hương.',
        'Khí hậu nhiệt đới Caribe thúc đẩy tốc độ tương tác gỗ sồi nhanh gấp nhiều lần châu Âu, với tỷ lệ bay hơi tự nhiên khoảng 6–8% mỗi năm.',
      ],
    },
    specs: [
      { label: { en: 'Raw Material', vi: 'Nguyên liệu gốc' }, value: { en: 'Sugarcane molasses ("Black Gold") or fresh sugarcane juice', vi: 'Mật mía ("Vàng đen") hoặc nước mía ép tươi' } },
      { label: { en: 'Distillation Heritage', vi: 'Trường phái chưng cất' }, value: { en: 'Artisanal copper pot stills, traditional column stills, and dual blends', vi: 'Nồi đồng thủ công (Pot Still), tháp cột (Column Still) và phối trộn cả hai' } },
      { label: { en: 'Maturation Climate', vi: 'Khí hậu trưởng thành' }, value: { en: 'Humid tropical aging in ex-American whiskey, Bourbon, and Cognac oak casks', vi: 'Ủ nhiệt đới ẩm trong thùng gỗ sồi từng ủ Whiskey Mỹ, Bourbon và Cognac' } },
    ],
    originStory: {
      en: [
        'Sugarcane cultivation in the 17th-century Caribbean generated abundant molasses – a mineral-rich byproduct of sugar refining. Early island distillers discovered that diluting molasses with local spring water and fermenting it with wild ambient yeasts produced a fragrant wash originally nicknamed "Kill-Devil" and later "Rumbullion" or rum.',
        'Three major traditions evolved across the islands: English-heritage molasses rums emphasizing copper pot-and-column balance (Barbados, Jamaica, Guyana), Spanish-heritage lighter column-distilled ronas, and French-heritage rhum agricole pressed from fresh cane juice.',
      ],
      vi: [
        'Nghề trồng mía đường thế kỷ 17 tại vùng Caribe tạo ra lượng lớn mật mía (molasses) giàu khoáng chất. Các nhà chưng cất trên đảo nhận ra khi pha mật mía với nước suối địa phương và lên men tự nhiên sẽ chưng cất được thứ rượu thơm nồng, ban đầu gọi là "Rumbullion" rồi rút gọn thành Rum.',
        'Ba trường phái lớn dần hình thành: dòng Rum truyền thống Anh lên men từ mật mía, cân bằng giữa nồi đồng và tháp cột (tiêu biểu là Barbados); dòng Ron truyền thống Tây Ban Nha thanh nhẹ; và dòng Rhum Agricole kiểu Pháp ép từ nước mía tươi.',
      ],
    },
    production: {
      en: [
        'Fermentation length, yeast strain, and open-air vs. closed tanks shape ester formation – creating notes of ripe banana, grilled pineapple, and dried apricot before the wash ever touches copper.',
        'Double-retort copper pot stills deliver weighty, aromatic distillates rich in congeners, while column stills provide silky, elegant lift. Master Blenders marry matured casks without added sugar in authentic Barbados dry styles.',
      ],
      vi: [
        'Thời gian lên men và chủng nấm men quyết định hàm lượng ester hương trái cây nhiệt đới như chuối chín, dứa nướng và mơ khô ngay trước khi đưa vào nồi đồng.',
        'Nồi đồng hai bầu (double-retort pot still) tạo ra chất rượu dày, giàu chiều sâu hương vị, trong khi tháp cột mang lại sự thanh thoát. Phong cách Barbados đích thực tôn trọng vị khô tự nhiên, không pha đường tạo ngọt sau chưng cất.',
      ],
    },
    tasting: {
      nose: { en: 'Roasted banana, vanilla, toasted coconut,warm brown spice, dried tropical fruit', vi: 'Chuối nướng, vani, dừa sấy, gia vị ấm và trái cây nhiệt đới chín' } ,
      palate: { en: 'Supple caramel-almond warmth balanced by dry oak tannin, orange peel, and clove', vi: 'Vị hạnh nhân, caramel khô thanh hòa cùng tannin gỗ sồi, vỏ cam và đinh hương' },
      finish: { en: 'Warm, dry-spiced, lingering toasted oak', vi: 'Ấm áp, khô gọn, dư vị gỗ sồi nướng bền bỉ' },
    },
    serving: {
      en: [
        'Younger golden blends shine in Daiquiris, Mojitos, Rum Punches, and Ginger Highballs.',
        'Matured expressions reward neat service, a single rock, or spirit-forward Old Fashioned and Manhattan riffs.',
      ],
      vi: [
        'Các dòng ủ trẻ lý tưởng cho Daiquiri, Mojito, Rum Punch và Highball sảng khoái.',
        'Các dòng ủ lâu năm tỏa sáng khi uống neat, thêm một viên đá lớn hoặc biến tấu Old Fashioned.',
      ],
    },
    faq: [
      {
        q: { en: 'Are all rums sweet?', vi: 'Có phải rượu Rum nào cũng ngọt không?' },
        a: { en: 'No. Distillation removes all sugar. Authentic Barbados rums such as Mount Gay contain zero added sugar after distillation; perceived sweetness comes solely from ester aromatics and vanilla compounds extracted from toasted American oak.', vi: 'Không. Quá trình chưng cất tách bỏ hoàn toàn đường. Dòng Rum Barbados chuẩn mực như Mount Gay không thêm đường sau chưng cất; cảm giác êm dịu đến hoàn toàn từ hương trái cây ester và vani tự nhiên trong gỗ sồi Mỹ nướng.' },
      },
    ],
    relatedSlugs: ['mount-gay-rum'],
    glossary: [
      {
            "term": {
                  "en": "Blackstrap Molasses",
                  "vi": "Mật rỉ đường mía"
            },
            "def": {
                  "en": "Rich, bittersweet syrup remaining after sugar crystallization, packed with minerals and sulfur that feed ester development during rum fermentation.",
                  "vi": "Sản phẩm cô đặc giàu khoáng chất thu được sau quá trình kết tinh đường mía, cung cấp dinh dưỡng tạo nên ester trái cây đậm đà."
            }
      },
      {
            "term": {
                  "en": "Double-Retort Pot Still",
                  "vi": "Nồi chưng cất hai bình hồi lưu"
            },
            "def": {
                  "en": "Historic British Caribbean still system where vapor passes through two intermediate vessels containing low wines and high wines, concentrating proof and deep flavor in a single batch.",
                  "vi": "Hệ thống nồi đồng truyền thống vùng Caribbean dẫn hơi cồn qua hai bình phụ để nâng cao nồng độ cồn và giữ trọn hương vị đậm sâu."
            }
      },
      {
            "term": {
                  "en": "Angel's Share (Tropical)",
                  "vi": "Phần rượu của thiên thần"
            },
            "def": {
                  "en": "Annual evaporation rate through wooden casks; up to 7–10% per year in the Caribbean versus 2% in Scotland, accelerating maturity threefold.",
                  "vi": "Tỷ lệ rượu bay hơi qua thớ gỗ sồi hàng năm; đạt tới 7–10%/năm tại vùng nhiệt đới Caribbean so với 2% tại Scotland, giúp rượu trưởng thành nhanh gấp 3 lần."
            }
      }
],
    nextStep: {
      "title": {
            "en": "Trace 1703 Heritage & Pot-Still Blends at Mount Gay Rum",
            "vi": "Tra cứu di sản chưng cất 1703 và kỹ thuật phối trộn tại Mount Gay Rum"
      },
      "slug": "mount-gay-rum",
      "actionLabel": {
            "en": "View Mount Gay Profile →",
            "vi": "Xem hồ sơ Mount Gay Rum →"
      }
},
    sourceNote: { en: 'Barbados Rum Geographical Indication standards & Mount Gay 1703 archives', vi: 'Tiêu chuẩn Chỉ dẫn địa lý Rum Barbados & Tư liệu lưu trữ Mount Gay 1703' },
    lastUpdated: '2026-11-03',
  },
  {
    slug: 'history-of-islay-whisky',
    status: 'approved',
    group: 'origins',
    topicId: 'whisky',
    image: 'media/origins/06-islay-single-malt.png',
    coverImage: 'media/origins/06-islay-single-malt.png',
    coverImageWebp: 'media/origins/06-islay-single-malt.webp',
    imageAlt: {
      vi: 'Nồi chưng cất Whisky, than bùn, lúa mạch và bờ biển Islay',
      en: 'Whisky still, peat, barley and the Islay coastline',
    },
    brandId: null,
    brandIds: ['bruichladdich', 'port-charlotte', 'octomore'],
    parentHouseId: 'bruichladdich-distillery',
    categoryLabel: { en: 'Category History · Scotch & Islay Single Malt', vi: 'Lịch sử phân loại · Scotch & Islay Single Malt' },
    title: {
      en: 'Islay Single Malt: Maritime Terroir & Peat Spectrum',
      vi: 'Islay Single Malt: Khí hậu biển & Phổ khói than bùn',
    },
    subtitle: {
      en: 'Why Scotland’s southernmost Hebridean island produces both floral unpeated malts (0 PPM) and the world’s most heavily peated whiskies.',
      vi: 'Vì sao hòn đảo cực Nam quần đảo Hebrides vừa làm ra dòng Single Malt không khói (0 PPM) thanh tao, vừa nắm giữ kỷ lục khói than bùn đậm nhất thế giới.',
    },
    summary: {
      en: 'Decode the peat PPM spectrum from unpeated 0 PPM to extreme peating, shaped by wild Atlantic sea spray.',
      vi: 'Giải mã chỉ số khói PPM từ 0 PPM thanh tao đến hơn 100 PPM bùng nổ, cùng ảnh hưởng của gió biển Hebrides lên thùng ủ.',
    },
    readMinutes: 5,
    keyTakeaways: {
      en: [
        'Single Malt Scotch must be made at one Scottish distillery from 100% malted barley and water, distilled in copper pot stills, and matured at least 3 years in oak casks in Scotland.',
        'Not all Islay whisky is smoky: peat smoke enters during malted barley kilning, not from Islay water. Unpeated malts (0 PPM) reveal pure cereal, coastal citrus, and floral distillation character.',
        'PPM measures phenolic compounds on the malted barley grain before mashing; still height, cut points, and cask type determine how elegantly that smoke integrates on the palate.',
      ],
      vi: [
        'Single Malt Scotch bắt buộc làm tại một nhà chưng cất duy nhất ở Scotland từ 100% mạch nha lúa mạch và nước, chưng cất bằng nồi đồng (pot still) và ủ sồi tại Scotland tối thiểu 3 năm.',
        'Không phải mọi whisky đảo Islay đều có vị khói: hương khói đến từ công đoạn sấy mạch nha bằng than bùn (peat), không phải từ nguồn nước. Mạch nha không sấy than bùn (0 PPM) giữ trọn vị ngũ cốc, cam chanh biển và hoa cỏ.',
        'Chỉ số PPM đo hàm lượng hợp chất phenol bám trên hạt mạch nha trước khi nghiền nấu; chính chiều cao cổ nồi đồng và điểm cắt rượu tâm mới quyết định độ mượt và thanh thoát của làn khói trong ly rượu.',
      ],
    },
    specs: [
      { label: { en: 'Whisky Region', vi: 'Vùng sản xuất' }, value: { en: 'Isle of Islay, Inner Hebrides, Scotland', vi: 'Đảo Islay, quần đảo Inner Hebrides, Scotland' } },
      { label: { en: 'Legal Grain Bill', vi: 'Nguyên liệu luật định' }, value: { en: '100% malted barley, water, yeast', vi: '100% mạch nha lúa mạch, nước và nấm men' } },
      { label: { en: 'Peat Measurement', vi: 'Thang đo độ khói' }, value: { en: 'Phenols in malted barley (PPM): 0 PPM unpeated -> ~40 PPM heavily peated -> 80–300+ PPM super heavily peated', vi: 'Hàm lượng phenol trong mạch nha (PPM): 0 PPM không khói -> ~40 PPM khói đậm -> 80–300+ PPM siêu khói' } },
    ],
    originStory: {
      en: [
        'Distilling arrived on Islay from Ireland via monastic and farming communities centuries ago, thriving thanks to fertile barley land, soft peat-filtered lochs, and sheltered sea lochs like Loch Indaal.',
        'Victorian blenders prized Islay malts for their smoky weight, yet traditional farms also kilned unpeated barley over smokeless anthracite coal. Modern progressive distillers on Islay revived 100% Scottish and Islay-grown barley farms, single-farm traceability, non-chill filtration, and natural cask-derived color.',
      ],
      vi: [
        'Nghệ thuật chưng cất truyền từ Ireland sang đảo Islay từ nhiều thế kỷ trước, phát triển rực rỡ nhờ đất đai trồng lúa mạch trù phú, nguồn nước suối mềm và các vịnh biển kín gió như Loch Indaal.',
        'Dù giới phối trộn thời Victoria chuộng whisky Islay đậm khói, nhiều nhà chưng cất cổ điển trên đảo vẫn duy trì dòng mạch nha sấy không khói. Ngày nay, trường phái cấp tiến tại Islay tiên phong truy xuất nguồn gốc lúa mạch tới từng nông trại Scotland và Islay, đóng chai màu tự nhiên và không lọc lạnh (non-chill filtered).',
      ],
    },
    production: {
      en: [
        'Tall, narrow-necked copper stills encourage reflux – sending heavy compounds back down to the pot while lifting floral, fruity vapors even when distilling super-heavily peated malt.',
        'Maturing every cask entirely in damp coastal Islay warehouses exposes breathing oak barrels to Atlantic salt spray and cool year-round temperatures.',
      ],
      vi: [
        'Nồi đồng cổ cao và thon tạo độ hồi lưu lớn (reflux), giữ lại tạp chất nặng và nâng hương trái cây, hoa trắng bay lên – nhờ đó ngay cả mạch nha siêu khói vẫn cho ra chất rượu trong trẻo, thanh lịch.',
        'Ủ 100% thời gian trong các nhà kho sát bờ biển đảo Islay giúp thùng gỗ sồi "thở" cùng hơi muối Đại Tây Dương và khí hậu mát ẩm quanh năm.',
      ],
    },
    tasting: {
      nose: { en: 'Ranges from sea spray, lemon peel, and barley sugar (0 PPM) to campfire embers, iodine, and smoked heather (40–200+ PPM)', vi: 'Trải rộng từ gió biển, vỏ chanh vàng, đường mạch nha (0 PPM) đến khói lửa trại, tảo biển và thạch nam hun khói (40–200+ PPM)' },
      palate: { en: 'Oily malt texture framed by Atlantic salinity, orchard fruit, vanilla oak, and clean phenolic depth', vi: 'Kết cấu mạch nha sánh mượt, vị mặn khoáng đại dương hòa quyện trái cây chín, gỗ sồi vani và chiều sâu khói than bùn' },
      finish: { en: 'Long coastal minerality and warming malt sweetness', vi: 'Dư vị khoáng biển kéo dài cùng hậu ngọt mạch nha ấm áp' },
    },
    serving: {
      en: [
        'Serve neat in a Glencairn or copita glass; add 2–3 drops of still spring water to higher-ABV (50%+) bottlings to open orchard fruit beneath the smoke.',
        'Produces standout Penicillins, Smoky Highballs, and Rob Roy variations.',
      ],
      vi: [
        'Thưởng thức neat trong ly Glencairn hoặc copita; nhỏ thêm 2–3 giọt nước tinh khiết với các chai nồng độ cao (từ 50% ABV) để mở bung lớp hương trái cây ẩn sau làn khói.',
        'Tuyệt hảo khi pha Highball khói thanh hoặc cocktail Penicillin hiện đại.',
      ],
    },
    faq: [
      {
        q: { en: 'Does higher PPM always taste harsher on the palate?', vi: 'Chỉ số PPM càng cao có phải vị rượu càng gắt không?' },
        a: { en: 'Not necessarily. PPM measures phenols on raw malted barley before mashing. Slow trickle distillation in tall-necked stills and quality oak casks can make a 100+ PPM whisky taste silky, sweet-smoked, and refined.', vi: 'Không hẳn. PPM đo lượng phenol trên hạt mạch nha khô trước khi nấu. Khi chưng cất thật chậm qua nồi đồng cổ cao và ủ thùng sồi tuyển chọn, một chai whisky trên 100 PPM vẫn có kết cấu mượt mà, ngọt dịu và khói rất thanh.' },
      },
    ],
    relatedSlugs: ['bruichladdich-classic-laddie', 'port-charlotte-10', 'octomore'],
    glossary: [
      {
            "term": {
                  "en": "Phenol PPM",
                  "vi": "Chỉ số khói PPM"
            },
            "def": {
                  "en": "Parts Per Million of aromatic phenolic compounds measured on dry malted barley after kiln smoking with local peat turf.",
                  "vi": "Đơn vị phần triệu (Parts Per Million) đo lường mật độ hợp chất phenol khói than bùn bám trên hạt lúa mạch khô sau khi sấy lò."
            }
      },
      {
            "term": {
                  "en": "Peat (Mùn than bùn)",
                  "vi": "Mùn than bùn Islay"
            },
            "def": {
                  "en": "Dense, compressed layers of sphagnum moss, heather, and bracken decomposed over millennia in waterlogged Hebridean bogs.",
                  "vi": "Thảm thực vật, rêu và thạch nam biển phân hủy qua hàng ngàn năm trong các đầm lầy ngập nước của đảo Islay, tạo hương khói sát trùng và mặn mòi đặc trưng."
            }
      },
      {
            "term": {
                  "en": "Maritime Warehouse",
                  "vi": "Nhà kho ủ ven biển"
            },
            "def": {
                  "en": "Traditional stone, earth-floored dunnage warehouses washed by Atlantic sea spray, infusing casks with iodine, salt, and seaweed microclimate notes.",
                  "vi": "Nhà kho truyền thống nền đất sát mép biển Đại Tây Dương, giúp thùng sồi thở và hấp thụ hơi muối mặn, i-ốt và rong biển qua nhiều thập kỷ."
            }
      }
],
    nextStep: {
      "title": {
            "en": "Compare Bruichladdich Classic Laddie, Port Charlotte & Octomore",
            "vi": "Đối chiếu bộ ba The Classic Laddie, Port Charlotte 10 và Octomore"
      },
      "slug": "bruichladdich-classic-laddie",
      "actionLabel": {
            "en": "View The Classic Laddie →",
            "vi": "Xem hồ sơ The Classic Laddie →"
      }
},
    sourceNote: { en: 'Scotch Whisky Regulations 2009 & Bruichladdich Distillery Academy BDC Bible', vi: 'Quy chuẩn Scotch Whisky 2009 & Cẩm nang đào tạo Bruichladdich Distillery Academy' },
    lastUpdated: '2026-11-03',
  },
  {
    slug: 'history-of-agave',
    status: 'approved',
    group: 'origins',
    topicId: 'agave',
    image: 'media/origins/07-agave-spirits.png',
    coverImage: 'media/origins/07-agave-spirits.png',
    coverImageWebp: 'media/origins/07-agave-spirits.webp',
    detailHeroImage: 'media/origins/agave-highlands-hero.png',
    detailHeroImageWebp: 'media/origins/agave-highlands-hero.webp',
    detailHeroImageAlt: {
      vi: 'Cánh đồng agave vùng cao nguyên Mexico trải dài dưới nắng, minh họa Mid-century',
      en: 'Mid-century blue agave highlands under golden sunlight',
    },
    originImage: 'media/origins/agave-harvest-jimador.png',
    originImageWebp: 'media/origins/agave-harvest-jimador.webp',
    originImageAlt: {
      vi: 'Người jimador thu hoạch lõi piña từ cây agave bằng dao coa truyền thống',
      en: 'Jimador harvesting a mature agave piña with a traditional coa',
    },
    productionImage: 'media/origins/agave-roasting-masonry-oven.png',
    productionImageWebp: 'media/origins/agave-roasting-masonry-oven.webp',
    productionImageAlt: {
      vi: 'Những lõi agave piña bổ đôi xếp trong lò gạch mampostería truyền thống',
      en: 'Split agave piñas roasting inside a traditional masonry oven',
    },
    imageAlt: {
      vi: 'Cây agave xanh trên cánh đồng Mexico dưới nắng vàng, minh họa Mid-century editorial',
      en: 'Blue agave plant beneath an ochre sun in Mexico, Mid-century editorial illustration',
    },
    brandId: null,
    brandIds: [],
    categoryLabel: { en: 'Category History · Agave Spirits', vi: 'Kiến thức nền tảng · Agave Spirits' },
    title: {
      en: 'What is Agave? Foundations of Tequila and Mezcal for New Bartenders',
      vi: 'Agave là gì? Kiến thức nền tảng về Tequila và Mezcal cho bartender mới',
    },
    subtitle: {
      en: 'From Mexican blue agave fields to Tequila and Mezcal: plant origins, protected DO rules, and bar craft foundations.',
      vi: 'Từ cánh đồng agave Mexico đến Tequila và Mezcal: nhận diện nguyên liệu thực vật, vùng bảo hộ DO và kỹ nghệ chế tác.',
    },
    summary: {
      en: 'Master the difference between agave, Tequila, and Mezcal: plant botany, harvest piñas, production methods, and speed tasting notes.',
      vi: 'Nắm vững phân loại thực vật họ Agave, nhận diện lõi piña, quy chuẩn vùng bảo hộ Tequila & Mezcal và kỹ năng đọc nhãn tại quầy bar.',
    },
    readMinutes: 4,
    keyTakeaways: {
      en: [
        'Agave is a botanical genus in the Asparagaceae family, not a cactus; the sugar-dense core (piña) revealed after trimming leaves is the raw material for spirits.',
        'Tequila and Mezcal are legally distinct Mexican Appellations of Origin (DO): Tequila exclusively uses Blue Weber agave within delimited territories, while Mezcal is 100% agave crafted from approved native species.',
        'Mezcal is not defined purely by smoky flavor: earthen pit roasting is only one production method, and final profiles depend on agave species, terroir, and ancestral/artesanal craft.',
      ],
      vi: [
        'Agave là một chi thực vật thuộc họ Asparagaceae, hoàn toàn không phải xương rồng; phần lõi piña giàu đường sau khi tỉa sạch lá là nguyên liệu duy nhất đưa vào chế biến rượu.',
        'Tequila và Mezcal là hai danh xưng xuất xứ địa lý (DO) tách biệt của Mexico: Tequila chỉ dùng loài Blue Weber agave trong vùng bảo hộ quy định; Mezcal chưng cất từ 100% agave từ nhiều loài bản địa được phép.',
        'Mezcal không mặc định luôn có vị khói: phương pháp nấu piña trong hố đá ngầm chỉ là một yếu tố quy trình; phong cách từng chai phụ thuộc vào giống cây, thổ nhưỡng và tay nghề nghệ nhân (Ancestral / Artesanal).',
      ],
    },
    specs: [
      { label: { en: 'Botanical Family', vi: 'Họ thực vật học' }, value: { en: 'Asparagaceae (genus Agave, not a cactus)', vi: 'Họ Măng tây (Asparagaceae, chi Agave - không phải xương rồng)' } },
      { label: { en: 'Tequila Raw Material', vi: 'Nguyên liệu Tequila' }, value: { en: 'Exclusively Blue Weber agave (Agave tequilana Weber)', vi: 'Độc quyền loài Blue Weber agave (Agave tequilana Weber)' } },
      { label: { en: 'Mezcal Raw Material', vi: 'Nguyên liệu Mezcal' }, value: { en: '100% agave, multiple permitted native species (Espadín, Tobalá, Arroqueño...)', vi: '100% agave, nhiều loài được cấp phép (Espadín, Tobalá, Arroqueño...)' } },
      { label: { en: 'Official Standards', vi: 'Tiêu chuẩn kiểm định' }, value: { en: 'NOM-006-SCFI-2012 (Tequila) · NOM-070-SCFI-2016 (Mezcal)', vi: 'NOM-006-SCFI-2012 (Tequila) · NOM-070-SCFI-2016 (Mezcal)' } },
      { label: { en: 'Key Label Classes', vi: 'Phân loại trên nhãn' }, value: { en: 'Tequila: 100% Agave vs Mixto (51%+) | Mezcal: Ancestral, Artesanal, Mezcal', vi: 'Tequila: 100% Agave vs Mixto (tối thiểu 51%) | Mezcal: Ancestral, Artesanal, Mezcal' } },
      { label: { en: 'Oak Aging Tiers', vi: 'Phân lớp tuổi ủ gỗ' }, value: { en: 'Blanco (<2 mos), Reposado (2+ mos), Añejo (1+ yr), Extra Añejo (3+ yrs)', vi: 'Blanco (<2 tháng), Reposado (từ 2 tháng), Añejo (từ 1 năm), Extra Añejo (từ 3 năm)' } },
    ],
    originStory: {
      en: [
        'Agave has anchored Mexican landscape, agriculture, and ritual culture long before modern spirits bottles reached global bar backbars. In highland and lowland fields, skilled harvesters known as jimadores use the razor-sharp circular coa blade to shear away rigid, thorny leaves, exposing the compact, fibrous core called the piña.',
        'Today, Tequila and Mezcal are fiercely guarded under Mexican Denominations of Origin (DO). Tequila production is restricted to Jalisco and designated municipalities in Guanajuato, Michoacán, Nayarit, and Tamaulipas. Mezcal carries its own protected territory spanning Oaxaca, Puebla, Durango, and neighboring states. Distilling agave spirits outside these legal zones forfeits the right to carry either historic name on the label.',
      ],
      vi: [
        'Cây agave là linh hồn gắn liền với cảnh quan, nông nghiệp và văn hóa Mexico từ nhiều thế kỷ trước khi các chai rượu hiện đại xuất hiện trên quầy bar thế giới. Trên những cánh đồng đất đỏ, người thợ thu hoạch lành nghề (jimador) dùng lưỡi dao tròn sắc bén (coa) gọt bỏ lớp lá gai nhọn dày đặc, làm lộ ra phần lõi sợi căng tròn gọi là piña (hình quả dứa).',
        'Ngày nay, danh xưng Tequila và Mezcal được pháp luật Mexico bảo hộ nghiêm ngặt qua quy chuẩn Chỉ dẫn Xuất xứ Địa lý (DO). Tequila bắt buộc sản xuất trong vùng quy hoạch gồm toàn bộ bang Jalisco cùng các vùng chỉ định tại Guanajuato, Michoacán, Nayarit và Tamaulipas. Mezcal sở hữu vùng bảo hộ riêng với trung tâm lịch sử tại Oaxaca. Bất kỳ loại rượu agave nào sản xuất ngoài ranh giới quy chuẩn đều không được phép ghi tên Tequila hay Mezcal trên nhãn chai.',
      ],
    },
    production: {
      en: [
        'The foundational agave craft follows six core stages: harvest -> cooking the piña -> crushing and sugar extraction -> fermentation -> distillation -> oak aging or bottling. The cooking method defines the aromatic direction: Tequila predominantly cooks piñas in brick masonry ovens (hornos) or stainless autoclaves to convert inulin into fermentable sugars, whereas artisanal and ancestral Mezcal slow-roasts piñas underground over volcanic rock and wood fire, imparting evocative earthy nuances.',
        'Fermentation uses natural wild or cultured yeasts, followed by distillation in copper pot stills, stainless columns, or traditional clay pots (ollas de barro). On Tequila labels, aging tiers signal maturation craft rather than absolute quality: Blanco remains unaged or rests under two months; Reposado rests in oak for at least two months; Añejo matures in oak barrels up to 600 liters for at least one year; and Extra Añejo ages for at least three years.',
      ],
      vi: [
        'Hành trình từ cánh đồng đến ly rượu trải qua 6 công đoạn cốt lõi: thu hoạch piña -> nấu chín chuyển hóa đường inulin -> nghiền ép lấy dịch mật -> lên men -> chưng cất -> ủ thùng gỗ hoặc đóng chai. Phương pháp nấu quyết định trực tiếp phong cách hương vị: Tequila thường nấu piña trong lò gạch truyền thống (hornos) hoặc nồi áp suất (autoclave) để giữ trọn vị thanh tươi; trong khi Mezcal thủ công nướng chín piña trong hố đất ngầm phủ đá núi lửa và củi, tạo nên nốt hương đất và khói đặc trưng.',
        'Quá trình chưng cất diễn ra trong nồi đồng (alembic), tháp chưng cất hoặc nồi đất nung (ollas de barro đối với Mezcal Ancestral). Khi đọc nhãn Tequila, các phân lớp tuổi thể hiện thời gian tiếp xúc gỗ sồi: Blanco không qua ủ hoặc dưới 2 tháng; Reposado ủ gỗ tối thiểu 2 tháng; Añejo ủ trong thùng sồi dưới 600 lít tối thiểu 1 năm; và Extra Añejo ủ từ 3 năm trở lên.',
      ],
    },
    tasting: {
      nose: {
        en: 'Fresh green agave, white pepper, lime zest, crushed limestone, subtle earthen smoke or vanilla depending on process',
        vi: 'Hương agave tươi thảo mộc, tiêu trắng, vỏ chanh xanh, khoáng chất đá vôi; phảng phất hương khói đất hoặc caramel vani tùy phương pháp nấu và ủ gỗ',
      },
      palate: {
        en: 'Naturally sweet cooked agave nectar, vibrant citrus acidity, warming peppery prickle, and crisp mineral texture',
        vi: 'Vị ngọt thanh tự nhiên của dịch agave chín, độ chua giòn của cam chanh, vị cay ấm của tiêu và cấu trúc khoáng chất khô ráo',
      },
      finish: {
        en: 'Clean, long, and botanical; lingering notes of peppery zest, earthy minerality, or gentle oak-derived spice',
        vi: 'Kéo dài, sạch sẽ và giàu tinh dầu thảo mộc; đọng lại hậu vị tiêu cay ấm, khoáng chất đất đá hoặc gia vị gỗ êm dịu',
      },
    },
    serving: {
      en: [
        'Neat tasting in a flute or specialized agave copita/veladora glass at room temperature to evaluate purity before mixing.',
        'Behind the bar, deploy Tequila Blanco as the crisp citrus backbone of the classic Margarita; when introducing Mezcal, taste and adjust acid/sweetness ratios to balance its earthy depth.',
      ],
      vi: [
        'Nếm nguyên chất (neat) trong ly tulip hoặc ly nếm chuyên dụng ở nhiệt độ phòng để cảm nhận trọn vẹn hương vị agave nguyên bản trước khi pha chế.',
        'Tại quầy bar, dùng Tequila Blanco làm trụ cột vị chua thanh cho Margarita kinh điển; khi sử dụng Mezcal, cần nếm và cân chỉnh tỉ lệ chua/ngọt để làm nổi bật chiều sâu hương đất đá.',
      ],
    },
    faq: [
      {
        q: { en: 'Is agave a type of cactus?', vi: 'Agave có phải là một loài xương rồng không?' },
        a: {
          en: 'No. Botanically, agave belongs to the Asparagaceae family (related to asparagus and succulents), not Cactaceae. While their drought-resistant form resembles cacti, they are entirely distinct plant families.',
          vi: 'Không. Về mặt thực vật học, agave thuộc họ Măng tây (Asparagaceae), hoàn toàn không phải xương rồng (Cactaceae). Hình dáng gai nhọn có thể làm liên tưởng đến xương rồng nhưng bản chất sinh học hoàn toàn khác nhau.',
        },
      },
      {
        q: { en: 'Is all Tequila made from 100% agave?', vi: 'Có phải mọi chai Tequila đều được làm từ 100% agave?' },
        a: {
          en: 'No. "Tequila 100% Agave" derives all fermentable sugars exclusively from Blue Weber agave. Standard "Tequila" (Mixto) requires a minimum of 51% Blue Weber sugars, with the remainder from other approved sugar sources. This figure refers to sugar source proportion, not bottle ABV.',
          vi: 'Không. Nhóm "Tequila 100% Agave" sử dụng toàn bộ đường lên men từ Blue Weber agave. Nhóm "Tequila" (thường gọi là Mixto) chỉ yêu cầu tối thiểu 51% đường từ Blue Weber, phần còn lại từ nguồn đường khác. Con số 51% là tỷ lệ nguồn đường lên men, không phải nồng độ cồn trong chai.',
        },
      },
      {
        q: { en: 'Is Mezcal simply a smoky Tequila?', vi: 'Mezcal có phải là Tequila vị khói không?' },
        a: {
          en: 'No. Tequila and Mezcal are separate DO denominations with different permitted agave species, territories, and historical techniques. While earthen pit roasting often imparts a distinctive smoke note to artisan Mezcal, flavor profiles vary widely based on agave varieties and terroir.',
          vi: 'Không. Tequila và Mezcal là hai danh xưng địa lý tách biệt với quy định khác nhau về loài agave, vùng sản xuất và phương pháp. Dù phương pháp nấu piña trong hố đá ngầm tạo cảm nhận khói cho nhiều dòng Mezcal thủ công, không nên dùng vị khói để định nghĩa toàn bộ thế giới Mezcal.',
        },
      },
    ],
    relatedSlugs: ['margarita', 'history-of-orange-liqueur'],
    glossary: [
      {
        term: {
          en: 'Jimador',
          vi: 'Jimador',
        },
        def: {
          en: 'Skilled Mexican harvester who uses the traditional coa de jima tool to cut leaves and extract the agave piña.',
          vi: 'Nghệ nhân thu hoạch agave lành nghề tại Mexico, sử dụng dao coa truyền thống để tỉa bỏ lá và lấy lõi piña.',
        },
      },
      {
        term: {
          en: 'Piña',
          vi: 'Piña (Lõi agave)',
        },
        def: {
          en: 'The dense, spherical heart of the agave plant rich in inulin starches, visually resembling a pinecone or pineapple.',
          vi: 'Phần lõi hình cầu căng tròn giàu đường inulin của cây agave sau khi tỉa lá; hình dáng gợi quả dứa nhưng không phải trái cây.',
        },
      },
      {
        term: {
          en: 'Blue Weber',
          vi: 'Blue Weber (Agave tequilana)',
        },
        def: {
          en: 'The sole agave species legally permitted for Tequila production under Mexican standard NOM-006.',
          vi: 'Loài agave duy nhất được phép sử dụng trong sản xuất Tequila theo tiêu chuẩn NOM-006 của Mexico.',
        },
      },
      {
        term: {
          en: 'Denominación de Origen',
          vi: 'Denominación de Origen (DO)',
        },
        def: {
          en: 'Protected geographical appellation codified by Mexican law establishing strict territorial and production requirements.',
          vi: 'Danh xưng Xuất xứ Địa lý được luật pháp Mexico bảo hộ, quy định nghiêm ngặt về ranh giới vùng và quy chuẩn chế tác.',
        },
      },
      {
        term: {
          en: 'Mezcal Artesanal / Ancestral',
          vi: 'Mezcal Artesanal / Ancestral',
        },
        def: {
          en: 'Official process categories under NOM-070 regulating traditional pit roasting, stone milling, and copper or clay pot distillation.',
          vi: 'Hai nhóm phân loại quy trình thủ công truyền thống theo chuẩn NOM-070, quy định phương pháp nấu hố ngầm, nghiền đá và nồi chưng cất đồng hoặc đất nung.',
        },
      },
    ],
    nextStep: {
      title: {
        en: 'Master the Original Margarita Spec & Balance',
        vi: 'Luyện kỹ thuật cân bằng Cocktail Margarita nguyên bản',
      },
      slug: 'margarita',
      actionLabel: {
        en: 'Explore Margarita Recipe →',
        vi: 'Xem công thức Margarita →',
      },
    },
    sourceNote: {
      en: 'Kew Science, Consejo Regulador del Tequila (NOM-006-SCFI-2012) & COMERCAM (NOM-070-SCFI-2016)',
      vi: 'Kew Science, Hội đồng Quản lý Tequila CRT (NOM-006) & COMERCAM (NOM-070)',
    },
    lastUpdated: '2026-11-10',
  },

  {
    slug: 'remy-martin',
    status: 'approved',
    group: 'brands',
    brandId: 'remy-martin',
    brandIds: ['remy-martin'],
    categoryLabel: { en: 'Cognac Fine Champagne · Est. 1724', vi: 'Cognac Fine Champagne · Thành lập 1724' },
    title: {
      en: 'Rémy Martin – Cognac Fine Champagne',
      vi: 'Rémy Martin – Cognac Fine Champagne',
    },
    subtitle: {
      en: 'Three centuries dedicated exclusively to blending Grande Champagne and Petite Champagne eaux-de-vie.',
      vi: 'Hơn ba thế kỷ chuyên tâm phối trộn rượu tâm từ hai vùng đất danh giá Grande Champagne và Petite Champagne.',
    },
    summary: {
      en: 'Founded in 1724 by winegrower Rémy Martin, the House crafts Cognac Fine Champagne exclusively – distilling unfiltered wine on fine lees in small copper pot stills and aging in French Limousin oak.',
      vi: 'Được người trồng nho Rémy Martin sáng lập năm 1724, thương hiệu gắn bó trọn vẹn với chuẩn Cognac Fine Champagne: chưng cất rượu vang nguyên cặn men mịn trong nồi đồng nhỏ và ủ trong thùng gỗ sồi Limousin Pháp.',
    },
    readMinutes: 5,
    keyTakeaways: {
      en: [
        '100% Cognac Fine Champagne across the core range: at least 50% Grande Champagne paired with Petite Champagne chalk-grown eaux-de-vie.',
        'Distilled twice on fine lees in small copper alembics (~25 hectoliters) for rich texture, orchard fruit, and floral longevity.',
        'Three benchmark expressions serve distinct moments: VSOP (vibrant vanilla & stone fruit), 1738 Accord Royal (toasted oak & butterscotch), and XO (opulent jasmine, ripe fig & candied orange).',
          'Age classifications bridge from VSOP to XO and the pinnacle XXO legal tier (minimum 14 years), with Rémy Martin XO eaux-de-vie aged up to 35+ years to develop legendary rancio complexity.',
      ],
      vi: [
        '100% chuẩn Cognac Fine Champagne trên toàn dải sản phẩm cốt lõi: tối thiểu 50% rượu tâm từ vùng Grande Champagne kết hợp cùng Petite Champagne.',
        'Chưng cất hai lần giữ nguyên cặn men mịn (on fine lees) trong nồi đồng nhỏ (~25 hectolit), tạo kết cấu tròn đầy và hậu vị bền bỉ.',
        'Ba biểu tượng phục vụ từng khoảnh khắc: VSOP (vani, mơ đào cân bằng), 1738 Accord Royal (gỗ sồi nướng đậm đà, kẹo bơ cứng) và XO (hoa nhài, sung chín, mứt vỏ cam ngào đường).',
          'Ký hiệu phân hạng từ VSOP đến XO và cấp cao nhất XXO (từ 14 năm theo BNIC), trong đó các dòng eaux-de-vie của Rémy Martin XO được ủ lên đến hơn 35 năm mang trọn phong vị rancio quý giá.',
      ],
    },
    specs: [
      { label: { en: 'House Founded', vi: 'Năm thành lập' }, value: { en: '1724 · Cognac, France', vi: '1724 · Vùng Cognac, Pháp' } },
      { label: { en: 'Appellation Signature', vi: 'Danh xưng bảo hộ' }, value: { en: 'Cognac Fine Champagne AOC (Grande + Petite Champagne)', vi: 'Cognac Fine Champagne AOC (Grande + Petite Champagne)' } },
      { label: { en: 'Distillation & Casks', vi: 'Chưng cất & Ủ thùng' }, value: { en: 'Double distillation on fine lees · Wide-grained French Limousin oak', vi: 'Chưng cất kép nguyên cặn men mịn · Thùng gỗ sồi Limousin thớ rộng' } },
      { label: { en: 'Bottling Strength', vi: 'Nồng độ đóng chai' }, value: { en: '40% ABV (VSOP, 1738 Accord Royal, XO)', vi: '40% ABV (VSOP, 1738 Accord Royal, XO)' } },
      { label: { en: 'Cognac Age Tiers & XXO', vi: 'Ký hiệu phân hạng AOC & XXO' }, value: { en: 'VSOP (4+ yrs) · XO (10+ yrs) · XXO (14+ yrs legal tier; Rémy Martin XO blends eaux-de-vie up to 35+ yrs)', vi: 'VSOP (từ 4 năm) · XO (từ 10 năm) · XXO (từ 14 năm theo BNIC; Rémy Martin XO phối trộn đến hơn 35 năm)' } },
    ],
    expressions: [
      {
        name: 'Rémy Martin VSOP',
        abv: '40% ABV',
        profile: {
          en: 'First blended in 1927 by Cellar Master André Renaud as the original Fine Champagne VSOP reference. Dominant vanilla from Limousin oak meets ripe apricot, baked apple, and white florals.',
          vi: 'Ra đời năm 1927 dưới bàn tay Bậc thầy Hầm rượu André Renaud – khai sinh chuẩn mực VSOP Fine Champagne đầu tiên. Nổi bật hương vani từ gỗ sồi Limousin hòa quyện mơ chín, táo nướng và hoa trắng.',
        },
      },
      {
        name: 'Rémy Martin 1738 Accord Royal',
        abv: '40% ABV',
        profile: {
          en: 'Honors King Louis XV’s 1738 royal warrant allowing Rémy Martin to plant new vines despite a nationwide ban. Aged in heavily toasted French oak barrels for generous notes of plum marmalade, fig, toffee, butterscotch, and baking spices.',
          vi: 'Tôn vinh sắc lệnh Hoàng gia năm 1738 của Vua Louis XV trao đặc quyền trồng mới vườn nho cho Rémy Martin. Ủ trong thùng sồi Pháp nướng kỹ, bung tỏa hương mứt mận, quả sung, kẹo bơ toffee và gia vị ấm.',
        },
      },
      {
        name: 'Rémy Martin XO',
        abv: '40% ABV',
        profile: {
          en: 'Created in 1981 to showcase the full aromatic breadth of Fine Champagne eaux-de-vie. Velvety texture layered with late-summer jasmine, iris, juicy plum, ripe fig, candied orange peel, cinnamon, and freshly grated hazelnut.',
          vi: 'Được chế tác năm 1981 nhằm tôn vinh chiều sâu phức hợp bậc nhất của Fine Champagne. Chất rượu mượt như nhung với hương hoa nhài cuối hạ, hoa diên vĩ, mận chín, sung ngọt, mứt vỏ cam (cam ngào đường), quế và hạt phỉ nghiền.',
        },
      },
    ],
    originStory: {
      en: [
        'Unlike many Cognac houses founded by merchants, Rémy Martin began in 1724 with a Charente winegrower cultivating his own chalk vineyards. Fourteen years later, King Louis XV recognized the quality of his eaux-de-vie with the Accord Royal of 1738.',
        'In 1927, André Renaud gambled on bottling the first VSOP Cognac Fine Champagne, followed in 1948 by the decision to craft every Rémy Martin Cognac exclusively from Grande and Petite Champagne crus through long-standing Alliance Fine Champagne winegrower partnerships.',
      ],
      vi: [
        'Khác với nhiều nhà Cognac xuất thân từ giới buôn rượu, Rémy Martin khởi nguồn năm 1724 từ một người trồng nho trực tiếp canh tác trên đất đá phấn vùng Charente. Năm 1738, Vua Louis XV ban sắc lệnh Hoàng gia ghi nhận chất lượng rượu tâm xuất sắc của nhà làm rượu này.',
        'Năm 1927, André Renaud tạo dấu ấn lịch sử với chai VSOP Fine Champagne đầu tiên, và đến năm 1948 thương hiệu quyết định chỉ chế tác toàn bộ danh mục Cognac từ hai vùng Grande Champagne và Petite Champagne.',
      ],
    },
    production: {
      en: [
        'Chalk soils in Grande and Petite Champagne reflect sunlight while acting like a deep sponge during dry summers, producing Ugni Blanc grapes with lively natural acidity.',
        'Distilling wine unfiltered with its fine yeast lees in compact copper pot stills requires constant vigilance over open flame, rewarding patience with rounder mouthfeel and extended aging capacity in Limousin oak casks.',
      ],
      vi: [
        'Lớp đất đá phấn xốp tại Grande và Petite Champagne vừa phản chiếu ánh nắng vừa điều tiết độ ẩm tự nhiên suốt mùa hè khô hạn, nuôi dưỡng những chùm nho Ugni Blanc giàu độ chua thanh.',
        'Việc chưng cất rượu vang còn giữ cặn men mịn trong nồi đồng nhỏ đòi hỏi kỹ thuật canh lửa tỉ mỉ, đổi lại chất rượu có độ sánh mượt vượt trội khi trưởng thành lâu năm trong thùng sồi Limousin.',
      ],
    },
    tasting: {
      nose: { en: 'Vanilla pod, ripe apricot, jasmine blossom, toasted brioche, fig', vi: 'Vani, mơ chín, hoa nhài, bánh nướng brioche và quả sung chín' },
      palate: { en: 'Silky stone fruit and butterscotch (VSOP/1738) deepening into candied orange, cinnamon, and roasted hazelnut (XO)', vi: 'Mượt mà vị trái cây hạch và kẹo bơ (VSOP/1738), tiến triển sang mứt vỏ cam ngào đường, quế ấm và hạt phỉ rang (XO)' },
      finish: { en: 'Satin-smooth, balanced oak spice and lingering floral rancio', vi: 'Êm mượt như lụa, cân bằng gia vị gỗ sồi và tầng hương hoa rancio lưu luyến' },
    },
    serving: {
      en: [
        'VSOP: versatile in crisp long serves (with ginger ale and fresh lime) or classic shaken sours.',
        '1738 Accord Royal: standout base for structured Sidecars, Old Fashioneds, or neat alongside dark chocolate.',
        'XO: serve neat at room temperature (18–20 °C) in a tulip glass or over a single crystal-clear ice block.',
      ],
      vi: [
        'VSOP: linh hoạt trong các món Highball tươi mát (cùng ginger ale) hoặc nhóm cocktail cổ điển có vị chua.',
        '1738 Accord Royal: nền rượu lý tưởng cho Sidecar, Old Fashioned hoặc thưởng thức neat cùng chocolate đen.',
        'XO: uống nguyên chất ở nhiệt độ phòng mát (18–20 °C) trong ly tulip hoặc trên một viên đá khối trong suốt.',
      ],
    },
    faq: [
      {
        q: { en: 'What does the Centaur emblem represent?', vi: 'Biểu tượng Nhân mã (Centaur) của Rémy Martin mang ý nghĩa gì?' },
        a: { en: 'Adopted in 1870 by Paul-Émile Rémy Martin (born under Sagittarius), the Centaur unites feet rooted in chalk terroir with head and arrow aimed skyward – symbolizing union between earth and human craft.', vi: 'Ra đời năm 1870 dưới thời Paul-Émile Rémy Martin, hình tượng Nhân mã với đôi chân bám rễ trên đất đá phấn và mũi tên hướng lên bầu trời biểu trưng cho sự giao hòa giữa thổ nhưỡng tự nhiên và kỹ nghệ con người.' },
      },
      {
        q: { en: 'What is the XXO classification and how does it relate to Rémy Martin?', vi: 'Ký hiệu phân hạng XXO trong Cognac có ý nghĩa gì và liên hệ thế nào với Rémy Martin?' },
        a: {
          en: 'Established by the BNIC in 2018, XXO (Extra Extra Old) is the official classification requiring the youngest eau-de-vie to be aged at least 14 years. While Rémy Martin XO bears the XO mark (legal minimum 10 years), its master blend contains up to 400 eaux-de-vie aged between 10 and over 35 years—far surpassing standard XO baselines and showcasing the profound maturation defining the XXO tier.',
          vi: 'Được tổ chức BNIC luật hóa vào năm 2018, XXO (Extra Extra Old) là cấp phân hạng chính thức cao nhất cho Cognac, quy định rượu tâm trẻ nhất trong hỗn hợp phải được ủ thùng gỗ sồi tối thiểu 14 năm. Đối với Rémy Martin, dù nhãn chai mang danh vị XO (tối thiểu luật định 10 năm), bậc thầy hầm rượu đã phối trộn tới 400 loại eaux-de-vie được ủ từ 10 đến hơn 35 năm—vượt trội hoàn toàn so với mức sàn thông thường và phản ánh trọn vẹn tinh hoa ủ lâu năm của đẳng cấp XXO.'
        },
      },
    ],
    relatedSlugs: ['history-of-cognac'],
    sourceNote: { en: 'Maison Rémy Martin Official Training Deck & Heritage Dossier', vi: 'Tài liệu đào tạo chính thức Maison Rémy Martin' },
    lastUpdated: '2026-11-03',
  },
  {
    slug: 'cointreau-lunique',
    status: 'approved',
    group: 'brands',
    brandId: 'cointreau',
    brandIds: ['cointreau'],
    categoryLabel: { en: 'Triple Sec Orange Liqueur · 40% ABV', vi: 'Rượu mùi cam Triple Sec · 40% ABV' },
    title: {
      en: 'Cointreau L’Unique',
      vi: 'Cointreau L’Unique',
    },
    subtitle: {
      en: 'Crystal-clear 40% ABV orange peel distillate crafted in Angers since 1885 from just four natural ingredients.',
      vi: 'Tinh chất vỏ cam chưng cất trong suốt 40% ABV tại Angers từ năm 1885 với 4 thành phần tự nhiên duy nhất.',
    },
    summary: {
      en: 'Perfected by Édouard Cointreau in Angers, France, Cointreau L’Unique marries dried and fresh sweet and bitter orange peels distilled in red copper stills – forming the authentic backbone of over 500 classic cocktails including the Original Margarita and Sidecar.',
      vi: 'Được Édouard Cointreau hoàn thiện tại Angers (Pháp), Cointreau L’Unique kết hợp vỏ cam ngọt và cam đắng cả tươi lẫn phơi khô chưng cất trong nồi đồng đỏ – trái tim hương vị của hơn 500 cocktail kinh điển như Margarita nguyên bản và Sidecar.',
    },
    readMinutes: 4,
    keyTakeaways: {
      en: [
        'Crafted from exactly four ingredients: water, sugar, neutral alcohol (predominantly French sugar beet), and sweet & bitter orange peels.',
        'Bottled at 40% ABV to hold dense citrus essential oils in crystal-clear solution – producing an unmistakable opalescent louche over ice.',
        'Housed in the faceted amber square bottle designed in 1885, shielding volatile citrus oils from light while honoring copper stills in its cap.',
      ],
      vi: [
        'Chế tác từ đúng 4 thành phần tự nhiên: nước tinh khiết, đường, cồn trung tính (chủ yếu từ củ cải đường Pháp) và vỏ cam ngọt – cam đắng tuyển chọn.',
        'Đóng chai ở mức 40% ABV giúp lưu giữ mật độ tinh dầu vỏ cam dồi dào trong chất rượu trong suốt, chuyển sắc trắng mờ tự nhiên khi gặp đá lạnh.',
        'Dáng chai vuông bốn mặt màu hổ phách thiết kế từ năm 1885 giúp chắn sáng bảo vệ tinh dầu, kết hợp nắp chai màu đồng vinh danh các nồi chưng cất truyền thống.',
      ],
    },
    specs: [
      { label: { en: 'Origin & Distillery', vi: 'Xuất xứ & Nhà chưng cất' }, value: { en: 'Carré Cointreau, Angers, Loire Valley, France', vi: 'Carré Cointreau, Angers, Thung lũng Loire, Pháp' } },
      { label: { en: 'Master Distiller', vi: 'Bậc thầy Chưng cất' }, value: { en: 'Carole Quinton (6th Master Distiller of Maison Cointreau)', vi: 'Carole Quinton (Bậc thầy Chưng cất thế hệ thứ 6)' } },
      { label: { en: 'Bottling Strength', vi: 'Nồng độ cồn' }, value: { en: '40% ABV · Crystal clear (zero artificial color)', vi: '40% ABV · Trong suốt tự nhiên (không phẩm màu)' } },
      { label: { en: 'Ingredients', vi: 'Thành phần' }, value: { en: 'Sweet & bitter orange peels (fresh & sun-dried), water, sugar, neutral alcohol', vi: 'Vỏ cam ngọt & cam đắng (tươi và phơi khô), nước, đường, cồn trung tính' } },
    ],
    originStory: {
      en: [
        'Maison Cointreau was founded in Angers in 1849 by confectioner brothers Adolphe and Édouard-Jean Cointreau. Watching patrons shift toward crisper, less sugary spirits, Édouard Cointreau spent years researching orange varieties worldwide and unveiled his crystal-clear Triple Sec recipe and iconic square bottle in 1885.',
        'In 1948 in Acapulco, socialite Margaret "Margarita" Sames famously stated, "A Margarita without Cointreau is not worth its salt," cementing Cointreau L’Unique across international bar books from Harry Craddock’s Savoy Cocktail Book onward.',
      ],
      vi: [
        'Nhà Cointreau khởi nguồn năm 1849 tại Angers bởi hai anh em nghệ nhân bánh kẹo Adolphe và Édouard-Jean Cointreau. Nắm bắt thị hiếu thưởng thức thanh khô hơn, người con trai Édouard Cointreau đã nghiên cứu nhiều giống cam khắp thế giới và ra mắt công thức rượu cam trong suốt cùng chai vuông hổ phách biểu tượng vào năm 1885.',
        'Từ cuốn Savoy Cocktail Book (1930) đến câu nói nổi tiếng năm 1948 của Margaret Sames tại Acapulco ("Một ly Margarita thiếu Cointreau thì chẳng đáng lấy một hạt muối"), Cointreau L’Unique trở thành thước đo chuẩn mực tại quầy bar toàn cầu.',
      ],
    },
    production: {
      en: [
        'Master Distiller Carole Quinton sources sweet and bitter orange peels from vetted terroirs including Spain, Brazil, Ghana, Morocco, and Tunisia. Bitter peels bring zesty green peppery snap; sweet peels contribute juicy orange flesh, rose, and lavender nuances.',
        'Dried peels macerate overnight while fresh peels enter red copper alembics on distillation day. Only the aromatic heart cut is retained, blended with pure water and sugar syrup without any artificial flavorings or preservatives.',
      ],
      vi: [
        'Bậc thầy Chưng cất Carole Quinton tuyển chọn vỏ cam ngọt và cam đắng từ các vùng trồng danh tiếng như Tây Ban Nha, Brazil, Ghana, Ma-rốc và Tunisia. Vỏ cam đắng mang lại độ the sắc nét, trong khi vỏ cam ngọt góp phần hương cam mọng và hoa trắng.',
        'Vỏ khô được ngâm ủ qua đêm rồi chưng cất cùng vỏ cam tươi trong dãy nồi đồng đỏ truyền thống. Chỉ phần rượu tâm tinh túy nhất được giữ lại, phối cùng nước và đường tinh luyện, không dùng chất bảo quản hay hương liệu nhân tạo.',
      ],
    },
    tasting: {
      nose: { en: 'Zesty sweet and bitter orange peel, white neroli blossom, subtle cardamom and cool eucalyptus lift', vi: 'Tinh dầu vỏ cam ngọt và cam đắng sắc nét, hoa cam trắng neroli, thoáng bạch đậu khấu thanh mát' },
      palate: { en: 'Crisp, balanced sweetness countered immediately by structured 40% ABV warmth and fresh peel bitterness', vi: 'Độ ngọt thanh vừa vặn được cân bằng tức thì bởi cấu trúc 40% ABV ấm áp và vị the dịu của vỏ cam tự nhiên' },
      finish: { en: 'Long, clean citrus-oil resonance that amplifies base spirits rather than masking them', vi: 'Dư vị tinh dầu vỏ cam sạch và sâu, tôn vinh hương vị rượu nền thay vì lấn át' },
    },
    serving: {
      en: [
        'Essential citrus-and-sweetness pillar in classic sours (Margarita, Sidecar, Cosmopolitan, White Lady).',
        'Refreshing low-effort highball serve with fresh lime juice and chilled club soda, or poured neat over a large ice cube with expressed orange zest.',
      ],
      vi: [
        'Trụ cột hương cam và độ cân bằng trong các dòng Sour cổ điển (Margarita, Sidecar, Cosmopolitan, White Lady).',
        'Thưởng thức kiểu Fizz thanh mát cùng nước cốt chanh tươi và soda lạnh, hoặc dùng trực tiếp với đá viên lớn.',
      ],
    },
    faq: [
      {
        q: { en: 'How should Cointreau L’Unique be stored behind the bar?', vi: 'Bảo quản Cointreau L’Unique tại quầy bar như thế nào?' },
        a: { en: 'Store upright at ambient bar temperature away from direct heat; its 40% ABV and amber glass protect essential oils without refrigeration.', vi: 'Đặt chai thẳng đứng ở nhiệt độ phòng mát, tránh nguồn nhiệt trực tiếp; nồng độ 40% ABV cùng vỏ chai màu hổ phách giúp bảo toàn tinh dầu ổn định mà không cần bảo quản lạnh.' },
      },
    ],
    relatedSlugs: ['history-of-orange-liqueur', 'cointreau-spicy'],
    sourceNote: { en: 'Maison Cointreau Brand Book & Angers Savoir-Faire Dossier', vi: 'Cẩm nang Thương hiệu Maison Cointreau & Hồ sơ kỹ nghệ Angers' },
    lastUpdated: '2026-11-03',
  },
  {
    slug: 'cointreau-spicy',
    status: 'approved',
    group: 'brands',
    brandId: 'cointreau',
    brandIds: ['cointreau'],
    categoryLabel: { en: 'Orange & Chilli Liqueur · 30% ABV', vi: 'Rượu mùi cam & ớt tự nhiên · 30% ABV' },
    title: {
      en: 'Cointreau Spicy',
      vi: 'Cointreau Spicy',
    },
    subtitle: {
      en: 'Permanent Angers-crafted 30% ABV expression marrying Cointreau orange peel distillate with Bird’s Eye chilli, jalapeño, and cucumber.',
      vi: 'Phiên bản chính thức 30% ABV chế tác tại Angers, kết hợp tinh chất vỏ cam chưng cất cùng ớt hiểm Bird’s Eye, jalapeño và dưa leo tự nhiên.',
    },
    summary: {
      en: 'Developed in Angers, France by Master Distiller Carole Quinton and her R&D team, Cointreau Spicy pairs aromatic orange peel distillate with real Bird’s Eye chilli maceration, natural jalapeño, and crisp cucumber at 30% ABV (500–1,500 SHU neat) for consistent spicy cocktails without messy house chilli infusions.',
      vi: 'Được Bậc thầy Chưng cất Carole Quinton cùng đội ngũ R&D phát triển và đóng chai tại Angers (Pháp), Cointreau Spicy kết hợp nền chưng cất vỏ cam với dịch ngâm ớt Bird’s Eye, hương jalapeño và dưa leo tự nhiên ở nồng độ 30% ABV (độ cay 500–1.500 SHU), giúp pha chế cocktail vị cay đồng nhất mà không cần tự ngâm ớt thủ công.',
    },
    readMinutes: 5,
    keyTakeaways: {
      en: [
        'Distilled, produced, and packaged in Angers, France as a permanent addition to the Cointreau portfolio (not a temporary limited edition).',
        'Bottled deliberately at 30% ABV for optimal harmony between aromatic orange zest, warming spice, and crisp botanical freshness; built on orange peel distillate rather than blending finished 40% Cointreau L’Unique liquid.',
        'Calibrated heat of 500–1,500 SHU neat (delivering ~100–500 SHU in a Spicy Margarita) from Bird’s Eye chilli maceration, natural Indian chilli, Mexican jalapeño, and German cucumber extracts.',
      ],
      vi: [
        'Chưng cất, sản xuất và đóng gói hoàn toàn tại Angers (Pháp), là phiên bản cố định lâu dài trong danh mục Cointreau (không phải bản giới hạn mùa vụ).',
        'Đóng chai ở mức 30% ABV được cân chỉnh chủ đích để dung hòa vị vỏ cam thơm ngát, độ cay ấm và nét thanh mát thực vật; phát triển độc lập từ nền chưng cất vỏ cam thay vì pha loãng từ Cointreau L’Unique 40%.',
        'Độ cay chuẩn xác 500–1.500 SHU khi nếm nguyên chất (tương đương 100–500 SHU trong ly Spicy Margarita) từ dịch ngâm ớt Bird’s Eye, ớt tự nhiên Ấn Độ, ớt jalapeño Mexico và hương dưa leo tự nhiên.',
      ],
    },
    specs: [
      { label: { en: 'Origin & Production', vi: 'Nơi sản xuất & đóng chai' }, value: { en: 'Angers, France (Maison Cointreau)', vi: 'Angers, Pháp (Maison Cointreau)' } },
      { label: { en: 'Creator', vi: 'Người sáng tạo' }, value: { en: 'Master Distiller Carole Quinton & Maison Cointreau R&D Team', vi: 'Bậc thầy Chưng cất Carole Quinton & Đội ngũ R&D Cointreau' } },
      { label: { en: 'Bottling Strength', vi: 'Nồng độ cồn' }, value: { en: '30% ABV · Permanent special expression', vi: '30% ABV · Phiên bản đặc biệt cố định' } },
      { label: { en: 'Scoville Heat Rating', vi: 'Thang độ cay Scoville (SHU)' }, value: { en: '500–1,500 SHU neat (~100–500 SHU in a Spicy Margarita)', vi: '500–1.500 SHU nguyên chất (~100–500 SHU khi pha Spicy Margarita)' } },
      { label: { en: 'Key Botanicals & Origin', vi: 'Thành phần hương tự nhiên' }, value: { en: 'Orange peel distillate, Bird’s Eye chilli maceration (Uganda/Zimbabwe), chilli (India), jalapeño (Mexico), cucumber (Germany)', vi: 'Tinh chất vỏ cam chưng cất, dịch ngâm ớt Bird’s Eye (Uganda/Zimbabwe), ớt (Ấn Độ), jalapeño (Mexico), dưa leo (Đức)' } },
      { label: { en: 'Appearance & Certifications', vi: 'Màu sắc & Chứng nhận' }, value: { en: 'Amber-yellow with golden highlights (plain caramel) · Gluten-free · Kosher', vi: 'Vàng hổ phách ánh kim · Không chứa gluten (Gluten-free) · Chuẩn Kosher' } },
    ],
    originStory: {
      en: [
        'As Spicy Margaritas surged across cocktail bars worldwide, bartenders faced a recurring operational headache: fresh chilli batches fluctuate wildly in capsaicin heat from week to week, spoil quickly, and slow down high-volume service.',
        'Master Distiller Carole Quinton and the Angers R&D laboratory applied Maison Cointreau’s distillation craft to build a calibrated, natural orange-and-chilli liqueur that delivers aromatic green pepper complexity and controlled warmth in every pour.',
      ],
      vi: [
        'Khi xu hướng cocktail cay (đặc biệt là Spicy Margarita) bùng nổ tại các quầy bar hiện đại, giới pha chế thường gặp bài toán khó: ớt tươi tự ngâm thay đổi độ cay thất thường theo mùa, nhanh hỏng và tốn thời gian sơ chế.',
        'Bậc thầy Chưng cất Carole Quinton cùng phòng nghiên cứu tại Angers đã ứng dụng bí quyết chưng cất vỏ cam của nhà Cointreau để tạo nên một dòng rượu mùi cam – ớt chuẩn hóa tự nhiên, ổn định độ cay và chiều sâu hương vị trong từng định lượng rót.',
      ],
    },
    production: {
      en: [
        'Rather than simply adding capsaicin to finished Cointreau L’Unique, Carole Quinton starts with an orange liqueur base (water, orange peel distillate, sugar, neutral alcohol) and layers a real maceration of Bird’s Eye chillies sourced primarily from Uganda and Zimbabwe.',
        'Natural chilli flavoring from India adds lingering warmth, natural jalapeño flavoring from Mexico brings vibrant green vegetal crunch, and natural cucumber flavoring crafted in Germany cools the mid-palate. A touch of plain caramel gives the liquid its warm golden-amber hue inside a bright yellow-accented Cointreau square bottle.',
      ],
      vi: [
        'Thay vì chỉ pha thêm vị cay vào rượu Cointreau L’Unique thành phẩm, Carole Quinton xây dựng công thức riêng từ nền chưng cất vỏ cam, nước, đường, cồn trung tính và kết hợp dịch ngâm ớt hiểm Bird’s Eye thu hoạch chủ yếu từ Uganda và Zimbabwe.',
        'Lớp hương tiếp tục được hoàn thiện bởi chiết xuất ớt tự nhiên từ Ấn Độ tạo độ ấm bền, hương ớt xanh jalapeño từ Mexico mang nét giòn tươi thực vật, cùng chiết xuất dưa leo tự nhiên chế tác tại Đức giúp cân bằng vị mát dịu nơi vòm họng.',
      ],
    },
    tasting: {
      nose: { en: 'Bright candied and fresh orange peel lifted by crisp green jalapeño and cooling cucumber', vi: 'Hương vỏ cam tươi sáng mở đầu, hòa quyện nét xanh giòn của ớt jalapeño và dưa leo thanh mát' },
      palate: { en: 'Juicy zesty orange upfront, building smoothly into rounded Bird’s Eye chilli warmth without harsh throat burn', vi: 'Vị cam mọng sắc nét lan tỏa trước, sau đó chuyển mượt sang hơi ấm tròn trịa của ớt Bird’s Eye mà không gây bỏng rát gắt cổ' },
      finish: { en: 'Clean citrus-spice tingle (500–1,500 SHU) balanced by subtle herbal freshness', vi: 'Dư vị cay tê tinh tế (500–1.500 SHU) đọng lại sạch gọn cùng hương thảo mộc tươi' },
    },
    serving: {
      en: [
        'Designed for consistent Spicy Margaritas, fruit-forward Spicy Margaritas (such as mango or passionfruit riffs), spicy Palomas, or chilled frozen shots.',
        'Can also split-base alongside Cointreau L’Unique when bartenders want to dial heat up or down to guest preference.',
      ],
      vi: [
        'Chuyên dụng cho Spicy Margarita chuẩn vị, các biến tấu Margarita trái cây nhiệt đới (xoài, dứa), Paloma cay nhẹ hoặc phục vụ dạng shot ướp lạnh sâu.',
        'Có thể phối hợp linh hoạt cùng Cointreau L’Unique để tùy chỉnh cấp độ cay theo khẩu vị từng thực khách.',
      ],
    },
    faq: [
      {
        q: { en: 'Does Cointreau Spicy contain Cointreau L’Unique inside the bottle?', vi: 'Cointreau Spicy có phải là rượu Cointreau L’Unique pha thêm ớt không?' },
        a: { en: 'No. While crafted in Angers using the same orange peel distillation savoir-faire, Cointreau Spicy is formulated specifically as its own 30% ABV recipe so the spice, cucumber, jalapeño, and orange peel remain balanced.', vi: 'Không. Dù cùng được chế tác tại Angers dựa trên kỹ nghệ chưng cất vỏ cam của nhà Cointreau, Cointreau Spicy là một công thức độc lập ở mức 30% ABV để cân bằng tối ưu giữa tinh dầu vỏ cam, ớt Bird’s Eye, jalapeño và dưa leo.' },
      },
      {
        q: { en: 'How spicy is 500–1,500 SHU in practice?', vi: 'Mức 500–1.500 SHU cay đến mức nào khi uống?' },
        a: { en: 'Neat, 500–1,500 SHU sits around mild poblano/anaheim warmth; once shaken with tequila, lime juice, and ice dilution in a cocktail, it softens to ~100–500 SHU – a pleasant, approachable tingle.', vi: 'Khi thử nguyên chất, mức 500–1.500 SHU tạo cảm giác ấm dịu vừa phải; khi lắc cùng tequila, chanh tươi và đá lạnh trong cocktail, độ cay hạ xuống khoảng 100–500 SHU – tê nhẹ dễ chịu và kích thích vị giác.' },
      },
    ],
    relatedSlugs: ['cointreau-lunique', 'history-of-orange-liqueur'],
    sourceNote: { en: 'Maison Cointreau Official Cointreau Spicy Q&A & Technical Sellsheet', vi: 'Tài liệu Q&A chính thức & Hồ sơ kỹ thuật Cointreau Spicy – Maison Cointreau' },
    lastUpdated: '2026-11-03',
  },
  {
    slug: 'the-botanist-islay-dry-gin',
    status: 'approved',
    group: 'brands',
    brandId: 'the-botanist',
    brandIds: ['the-botanist'],
    parentHouseId: 'bruichladdich-distillery',
    categoryLabel: { en: 'Islay Dry Gin · 46% ABV · B Corp', vi: 'Islay Dry Gin · 46% ABV · Chứng nhận B Corp' },
    title: {
      en: 'The Botanist – Islay Dry Gin',
      vi: 'The Botanist – Islay Dry Gin',
    },
    subtitle: {
      en: 'Conceived, distilled, and hand-crafted at Bruichladdich Distillery with 22 wild-foraged Islay botanicals.',
      vi: 'Chưng cất chậm tại Nhà chưng cất Bruichladdich trên đảo Islay với 22 loài thảo mộc bản địa thu hái thủ công.',
    },
    summary: {
      en: 'First Islay dry gin conceived and distilled at Bruichladdich Distillery, The Botanist marries 9 classic gin aromatics with 22 hand-foraged local Islay leaves, flowers, and herbs through a gentle 17-hour low-pressure distillation in the last surviving Lomond still, "Ugly Betty," bottled at 46% ABV.',
      vi: 'Dòng Islay Dry Gin đầu tiên ra đời tại Nhà chưng cất Bruichladdich, kết hợp 9 nguyên liệu Gin cổ điển cùng 22 loài hoa cỏ, lá thảo mộc hái tay bền vững trên đảo Islay qua 17 giờ chưng cất áp suất thấp trong nồi đồng Lomond hiếm có mang tên "Ugly Betty", đóng chai ở 46% ABV.',
    },
    readMinutes: 4,
    keyTakeaways: {
      en: [
        '31 total botanicals: 9 classic core seeds, barks, and peels macerated in the pot + 22 wild Islay botanicals vapor-infused and embossed in Latin right on the bottle.',
        'Simmered slowly for ~17 hours at low pressure inside "Ugly Betty," an unusual copper Lomond pot still modified by Bruichladdich’s engineers to coax delicate floral oils without scorching.',
        'Bottled at 46% ABV with Islay spring water from Octomore Farm; crafted by a certified B Corporation distillery.',
      ],
      vi: [
        'Tổng cộng 31 thảo mộc: 9 nguyên liệu cổ điển ngâm ấm trong nồi đồng + 22 thảo mộc hoang dã đảo Islay hấp hơi tinh tế (tên Latin của cả 22 loài được dập nổi quanh thân chai).',
        'Chưng cất thật chậm suốt khoảng 17 giờ ở áp suất thấp trong nồi đồng Lomond "Ugly Betty" độc bản, bảo toàn trọn vẹn tinh dầu hoa lá mỏng manh.',
        'Đóng chai ở mức 46% ABV cùng nguồn nước suối tinh khiết từ nông trại Octomore trên đảo Islay; thuộc nhà chưng cất đạt chứng nhận bền vững B Corp.',
      ],
    },
    specs: [
      { label: { en: 'Distillery & Island', vi: 'Nhà chưng cất & Vùng đảo' }, value: { en: 'Bruichladdich Distillery, Isle of Islay, Scotland', vi: 'Bruichladdich Distillery, Đảo Islay, Scotland' } },
      { label: { en: 'Still & Cycle', vi: 'Thiết bị & Thời gian chưng cất' }, value: { en: 'Modified copper Lomond still ("Ugly Betty") · ~17-hour slow simmer', vi: 'Nồi đồng Lomond cải tiến ("Ugly Betty") · Chưng cất chậm ~17 giờ' } },
      { label: { en: 'Botanical Formula', vi: 'Công thức thảo mộc' }, value: { en: '9 classic gin botanicals + 22 hand-foraged Islay botanicals (31 total)', vi: '9 thảo mộc cổ điển + 22 thảo mộc bản địa hái tay trên đảo Islay (tổng 31 loại)' } },
      { label: { en: 'Bottling Strength', vi: 'Nồng độ đóng chai' }, value: { en: '46% ABV', vi: '46% ABV' } },
    ],
    originStory: {
      en: [
        'Launched in 2010–2011 by Bruichladdich Distillery in collaboration with professional Scottish botanical foragers, The Botanist set out to capture the liquid biodiversity of wind-swept Islay beyond peat smoke.',
        'Every spring through autumn, the foraging team harvests blossoms, leaves, and herbs sustainably by hand across Islay’s hills, peat bogs, and Atlantic shorelines – including apple mint, bog myrtle, chamomile, elderflower, gorse (coconut-scented), heather, hawthorn, lemon balm, meadowsweet, Mugwort, red clover, tansy, thyme, water mint, and wood sage.',
      ],
      vi: [
        'Ra đời tại Nhà chưng cất Bruichladdich với sự hợp tác cùng các chuyên gia thực vật học bản địa, The Botanist mang sứ mệnh tái hiện hệ sinh thái thảo mộc phong phú của đảo Islay vượt ra ngoài định kiến chỉ có khói than bùn.',
        'Từ mùa xuân sang mùa thu, chuyên gia thu hái cẩn trọng bằng tay từng ngọn bạc hà táo, sim đầm lầy, cúc La Mã, hoa cơm cháy, hoa kim tước (thoảng hương dừa), thạch nam, tía tô đất, cỏ râu dê và xô thơm rừng dọc các sườn đồi và bờ biển Đại Tây Dương.',
      ],
    },
    production: {
      en: [
        'Nine classic aromatics (juniper berries, coriander seed, angelica root, orris root, cassia bark, cinnamon bark, liquorice root, bitter orange peel, and lemon peel) steep warm inside "Ugly Betty" in triple-distilled wheat spirit and Islay spring water.',
        'As gentle vapor rises at low pressure, it passes through a herbal basket holding the 22 dried Islay botanicals, lifting fragile floral and coastal mint top notes into a satin-textured 46% ABV spirit.',
      ],
      vi: [
        'Chín nguyên liệu trụ cột (quả bách xù, hạt mùi, rễ bạch chỉ, rễ diên vĩ, vỏ quế cassia, quế thanh, rễ cam thảo, vỏ cam đắng và vỏ chanh vàng) được ngâm ấm trực tiếp trong nồi "Ugly Betty" nhằm tạo khung hương trầm vững.',
        'Khi hơi cồn bốc lên thật chậm ở áp suất thấp, luồng hơi đi xuyên qua giỏ thảo mộc chứa 22 loài hoa lá Islay, cuốn theo hương hoa đồng nội và bạc hà biển thanh thoát vào chất rượu 46% ABV êm mượt.',
      ],
    },
    tasting: {
      nose: { en: 'Sweet wild menthol, apple mint, spring woodland, juniper pine, citrus blossom, subtle gorse coconut', vi: 'Bạc hà táo thanh dịu, hương thảo mộc mùa xuân, quả bách xù, hoa cam chanh và thoảng hương dừa từ hoa kim tước' },
      palate: { en: 'Satin-rich mouthfeel at 46% ABV; cool herbal freshness unfolding into citrus zest and delicate earthy spice', vi: 'Kết cấu dày mượt nhờ nồng độ 46% ABV; lớp hương thảo mộc mát lành mở dần sang vỏ chanh tươi và gia vị ấm tinh tế' },
      finish: { en: 'Crisp, floral-mineral, remarkably clean and lingering', vi: 'Khô ráo, khoáng sạch tự nhiên và lưu hương hoa cỏ rất lâu' },
    },
    serving: {
      en: [
        'Signature Tonic serve: pair with light premium tonic and garnish with seasonal local herbs or citrus peel (thyme & grapefruit, rosemary & lemon, or mint) to highlight its foraging philosophy.',
        'Exceptional structural clarity in a Dry Martini, Gimlet, Southside, or White Negroni.',
      ],
      vi: [
        'Phục vụ cùng nước tonic thanh nhẹ và trang trí bằng thảo mộc tươi theo mùa (cỏ xạ hương – vỏ bưởi hồng, hương thảo – chanh vàng hoặc bạc hà) để tôn vinh tinh thần thảo mộc bản địa.',
        'Cực kỳ sắc sảo và dậy hương trong Dry Martini, Southside, Gimlet hoặc White Negroni.',
      ],
    },
    faq: [
      {
        q: { en: 'Is The Botanist smoky since it comes from Islay?', vi: 'Sản xuất trên đảo Islay, vậy The Botanist có vị khói không?' },
        a: { en: 'No. The Botanist contains zero peat smoke; instead, it showcases the floral, herbal, and coastal botanical side of Islay.', vi: 'Hoàn toàn không có vị khói. The Botanist tôn vinh khía cạnh đối lập đầy bất ngờ của đảo Islay: thảm thực vật, hoa dại và thảo mộc ven biển thanh khiết.' },
      },
    ],
    relatedSlugs: ['history-of-gin', 'bruichladdich-classic-laddie'],
    sourceNote: { en: 'Bruichladdich Distillery Academy BDC Bible & The Botanist Foraging Guide', vi: 'Cẩm nang đào tạo Bruichladdich Distillery Academy & Hồ sơ thực vật học The Botanist' },
    lastUpdated: '2026-11-03',
  },
  {
    slug: 'champagne-telmont',
    status: 'approved',
    group: 'brands',
    brandId: 'telmont',
    brandIds: ['telmont'],
    categoryLabel: { en: 'Champagne House · Damery · Est. 1912', vi: 'Nhà Champagne · Damery · Thành lập 1912' },
    title: {
      en: 'Champagne Telmont',
      vi: 'Champagne Telmont',
    },
    subtitle: {
      en: '"In Nomine Terrae" – airy, structured Champagne from Damery pioneering organic viticulture and radical transparency.',
      vi: '"In Nomine Terrae" (Nhân danh Đất Mẹ) – Champagne thanh lịch vùng Damery tiên phong canh tác hữu cơ và minh bạch hóa từng lô chai.',
    },
    summary: {
      en: 'Founded in 1912 in Damery near Épernay after the Champagne winegrowers’ riots, Maison Telmont crafts structured yet airy Champagnes while leading environmental action: 100% of Telmont Estate vines achieved organic certification in 2025, zero gift boxes, zero air freight, lightweight 800g recycled green glass, and individually numbered labels detailing every cuvée.',
      vi: 'Thành lập năm 1912 tại Damery (gần Épernay), Maison Telmont chế tác dòng Champagne cân bằng giữa cấu trúc vững chãi và nét thanh thoát, đồng thời dẫn đầu cam kết bền vững: 100% vườn nho điền trang Telmont đạt chứng nhận hữu cơ vào năm 2025, không hộp quà, không vận chuyển đường hàng không, chai thủy tinh xanh tái chế siêu nhẹ 800g và nhãn trước đánh số minh bạch toàn bộ thông tin phối trộn.',
    },
    readMinutes: 5,
    keyTakeaways: {
      en: [
        '100% of Telmont Estate vineyards achieved certified organic status in 2025, with a verified roadmap for 100% of partner winegrowers certified organic in 2031.',
        'Radical eco-design ("The bottle and nothing but the bottle"): eliminated outer gift boxes and bespoke heavy bottles, adopting a lightweight 800g transition/green bottle (~87% recycled glass) and zero air freight.',
        'Front-facing numbered labels disclose exact grape proportions, harvest base year, reserve wine shares, dosage g/L, and disgorgement traceability.',
      ],
      vi: [
        '100% diện tích vườn nho thuộc điền trang Telmont đã đạt chứng nhận canh tác hữu cơ trong năm 2025, hướng tới mục tiêu 100% đối tác trồng nho đạt chuẩn hữu cơ vào năm 2031.',
        'Triết lý "Chỉ vỏn vẹn chai rượu": loại bỏ hoàn toàn hộp quà tặng bên ngoài và các mẫu chai dày nặng theo khuôn riêng, không vận chuyển bằng máy bay, ứng dụng vỏ chai xanh 800g siêu nhẹ làm từ khoảng 87% thủy tinh tái chế.',
        'Nhãn chai đánh số riêng biệt công khai minh bạch tỷ lệ từng giống nho, năm thu hoạch nền, tỷ lệ vang dự trữ, lượng đường dosage và thời điểm tách cặn.',
      ],
    },
    specs: [
      { label: { en: 'Founded & Location', vi: 'Thành lập & Địa danh' }, value: { en: '1912 by Henri Lhôpital · Damery (Marne Valley, near Épernay), France', vi: '1912 bởi Henri Lhôpital · Damery (Thung lũng Marne, gần Épernay), Pháp' } },
      { label: { en: 'House Motto', vi: 'Tuyên ngôn nhà làm vang' }, value: { en: 'In Nomine Terrae ("In the Name of Mother Nature")', vi: 'In Nomine Terrae ("Nhân danh Đất Mẹ")' } },
      { label: { en: 'Organic Milestones', vi: 'Cột mốc Hữu cơ & Khí hậu' }, value: { en: '100% Estate organic achieved in 2025 · 100% partner growers target in 2031 · Climate Positive 2030 / Net Positive 2050', vi: '100% điền trang hữu cơ năm 2025 · Mục tiêu 100% đối tác hữu cơ năm 2031 · Tích cực khí hậu 2030 / Net Positive 2050' } },
      { label: { en: 'Packaging Standard', vi: 'Chuẩn đóng chai bền vững' }, value: { en: '800g lightweight green bottle (~87% recycled glass) · Zero gift boxes · Zero air freight · 12% ABV', vi: 'Chai xanh nhẹ 800g (~87% thủy tinh tái chế) · Không hộp quà · Không vận tải hàng không · 12% ABV' } },
    ],
    expressions: [
      {
        name: 'Telmont Réserve Brut',
        abv: '12% ABV',
        profile: {
          en: 'Harmonious Non-Vintage assemblage across Chardonnay, Meunier, and Pinot Noir incorporating multi-vintage reserve wines and extended lees aging (well above AOC minimums). Crisp honeysuckle, vanilla, mirabelle plum, and lively mineral finish.',
          vi: 'Phối trộn hài hòa cả ba giống nho Chardonnay, Meunier và Pinot Noir cùng tỷ lệ vang dự trữ nhiều niên vụ và ủ cặn men dài ngày. Tỏa hương hoa kim ngân, vani thanh nhẹ, mận vàng chín và hậu vị khoáng sắc nét.',
        },
      },
      {
        name: 'Telmont Réserve Rosé',
        abv: '12% ABV',
        profile: {
          en: 'Gastronomic rosé Champagne blending Chardonnay and Meunier with Pinot Noir (including still red Champagne wine) aged patiently on lees. Bright wild strawberry, sour cherry, blood orange zest, and creamy brioche structure.',
          vi: 'Dòng Champagne Rosé giàu tính ẩm thực, phối trộn Chardonnay, Meunier và Pinot Noir với cấu trúc đầy đặn. Nổi bật hương dâu rừng, anh đào chín, vỏ cam đỏ và hậu vị bánh nướng tinh tế.',
        },
      },
      {
        name: 'Telmont Réserve de la Terre (Organic)',
        abv: '12% ABV',
        profile: {
          en: 'Crafted from 100% certified organic grapes without herbicides, synthetic pesticides, or chemical fertilizers, dosed Extra Brut (~2.5 g/L) to express pure electric energy, radiant orchard fruit, and saline precision.',
          vi: 'Chế tác từ 100% nho canh tác hữu cơ không thuốc diệt cỏ hay hóa chất tổng hợp, lượng đường Extra Brut siêu thấp (~2,5 g/L) tôn vinh trọn vẹn nguồn năng lượng khoáng mặn và trái cây tươi rạng rỡ.',
        },
      },
    ],
    originStory: {
      en: [
        'In 1911, brave local winegrower Henri Lhôpital stood at the forefront of the Champagne riots defending authentic regional terroir, founding his family house (originally J. de Telmont) in Damery in 1912. Four generations preserved hands-on viticultural discipline before Rémy Cointreau acquired a majority stake in 2020 alongside President Ludovic du Plessis and Cellar Master Bertrand Lhôpital, joined by investor Leonardo DiCaprio in 2022.',
        'Launched in 2021, the "In the Name of Mother Nature" program scrutinized every carbon source in Champagne – discovering packaging and logistics outweighed winemaking emissions, which spurred banning gift boxes, banning clear unrecycled glass, and pioneering the 800g lightweight Champagne bottle.',
      ],
      vi: [
        'Năm 1911, người trồng nho can trường Henri Lhôpital tham gia phong trào bảo vệ giá trị nguyên bản của nho vùng Champagne, rồi sáng lập nhà làm vang gia đình tại làng Damery vào năm 1912. Bốn thế hệ nối tiếp gìn giữ nghề trồng nho truyền thống trước khi gia nhập tập đoàn Rémy Cointreau năm 2020 và đón nhận sự đồng hành của nhà đầu tư Leonardo DiCaprio năm 2022.',
        'Với dự án "In Nomine Terrae" khởi xướng năm 2021, Telmont rà soát toàn diện dấu chân carbon trong ngành Champagne: quyết liệt loại bỏ hộp giấy trang trí, ngưng dùng chai thủy tinh trắng tốn năng lượng và đồng phát triển mẫu chai Champagne nhẹ nhất ngành (800g) mà vẫn chịu áp suất an toàn tuyệt đối.',
      ],
    },
    production: {
      en: [
        'Organic conversion eliminates synthetic herbicides, fungicides, and fertilizers, encouraging deep root systems, wild cover crops, and hedgerow biodiversity that yield concentrated, resilient grapes.',
        'Base wines ferment parcel by parcel before careful assemblage with reserve wines kept from up to seven prior harvests, followed by extended sur lie aging in cool chalk cellars for fine mousse and low-dosage clarity.',
      ],
      vi: [
        'Canh tác hữu cơ loại bỏ hoàn toàn thuốc diệt cỏ và phân bón hóa học, thúc đẩy rễ nho đâm sâu xuống tầng đất đá vôi và phục hồi đa dạng sinh học tự nhiên quanh thửa ruộng.',
        'Rượu vang nền được lên men riêng theo từng lô thửa, phối trộn cùng vang dự trữ lưu giữ từ nhiều niên vụ trước và ủ cặn men dài hạn trong hầm mát nhằm đạt bọt sủi mịn mượt và độ tinh khiết cao.',
      ],
    },
    tasting: {
      nose: { en: 'White blossom, honeysuckle, poached pear, citrus zest, lightly toasted brioche', vi: 'Hoa trắng, kim ngân, lê chần, vỏ chanh tươi và bánh brioche nướng nhẹ' },
      palate: { en: 'Structured yet airy tension; crisp orchard fruit framed by pinpoint bubbles and chalky minerality', vi: 'Sự giao thoa giữa cấu trúc đầy đặn và độ thanh thoát; vị trái cây chín giòn quyện cùng bọt mịn và khoáng chất đá phấn' },
      finish: { en: 'Clean, dry, and mouthwatering with subtle saline length', vi: 'Khô thanh, kích thích vị giác với hậu vị khoáng mặn thanh lịch kéo dài' },
    },
    serving: {
      en: [
        'Serve at 8–10 °C in a tulip-shaped white wine glass to give its Pinot-Meunier-Chardonnay aromatics space to unfold.',
        'Gastronomic versatility across seafood crudo, steamed shellfish, sushi, roast chicken, or artisanal cheeses.',
      ],
      vi: [
        'Phục vụ ở nhiệt độ 8–10 °C trong ly vang trắng bầu tulip để hương thơm ba giống nho mở bung trọn vẹn.',
        'Đa dụng trên bàn tiệc ẩm thực: từ hải sản tươi sống, hàu, sushi đến gia cầm quay và phô mai thủ công.',
      ],
    },
    faq: [
      {
        q: { en: 'Why are some Telmont bottles green or varied in tint ("193,000 Shades of Green")?', vi: 'Vì sao vỏ chai Telmont chỉ dùng thủy tinh xanh hoặc có sắc độ chuyển màu?' },
        a: { en: 'Clear flint glass uses nearly zero recycled cullet and lets UV light cause "lightstrike" off-flavors; green and transition glass use ~87% recycled glass while shielding Champagne naturally from UV rays.', vi: 'Thủy tinh trong suốt hầu như không tận dụng được thủy tinh tái chế và dễ bị tia UV làm biến đổi mùi rượu; vỏ chai xanh của Telmont sử dụng khoảng 87% thủy tinh tái chế đồng thời chống tia UV tự nhiên tối ưu.' },
      },
    ],
    relatedSlugs: ['history-of-champagne'],
    sourceNote: { en: 'Champagne Telmont Master Training Deck & In Nomine Terrae Sustainability Report', vi: 'Tài liệu đào tạo chính thức Champagne Telmont & Báo cáo bền vững In Nomine Terrae' },
    lastUpdated: '2026-11-03',
  },
  {
    slug: 'mount-gay-rum',
    status: 'approved',
    group: 'brands',
    brandId: 'mount-gay',
    brandIds: ['mount-gay'],
    categoryLabel: { en: 'Barbados Rum · Est. 1703', vi: 'Rượu Rum Barbados · Thành lập 1703' },
    title: {
      en: 'Mount Gay – World’s Oldest Running Rum Distillery',
      vi: 'Mount Gay – Nhà chưng cất Rum hoạt động lâu đời nhất thế giới',
    },
    subtitle: {
      en: 'Crafted in St. Lucy, Barbados since 1703 from Barbadian & Caribbean molasses, coral-filtered water, and zero added sugar.',
      vi: 'Chế tác tại St. Lucy (Barbados) từ năm 1703 với mật mía, nước ngầm lọc qua đá san hô và không pha thêm đường.',
    },
    summary: {
      en: 'Documented by legal deed dated February 20, 1703 in St. Lucy at the northern tip of Barbados, Mount Gay blends double-retort copper pot still and traditional column still distillates matured in tropical humidity under Master Blender Trudiann Branker.',
      vi: 'Được xác nhận bằng văn tự pháp lý ngày 20/02/1703 tại giáo xứ St. Lucy cực Bắc đảo Barbados, Mount Gay phối trộn tinh tế rượu chưng cất nồi đồng hai bầu cùng tháp cột truyền thống, ủ dưới khí hậu nhiệt đới dưới bàn tay Bậc thầy Phối trộn Trudiann Branker.',
    },
    readMinutes: 5,
    keyTakeaways: {
      en: [
        'Legal deed dated February 20, 1703 makes Mount Gay the oldest continuously operating commercial rum distillery in the world.',
        'Pure groundwater filtered naturally three times through Barbados’s Pleistocene coral-limestone rock, paired with prized "Black Gold" sugarcane molasses.',
        'Crafted by Master Blender Trudiann Branker (appointed 2019, Mount Gay’s first female Master Blender) with zero added sugar across the core range.',
      ],
      vi: [
        'Chứng thư đề ngày 20/02/1703 xác lập Mount Gay là nhà chưng cất Rum thương mại hoạt động liên tục lâu đời nhất thế giới.',
        'Nguồn nước giếng ngầm tự nhiên lọc ba tầng qua thềm đá vôi san hô cổ đại của Barbados, kết hợp cùng mật mía giàu hương thơm.',
        'Dẫn dắt bởi Bậc thầy Phối trộn Trudiann Branker với nguyên tắc tôn trọng vị nguyên bản: không thêm đường tạo ngọt trong các dòng cốt lõi.',
      ],
    },
    specs: [
      { label: { en: 'Distillery & Founding Deed', vi: 'Nhà chưng cất & Chứng thư' }, value: { en: 'St. Lucy Parish, Barbados · February 20, 1703', vi: 'St. Lucy, Đảo Barbados · Ngày 20/02/1703' } },
      { label: { en: 'Master Blender', vi: 'Bậc thầy Phối trộn' }, value: { en: 'Trudiann Branker', vi: 'Trudiann Branker' } },
      { label: { en: 'Distillation & Casks', vi: 'Chưng cất & Thùng ủ' }, value: { en: 'Double-retort copper pot stills + traditional column stills · Ex-American whiskey, Bourbon & Cognac casks', vi: 'Nồi đồng hai bầu + tháp cột truyền thống · Thùng sồi Mỹ, Bourbon & Cognac' } },
      { label: { en: 'Core Bottling Strengths', vi: 'Nồng độ đóng chai' }, value: { en: 'Eclipse (40% ABV) · Black Barrel (43% ABV) · XO Triple Cask Blend (43% ABV)', vi: 'Eclipse (40% ABV) · Black Barrel (43% ABV) · XO Triple Cask Blend (43% ABV)' } },
    ],
    expressions: [
      {
        name: 'Mount Gay Eclipse (40% ABV)',
        abv: '40% ABV',
        profile: {
          en: 'Named after the 1910 total solar eclipse and return of Halley’s Comet. Crisp golden Barbados reference aged in charred ex-American whiskey barrels: floral vanilla, ripe banana, apricot, almond, and light smoke.',
          vi: 'Đặt tên theo sự kiện nhật thực toàn phần và sao chổi Halley năm 1910. Dòng Rum vàng chuẩn mực ủ trong thùng Whiskey Mỹ đốt sém: hương vani hoa cỏ, chuối chín, mơ tươi, hạnh nhân và khói gỗ nhẹ.',
        },
      },
      {
        name: 'Mount Gay Black Barrel (43% ABV)',
        abv: '43% ABV',
        profile: {
          en: 'Higher proportion of double-retort pot still rums finished for 6 months in deeply charred Bourbon oak barrels and bottled at 43% ABV non-chill filtered. Bold gingerbread, butterscotch, black pepper, licorice, and toasted wood.',
          vi: 'Tăng tỷ lệ rượu nồi đồng đậm đà, hoàn thiện 6 tháng cuối trong thùng gỗ sồi Bourbon đốt cháy sâu và đóng chai ở 43% ABV không lọc lạnh. Nổi bật bánh gừng, kẹo bơ cứng, tiêu đen và gỗ nướng ấm nồng.',
        },
      },
      {
        name: 'Mount Gay XO Triple Cask Blend (43% ABV)',
        abv: '43% ABV',
        profile: {
          en: 'Small-batch blend of rums aged 5 to 17 years under tropical Barbadian heat across three cask types: American whiskey, Bourbon, and Cognac. Rich salted caramel, baked fig, dark chocolate, clove, and velvety oak.',
          vi: 'Phối trộn từ những thùng Rum ủ từ 5 đến 17 năm dưới nắng gió nhiệt đới Barbados trong 3 loại thùng: Whiskey Mỹ, Bourbon và Cognac. Đậm sâu hương caramel mặn, sung nướng, chocolate đen, đinh hương và gỗ sồi mượt mà.',
        },
      },
    ],
    originStory: {
      en: [
        'Unlike volcanic Caribbean islands, Barbados rose from tectonic uplift of ancient coral reefs. That porous coral limestone filters tropical rainfall naturally into deep underground caverns free of bitter iron.',
        'Sir John Gay Alleyne managed the Mount Gilboa estate in the 18th century with such distinction that following his death in 1801, the plantation and its prized spirit were renamed Mount Gay in his honor.',
      ],
      vi: [
        'Khác với phần lớn các đảo núi lửa vùng Caribe, Barbados hình thành từ sự nâng kiến tạo của các rạn san hô cổ đại. Tầng đá vôi san hô xốp tự nhiên lọc sạch nước mưa nhiệt đới thành mạch nước ngầm tinh khiết không lẫn tạp chất sắt.',
        'Thế kỷ 18, Ngài John Gay Alleyne điều hành điền trang xuất sắc đến mức sau khi ông qua đời năm 1801, nhà chưng cất được đổi tên thành Mount Gay để tôn vinh di sản của ông.',
      ],
    },
    production: {
      en: [
        'Fermentation takes place outdoors in Barbados’s sea breeze before distillation in artisanal double-retort copper pot stills (which build rich spicy-fruity esters) and copper/stainless column stills (which bring fragrant lightness).',
        'Intense Caribbean heat and Trade Winds drive rapid maturation inside toasted and charred oak casks, yielding deep color and complex oak vanillins naturally with zero post-distillation sweetening.',
      ],
      vi: [
        'Dịch mật mía lên men đón gió biển tự nhiên trước khi chưng cất song song bằng nồi đồng hai bầu thủ công (giàu ester trái cây và gia vị) và tháp cột (thanh thoát, nhẹ nhàng).',
        'Nhiệt độ ẩm nóng kết hợp gió Mậu Dịch thúc đẩy rượu trưởng thành nhanh trong thùng sồi nướng, tự nhiên đạt sắc hổ phách óng ả và vị êm sâu mà không cần bổ sung đường.',
      ],
    },
    tasting: {
      nose: { en: 'Ripe banana, grilled pineapple, toasted almond, vanilla bean, warm baking spices', vi: 'Chuối chín, dứa nướng, hạnh nhân rang, hạt vani và gia vị nướng ấm' },
      palate: { en: 'Dry-balanced caramel, apricot, butterscotch, and peppery charred oak', vi: 'Vị caramel thanh khô, mơ chín, kẹo bơ và gỗ sồi đốt sém cay dịu' },
      finish: { en: 'Clean, warming, dry tropical spice persistence', vi: 'Sạch gọn, ấm áp, lưu giữ hương gia vị nhiệt đới dài lâu' },
    },
    serving: {
      en: [
        'Eclipse: anchor for Barbados Rum Punch, Classic Daiquiri, Mojito, or Ginger Beer Highball.',
        'Black Barrel: structured 43% ABV backbone for Rum Old Fashioned, Manhattan riffs, and Tiki classics.',
        'XO: savor neat, over a single clear rock, or in contemplative spirit-forward serves.',
      ],
      vi: [
        'Eclipse: nền chuẩn cho Barbados Rum Punch, Daiquiri cổ điển, Mojito hoặc Highball bia gừng.',
        'Black Barrel: nồng độ 43% ABV dày dặn lý tưởng cho Rum Old Fashioned và cocktail Tiki.',
        'XO: thưởng thức nguyên chất (neat) hoặc cùng một viên đá khối lớn trong suốt.',
      ],
    },
    faq: [
      {
        q: { en: 'Why is Mount Gay XO aged 5–17 years equivalent to much older Scotch?', vi: 'Vì sao Rum ủ 5–17 năm tại Barbados lại sánh ngang whisky ủ lâu năm hơn nhiều ở châu Âu?' },
        a: { en: 'Tropical Caribbean temperatures drive ~3× faster cask extraction and evaporation than cool Scottish warehouses, concentrating oak complexity far earlier before wood tannins turn overly astringent.', vi: 'Nhiệt độ vùng nhiệt đới thúc đẩy quá trình trao đổi chất giữa rượu và gỗ sồi nhanh gấp khoảng 3 lần so với hầm lạnh Scotland, giúp rượu đạt độ chín mùi phức hợp sớm hơn rất nhiều.' },
      },
    ],
    relatedSlugs: ['history-of-rum'],
    sourceNote: { en: 'Mount Gay 1703 Distillery Master Training & Expression Technical Sheets', vi: 'Tài liệu đào tạo chính thức Nhà chưng cất Mount Gay 1703' },
    lastUpdated: '2026-11-03',
  },
  {
    slug: 'bruichladdich-classic-laddie',
    status: 'approved',
    group: 'brands',
    brandId: 'bruichladdich',
    brandIds: ['bruichladdich'],
    parentHouseId: 'bruichladdich-distillery',
    categoryLabel: { en: 'Unpeated Islay Single Malt · 50% ABV · 0 PPM', vi: 'Islay Single Malt không than bùn · 50% ABV · 0 PPM' },
    title: {
      en: 'Bruichladdich – The Classic Laddie',
      vi: 'Bruichladdich – The Classic Laddie',
    },
    subtitle: {
      en: 'Floral, coastal unpeated Islay single malt crafted from 100% Scottish barley and bottled at 50% ABV in signature aqua glass.',
      vi: 'Dòng Islay Single Malt không khói (0 PPM) thanh tao từ 100% lúa mạch Scotland, đóng chai 50% ABV trong sắc xanh ngọc biển đặc trưng.',
    },
    summary: {
      en: 'Established in 1881 on the Rhinns of Islay overlooking Loch Indaal and resurrected in 2001, Bruichladdich challenges the smoky Islay stereotype with The Classic Laddie: 0 PPM unpeated, 100% Scottish-grown barley, trickle-distilled through tall narrow-necked Victorian stills, matured 100% on Islay, and bottled natural at 50% ABV.',
      vi: 'Thành lập năm 1881 bên bờ vịnh Loch Indaal trên đảo Islay và hồi sinh mạnh mẽ từ năm 2001, Bruichladdich phá vỡ định kiến "Islay là phải khói" bằng The Classic Laddie: không khói than bùn (0 PPM), 100% lúa mạch trồng tại Scotland, chưng cất chậm qua nồi đồng cổ cao thời Victoria, ủ 100% thời gian trên đảo Islay và đóng chai nguyên bản ở 50% ABV.',
    },
    readMinutes: 5,
    keyTakeaways: {
      en: [
        'Unpeated (0 PPM) Islay single malt showcasing pure malted barley sweetness, green orchard fruit, and Atlantic sea spray.',
        '100% Scottish barley traceable batch by batch via the online bottle recipe code, matured entirely in Loch Indaal coastal warehouses on Islay.',
        'Bottled at 50% ABV, non-chill filtered, and 100% natural color (zero E150a caramel) inside recycled-glass aqua bottles by a certified B Corp distillery.',
      ],
      vi: [
        'Hoàn toàn không khói (0 PPM), phô diễn trọn vẹn vị ngọt thanh của mạch nha lúa mạch, trái cây xanh và hơi thở gió biển Đại Tây Dương.',
        'Sử dụng 100% lúa mạch thu hoạch tại Scotland, cho phép tra cứu công thức thùng ủ từng mẻ (batch transparency), và ủ 100% thời gian sát bờ biển đảo Islay.',
        'Đóng chai ở nồng độ 50% ABV, không lọc lạnh (non-chill filtered) và giữ màu tự nhiên từ thùng gỗ sồi (không phẩm màu caramel) bởi nhà chưng cất chuẩn B Corp.',
      ],
    },
    specs: [
      { label: { en: 'Distillery & Founded', vi: 'Nhà chưng cất & Năm thành lập' }, value: { en: 'Bruichladdich Distillery, Rhinns of Islay, Scotland · Est. 1881 (Revived 2001)', vi: 'Bruichladdich Distillery, Đảo Islay, Scotland · Thành lập 1881 (Tái sinh 2001)' } },
      { label: { en: 'Head Distiller', vi: 'Bậc thầy Chưng cất' }, value: { en: 'Adam Hannett (continuing the legacy of Jim McEwan)', vi: 'Adam Hannett (kế thừa di sản của huyền thoại Jim McEwan)' } },
      { label: { en: 'Barley & Peating', vi: 'Lúa mạch & Độ khói' }, value: { en: '100% Scottish malted barley · 0 PPM (Unpeated)', vi: '100% mạch nha lúa mạch Scotland · 0 PPM (Không khói)' } },
      { label: { en: 'Bottling Standard', vi: 'Chuẩn đóng chai' }, value: { en: '50% ABV · Non-chill filtered · Natural color · 100% Islay-matured & bottled', vi: '50% ABV · Không lọc lạnh · Màu tự nhiên · Ủ & đóng chai 100% tại Islay' } },
    ],
    originStory: {
      en: [
        'Built in 1881 by brothers Robert, William, and John Gourlay Harvey using innovative concrete construction and gravity-fed Victorian machinery – including an open-top cast-iron mash tun and wooden Oregon pine washbacks still working today.',
        'Reopened independently in 2001 under Master Distiller Jim McEwan and later Head Distiller Adam Hannett, Bruichladdich put terroir, farmer partnerships, Islay-only maturation, and bottling on the island at the heart of modern Scotch, earning B Corp certification in 2020.',
      ],
      vi: [
        'Được ba anh em nhà Harvey xây dựng năm 1881 bên bờ vịnh Loch Indaal với hệ thống thiết bị thời Victoria nguyên bản – bao gồm bồn nghiền gang hở miệng và thùng lên men gỗ thông Oregon vẫn vận hành bền bỉ đến ngày nay.',
        'Tái mở cửa độc lập năm 2001 dưới sự dẫn dắt của Jim McEwan và thế hệ kế nhiệm Adam Hannett, Bruichladdich đặt triết lý thổ nhưỡng (terroir), hợp tác trực tiếp cùng nông dân trồng lúa mạch và đóng chai ngay trên đảo làm kim chỉ nam, trở thành nhà chưng cất Scotch đầu tiên đạt chứng nhận B Corp năm 2020.',
      ],
    },
    production: {
      en: [
        'Wort is mashed gently without modern high-speed rakes, fermented slowly for fruity esters, and trickle-distilled through exceptionally tall, narrow-necked spirit stills (over 6 meters high) that maximize copper contact and floral elegance.',
        'Head Distiller Adam Hannett vats individually selected Bourbon, Sherry, and wine casks batch by batch to maintain the house floral-coastal profile rather than relying on automated homogenization.',
      ],
      vi: [
        'Dịch nha được nấu chậm, lên men dài giờ để phát triển ester hương hoa trái, sau đó chưng cất nhỏ giọt qua cặp nồi đồng cao hơn 6 mét có phần cổ rất thon nhằm tối ưu tiếp xúc với đồng và giữ chất rượu thanh tao.',
        'Mỗi mẻ đóng chai được Adam Hannett tuyển lựa phối trộn thủ công từ các thùng Bourbon, Sherry và vang Pháp để giữ vững phong cách hoa cỏ miền biển đặc trưng.',
      ],
    },
    tasting: {
      nose: { en: 'Barley sugar, sea spray, mint, freshly cut wildflowers, apple blossom, lemon zest, honeyed oak', vi: 'Đường mạch nha, gió biển mặn dịu, bạc hà nhẹ, hoa đồng nội, hoa táo, vỏ chanh vàng và mật ong gỗ sồi' },
      palate: { en: 'Crisp green apple, ripe pear, sweet malted cereal, vanilla custard, and vibrant coastal minerality at 50% ABV', vi: 'Táo xanh giòn, lê chín, vị ngọt ngũ cốc mạch nha, kem vani mượt mà cùng khoáng chất biển sảng khoái ở mức 50% ABV' },
      finish: { en: 'Warming, clean, malty-sweet with a gentle Atlantic salt tang', vi: 'Ấm áp, sạch gọn, hậu ngọt mạch nha quyện chút mặn thanh từ gió biển' },
    },
    serving: {
      en: [
        'Neat in a tulip/Glencairn glass; add a splash of spring water to open sweet pear and citrus blossom notes.',
        'Makes an extraordinary Laddie Highball over crystal-clear ice with chilled soda and expressed lemon peel.',
      ],
      vi: [
        'Uống neat trong ly tulip/Glencairn; thêm vài giọt nước suối tinh khiết để mở bung tầng hương lê chín và hoa cam chanh.',
        'Cực kỳ cuốn hút khi pha Laddie Highball cùng đá già trong suốt, soda lạnh và tinh dầu vỏ chanh vàng.',
      ],
    },
    faq: [
      {
        q: { en: 'Why is The Classic Laddie bottled at 50% ABV?', vi: 'Vì sao The Classic Laddie đóng chai ở nồng độ 50% ABV?' },
        a: { en: 'At 50% ABV, natural fatty-acid esters stay dissolved without chill-filtration, preserving full oily barley mouthfeel and allowing a cloudy shimmer only if chilled.', vi: 'Ở ngưỡng 50% ABV, các hợp chất béo hương vị tự nhiên hòa tan hoàn toàn mà không cần lọc lạnh (chill-filtration), giữ trọn kết cấu sánh ngậy nguyên bản của lúa mạch.' },
      },
    ],
    relatedSlugs: ['history-of-islay-whisky', 'port-charlotte-10', 'octomore', 'the-botanist-islay-dry-gin'],
    sourceNote: { en: 'Bruichladdich Distillery Academy BDC Bible & Classic Laddie Technical Sheets', vi: 'Cẩm nang đào tạo Bruichladdich Distillery Academy & Hồ sơ kỹ thuật Classic Laddie' },
    lastUpdated: '2026-11-03',
  },
  {
    slug: 'port-charlotte-10',
    status: 'approved',
    group: 'brands',
    brandId: 'port-charlotte',
    brandIds: ['port-charlotte'],
    parentHouseId: 'bruichladdich-distillery',
    categoryLabel: { en: 'Heavily Peated Islay Single Malt · 40 PPM · 50% ABV', vi: 'Islay Single Malt khói đậm · 40 PPM · 50% ABV' },
    title: {
      en: 'Port Charlotte 10 – Heavily Peated Islay Single Malt',
      vi: 'Port Charlotte 10 – Heavily Peated Islay Single Malt',
    },
    subtitle: {
      en: '10-year-old heavily peated (40 PPM) single malt made from 100% Scottish barley and matured entirely in Port Charlotte village.',
      vi: 'Dòng Single Malt 10 năm tuổi khói đậm (40 PPM) từ 100% lúa mạch Scotland, ủ trọn vẹn tại làng Port Charlotte trên đảo Islay.',
    },
    summary: {
      en: 'Distilled at Bruichladdich Distillery using tall narrow-necked stills and malted Scottish barley peated to 40 PPM, Port Charlotte 10 balances dry floral bonfire smoke with rich vanilla, custard, and dark fruit from first-fill/second-fill American whiskey and French wine casks at 50% ABV.',
      vi: 'Được chưng cất tại Nhà chưng cất Bruichladdich bằng nồi đồng cổ cao từ mạch nha lúa mạch Scotland sấy khói ở mức 40 PPM, Port Charlotte 10 dung hòa làn khói lửa trại thanh lịch cùng vị vani, kem trứng và trái cây chín từ thùng Whiskey Mỹ và thùng vang Pháp ở nồng độ 50% ABV.',
    },
    readMinutes: 4,
    keyTakeaways: {
      en: [
        'Heavily peated to 40 PPM using 100% Scottish malted barley (Inverness-shire region), conceived, distilled, matured, and bottled on Islay.',
        'Aged a minimum of 10 years in Loch Indaal village warehouses across American whiskey casks (~65% first-fill, ~10% second-fill) and second-fill French wine casks (~25%).',
        'Tall narrow Bruichladdich stills transform heavy peat into refined, dry, floral campfire smoke rather than heavy medicinal tar; bottled at 50% ABV, natural color, non-chill filtered.',
      ],
      vi: [
        'Sấy khói đậm ở mức 40 PPM trên nền 100% lúa mạch Scotland; lên ý tưởng, chưng cất, ủ và đóng chai hoàn toàn trên đảo Islay.',
        'Ủ tối thiểu 10 năm trong kho dunnage tại làng Port Charlotte với sự kết hợp thùng Whiskey Mỹ (~65% thùng rót lần đầu, ~10% lần hai) và thùng vang Pháp rót lần hai (~25%).',
        'Cổ nồi đồng cao và hẹp biến đổi khói than bùn thành làn khói khô, thanh tao quyện hương trái cây thay vì mùi nhựa đường nồng gắt; đóng chai 50% ABV, màu tự nhiên, không lọc lạnh.',
      ],
    },
    specs: [
      { label: { en: 'Distillery & Maturation Village', vi: 'Nhà chưng cất & Nơi ủ' }, value: { en: 'Distilled at Bruichladdich · Matured in Port Charlotte, Islay', vi: 'Chưng cất tại Bruichladdich · Ủ tại làng Port Charlotte, Đảo Islay' } },
      { label: { en: 'Age & Peating Level', vi: 'Tuổi ủ & Chỉ số khói' }, value: { en: '10 Years Old · 40 PPM (Heavily Peated)', vi: '10 năm tuổi · 40 PPM (Heavily Peated)' } },
      { label: { en: 'Barley & Cask Makeup', vi: 'Lúa mạch & Cấu trúc thùng ủ' }, value: { en: '100% Scottish barley · First/second-fill American whiskey + second-fill French wine casks', vi: '100% lúa mạch Scotland · Thùng Whiskey Mỹ (lần 1 & 2) + thùng rượu vang Pháp (lần 2)' } },
      { label: { en: 'Bottling Strength', vi: 'Nồng độ & Chuẩn đóng chai' }, value: { en: '50% ABV · Non-chill filtered · Coloring free', vi: '50% ABV · Không lọc lạnh · Không phẩm màu' } },
    ],
    originStory: {
      en: [
        'Named in tribute to the historic Lochindaal Distillery (1829–1929) that once operated two miles south of Bruichladdich in the whitewashed coastal village of Port Charlotte – whose surviving stone warehouses still mature Port Charlotte casks today.',
        'Introduced as a permanent 10-year-old flagship in smoky green glass, Port Charlotte 10 demonstrates how barley provenance and high-reflux copper stills produce an "Islay barbecue on the beach" elegance.',
      ],
      vi: [
        'Đặt tên nhằm tưởng nhớ nhà chưng cất cổ Lochindaal (1829–1929) từng tọa lạc tại ngôi làng ven biển Port Charlotte cách Bruichladdich hai dặm về phía Nam – nơi những nhà kho đá cổ kính đến nay vẫn đang ủ toàn bộ các thùng rượu Port Charlotte.',
        'Với thiết kế chai thủy tinh xanh rêu trầm mặc và cam kết tuổi rượu 10 năm, Port Charlotte 10 chứng minh sự giao thoa độc đáo tạo nên phong vị thanh lịch ví như "tiệc nướng BBQ trên bờ biển Islay".',
      ],
    },
    production: {
      en: [
        'Scottish barley malted to 40 PPM phenols undergoes slow mashing and long wooden-washback fermentation before gentle trickle distillation.',
        'Combining high-vanillin first-fill American whiskey barrels with French wine casks from Bordeaux/Pauillac origins wraps coastal smoke in golden fudge, lemon meringue, and ripe orchard fruit.',
      ],
      vi: [
        'Mạch nha lúa mạch Scotland sấy than bùn đạt chuẩn 40 PPM trải qua quá trình lên men chậm trong bồn gỗ trước khi chưng cất nhỏ giọt.',
        'Sự kết hợp giữa thùng Whiskey Mỹ giàu hương vani – dừa nướng và thùng rượu vang Pháp mang lại lớp áo kẹo bơ, bánh chanh meringue và trái cây chín ôm trọn lấy làn khói biển.',
      ],
    },
    tasting: {
      nose: { en: 'Dry coastal peat smoke, sea ozone, lemon curd, golden caramel, ginger, nutmeg, oak clove', vi: 'Khói than bùn ven biển khô thanh, gió mặn đại dương, mứt chanh vàng, caramel, gừng và nhục đậu khấu' },
      palate: { en: 'Silky coconut, vanilla custard, smoked oyster shell, ripe apple, and apricot intertwined with earthy bonfire embers', vi: 'Mượt mà hương dừa nướng, kem trứng vani, vị khoáng vỏ hàu hun khói, táo chín và mơ quyện cùng than hồng ấm áp' },
      finish: { en: 'Long, smoky-sweet balance of malted barley, salted fudge, and lingering maritime peat', vi: 'Kéo dài, cân bằng tuyệt đẹp giữa vị ngọt mạch nha, kẹo bơ muối và dư vị khói biển sâu lắng' },
    },
    serving: {
      en: [
        'Serve neat at 50% ABV or add a few drops of water to lift lemon-meringue and orchard-fruit sweetness through the smoke.',
        'Outstanding smoky float on a Penicillin cocktail or stretched into a Smoky Islay Highball.',
      ],
      vi: [
        'Thưởng thức neat hoặc thêm vài giọt nước tinh khiết để đánh thức hương bánh chanh và trái cây chín phía sau làn khói.',
        'Hoàn hảo khi làm lớp rượu khói (float) cho cocktail Penicillin hoặc pha Highball khói sảng khoái.',
      ],
    },
    faq: [
      {
        q: { en: 'How does Port Charlotte smoke differ from south-coast Islay malts?', vi: 'Vị khói của Port Charlotte khác gì so với các dòng whisky bờ Nam đảo Islay?' },
        a: { en: 'Tall narrow-necked Bruichladdich stills create higher copper reflux, stripping heavy tarry phenols while preserving floral, citrusy, and sweet-campfire smoke.', vi: 'Nhờ nồi đồng cổ cao và thon tạo độ hồi lưu lớn, Port Charlotte lược bỏ các phân tử phenol nặng mùi dầu hắc/y tế, giữ lại làn khói lửa trại khô, thơm hương cam chanh và hoa cỏ.' },
      },
    ],
    relatedSlugs: ['history-of-islay-whisky', 'bruichladdich-classic-laddie', 'octomore'],
    sourceNote: { en: 'Bruichladdich Distillery Academy BDC Bible & Port Charlotte 10 Spec Sheet', vi: 'Cẩm nang đào tạo Bruichladdich Distillery Academy & Hồ sơ Port Charlotte 10' },
    lastUpdated: '2026-11-03',
  },
  {
    slug: 'octomore',
    status: 'approved',
    group: 'brands',
    brandId: 'octomore',
    brandIds: ['octomore'],
    parentHouseId: 'bruichladdich-distillery',
    categoryLabel: { en: 'Super Heavily Peated Single Malt · Cask Strength', vi: 'Single Malt siêu khói · Cask Strength nguyên bản' },
    title: {
      en: 'Octomore – The "Impossible Equation" of Super Heavily Peated Malt',
      vi: 'Octomore – "Phương trình bất khả thi" của Whisky siêu khói',
    },
    subtitle: {
      en: 'Annual numbered editions pushing malted barley past 80–300+ PPM while retaining floral poise at natural cask strength.',
      vi: 'Chuỗi phiên bản giới hạn đánh số định kỳ đẩy chỉ số khói vượt ngưỡng 80–300+ PPM nhưng vẫn giữ kết cấu mượt mà ở nồng độ thùng nguyên bản.',
    },
    summary: {
      en: 'First distilled in 2002 at Bruichladdich Distillery and named after the historic farm above Port Charlotte, Octomore defies whisky convention by combining astronomical peat levels (often 100–300+ PPM), focused young maturation (commonly 5 years), and natural cask strength (~55–61%+ ABV) into an unexpectedly poised, complex single malt.',
      vi: 'Chưng cất mẻ đầu tiên năm 2002 tại Bruichladdich và mang tên nông trại cổ phía trên làng Port Charlotte, Octomore thách thức mọi quy ước whisky truyền thống: kết hợp chỉ số phenol khói kỷ lục (thường từ 100 đến trên 300 PPM), tuổi ủ trẻ trung tập trung (phổ biến ở mốc 5 năm) và đóng chai nguyên độ thùng (Cask Strength ~55–61%+ ABV) trong một tổng thể êm mượt đáng kinh ngạc.',
    },
    readMinutes: 5,
    keyTakeaways: {
      en: [
        'World’s most heavily peated single malt series – routinely malted between ~80 PPM and over 300 PPM (such as 08.3 at 309.1 PPM).',
        'Numbered transparent edition system (.1 = 100% Scottish barley in ex-American oak benchmark; .2 = European wine/fortified cask exploration; .3 = single-farm Octomore Islay barley terroir).',
        'Bottled at natural cask strength, non-chill filtered, and coloring free in matte black architectural glass.',
      ],
      vi: [
        'Chuỗi Single Malt siêu khói đậm nhất thế giới – mạch nha thường xuyên đạt từ 80 PPM đến trên 300 PPM (tiêu biểu bản 08.3 lập mốc 309,1 PPM).',
        'Hệ thống đánh số minh bạch từng series: đuôi .1 (100% lúa mạch Scotland ủ thùng sồi Mỹ chuẩn mực), đuôi .2 (khám phá các thùng rượu vang/fortified châu Âu), đuôi .3 (100% lúa mạch trồng ngay tại nông trại Octomore trên đảo Islay).',
        'Đóng chai ở nồng độ nguyên thùng (Cask Strength), không lọc lạnh, không pha màu trong thân chai đen nhám tối giản.',
      ],
    },
    specs: [
      { label: { en: 'Distillery & Farm Name', vi: 'Nhà chưng cất & Nguồn tên' }, value: { en: 'Bruichladdich Distillery · Named after Octomore Farm (James Brown’s farm), Islay', vi: 'Bruichladdich Distillery · Đặt theo tên nông trại Octomore trên đảo Islay' } },
      { label: { en: 'Peating Spectrum', vi: 'Phổ chỉ số khói (PPM)' }, value: { en: 'Super Heavily Peated (typically 80–300+ PPM depending on numbered edition)', vi: 'Siêu khói – Super Heavily Peated (thường từ 80 đến 300+ PPM tùy phiên bản)' } },
      { label: { en: 'Edition Code System', vi: 'Quy ước mã phiên bản' }, value: { en: 'Series XX.1 (Scottish barley / American oak) · XX.2 (European casks) · XX.3 (Islay Octomore Farm barley)', vi: 'XX.1 (Lúa mạch Scotland / Sồi Mỹ) · XX.2 (Thùng vang châu Âu) · XX.3 (Lúa mạch nông trại Octomore Islay)' } },
      { label: { en: 'Bottling Standard', vi: 'Chuẩn đóng chai' }, value: { en: 'Natural Cask Strength (~55–61%+ ABV) · Non-chill filtered · Natural color', vi: 'Nồng độ nguyên thùng (Cask Strength) (~55–61%+ ABV) · Không lọc lạnh · Màu tự nhiên' } },
    ],
    originStory: {
      en: [
        'When Bruichladdich’s distillers asked maltsters in 2002 what would happen if barley were peated far beyond the ~40–55 PPM industry ceiling, conventional wisdom predicted an undrinkable ashtray. Instead, slow distillation through Bruichladdich’s tall stills yielded a luminous, fruity, intensely smoky spirit.',
        'By bottling many releases around 5 years old rather than waiting decades (which dulls phenolic punch), Octomore proved that raw ingredient quality, patient fermentation, and precise cuts matter just as much as age statements.',
      ],
      vi: [
        'Năm 2002, khi đội ngũ Bruichladdich đặt câu hỏi chuyện gì sẽ xảy ra nếu sấy khói mạch nha vượt xa ngưỡng trần 40–55 PPM của ngành whisky, giới chuyên môn từng e ngại rượu sẽ khét đắng không thể uống nổi. Thế nhưng khi đi qua nồi đồng cổ cao chưng cất siêu chậm, thành quả lại là chất rượu rạng rỡ hương trái cây quyện khói sâu đầy mê hoặc.',
        'Việc chủ động đóng chai nhiều phiên bản ở độ tuổi trẻ (thường là 5 năm tuổi) trước khi gỗ sồi làm phai nhạt cá tính phenol đã chứng minh chất lượng nguyên liệu gốc và kỹ nghệ cắt rượu tâm quan trọng không kém số năm ủ.',
      ],
    },
    production: {
      en: [
        'Heavy phenolic compounds evaporate late near the tail of a distillation run. Head Distiller Adam Hannett runs the stills at an ultra-slow trickle, capturing refined smoky phenols alongside clean pear, peach, and marzipan esters while leaving harsh feints behind.',
        'Each annual series compares terroir and wood head-to-head: .1 isolates barley and peat in ex-Bourbon/American whiskey casks, while .3 harvests single-field barley grown miles from the still at James Brown’s Octomore Farm on Islay.',
      ],
      vi: [
        'Các hợp chất phenol tạo khói có trọng lượng phân tử nặng, thường bay hơi muộn ở cuối mẻ chưng cất. Nhờ hạ nhiệt chưng cất nhỏ giọt cực chậm, nhà chưng cất thu giữ được phần khói tinh tế hòa cùng hương lê, đào và hạnh nhân mà loại bỏ sạch vị gắt.',
        'Mỗi bộ sưu tập hàng năm là một phép thử khoa học về terroir: bản .1 giữ nền sồi Mỹ thuần khiết để tôn vinh lúa mạch Scotland, còn bản .3 thu hoạch lúa mạch từ đúng một cánh đồng duy nhất tại nông trại Octomore ngay trên đảo Islay.',
      ],
    },
    tasting: {
      nose: { en: 'Billowing peat embers, sea salt, iodine, warm leather, juxtaposed with ripe peach, pear drop, and vanilla marzipan', vi: 'Khói than hồng cuộn trào, muối biển, da thuộc ấm áp đan xen bất ngờ cùng đào chín, kẹo lê và hạnh nhân vani' },
      palate: { en: 'Dense oily texture at cask strength; sweet toasted malt, citrus honey, and dark chocolate enveloped in dry, clean smoke', vi: 'Kết cấu sánh đặc ở nồng độ nguyên thùng; vị ngọt mạch nha nướng, mật ong cam chanh và chocolate đắng bao bọc trong làn khói khô, sạch vị' },
      finish: { en: 'Monumental length – coastal brine, warm ash, and sweet cereal echoing for minutes', vi: 'Độ ngân dài ấn tượng hàng phút với vị mặn biển khơi, tro ấm và hậu ngọt ngũ cốc bền bỉ' },
    },
    serving: {
      en: [
        'Serve neat in a copita or Glencairn glass in small contemplative pours; try first at natural cask strength, then add 3–5 drops of still spring water to watch stone fruit and citrus blossom expand.',
      ],
      vi: [
        'Thưởng thức từng ngụm nhỏ nguyên chất trong ly copita hoặc Glencairn; cảm nhận trước ở nồng độ thùng nguyên bản, sau đó nhỏ từ từ 3–5 giọt nước tinh khiết để khám phá lớp hương trái cây mở rộng.',
      ],
    },
    faq: [
      {
        q: { en: 'What do .1, .2, .3, and .4 mean on Octomore bottles?', vi: 'Các con số đuôi .1, .2, .3, .4 trên chai Octomore có ý nghĩa gì?' },
        a: { en: 'The number before the dot marks the annual release series (e.g. 14 or 15); .1 is 100% Scottish barley in American oak, .2 explores European wine/sherry casks, .3 uses 100% Islay barley grown on Octomore Farm, and occasional .4 editions explore virgin oak.', vi: 'Số đứng trước dấu chấm chỉ thế hệ phát hành hàng năm; đuôi .1 dùng 100% lúa mạch Scotland ủ sồi Mỹ làm hệ quy chiếu, .2 khám phá thùng vang châu Âu, .3 làm từ 100% lúa mạch trồng tại nông trại Octomore trên đảo Islay, và .4 (khi xuất hiện) thử nghiệm gỗ sồi mới (virgin oak).' },
      },
    ],
    relatedSlugs: ['history-of-islay-whisky', 'port-charlotte-10', 'bruichladdich-classic-laddie'],
    sourceNote: { en: 'Bruichladdich Distillery Academy BDC Bible & Octomore Series Archives', vi: 'Cẩm nang đào tạo Bruichladdich Distillery Academy & Hồ sơ lưu trữ Octomore' },
    lastUpdated: '2026-11-03',
  },
  {
    "slug": "sidecar",
    "status": "approved",
    "group": "recipes",
    "brandIds": [
      "remy-martin",
      "cointreau"
    ],
    "categoryLabel": {
      "en": "Cocktail Recipe · Cognac & Triple Sec",
      "vi": "Công thức Cocktail · Cognac & Triple Sec"
    },
    "title": {
      "en": "Sidecar",
      "vi": "Sidecar"
    },
    "subtitle": {
      "en": "Classic harmony of Cognac, Cointreau orange liqueur, and crisp lemon",
      "vi": "Sự hòa quyện kinh điển giữa Cognac, rượu mùi cam Cointreau và chanh vàng tươi"
    },
    "summary": {
      "en": "Classic cocktail combining Cognac, orange liqueur, and crisp fresh lemon juice.",
      "vi": "Cocktail cổ điển kết hợp Cognac, rượu mùi cam và vị chua thanh của chanh vàng."
    },
    "glassware": {
      "en": "Chilled Coupe",
      "vi": "Coupe lạnh"
    },
    "method": {
      "en": "Shake · Double strain",
      "vi": "Shake · Double strain"
    },
    "garnish": {
      "en": "Lemon twist",
      "vi": "Vỏ chanh vàng xoắn"
    },
    "ingredients": [
      {
        "amount": "45ml",
        "item": {
          "en": "Rémy Martin VSOP Cognac",
          "vi": "Rémy Martin VSOP"
        }
      },
      {
        "amount": "20ml",
        "item": {
          "en": "Cointreau Orange Liqueur",
          "vi": "Cointreau"
        }
      },
      {
        "amount": "15ml",
        "item": {
          "en": "Fresh lemon juice",
          "vi": "Nước cốt chanh vàng"
        }
      }
    ],
    "steps": {
      "vi": [
        "Cho toàn bộ nguyên liệu vào bình shaker cùng đá viên.",
        "Lắc mạnh trong 10–12 giây.",
        "Lọc mịn vào ly Coupe lạnh."
      ],
      "en": [
        "Add all ingredients into a shaker with ice cubes.",
        "Shake vigorously for 10–12 seconds.",
        "Double strain into a chilled Coupe glass."
      ]
    },
    "specs": [
      {
        "label": {
          "en": "Glassware",
          "vi": "Ly phục vụ"
        },
        "value": {
          "en": "Chilled Coupe",
          "vi": "Coupe lạnh"
        }
      },
      {
        "label": {
          "en": "Method",
          "vi": "Phương pháp"
        },
        "value": {
          "en": "Shake · Double strain",
          "vi": "Shake · Double strain"
        }
      },
      {
        "label": {
          "en": "Garnish",
          "vi": "Trang trí"
        },
        "value": {
          "en": "Lemon twist",
          "vi": "Vỏ chanh vàng xoắn"
        }
      },
      {
        "label": {
          "en": "Primary Spirits",
          "vi": "Dòng rượu chính"
        },
        "value": {
          "en": "Rémy Martin VSOP & Cointreau",
          "vi": "Rémy Martin VSOP & Cointreau"
        }
      }
    ],
    "relatedSlugs": [
      "remy-martin-vsop",
      "cointreau-lunique",
      "history-of-cognac",
      "history-of-orange-liqueur"
    ],
    "lastUpdated": "2026-11-09"
  },
  {
    "slug": "remy-ginger",
    "status": "approved",
    "group": "recipes",
    "brandIds": [
      "remy-martin"
    ],
    "categoryLabel": {
      "en": "Cocktail Recipe · Cognac Highball",
      "vi": "Công thức Cocktail · Cognac Highball"
    },
    "title": {
      "en": "Rémy Ginger",
      "vi": "Rémy Ginger"
    },
    "subtitle": {
      "en": "Effervescent highball matching vibrant Cognac notes with spicy ginger ale",
      "vi": "Dòng highball sảng khoái kết hợp sắc thái Cognac với vị cay nhẹ của ginger ale"
    },
    "summary": {
      "en": "Refreshing and straightforward highball pairing Cognac with the gentle spice of ginger ale.",
      "vi": "Highball đơn giản, tươi mát, kết hợp Cognac với vị cay nhẹ của Ginger Ale."
    },
    "glassware": {
      "en": "Highball",
      "vi": "Highball"
    },
    "method": {
      "en": "Build",
      "vi": "Build"
    },
    "garnish": {
      "en": "Lime wedge or fresh ginger slice",
      "vi": "Một múi chanh hoặc một lát gừng tươi"
    },
    "ingredients": [
      {
        "amount": "45ml",
        "item": {
          "en": "Rémy Martin VSOP Cognac",
          "vi": "Rémy Martin VSOP"
        }
      },
      {
        "amount": "90ml",
        "item": {
          "en": "Ginger Ale",
          "vi": "Ginger Ale"
        }
      }
    ],
    "steps": {
      "vi": [
        "Cho đầy đá viên vào ly Highball.",
        "Rót Rémy Martin VSOP vào ly.",
        "Rót Ginger Ale lên trên.",
        "Khuấy nhẹ một nhịp."
      ],
      "en": [
        "Fill a Highball glass with ice cubes.",
        "Pour Rémy Martin VSOP into the glass.",
        "Top with Ginger Ale.",
        "Stir gently once to integrate."
      ]
    },
    "specs": [
      {
        "label": {
          "en": "Glassware",
          "vi": "Ly phục vụ"
        },
        "value": {
          "en": "Highball",
          "vi": "Highball"
        }
      },
      {
        "label": {
          "en": "Method",
          "vi": "Phương pháp"
        },
        "value": {
          "en": "Build",
          "vi": "Build"
        }
      },
      {
        "label": {
          "en": "Garnish",
          "vi": "Trang trí"
        },
        "value": {
          "en": "Lime wedge or fresh ginger",
          "vi": "Một múi chanh hoặc một lát gừng tươi"
        }
      },
      {
        "label": {
          "en": "Primary Spirit",
          "vi": "Rượu nền"
        },
        "value": {
          "en": "Rémy Martin VSOP",
          "vi": "Rémy Martin VSOP"
        }
      }
    ],
    "relatedSlugs": [
      "remy-martin-vsop",
      "history-of-cognac"
    ],
    "lastUpdated": "2026-11-09"
  },
  {
    "slug": "botanist-apple-collins",
    "status": "approved",
    "group": "recipes",
    "brandIds": [
      "the-botanist"
    ],
    "categoryLabel": {
      "en": "Cocktail Recipe · Islay Gin Collins",
      "vi": "Công thức Cocktail · Islay Gin Collins"
    },
    "title": {
      "en": "Botanist Apple Collins",
      "vi": "Botanist Apple Collins"
    },
    "subtitle": {
      "en": "Crisp orchard apple and club soda highlighting 22 hand-foraged Islay botanicals",
      "vi": "Vị táo thanh tao cùng soda lạnh tôn vinh 22 loại thảo mộc hái tay vùng Islay"
    },
    "summary": {
      "en": "Crisp Gin Collins with apple juice, club soda, and the botanical complexity of The Botanist.",
      "vi": "Gin Collins tươi mát với táo, soda và hương thảo mộc của The Botanist."
    },
    "glassware": {
      "en": "Highball",
      "vi": "Highball"
    },
    "method": {
      "en": "Build",
      "vi": "Build"
    },
    "garnish": {
      "en": "Apple fan slice & fresh mint sprig",
      "vi": "Lát táo tươi tỉa quạt & Nhánh bạc hà"
    },
    "ingredients": [
      {
        "amount": "45ml",
        "item": {
          "en": "The Botanist Islay Dry Gin",
          "vi": "The Botanist Gin"
        }
      },
      {
        "amount": "60ml",
        "item": {
          "en": "Apple juice",
          "vi": "Nước ép táo"
        }
      },
      {
        "amount": "30ml",
        "item": {
          "en": "Soda water",
          "vi": "Soda water"
        }
      }
    ],
    "steps": {
      "vi": [
        "Cho đầy đá vào ly Highball.",
        "Rót The Botanist Gin và nước ép táo vào ly.",
        "Rót Soda water lên trên.",
        "Khuấy nhẹ."
      ],
      "en": [
        "Fill a Highball glass with ice.",
        "Pour The Botanist Gin and apple juice into the glass.",
        "Top with Soda water.",
        "Stir gently."
      ]
    },
    "specs": [
      {
        "label": {
          "en": "Glassware",
          "vi": "Ly phục vụ"
        },
        "value": {
          "en": "Highball",
          "vi": "Highball"
        }
      },
      {
        "label": {
          "en": "Method",
          "vi": "Phương pháp"
        },
        "value": {
          "en": "Build",
          "vi": "Build"
        }
      },
      {
        "label": {
          "en": "Garnish",
          "vi": "Trang trí"
        },
        "value": {
          "en": "Apple fan & fresh mint",
          "vi": "Lát táo tươi tỉa quạt & Nhánh bạc hà"
        }
      },
      {
        "label": {
          "en": "Primary Spirit",
          "vi": "Rượu nền"
        },
        "value": {
          "en": "The Botanist Islay Dry Gin",
          "vi": "The Botanist Gin"
        }
      }
    ],
    "relatedSlugs": [
      "the-botanist-islay-dry-gin",
      "history-of-gin"
    ],
    "lastUpdated": "2026-11-09"
  },
  {
    "slug": "bees-knees",
    "status": "approved",
    "group": "recipes",
    "brandIds": [
      "the-botanist"
    ],
    "categoryLabel": {
      "en": "Cocktail Recipe · Classic Gin Sour",
      "vi": "Công thức Cocktail · Classic Gin Sour"
    },
    "title": {
      "en": "Bee’s Knees",
      "vi": "Bee’s Knees"
    },
    "subtitle": {
      "en": "Prohibition-era sour harmonizing honey syrup, fresh lemon, and Islay botanicals",
      "vi": "Dòng sour kinh điển thời Cấm vận cân bằng giữa si-rô mật ong, chanh vàng và thảo mộc"
    },
    "summary": {
      "en": "Classic gin cocktail balancing honey, fresh lemon, and botanicals.",
      "vi": "Cocktail Gin cổ điển cân bằng giữa mật ong, chanh vàng và thảo mộc."
    },
    "glassware": {
      "en": "Chilled Nick & Nora",
      "vi": "Nick & Nora lạnh"
    },
    "method": {
      "en": "Shake · Double strain",
      "vi": "Shake · Double strain"
    },
    "garnish": {
      "en": "Lemon twist",
      "vi": "Vỏ chanh vàng xoắn"
    },
    "ingredients": [
      {
        "amount": "50ml",
        "item": {
          "en": "The Botanist Islay Dry Gin",
          "vi": "The Botanist Gin"
        }
      },
      {
        "amount": "20ml",
        "item": {
          "en": "Honey water (1:1 honey and warm water)",
          "vi": "Nước mật ong, pha mật ong với nước ấm theo tỷ lệ 1:1"
        }
      },
      {
        "amount": "15ml",
        "item": {
          "en": "Fresh lemon juice",
          "vi": "Nước cốt chanh vàng"
        }
      }
    ],
    "steps": {
      "vi": [
        "Cho gin, nước mật ong và nước cốt chanh vàng vào bình shaker cùng đá viên.",
        "Lắc mạnh trong 12 giây để các nguyên liệu hòa quyện.",
        "Lọc mịn vào ly Nick & Nora lạnh."
      ],
      "en": [
        "Add gin, honey water, and fresh lemon juice into a shaker with ice cubes.",
        "Shake vigorously for 12 seconds to thoroughly integrate.",
        "Double strain into a chilled Nick & Nora glass."
      ]
    },
    "specs": [
      {
        "label": {
          "en": "Glassware",
          "vi": "Ly phục vụ"
        },
        "value": {
          "en": "Chilled Nick & Nora",
          "vi": "Nick & Nora lạnh"
        }
      },
      {
        "label": {
          "en": "Method",
          "vi": "Phương pháp"
        },
        "value": {
          "en": "Shake · Double strain",
          "vi": "Shake · Double strain"
        }
      },
      {
        "label": {
          "en": "Garnish",
          "vi": "Trang trí"
        },
        "value": {
          "en": "Lemon twist",
          "vi": "Vỏ chanh vàng xoắn"
        }
      },
      {
        "label": {
          "en": "Primary Spirit",
          "vi": "Rượu nền"
        },
        "value": {
          "en": "The Botanist Islay Dry Gin",
          "vi": "The Botanist Gin"
        }
      }
    ],
    "relatedSlugs": [
      "the-botanist-islay-dry-gin",
      "history-of-gin"
    ],
    "lastUpdated": "2026-11-09"
  },
  {
    "slug": "cointreau-fizz",
    "status": "approved",
    "group": "recipes",
    "brandIds": [
      "cointreau"
    ],
    "categoryLabel": {
      "en": "Cocktail Recipe · Refreshing Long Drink",
      "vi": "Công thức Cocktail · Long Drink Thanh Mát"
    },
    "title": {
      "en": "Cointreau Fizz",
      "vi": "Cointreau Fizz"
    },
    "subtitle": {
      "en": "Vibrant orange peel essential oils balanced with fresh lime juice and sparkling soda",
      "vi": "Hương tinh dầu vỏ cam tự nhiên hòa cùng nước cốt chanh và bọt sủi soda mát lạnh"
    },
    "summary": {
      "en": "Effervescent long drink combining Cointreau, fresh citrus, and chilled soda.",
      "vi": "Long drink nhẹ nhàng kết hợp Cointreau, citrus tươi và soda lạnh."
    },
    "glassware": {
      "en": "Highball",
      "vi": "Highball"
    },
    "method": {
      "en": "Build",
      "vi": "Build"
    },
    "garnish": {
      "en": "Orange slice",
      "vi": "Lát cam"
    },
    "ingredients": [
      {
        "amount": "45ml",
        "item": {
          "en": "Cointreau L'Unique",
          "vi": "Cointreau"
        }
      },
      {
        "amount": "20ml",
        "item": {
          "en": "Fresh lime juice",
          "vi": "Nước cốt chanh"
        }
      },
      {
        "amount": "Top up",
        "item": {
          "en": "Chilled Soda water",
          "vi": "Rót đầy bằng Soda water lạnh"
        }
      }
    ],
    "steps": {
      "vi": [
        "Cho đầy đá vào ly Highball.",
        "Rót Cointreau và nước cốt chanh vào ly.",
        "Rót đầy bằng Soda water lạnh.",
        "Khuấy nhẹ."
      ],
      "en": [
        "Fill a Highball glass with ice.",
        "Pour Cointreau and fresh lime juice into the glass.",
        "Top with chilled Soda water.",
        "Stir gently."
      ]
    },
    "specs": [
      {
        "label": {
          "en": "Glassware",
          "vi": "Ly phục vụ"
        },
        "value": {
          "en": "Highball",
          "vi": "Highball"
        }
      },
      {
        "label": {
          "en": "Method",
          "vi": "Phương pháp"
        },
        "value": {
          "en": "Build",
          "vi": "Build"
        }
      },
      {
        "label": {
          "en": "Garnish",
          "vi": "Trang trí"
        },
        "value": {
          "en": "Orange slice",
          "vi": "Lát cam"
        }
      },
      {
        "label": {
          "en": "Primary Spirit",
          "vi": "Rượu nền"
        },
        "value": {
          "en": "Cointreau",
          "vi": "Cointreau"
        }
      }
    ],
    "relatedSlugs": [
      "cointreau-lunique",
      "history-of-orange-liqueur"
    ],
    "lastUpdated": "2026-11-09"
  },
  {
    "slug": "margarita",
    "status": "approved",
    "group": "recipes",
    "brandIds": [
      "cointreau"
    ],
    "categoryLabel": {
      "en": "Cocktail Recipe · The Original Margarita",
      "vi": "Công thức Cocktail · The Original Margarita"
    },
    "title": {
      "en": "Margarita",
      "vi": "Margarita"
    },
    "subtitle": {
      "en": "The iconic 1948 Acapulco recipe balancing Blanco Tequila, Cointreau, fresh lime, and salt",
      "vi": "Công thức Acapulco 1948 biểu tượng cân bằng hoàn hảo giữa Tequila, Cointreau, chanh và muối"
    },
    "summary": {
      "en": "Classic Margarita balancing Tequila, Cointreau, fresh lime, and salt.",
      "vi": "Margarita cổ điển cân bằng giữa Tequila, Cointreau, chanh tươi và muối."
    },
    "glassware": null,
    "method": {
      "en": "Shake · Strain",
      "vi": "Shake · Strain"
    },
    "garnish": {
      "en": "Fresh lime wheel & half-salted rim",
      "vi": "Lát chanh tươi & Viền muối nửa miệng ly"
    },
    "ingredients": [
      {
        "amount": "45ml",
        "item": {
          "en": "Blanco Tequila",
          "vi": "Blanco Tequila"
        }
      },
      {
        "amount": "20ml",
        "item": {
          "en": "Cointreau L'Unique",
          "vi": "Cointreau"
        }
      },
      {
        "amount": "15ml",
        "item": {
          "en": "Fresh lime juice",
          "vi": "Nước cốt chanh"
        }
      }
    ],
    "steps": {
      "vi": [
        "Quẹt chanh và viền muối một nửa miệng ly.",
        "Cho Blanco Tequila, Cointreau và nước cốt chanh vào shaker cùng đá.",
        "Lắc mạnh trong 10 giây.",
        "Lọc vào ly đã chuẩn bị."
      ],
      "en": [
        "Moisten rim with lime and salt half the rim of the glass.",
        "Add Blanco Tequila, Cointreau, and fresh lime juice into a shaker with ice.",
        "Shake vigorously for 10 seconds.",
        "Strain into the prepared glass."
      ]
    },
    "specs": [
      {
        "label": {
          "en": "Method",
          "vi": "Phương pháp"
        },
        "value": {
          "en": "Shake · Strain",
          "vi": "Shake · Strain"
        }
      },
      {
        "label": {
          "en": "Garnish",
          "vi": "Trang trí"
        },
        "value": {
          "en": "Fresh lime wheel & half-salted rim",
          "vi": "Lát chanh tươi & Viền muối nửa miệng ly"
        }
      },
      {
        "label": {
          "en": "Core Spirits",
          "vi": "Dòng rượu chính"
        },
        "value": {
          "en": "Blanco Tequila & Cointreau",
          "vi": "Blanco Tequila & Cointreau"
        }
      }
    ],
    "relatedSlugs": [
      "cointreau-lunique",
      "cointreau-noir",
      "history-of-orange-liqueur"
    ],
    "lastUpdated": "2026-11-09"
  },
  {
    "slug": "cointreau-shot",
    "status": "approved",
    "group": "recipes",
    "brandIds": [
      "cointreau"
    ],
    "categoryLabel": {
      "en": "Cocktail Recipe · Chilled Ritual Serve",
      "vi": "Công thức Cocktail · Nghi Thức Thưởng Thức Lạnh"
    },
    "title": {
      "en": "Cointreau Shot",
      "vi": "Cointreau Shot"
    },
    "subtitle": {
      "en": "Sub-zero chilled Cointreau served with coarse sea salt and a fresh lime wedge",
      "vi": "Cointreau ướp lạnh sâu dùng kèm muối hạt và một múi chanh tươi kích vị"
    },
    "summary": {
      "en": "Deep chilled Cointreau served in a shot glass with coarse salt and a fresh lime wedge.",
      "vi": "Cointreau ướp lạnh phục vụ trong ly shot cùng muối và một múi chanh."
    },
    "glassware": {
      "en": "Shot glass",
      "vi": "Ly shot"
    },
    "method": {
      "en": "Pour",
      "vi": "Pour"
    },
    "garnish": {
      "en": "Fresh lime wedge & salt rim",
      "vi": "Một múi chanh & Viền muối"
    },
    "ingredients": [
      {
        "amount": "Chilled",
        "item": {
          "en": "Cointreau (deep chilled)",
          "vi": "Cointreau, ướp thật lạnh"
        }
      },
      {
        "amount": "To taste",
        "item": {
          "en": "Coarse sea salt",
          "vi": "Muối hạt"
        }
      },
      {
        "amount": "1 wedge",
        "item": {
          "en": "Fresh lime wedge",
          "vi": "Một múi chanh"
        }
      }
    ],
    "steps": {
      "vi": [
        "Chấm muối quanh miệng ly shot.",
        "Rót Cointreau đã được ướp lạnh sâu trực tiếp vào ly.",
        "Đặt múi chanh lên miệng ly.",
        "Dùng cùng chanh và muối."
      ],
      "en": [
        "Dip the rim of the shot glass in salt.",
        "Pour deeply chilled Cointreau directly into the shot glass.",
        "Place a lime wedge on the rim of the glass.",
        "Serve alongside the lime and salt."
      ]
    },
    "specs": [
      {
        "label": {
          "en": "Glassware",
          "vi": "Ly phục vụ"
        },
        "value": {
          "en": "Shot glass",
          "vi": "Ly shot"
        }
      },
      {
        "label": {
          "en": "Method",
          "vi": "Phương pháp"
        },
        "value": {
          "en": "Pour",
          "vi": "Pour"
        }
      },
      {
        "label": {
          "en": "Garnish",
          "vi": "Trang trí"
        },
        "value": {
          "en": "Lime wedge & salt rim",
          "vi": "Một múi chanh & Viền muối"
        }
      },
      {
        "label": {
          "en": "Primary Spirit",
          "vi": "Rượu nền"
        },
        "value": {
          "en": "Cointreau L'Unique",
          "vi": "Cointreau"
        }
      }
    ],
    "relatedSlugs": [
      "cointreau-lunique",
      "history-of-orange-liqueur"
    ],
    "lastUpdated": "2026-11-09"
  },
  {
    "slug": "telmont-french-75",
    "status": "approved",
    "group": "recipes",
    "brandIds": [
      "the-botanist",
      "telmont"
    ],
    "categoryLabel": {
      "en": "Cocktail Recipe · Gin & Champagne",
      "vi": "Công thức Cocktail · Gin & Champagne"
    },
    "title": {
      "en": "Telmont French 75",
      "vi": "Telmont French 75"
    },
    "subtitle": {
      "en": "Sophisticated pairing of 22 Islay botanicals and certified organic Champagne Telmont",
      "vi": "Sự kết hợp tinh tế giữa 22 loại thảo mộc đảo Islay và Champagne Telmont hữu cơ"
    },
    "summary": {
      "en": "Elevated French 75 pairing The Botanist Gin with Champagne Telmont.",
      "vi": "Phiên bản French 75 kết hợp The Botanist Gin với Champagne Telmont."
    },
    "glassware": {
      "en": "Chilled Tulip or Coupe",
      "vi": "Tulip hoặc Coupe lạnh"
    },
    "method": {
      "en": "Shake · Double strain · Top with Champagne",
      "vi": "Shake · Double strain · Top with Champagne"
    },
    "garnish": {
      "en": "Lemon twist",
      "vi": "Vỏ chanh vàng xoắn"
    },
    "ingredients": [
      {
        "amount": "35ml",
        "item": {
          "en": "The Botanist Islay Dry Gin",
          "vi": "The Botanist Gin"
        }
      },
      {
        "amount": "15ml",
        "item": {
          "en": "Fresh lemon juice",
          "vi": "Nước cốt chanh vàng"
        }
      },
      {
        "amount": "10ml",
        "item": {
          "en": "Simple syrup",
          "vi": "Nước đường"
        }
      },
      {
        "amount": "60ml",
        "item": {
          "en": "Champagne Telmont Réserve Brut",
          "vi": "Champagne Telmont"
        }
      }
    ],
    "steps": {
      "vi": [
        "Cho The Botanist Gin, nước cốt chanh vàng và nước đường vào shaker cùng đá.",
        "Lắc mạnh trong 10 giây.",
        "Lọc mịn vào ly Tulip hoặc Coupe lạnh.",
        "Rót Champagne Telmont lên trên.",
        "Khuấy nhẹ."
      ],
      "en": [
        "Add The Botanist Gin, fresh lemon juice, and simple syrup into a shaker with ice.",
        "Shake vigorously for 10 seconds.",
        "Double strain into a chilled Tulip or Coupe glass.",
        "Top with Champagne Telmont.",
        "Stir gently."
      ]
    },
    "specs": [
      {
        "label": {
          "en": "Glassware",
          "vi": "Ly phục vụ"
        },
        "value": {
          "en": "Chilled Tulip or Coupe",
          "vi": "Tulip hoặc Coupe lạnh"
        }
      },
      {
        "label": {
          "en": "Method",
          "vi": "Phương pháp"
        },
        "value": {
          "en": "Shake · Double strain · Top with Champagne",
          "vi": "Shake · Double strain · Top with Champagne"
        }
      },
      {
        "label": {
          "en": "Garnish",
          "vi": "Trang trí"
        },
        "value": {
          "en": "Lemon twist",
          "vi": "Vỏ chanh vàng xoắn"
        }
      },
      {
        "label": {
          "en": "Primary Spirits",
          "vi": "Dòng rượu chính"
        },
        "value": {
          "en": "The Botanist Gin & Champagne Telmont",
          "vi": "The Botanist Gin & Champagne Telmont"
        }
      }
    ],
    "relatedSlugs": [
      "the-botanist-islay-dry-gin",
      "telmont-reserve-brut",
      "history-of-gin",
      "history-of-champagne"
    ],
    "lastUpdated": "2026-11-09"
  },
  {
    "slug": "classic-remy-champagne-cocktail",
    "status": "approved",
    "group": "recipes",
    "brandIds": [
      "remy-martin",
      "telmont"
    ],
    "categoryLabel": {
      "en": "Cocktail Recipe · Heritage Champagne Cocktail",
      "vi": "Công thức Cocktail · Heritage Champagne Cocktail"
    },
    "title": {
      "en": "Classic Rémy Champagne Cocktail",
      "vi": "Classic Rémy Champagne Cocktail"
    },
    "subtitle": {
      "en": "Timeless celebration cocktail matching Fine Champagne Cognac, bitters, and Champagne Telmont",
      "vi": "Cocktail lễ hội kinh điển kết hợp Fine Champagne Cognac, rượu đắng bitters và Champagne Telmont"
    },
    "summary": {
      "en": "Champagne Cocktail combining Rémy Martin VSOP, Champagne Telmont, cane sugar, and bitters.",
      "vi": "Champagne Cocktail kết hợp Rémy Martin VSOP, Champagne Telmont, đường mía và bitters."
    },
    "glassware": {
      "en": "Tulip",
      "vi": "Tulip"
    },
    "method": {
      "en": "Build",
      "vi": "Build"
    },
    "garnish": {
      "en": "Orange twist",
      "vi": "Vỏ cam xoắn"
    },
    "ingredients": [
      {
        "amount": "25ml",
        "item": {
          "en": "Rémy Martin VSOP Cognac",
          "vi": "Rémy Martin VSOP"
        }
      },
      {
        "amount": "1 cube",
        "item": {
          "en": "Cane sugar cube",
          "vi": "Một viên đường mía"
        }
      },
      {
        "amount": "2–3 dashes",
        "item": {
          "en": "Angostura Bitters",
          "vi": "2–3 giọt Angostura Bitters"
        }
      },
      {
        "amount": "90ml",
        "item": {
          "en": "Champagne Telmont Réserve Brut",
          "vi": "Champagne Telmont"
        }
      }
    ],
    "steps": {
      "vi": [
        "Nhỏ Angostura Bitters để tẩm đẫm viên đường.",
        "Thả viên đường vào đáy ly Tulip.",
        "Rót Rémy Martin VSOP trực tiếp lên viên đường.",
        "Nghiêng ly và rót từ từ Champagne Telmont lạnh vào."
      ],
      "en": [
        "Saturate the sugar cube with dashes of Angostura Bitters.",
        "Drop the soaked sugar cube into the base of the Tulip glass.",
        "Pour Rémy Martin VSOP directly over the sugar cube.",
        "Tilt the glass and slowly top with chilled Champagne Telmont."
      ]
    },
    "specs": [
      {
        "label": {
          "en": "Glassware",
          "vi": "Ly phục vụ"
        },
        "value": {
          "en": "Tulip",
          "vi": "Tulip"
        }
      },
      {
        "label": {
          "en": "Method",
          "vi": "Phương pháp"
        },
        "value": {
          "en": "Build",
          "vi": "Build"
        }
      },
      {
        "label": {
          "en": "Garnish",
          "vi": "Trang trí"
        },
        "value": {
          "en": "Orange twist",
          "vi": "Vỏ cam xoắn"
        }
      },
      {
        "label": {
          "en": "Primary Spirits",
          "vi": "Dòng rượu chính"
        },
        "value": {
          "en": "Rémy Martin VSOP & Champagne Telmont",
          "vi": "Rémy Martin VSOP & Champagne Telmont"
        }
      }
    ],
    "relatedSlugs": [
      "remy-martin-vsop",
      "telmont-reserve-brut",
      "history-of-cognac",
      "history-of-champagne"
    ],
    "lastUpdated": "2026-11-09"
  }
];
