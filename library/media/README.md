# Hướng dẫn Quản lý Media (Video & Thumbnails) — The Drinks Library

Thư mục này dùng để lưu trữ các tài liệu video ngắn giới thiệu nhãn hàng, masterclass hoặc overview sản phẩm (xuất từ Gemini Notebook / NotebookLM / Video quay thực tế).

---

## 1. Cấu trúc thư mục

```text
library/media/
├── video/          # Chứa các file video định dạng .mp4 hoặc .webm
└── thumbnails/     # Chứa ảnh bìa (poster) cho video (.webp, .jpg, .png)
```

---

## 2. Tiêu chuẩn Video tối ưu Web & GitHub Pages

- **Định dạng khuyến nghị:** `.mp4` (codec H.264, âm thanh AAC) để tương thích 100% trên Safari, Chrome, iOS và Android.
- **Độ phân giải:** 720p (1280x720) hoặc 1080p (1920x1080).
- **Dung lượng tối ưu:** **5 MB – 25 MB/file** (tối đa không quá 50 MB) để người xem trên điện thoại hoặc wifi quán bar có thể tải và xem ngay lập tức mà không bị giật/lag.
- **Quy tắc đặt tên file:** Viết thường, không dấu, nối bằng dấu gạch ngang `-`.
  * Ví dụ: `remy-martin-intro.mp4`, `the-botanist-foraging.mp4`, `bruichladdich-terroir.mp4`.

---

## 3. Cách gắn Video vào bài viết trong `library/data/library-data.js`

Trong đối tượng sản phẩm hoặc bài viết, thêm trường `media`:

```javascript
{
  slug: 'remy-martin-vsop',
  // ... các thông tin khác ...
  media: {
    video: './media/video/remy-martin-intro.mp4',
    thumbnail: './media/thumbnails/remy-martin-cover.jpg',
    title: {
      en: 'Rémy Martin Heritage & Terroir Overview',
      vi: 'Tổng quan Di sản & Thổ nhưỡng Rémy Martin',
    },
    duration: '2:15'
  }
}
```
Khi khai báo trường `media.video`, trang chi tiết của sản phẩm/bài viết sẽ tự động hiển thị video player chuẩn 16:9 cao cấp.
