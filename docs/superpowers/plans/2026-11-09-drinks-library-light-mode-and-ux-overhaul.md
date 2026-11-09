# The Drinks Library & Universal Light/Dark Mode Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Nâng cấp toàn diện The Drinks Library thành cẩm nang tra cứu và học nghề bách khoa F&B cho bartender mới (theo phong cách Liquor.com), đồng thời xây dựng hệ thống Light/Dark Mode kép đồng bộ trên toàn bộ website `trinhtphat.io.vn`.

**Architecture:** Sử dụng kiến trúc Web tĩnh nhẹ nhàng (Vanilla JS ES Modules + CSS Custom Properties). Hệ thống theme kép được kích hoạt từ `<head>` để ngăn ngừa hiện tượng nhấp nháy giao diện (FOUC), tự động nhận diện `prefers-color-scheme` của thiết bị và đồng bộ qua `localStorage`. Giao diện Library được bổ sung khối At-A-Glance tra cứu nhanh tại quầy, thanh điều hướng tạp chí và drawer bộ lọc tối ưu cho mobile.

**Tech Stack:** HTML5, CSS Custom Properties (Tokens), Vanilla JavaScript (ES Modules), Python (Unit & Headless Chrome Testing).

**Spec:** `C:\Users\phat.trinh\.gemini\antigravity\brain\ff178cb0-c2ae-4e0f-a46d-4e7168cb4f09\2026-11-09-drinks-library-design-spec.md`

## Global Constraints

- Không dùng thư viện CSS hay framework JS nặng ngoài (Vanilla HTML/CSS/JS thuần).
- Bảo toàn 100% 15 đường link cũ dạng URL query (`?entry=<slug>`).
- Hỗ trợ song ngữ hoàn hảo EN và VI, tuân thủ bảng thuật ngữ của skill `localize-fnb-landing-page`.
- Light Mode tuân thủ tông giấy mỹ thuật stone (`#F7F6F2`), Dark Mode tuân thủ signature obsidian (`#090B0E`).
- Thể hiện trung thực 0 công thức cocktail đang hiển thị bằng banner kiểm duyệt chuyên nghiệp, không dựng nút tải PDF ảo.
- Bộ test hồi quy Python (`py -m unittest discover -s tests`) phải chạy qua 100% không có lỗi.

## Review Focus

1. **Tránh chớp sáng/tối khi tải trang (FOUC):** Script nhận diện theme phải nằm trong `<head>` để gán ngay `data-theme` trước khi trình duyệt vẽ DOM.
2. **Tương phản văn bản Light Mode:** Mực in trên nền sáng phải đạt tối thiểu 4.5:1 (WCAG AA) và màu xanh ngọc `--accent-aqua` phải sẫm màu (`#008774`) trên nền sáng để không bị chìm.
3. **Tra cứu di động tại quầy:** Thao tác chuyển đổi bộ lọc trên màn hình nhỏ (375px) không được tràn ngang hay che lấp ô tìm kiếm.
4. **Đồng bộ trạng thái theme giữa các trang:** Khi bấm đổi theme tại trang chủ `index.html`, sang trang `library/index.html` theme phải tự động khớp và ngược lại.
5. **Hiển thị song ngữ không vỡ layout:** Các khối At-A-Glance và tiêu đề không bị tràn hay nhảy hàng khi độ dài tiếng Việt dài hơn tiếng Anh.

---

## Task Decomposition

### Task 1: Hệ thống Theme Kép (Universal Light/Dark Mode Engine)

**Files:**
- Modify: `index.html`
- Modify: `library/index.html`
- Modify: `library/library.css`
- Modify: `library/js/library-app.js`
- Test: `tests/browser_suite.js`

- [ ] **Step 1.1: Khai báo CSS Tokens cho Light & Dark Theme**
  - Trong `index.html`: Định nghĩa `:root[data-theme="light"]` với `--bg-primary: #F7F6F2`, `--bg-deep: #EFECE6`, `--bg-surface: #FFFFFF`, `--ink: #18181B`, `--ink-muted: #52525B`, `--aqua: #008774`.
  - Trong `library/library.css`: Bổ sung bộ biến màu cho `[data-theme="light"]` tương thích với toàn bộ các class `.lib-shell`, `.lib-card`, `.lib-topbar`, `.lib-spec-table`.

- [ ] **Step 1.2: Xây dựng Theme Init Script chống giật FOUC trong `<head>`**
  - Thêm đoạn script inline nhẹ trong `<head>` của cả `index.html` và `library/index.html`:
    ```javascript
    (function() {
      const saved = localStorage.getItem('theme-pref');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = saved || (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    })();
    ```

- [ ] **Step 1.3: Thêm Theme Toggle Button trên Navigation Header**
  - Trong `index.html`: Thêm nút bấm chuyển theme (biểu tượng Mặt trời ☀️ / Mặt trăng 🌙 bằng SVG sắc nét) vào Mobile Topbar và Sidebar Desktop, ngay cạnh bộ chuyển cờ.
  - Trong `library/js/library-app.js`: Thêm nút theme toggle vào `lib-topbar` bên cạnh `lib-topbar-lang`.
  - Bổ sung logic click: Đổi giá trị `data-theme` giữa `light` và `dark`, lưu vào `localStorage.setItem('theme-pref', newTheme)`.

- [ ] **Step 1.4: Viết Unit Test kiểm chứng chuyển theme**
  - Trong `tests/browser_suite.js`: Thêm test case xác nhận `data-theme` khởi tạo đúng theo OS/localStorage và cập nhật tức thì khi click nút toggle.
  - Chạy `py -m unittest discover -s tests` để đảm bảo test pass.

- [ ] **Step 1.5: Commit Task 1**
  - Commit với thông điệp: `feat: universal light/dark theme engine with OS preference and persistence`

---

### Task 2: Khối At-A-Glance Box & Thanh Điều Hướng Bách Khoa (Liquor.com Style)

**Files:**
- Modify: `library/js/library-app.js`
- Modify: `library/library.css`
- Modify: `library/data/library-data.js`
- Test: `tests/browser_suite.js`

- [ ] **Step 2.1: Bổ sung cấu trúc dữ liệu At-A-Glance (Quick Specs)**
  - Cập nhật hàm render trong `library/js/library-app.js` để trích xuất các thông số thực chiến cốt lõi: ABV, PPM (nếu có), Thổ nhưỡng/Vùng sản xuất, Kiểu ly, Chuẩn đá già, Tỷ lệ Signature Serve.
  - Bổ sung nhãn song ngữ tương ứng trong `LIBRARY_META.sectionHeadings` (`atAGlance: { en: 'At-A-Glance · Quick Bar Specs', vi: 'Thông số thực chiến tại quầy' }`).

- [ ] **Step 2.2: Thiết kế giao diện At-A-Glance Box trong trang chi tiết bài viết**
  - Đặt khối At-A-Glance nổi bật ngay dưới tiêu đề và tóm tắt ngắn của bài viết.
  - Sử dụng bố cục lưới pill & highlight badge (`.lib-glance-grid`) hiển thị rõ ràng thông số trong cả nền sáng và nền tối.

- [ ] **Step 2.3: Tinh chỉnh Top Navigation Tabs theo phong cách Tạp chí F&B**
  - Tái cấu trúc nhóm hiển thị trên thanh danh mục:
    * `ALL` (Tất cả mục)
    * `THE BASICS & TERROIR` (Cội nguồn & Nền tảng)
    * `SPIRITS & HOUSES` (Thương hiệu & Dòng rượu di sản)
    * `COCKTAIL RECIPES` (Công thức & Chuẩn pha chế)
  - Thêm hiệu ứng gạch chân hairline tinh xảo khi active tab.

- [ ] **Step 2.4: Kiểm thử hiển thị At-A-Glance và Category Tabs**
  - Chạy kiểm thử tự động `py -m unittest discover -s tests`.
  - Xác nhận các bài viết hiển thị đầy đủ thông số và không bị vỡ layout trên desktop và mobile.

- [ ] **Step 2.5: Commit Task 2**
  - Commit với thông điệp: `feat: at-a-glance speed cheat-sheet box and liquor.com editorial tabs`

---

### Task 3: Mobile Bottom Drawer Bộ Lọc & Banner Kiểm Duyệt Công Thức Minh Bạch

**Files:**
- Modify: `library/js/library-app.js`
- Modify: `library/library.css`
- Test: `tests/browser_suite.js`

- [ ] **Step 3.1: Nâng cấp Banner Trạng thái 0 Công thức Cocktail (Transparent Queue)**
  - Thay thế khối thông báo pending đơn điệu bằng banner chuyên môn cao cấp:
    * Tiêu đề: *Công thức Cocktail chính thức đang trong bước đối chiếu chuẩn mực*.
    * Nội dung giải thích 4 chốt kiểm duyệt: Tỷ lệ ml vàng, chuẩn đá khối/đá già, dáng ly chuẩn vị, kỹ thuật lắc/khuấy và nghi thức viền ly.
    * Gợi ý liên kết trực tiếp tới các bài viết nền tảng về Cointreau, The Botanist, Rémy Martin và Bruichladdich.

- [ ] **Step 3.2: Xây dựng Bottom Drawer / Quick Filter trên Mobile**
  - Khi xem trên màn hình điện thoại (< 768px), bổ sung nút "Lọc nội dung & Nhà rượu" nổi bật.
  - Khi bấm, mở một panel kéo lên từ cạnh dưới (Bottom Drawer) với các nút chọn nhanh phân loại nội dung và danh sách 8 nhà rượu.

- [ ] **Step 3.3: Tối ưu tương thích cảm ứng (Touch Targets)**
  - Đảm bảo tất cả các nút lọc, nút chuyển ngôn ngữ, nút theme toggle có diện tích chạm tối thiểu `44x44px` theo chuẩn WCAG dành cho thiết bị di động.

- [ ] **Step 3.4: Chạy bộ kiểm thử tự động và headless Chrome**
  - Chạy `py -m unittest discover -s tests`.

- [ ] **Step 3.5: Commit Task 3**
  - Commit với thông điệp: `feat: mobile filter drawer and verified cocktail recipe review banner`

---

### Task 4: Nghiệm Thu Thị Giác (Taste Design Check) & Đồng Bộ Production

**Files:**
- Review: `index.html`
- Review: `library/index.html`
- Review: `library/library.css`
- Test: Toàn bộ suite kiểm thử

- [ ] **Step 4.1: Kiểm tra tương phản màu sắc & Visual Polish**
  - Đo độ tương phản màu sắc của Light Mode trên nền `#F7F6F2`: Đảm bảo toàn bộ chữ thường đạt trên `4.5:1`, tiêu đề đạt trên `7:1`.
  - Kiểm tra các đường viền hairline không bị mờ nhạt hoặc quá đậm.

- [ ] **Step 4.2: Chạy kiểm thử hồi quy toàn diện**
  - Kiểm tra 15 link URL cũ (`?entry=history-of-cognac`, `?entry=octomore`, etc.) đảm bảo hoạt động chính xác.
  - Chạy `py -m unittest discover -s tests` với kết quả 100% OK.

- [ ] **Step 4.3: Báo cáo kết quả và chuẩn bị triển khai lên GitHub Pages**
  - Tổng kết các thay đổi, cung cấp link localhost để Phát nghiệm thu trực quan trước khi đẩy lên domain `trinhtphat.io.vn`.
