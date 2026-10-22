# Touch Finger — Website redesign preview

Website tĩnh HTML/CSS/JavaScript của Trung Tâm Sinh Trắc Touch Finger tại Đà Nẵng.

## Cấu trúc

- `index.html`: nội dung trang chủ và metadata SEO.
- `assets/css/styles.css`: giao diện gốc.
- `assets/css/redesign.css`: lớp giao diện redesign responsive.
- `assets/js/main.js`: menu, FAQ và hiệu ứng cuộn.
- `assets/img/`: ảnh, logo, ảnh hoạt động và ảnh phản hồi gốc.
- `vercel.json`: cấu hình triển khai trên Vercel.

## Chạy thử local

```bash
python3 -m http.server 8080
```

Sau đó mở `http://localhost:8080`.

## Deploy trên Vercel

1. Import repository `daoanhviet1412-ship-it/touch-finger-redesign` vào Vercel.
2. Framework Preset: **Other** hoặc **None**.
3. Build Command: để trống.
4. Output Directory: để trống hoặc dùng thư mục gốc `.`.
5. Deploy và kiểm tra Preview URL trước khi gắn domain production.

Đây là website tĩnh nên không cần lệnh build. Không chuyển domain production cho đến khi bản Preview được duyệt.

## SEO và domain

Canonical, Open Graph URL, structured data, robots.txt và sitemap.xml hiện vẫn trỏ đến domain production `https://sinhtracvantaydanang.com/` để bản Preview không thay thế địa chỉ chính thức trên công cụ tìm kiếm. Chỉ cập nhật khi chủ sở hữu quyết định đổi domain.

## Nội dung và tài nguyên

Ảnh hoạt động, ảnh phản hồi khách hàng và tên hiển thị của khách hàng được giữ nguyên. Các thay đổi giao diện và nội dung tiếp thị cần được duyệt trên Preview trước khi chuyển domain.
