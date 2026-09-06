# Brief bàn giao — Chỉnh sửa nội dung BIO PDF (Phát Trịnh)

## 1. Bối cảnh

Đây là file PDF hồ sơ năng lực (1 trang A4) của **Phát Trịnh** — Brand Ambassador, Rémy Cointreau Việt Nam. File PDF này là bản tóm tắt song song với một landing page trade-facing (HTML) đã làm trước đó; nội dung giữa 2 bản phải khớp nhau.

File đính kèm cùng brief này: `Phat-Trinh-Brand-Ambassador-Profile.pdf` (bản hiện tại).

Nhiệm vụ: **chỉnh sửa nội dung/copy** của PDF này cho thuyết phục hơn — KHÔNG đổi bố cục/thiết kế trừ khi cần để thêm nội dung mới nêu ở mục 4.

## 2. Fact nền — không được đổi, không được bịa thêm

- 10+ năm kinh nghiệm ngành F&B.
- Xuất phát điểm: service → barback → bartender → Bar Operation, trước khi lên Brand Ambassador.
- Hiện là Brand Ambassador của Rémy Cointreau tại Việt Nam.
- Đại diện đúng 7 nhãn hàng: **Rémy Martin, Cointreau, The Botanist, Bruichladdich, Octomore, Mount Gay, Telmont**. Không thêm/bớt tên nào.
- Công việc: training đội ngũ (bartender, service staff, chủ quán), guest shift, event tasting.
- Mạng lưới bar hợp tác: toàn quốc, tích lũy từ năm 2010.
- Base chính: TP. Hồ Chí Minh.
- Kênh nội dung cá nhân: Drink Note (IG); handle cá nhân @trinhtphat.
- Email, số điện thoại, link Drink Note: **hiện vẫn là placeholder**, chưa có thông tin thật — giữ nguyên dạng placeholder, không tự điền.

**Quy tắc cứng: không bịa số liệu, không bịa tên sự kiện/venue/khách hàng, không bịa testimonial.** Nếu cần ví dụ cụ thể để tăng thuyết phục mà không có data thật, để trống/đánh dấu `[cần anh Phát bổ sung]` thay vì tự nghĩ ra.

## 3. Đối tượng đọc & tông giọng

- **Đối tượng:** đối tác nhãn hàng rượu / ban tổ chức sự kiện đang cân nhắc hợp tác (đối tượng chính của bản PDF này).
- **Tông giọng:** sáng tạo, góc cạnh; kiểu "người trong nghề chia sẻ" — không giảng dạy, không academic, không sáo rỗng. Câu chữ tiếng Việt phải tự nhiên như người bản ngữ viết, tránh từ ngữ học thuật.

## 4. Vấn đề cụ thể cần sửa (từ review độc lập, đóng vai người đọc là đối tác tiềm năng)

Đọc xong bản hiện tại, đánh giá: **"muốn hợp tác, nhưng chưa đủ để chốt ngay"** — vì các lý do sau, cần khắc phục:

1. **Thiếu bằng chứng cụ thể.** Mục "Guest Shifts" / "Event Tastings" đang mô tả chung chung, không có ví dụ tên sự kiện/venue/thời gian. Đề xuất: thêm 1 dòng dạng `[cần anh Phát bổ sung: tên 1-2 sự kiện/venue tiêu biểu]` ngay dưới mục đó — không tự bịa.
2. **Thiếu bước hành động tiếp theo rõ ràng.** Ngoài khối liên hệ cuối trang, không có gợi ý "làm việc cùng nhau sẽ như thế nào". Đề xuất thêm 1-2 câu FAQ ngắn kiểu:
   - "Nhận training riêng cho từng quán?" → có/không (cần anh Phát xác nhận nội dung trả lời).
   - "Có nhận dự án ngoài Rémy Cointreau không?" → cần anh Phát xác nhận trước khi viết.
3. **Câu pull-quote và đoạn mở đầu cần giữ đúng giọng cá nhân đã chốt trước đó** — không viết lại thành văn phong "chuyên gia giảng dạy". Câu hiện tại đã đúng tông (rót một ly, nói chuyện thật) — nếu viết lại, giữ tinh thần này.

## 5. Ràng buộc kỹ thuật khi export PDF

- Bố cục hiện tại là single-page A4, canvas-based (reportlab), không dùng flow tự động — nếu thêm nội dung mới (FAQ, ví dụ sự kiện), cần tính toán lại chiều cao để **không tràn trang** (bản hiện tại đã sát mép dưới, chỉ còn ~18pt margin).
- Font tiếng Việt: phải dùng font có đầy đủ dấu (vd. DejaVu Sans hoặc tương đương) — không dùng font mặc định Helvetica vì mất dấu tiếng Việt.
- Giữ nguyên bộ logo nhãn hàng đã dùng (nền trắng đồng nhất, không dùng bản logo nền tối/lệch tông).

## 6. Yêu cầu đầu ra

- Bản PDF chỉnh sửa nội dung theo mục 4, giữ nguyên fact ở mục 2, đúng tông giọng mục 3, không vi phạm ràng buộc kỹ thuật mục 5.
- Nếu có chỗ nào cần anh Phát xác nhận thêm thông tin thật (ví dụ sự kiện, câu trả lời FAQ), đánh dấu rõ `[cần bổ sung]` thay vì tự điền.
