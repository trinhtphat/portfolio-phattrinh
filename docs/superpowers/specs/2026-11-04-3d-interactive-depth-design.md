# Thiết Kế Chi Tiết: Hiệu Ứng Chiều Sâu 3D Tương Tác & Giao Diện Mượt Mà (Landing Page)

- **Ngày khởi tạo**: 2026-11-04
- **Dự án**: Portfolio Phat Trinh (`portfolio-phattrinh/index.html`)
- **Trạng thái**: Đang chờ người dùng phê duyệt tài liệu thiết kế (Pending Approval)

---

## 1. Mục Đích & Bối Cảnh (Intent & The Why)
- **Bối cảnh**: Landing page hiện tại có thiết kế tối giản, sang trọng (dark theme ngọc lục bảo và vàng kim), nhưng các tương tác hiện thời hoàn toàn là 2D tĩnh (`translateY(-4px)` cơ bản khi hover).
- **Mục đích**: Nâng tầm trải nghiệm thị giác lên chuẩn studio cao cấp bằng cách tạo chiều sâu không gian 3D tương tác trực tiếp (3D interactive depth & layered parallax) trên các thành phần chủ chốt (Hero Portrait, Stat Cards, Pillar Cards, Portfolio Gallery Cards), giúp trang trở nên sống động, phản hồi tức thì với thao tác của người xem mà vẫn giữ nguyên tắc cốt lõi: **siêu nhẹ, không giật lag trên thiết bị di động**.

---

## 2. Mục Tiêu, Phi Mục Tiêu & Chống Mục Tiêu (Goals, Non-Goals, Anti-Goals)

### Mục tiêu (Goals)
1. **Chiều sâu 3D tương tác chân thực**: Các thẻ khi tương tác (chuột trên desktop hoặc chạm nhẹ trên mobile) sẽ nghiêng theo góc nhìn không gian 3D mượt mà (`rotateX`, `rotateY` tối đa 8–10 độ), các phần tử con (tiêu đề, huy hiệu, hình ảnh) nổi theo các trục Z khác nhau (`translateZ(12px - 24px)`).
2. **Hiệu ứng vệt sáng phản chiếu (Specular Sheen / Glare)**: Một quầng sáng radial gradient di chuyển theo tọa độ tương tác trên bề mặt kính mờ (glassmorphism), mô phỏng ánh sáng phản chiếu trên pha lê/kính cao cấp.
3. **Hiệu năng 60–120 FPS**: 
   - Chỉ tác động lên các thuộc tính GPU tối ưu (`transform` và `opacity`), không kích hoạt layout reflow hay repaint liên tục.
   - Sử dụng vòng lặp `requestAnimationFrame` kết hợp thuật toán làm mượt nội suy tuyến tính (Linear Interpolation - Lerp) để chuyển động có quán tính mượt mà, không giật cục.
4. **Tối ưu hóa tuyệt đối cho thiết bị di động**:
   - Tự động ngắt tương tác 3D khi người dùng đang thực hiện cử chỉ cuộn trang dọc (vertical scroll) để tránh xung đột thao tác hoặc khựng khung hình.
   - Hỗ trợ chuẩn `prefers-reduced-motion` cho người dùng nhạy cảm với chuyển động.

### Phi mục tiêu (Non-Goals)
- Không dựng mô hình 3D đa giác phức tạp (3D mesh / Three.js / WebGL scene) vì sẽ làm tăng kích thước tải trang thêm hàng trăm KB và gây hao pin điện thoại.
- Không thay đổi cấu trúc nội dung, bảng màu, hay thông điệp của landing page.

### Chống mục tiêu (Anti-Goals)
- **Tuyệt đối không gây giật lag (Zero Jank)**: Không dùng các thư viện cồng kềnh ngoài luồng.
- **Không phá vỡ bố cục (No Layout Shift)**: Mọi hiệu ứng 3D phải được cô lập trong bounding box hoặc container có perspective an toàn, không làm tràn trang hoặc xuất hiện thanh cuộn ngang ngoài ý muốn.

---

## 3. Ràng Buộc Kỹ Thuật (Constraints)
- Giữ nguyên cấu trúc Vanilla HTML/CSS/JS độc lập của `portfolio-phattrinh/index.html`.
- Không bổ sung npm dependencies hay thư viện CDN bên ngoài (0 external dependencies).
- Tương thích hoàn toàn với chế độ đa ngôn ngữ (EN/VI) hiện có.
- Vượt qua 100% các bài test hồi quy tự động trong `tests/test_portfolio_integration.py`.

---

## 4. Các Phương Án Đã Cân Nhắc & Lựa Chọn (Approaches)

| Phương án | Cơ chế kỹ thuật | Đánh đổi / Rủi ro | Kết quả lựa chọn |
| :--- | :--- | :--- | :--- |
| **Phương án 1 (Được chọn)** | **CSS 3D Perspective + Vanilla JS `requestAnimationFrame` + Vệt sáng Specular** | Cần viết mã toán học nội suy Lerp gọn gàng, nhưng đổi lại dung lượng chỉ ~1,5KB, 0 dependency, đạt 60–120 FPS mượt mà tuyệt đối trên cả mobile. | **ĐÃ DUYỆT (User Approved)** |
| **Phương án 2** | Thư viện chuyên dụng (Atropos.js hoặc Vanilla-Tilt.js) | Thêm 10–20KB script từ CDN; tiềm ẩn xung đột gesture cuộn trang trên Safari iOS. | Loại bỏ |
| **Phương án 3** | CSS 3D tĩnh (chỉ dùng hover/keyframes, không JS) | Cực nhẹ nhưng chuyển động đơ cứng, không phản hồi theo ngón tay/con trỏ chuột, mất tác dụng trên mobile. | Loại bỏ |

---

## 5. Quy Cách Triển Khai Chi Tiết (Implementation Details)

### 5.1. Các phần tử nhận hiệu ứng 3D (`data-depth-card`)
1. **Hero Portrait Card** (`.hero-portrait-card`): Khối chân dung chính và huy hiệu nổi `.hero-portrait-badge`.
2. **Stat Cards** (`.stat-card`): 4 thẻ số liệu tác động ngành.
3. **Pillar Cards** (`.pillar-card`): 3 trụ cột vận hành chuyên môn.
4. **Portfolio Project Cards** (`.gallery-card`): Các thẻ hình ảnh dự án thực chiến.

### 5.2. Lớp CSS 3D & Hiệu ứng Ánh sáng (CSS Layer)
- Container: `perspective: 1000px`.
- Thẻ: `transform-style: preserve-3d; will-change: transform; transition: transform 0.15s ease-out;`.
- Phần tử nổi bên trong: `transform: translateZ(16px - 24px)`.
- Lớp phủ vệt sáng: Tạo pseudo-element `::after` với `radial-gradient` trong suốt phủ trên thẻ, tọa độ tâm sáng được cập nhật linh hoạt qua biến CSS `--light-x`, `--light-y`.

### 5.3. Bộ điều khiển JavaScript Siêu nhẹ (Vanilla JS Controller)
- Lắng nghe sự kiện `pointermove` / `pointerenter` / `pointerleave` có ủy quyền sự kiện (Event Delegation) gắn trên container hoặc thẻ.
- Áp dụng kỹ thuật Lerp:
  $$\text{currentAngle} = \text{currentAngle} + (\text{targetAngle} - \text{currentAngle}) \times 0.1$$
- Tự động ngắt khi cuộn trang: Khi sự kiện `scroll` kích hoạt, tạm dừng cập nhật góc nghiêng 3D trong 150ms để ưu tiên tuyệt đối cho luồng cuộn giao diện của trình duyệt (Passive scrolling priority).

---

## 6. Kiểm Thử & Nghiệm Thu (Testing & Acceptance)
1. **Kiểm thử tự động**: Chạy toàn bộ test suites `python -m unittest discover tests` đảm bảo 4/4 bài test PASS.
2. **Kiểm thử trực quan**: Chụp ảnh màn hình đối chiếu trên Desktop (1440px) và Mobile (390px).
3. **Kiểm thử thao tác thực tế**: Kiểm tra rê chuột mượt mà trên desktop và vuốt lướt trang không khựng trên điện thoại tại `http://localhost:8080/`.
