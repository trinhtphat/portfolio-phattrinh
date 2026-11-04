# Hướng dẫn Quản trị & Cập nhật Nội dung — The Drinks Library

Tài liệu này hướng dẫn cách thêm bài viết lịch sử phân loại (`origins`), sản phẩm mới (`brands`), hoặc công thức cocktail đã duyệt (`recipes`) vào **The Drinks Library** mà **không cần chỉnh sửa giao diện HTML hay CSS**.

---

## 1. Cấu trúc thư mục

```text
library/
├── index.html              # Khung trang tĩnh (không cần sửa khi thêm bài)
├── library.css             # Hệ thống giao diện & responsive (không cần sửa)
├── MAINTAINER_GUIDE.md     # Tài liệu hướng dẫn này
├── data/
│   └── library-data.js     # NƠI DUY NHẤT CẦN CẬP NHẬT NỘI DUNG
└── js/
    ├── boot.js             # Khởi chạy ứng dụng
    ├── library-core.js     # Bộ lọc, tìm kiếm tiếng Việt không dấu, URL state
    ├── library-app.js      # Render danh sách, trang chi tiết & đa ngôn ngữ
    └── qr-svg.js           # Bộ tạo mã QR SVG ngoại tuyến (offline)
```

---

## 2. Nguyên tắc kiểm duyệt xuất bản (`status: 'approved'`)

Mọi mục nằm trong mảng `LIBRARY_ENTRIES` của file `library/data/library-data.js` đều đi qua chốt kiểm duyệt tự động:

- Chỉ những mục có `status: 'approved'` mới hiển thị ra giao diện công khai, bộ đếm và kết quả tìm kiếm.
- Nếu đặt `status: 'draft'` hoặc `status: 'pending'`, mục đó sẽ bị loại bỏ hoàn toàn khi render. **Lưu ý bảo mật:** với website tĩnh trên GitHub Pages, mã nguồn JS vẫn có thể đọc được nếu đẩy lên repo công khai — vì vậy chỉ đưa công thức cocktail hoặc thông tin sản phẩm vào `library-data.js` sau khi đã chốt duyệt chính thức, và tuyệt đối không đưa các số liệu hay điều khoản thương mại nội bộ vào file này.

---

## 3. Cách thêm một Công thức Cocktail đã duyệt (`group: 'recipes'`)

Mở `library/data/library-data.js`, cuộn xuống cuối mảng `LIBRARY_ENTRIES` và dán một khối đối tượng theo mẫu chuẩn dưới đây:

```js
  {
    slug: 'ten-cocktail-viet-lien-khong-dau', // Tạo link trực tiếp: library/?entry=ten-cocktail-viet-lien-khong-dau
    status: 'approved',
    group: 'recipes',
    brandId: 'cointreau', // Một trong 8 ID: 'remy-martin' | 'cointreau' | 'the-botanist' | 'telmont' | 'mount-gay' | 'bruichladdich' | 'port-charlotte' | 'octomore'
    productSlug: 'cointreau-lunique', // Slug chai rượu chính để tự động gắn vào mục "Cocktail tiêu biểu" trên trang sản phẩm đó
    categoryLabel: {
      en: 'Official Signature Serve · Citrus Sour',
      vi: 'Công thức chính thức · Citrus Sour',
    },
    title: {
      en: ' Cocktail Name',
      vi: 'Tên Cocktail',
    },
    subtitle: {
      en: 'One-sentence bar summary of balance and occasion.',
      vi: 'Mô tả ngắn 1 câu về cấu trúc hương vị và dịp thưởng thức.',
    },
    summary: {
      en: 'Concise overview of the serve and why the base spirit/liqueur shines.',
      vi: 'Tổng quan ngắn gọn về ly cocktail và vai trò của rượu nền.',
    },
    keyTakeaways: {
      en: [
        'Key service checkpoint 1 (e.g. fresh juice requirement).',
        'Key service checkpoint 2 (e.g. ice quality or dilution control).',
      ],
      vi: [
        'Lưu ý thực chiến số 1 tại quầy bar.',
        'Lưu ý thực chiến số 2 về đá hoặc độ pha loãng.',
      ],
    },
    specs: [
      { label: { en: 'Method', vi: 'Kỹ thuật' }, value: { en: 'Shake & fine strain', vi: 'Lắc lạnh & lọc mịn' } },
      { label: { en: 'Glassware', vi: 'Kiểu ly' }, value: { en: 'Chilled coupe or rocks glass', vi: 'Ly coupe ướp lạnh hoặc ly rocks' } },
      { label: { en: 'Ice', vi: 'Chuẩn đá' }, value: { en: 'Cubed ice', vi: 'Đá viên già' } },
      { label: { en: 'Garnish', vi: 'Trang trí' }, value: { en: 'Citrus wheel or peel', vi: 'Lát chanh hoặc vỏ cam' } },
    ],
    ingredients: [
      { item: { en: 'Base Spirit / Liqueur', vi: 'Rượu nền / Rượu mùi' }, amount: '40 ml' },
      { item: { en: 'Fresh citrus juice', vi: 'Nước cốt chanh tươi' }, amount: '20 ml' },
    ],
    method: {
      en: [
        'Chill the serving glass thoroughly.',
        'Combine all ingredients in a shaker tin with hard cubed ice and shake briskly for 10 seconds.',
        'Strain into the prepared glass and garnish.',
      ],
      vi: [
        'Ướp lạnh sâu ly phục vụ trước khi pha.',
        'Cho toàn bộ nguyên liệu vào bình lắc cùng đá già, lắc dứt khoát khoảng 10 giây.',
        'Lọc ra ly và hoàn thiện phần trang trí.',
      ],
    },
    relatedSlugs: ['cointreau-lunique', 'history-of-orange-liqueur'],
    sourceNote: {
      en: 'Official Brand Drink Strategy Deck',
      vi: 'Tài liệu Drink Strategy chính thức của thương hiệu',
    },
    lastUpdated: '2026-11-03',
  },
```

Ngay khi lưu file:
1. Ô đếm **Công thức Cocktail** trên trang danh sách sẽ tự động tăng số lượng (không cần sửa code).
2. Trang sản phẩm tương ứng (`productSlug`) sẽ tự động hiện nút dẫn thẳng sang công thức này ở mục **Cocktail tiêu biểu / Signature Serves**.
3. Đường dẫn xem trực tiếp (`.../library/?entry=<slug>`) được hỗ trợ tự động 100% qua URL parameter.

---

## 4. Cách thêm Bài viết Lịch sử (`origins`) hoặc Chai rượu mới (`brands`)

Sao chép một mục `origins` hoặc `brands` có sẵn trong `library/data/library-data.js`, đổi `slug` thành định danh mới (chỉ dùng chữ thường `a-z`, số `0-9` và dấu gạch ngang `-`), sau đó điền các trường song ngữ `{ en: '...', vi: '...' }`:

- **Liên kết chéo hai chiều (`relatedSlugs`)**: thêm `slug` của bài lịch sử vào chai rượu và ngược lại để người đọc chuyển mượt giữa câu chuyện phân loại và sản phẩm thực tế.
- **Đồng bộ ngôn ngữ (`bio-lang`)**: trang Portfolio chính và The Drinks Library dùng chung khóa `localStorage` là `bio-lang`. Nếu một trường tạm thời chỉ mới có tiếng Anh đã xác thực (`{ en: '...' }`), hệ thống sẽ tự động hiển thị bản gốc kèm nhãn thông báo minh bạch thay vì tự suy diễn bản dịch.
- **Thêm thương hiệu mới vào thanh lọc**: nếu sau này danh mục mở rộng thêm thương hiệu thứ 9+, chỉ cần bổ sung logo vào `brand-logos/` và thêm 1 dòng khai báo trong mảng `BRANDS` ở đầu file `library/data/library-data.js`.
