// Verified cocktail recipe drafts for The Drinks Library.
// Prepared for Phát Trịnh review and publication to LIBRARY_ENTRIES in library-data.js.

export const VERIFIED_RECIPE_DRAFTS = [
  {
    slug: 'the-original-margarita',
    status: 'approved',
    group: 'recipes',
    brandId: 'cointreau',
    productSlug: 'cointreau-lunique',
    categoryLabel: {
      en: 'Official Signature Serve · Citrus Sour',
      vi: 'Công thức chính thức · Cân bằng Citrus Sour',
    },
    title: {
      en: 'The Original Margarita (1948)',
      vi: 'The Original Margarita (1948)',
    },
    subtitle: {
      en: 'The legendary golden ratio created by Margaret Sames in Acapulco.',
      vi: 'Chuẩn mực cocktail kinh điển do Margaret Sames sáng tạo tại Acapulco năm 1948.',
    },
    summary: {
      en: 'A crystalline triad of 100% agave tequila, essential sweet-and-bitter orange peel oils from Cointreau, and crisp lime juice. Cointreau acts as both flavour heart and structural balance.',
      vi: 'Bộ ba kinh điển giữa Tequila 100% agave, hương tinh dầu vỏ cam thanh khiết từ Cointreau và nước cốt chanh tươi. Cointreau đóng vai trò là cầu nối hương vị, mang lại độ cân bằng tự nhiên mà không cần si-rô đường nhân tạo.',
    },
    readMinutes: 3,
    keyTakeaways: {
      en: [
        'Golden ratio: 50 ml Tequila Blanco : 30 ml Cointreau : 20 ml Fresh Lime Juice.',
        'Use fresh lime juice strained fine to ensure clarity and sharp citric brightness.',
        'Salt only half the rim so guests can choose whether each sip carries saline contrast.',
      ],
      vi: [
        'Tỷ lệ vàng nguyên bản: 50 ml Tequila Blanco : 30 ml Cointreau : 20 ml Nước cốt chanh tươi.',
        'Luôn vắt chanh tươi và lọc mịn tép chanh để ly cocktail sáng màu và có độ chua sắc sảo.',
        'Chỉ viền muối biển mịn trên nửa miệng ly để thực khách chủ động chọn vị giác khi nhấp môi.',
      ],
    },
    specs: [
      { label: { en: 'Method', vi: 'Kỹ thuật' }, value: { en: 'Hard shake & fine strain', vi: 'Lắc lạnh dứt khoát & lọc mịn' } },
      { label: { en: 'Glassware', vi: 'Kiểu ly' }, value: { en: 'Chilled coupe or rocks glass', vi: 'Ly coupe ướp lạnh hoặc ly rocks' } },
      { label: { en: 'Ice Standard', vi: 'Chuẩn đá' }, value: { en: 'Hard solid ice cubes for shaking', vi: 'Đá viên già trong bình shaker' } },
      { label: { en: 'Garnish', vi: 'Trang trí' }, value: { en: 'Half-salt rim & fresh lime wheel', vi: 'Viền muối biển nửa miệng ly & lát chanh tươi' } },
    ],
    ingredients: [
      { item: { en: 'Cointreau L’Unique', vi: 'Cointreau L’Unique' }, amount: '30 ml' },
      { item: { en: 'Tequila Blanco (100% De Agave)', vi: 'Tequila Blanco (100% Blue Agave)' }, amount: '50 ml' },
      { item: { en: 'Fresh Lime Juice', vi: 'Nước cốt chanh tươi' }, amount: '20 ml' },
    ],
    method: {
      en: [
        'Rim half the edge of a chilled coupe glass with flaky sea salt.',
        'Combine Cointreau, Tequila Blanco, and fresh lime juice in a shaker with solid ice.',
        'Shake briskly for 10–12 seconds until exterior condensation blooms.',
        'Fine strain into the prepared coupe glass and float a fresh lime wheel.',
      ],
      vi: [
        'Viền muối biển hạt mịn lên một nửa miệng ly coupe đã ướp lạnh sẵn.',
        'Cho Cointreau, Tequila Blanco và nước cốt chanh tươi vào bình lắc cùng đá viên già.',
        'Lắc dứt khoát 10–12 giây cho đến khi sương lạnh đọng đều mặt ngoài shaker.',
        'Lọc mịn ra ly coupe đã chuẩn bị và đặt nhẹ lát chanh tươi trang trí.',
      ],
    },
    relatedSlugs: ['cointreau-lunique', 'history-of-orange-liqueur'],
    sourceNote: {
      en: 'Official Cointreau International Heritage Deck & Margaret Sames Archive',
      vi: 'Tài liệu di sản quốc tế Cointreau & Tư liệu Margaret Sames 1948',
    },
    lastUpdated: '2026-11-06',
  },
  {
    slug: 'the-classic-sidecar',
    status: 'approved',
    group: 'recipes',
    brandId: 'remy-martin',
    productSlug: 'remy-martin',
    categoryLabel: {
      en: 'Official Signature Serve · Vintage Cognac Sour',
      vi: 'Công thức chính thức · Vintage Cognac Sour',
    },
    title: {
      en: 'The Classic Sidecar',
      vi: 'The Classic Sidecar',
    },
    subtitle: {
      en: 'The roaring 1920s Parisian benchmark linking Fine Champagne Cognac and Orange Liqueur.',
      vi: 'Tuyệt tác kinh điển thập niên 1920 tại Paris giao thoa giữa Cognac Fine Champagne và Rượu mùi cam Pháp.',
    },
    summary: {
      en: 'An aristocratic sour born in post-WWI Paris. The richness of Rémy Martin Cognac harmonizes seamlessly with the crystalline citrus bite of Cointreau and crisp lemon juice.',
      vi: 'Biểu tượng của kỷ nguyên vàng cocktail tại Paris. Tầng hương sồi ấm áp và trái cây khô của Cognac Rémy Martin hòa quyện nhịp nhàng cùng tinh dầu cam tươi sáng của Cointreau và độ chua thanh thoát từ chanh vàng.',
    },
    readMinutes: 3,
    keyTakeaways: {
      en: [
        'Classic French formulation: 35 ml Rémy Martin Cognac : 30 ml Cointreau : 20 ml Fresh Lemon Juice.',
        'Express fresh lemon oils over the drink to lift the aromatics of both grape and citrus.',
        'Optional delicate sugar rim provides balanced contrast against the dry citric spine.',
      ],
      vi: [
        'Công thức Pháp chuẩn mực: 35 ml Rémy Martin Cognac : 30 ml Cointreau : 20 ml Nước cốt chanh vàng.',
        'Kẹp nhẹ vỏ chanh vàng (lemon peel) vắt tinh dầu lên bề mặt ly để đánh thức mùi hương nho và cam sồi.',
        'Viền đường cát mịn nhẹ nửa miệng ly giúp cân bằng tuyệt đối với độ chua thanh tao của thức uống.',
      ],
    },
    specs: [
      { label: { en: 'Method', vi: 'Kỹ thuật' }, value: { en: 'Shake & double strain', vi: 'Lắc lạnh & lọc kép (Double strain)' } },
      { label: { en: 'Glassware', vi: 'Kiểu ly' }, value: { en: 'Chilled coupe glass', vi: 'Ly coupe ướp lạnh' } },
      { label: { en: 'Ice Standard', vi: 'Chuẩn đá' }, value: { en: 'Large dry cubes for shaking', vi: 'Đá khối già khô ráo' } },
      { label: { en: 'Garnish', vi: 'Trang trí' }, value: { en: 'Sugar rim & orange twist', vi: 'Viền đường mịn & xoắn vỏ cam hoặc vỏ chanh' } },
    ],
    ingredients: [
      { item: { en: 'Rémy Martin 1738 Accord Royal / VSOP', vi: 'Rémy Martin 1738 Accord Royal hoặc VSOP' }, amount: '35 ml' },
      { item: { en: 'Cointreau L’Unique', vi: 'Cointreau L’Unique' }, amount: '30 ml' },
      { item: { en: 'Fresh Lemon Juice', vi: 'Nước cốt chanh vàng tươi' }, amount: '20 ml' },
    ],
    method: {
      en: [
        'Apply a delicate sugar rim to half of a chilled coupe glass.',
        'Add Rémy Martin Cognac, Cointreau, and fresh lemon juice into a shaker tin filled with hard ice.',
        'Shake vigorously for 10 seconds to achieve optimal chilling and micro-aeration.',
        'Double strain into the coupe glass and express an orange or lemon peel twist over top.',
      ],
      vi: [
        'Viền một lớp đường cát mịn thật thanh mảnh lên nửa miệng ly coupe ướp lạnh.',
        'Cho Rémy Martin Cognac, Cointreau và nước cốt chanh vàng vào shaker chứa đầy đá già.',
        'Lắc đều và dứt khoát 10 giây để đạt nhiệt độ lạnh sâu và lớp bọt khí mịn màng.',
        'Lọc kép qua rây mịn vào ly coupe, vắt nhẹ tinh dầu vỏ cam lên bề mặt.',
      ],
    },
    relatedSlugs: ['remy-martin', 'cointreau-lunique', 'history-of-cognac'],
    sourceNote: {
      en: 'Rémy Cointreau Heritage Cocktails Archive & IBA Official Cocktail Manual',
      vi: 'Hồ sơ Cocktail di sản Rémy Cointreau & Chuẩn mực IBA',
    },
    lastUpdated: '2026-11-06',
  },
  {
    slug: 'the-botanist-and-tonic',
    status: 'approved',
    group: 'recipes',
    brandId: 'the-botanist',
    productSlug: 'the-botanist-islay-dry-gin',
    categoryLabel: {
      en: 'Official Signature Serve · Highball Botanical High-Format',
      vi: 'Công thức chính thức · Highball Thảo mộc chuẩn mực',
    },
    title: {
      en: 'The Botanist & Tonic',
      vi: 'The Botanist & Tonic',
    },
    subtitle: {
      en: 'The definitive serve honoring 22 hand-foraged botanicals from the Isle of Islay.',
      vi: 'Ly cocktail chuẩn mực tôn vinh 22 loài thảo mộc thu hái thủ công trên đảo Islay.',
    },
    summary: {
      en: 'Clean, herbaceous, and intensely refreshing. The complex botanical layering of The Botanist Islay Dry Gin is opened by premium tonic effervescence, accented by rosemary and red grapefruit.',
      vi: 'Thanh sạch, tràn đầy sức sống thảo mộc và sảng khoái. Các tầng hương hoa cỏ Islay được giải phóng trọn vẹn nhờ bọt sủi của tonic cao cấp, điểm xuyết nhánh hương thảo và múi bưởi hồng tươi.',
    },
    readMinutes: 2,
    keyTakeaways: {
      en: [
        'Proportion: 50 ml The Botanist Gin : 150 ml Premium Indian Tonic Water (1:3 ratio).',
        'Use large, clear ice cubes to maintain chill while minimizing premature dilution.',
        'Slap a rosemary sprig gently before garnish to release fresh pinene and herbal oils.',
      ],
      vi: [
        'Tỷ lệ chuẩn: 50 ml The Botanist Gin : 150 ml Premium Indian Tonic Water (tỷ lệ 1:3).',
        'Sử dụng đá khối trong suốt kích thước lớn để giữ lạnh sâu và hạn chế tan nước nhanh.',
        'Vỗ nhẹ nhánh hương thảo trong lòng bàn tay trước khi thả vào ly để đánh thức tinh dầu thảo mộc.',
      ],
    },
    specs: [
      { label: { en: 'Method', vi: 'Kỹ thuật' }, value: { en: 'Build in glass over ice', vi: 'Pha trực tiếp trên đá (Build)' } },
      { label: { en: 'Glassware', vi: 'Kiểu ly' }, value: { en: 'Highball or Copa glass', vi: 'Ly Highball hoặc ly Copa chân cao' } },
      { label: { en: 'Ice Standard', vi: 'Chuẩn đá' }, value: { en: 'Large clear ice spear or cubes', vi: 'Đá khối hoặc đá thanh (Ice spear) trong suốt' } },
      { label: { en: 'Garnish', vi: 'Trang trí' }, value: { en: 'Fresh red grapefruit wedge & slapped rosemary sprig', vi: 'Múi bưởi hồng tươi & nhánh hương thảo vỗ nhẹ' } },
    ],
    ingredients: [
      { item: { en: 'The Botanist Islay Dry Gin', vi: 'The Botanist Islay Dry Gin' }, amount: '50 ml' },
      { item: { en: 'Premium Indian Tonic Water', vi: 'Nước Tonic cao cấp' }, amount: '150 ml' },
    ],
    method: {
      en: [
        'Fill a highball or copa glass to the brim with large clear ice.',
        'Pour 50 ml of The Botanist Islay Dry Gin over the ice.',
        'Top gently with 150 ml of chilled premium Indian tonic water to preserve effervescence.',
        'Stir once gently from bottom to top, then garnish with fresh grapefruit and an aromatic rosemary sprig.',
      ],
      vi: [
        'Cho đầy đá viên già trong suốt vào ly Highball hoặc ly Copa.',
        'Rót 50 ml The Botanist Islay Dry Gin trực tiếp lên đá.',
        'Rót nhẹ nhàng 150 ml tonic cao cấp ướp lạnh sát mép ly để giữ trọn bọt khí.',
        'Dùng thìa khuấy nâng nhẹ một nhịp từ đáy ly lên, cài múi bưởi hồng và nhánh hương thảo thơm nồng.',
      ],
    },
    relatedSlugs: ['the-botanist-islay-dry-gin', 'history-of-gin'],
    sourceNote: {
      en: 'The Botanist Isle of Islay Serve Manual',
      vi: 'Cẩm nang hướng dẫn phục vụ The Botanist Đảo Islay',
    },
    lastUpdated: '2026-11-06',
  },
  {
    slug: 'the-classic-laddie-highball',
    status: 'approved',
    group: 'recipes',
    brandId: 'bruichladdich',
    productSlug: 'bruichladdich-classic-laddie',
    categoryLabel: {
      en: 'Official Signature Serve · Single Malt Whisky Highball',
      vi: 'Công thức chính thức · Whisky Single Malt Highball',
    },
    title: {
      en: 'The Classic Laddie Highball',
      vi: 'The Classic Laddie Highball',
    },
    subtitle: {
      en: 'A pure showcase of unpeated Islay barley, floral fruit esters, and marine minerality.',
      vi: 'Tôn vinh chất vị lúa mạch Islay không dùng than bùn, hương hoa quả thanh mát và khoáng biển.',
    },
    summary: {
      en: 'An unpeated Islay single malt highball of extraordinary purity. Effervescent soda lifts Bruichladdich’s sweet barley sugar and green apple notes without masking its maritime salinity.',
      vi: 'Highball từ dòng Islay Single Malt không khói than bùn. Những bọt khí soda tinh khiết giải phóng hương lúa mạch ngọt ngào, táo xanh và mật ong hoa cỏ mà vẫn giữ trọn vẹn hậu vị khoáng biển Islay.',
    },
    readMinutes: 2,
    keyTakeaways: {
      en: [
        'Formula: 45 ml Bruichladdich The Classic Laddie : 135 ml Chilled Soda Water (1:3 ratio).',
        'Never shake single malt whisky; preserve delicate esters and soda carbonation with a single gentle lift.',
        'Express a wide lemon peel twist over the rim for clean citrus lift without acidity interfering.',
      ],
      vi: [
        'Tỷ lệ cân đối: 45 ml Bruichladdich The Classic Laddie : 135 ml Nước Soda ướp lạnh sâu (tỷ lệ 1:3).',
        'Tuyệt đối không lắc; chỉ nâng nhẹ đá một lần để giữ nguyên bọt ga và hương thơm thanh tao của mạch nha.',
        'Vắt nhẹ tinh dầu từ miếng vỏ chanh vàng lên miệng ly để dậy hương tươi mát mà không làm đổi cấu trúc vị.',
      ],
    },
    specs: [
      { label: { en: 'Method', vi: 'Kỹ thuật' }, value: { en: 'Build over ice & single gentle fold', vi: 'Pha trực tiếp trên đá & nâng nhẹ 1 lần' } },
      { label: { en: 'Glassware', vi: 'Kiểu ly' }, value: { en: 'Thin highball (usuhari style)', vi: 'Ly Highball thành mỏng' } },
      { label: { en: 'Ice Standard', vi: 'Chuẩn đá' }, value: { en: 'Column ice spear or hard clear cubes', vi: 'Thanh đá cột (Ice spear) trong suốt' } },
      { label: { en: 'Garnish', vi: 'Trang trí' }, value: { en: 'Expressed lemon peel twist', vi: 'Vỏ chanh vàng vắt tinh dầu' } },
    ],
    ingredients: [
      { item: { en: 'Bruichladdich The Classic Laddie', vi: 'Bruichladdich The Classic Laddie' }, amount: '45 ml' },
      { item: { en: 'Chilled Premium Soda Water', vi: 'Nước Soda cao cấp ướp lạnh' }, amount: '135 ml' },
    ],
    method: {
      en: [
        'Place a clear ice column into a chilled thin highball glass.',
        'Pour 45 ml Bruichladdich The Classic Laddie down the side of the glass.',
        'Tilt glass and pour 135 ml chilled soda water gently without disturbing the ice.',
        'Insert barspoon to the base and lift once gently. Express lemon oils over the surface.',
      ],
      vi: [
        'Đặt thanh đá trong suốt vào ly Highball mỏng đã ướp lạnh sâu.',
        'Rót 45 ml Bruichladdich The Classic Laddie men theo thành ly.',
        'Nghiêng ly và rót nhẹ 135 ml soda ướp lạnh để bảo toàn tối đa lượng bọt sủi.',
        'Luồn thìa bar xuống đáy và nâng nhẹ một lần. Vắt tinh dầu vỏ chanh vàng lên bề mặt ly.',
      ],
    },
    relatedSlugs: ['bruichladdich-classic-laddie', 'history-of-islay-whisky'],
    sourceNote: {
      en: 'Bruichladdich Brand Academy Highball Rituals',
      vi: 'Nghi thức Highball chuẩn mực từ Bruichladdich Brand Academy',
    },
    lastUpdated: '2026-11-06',
  },
];
