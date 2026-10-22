# Trung Tâm Sinh Trắc Touch Finger — Website tĩnh

Landing page giới thiệu dịch vụ **sinh trắc vân tay** tại Đà Nẵng, được xây dựng lại từ
website WordPress cũ thành **web tĩnh thuần (HTML/CSS/JS)** để deploy lên **Cloudflare Pages**.

Không cần PHP, không cần cơ sở dữ liệu — tải cực nhanh, miễn phí và an toàn.

## Cấu trúc thư mục

```
.
├── index.html              # Toàn bộ nội dung trang chủ (1 trang)
├── assets/
│   ├── css/styles.css      # Giao diện
│   ├── js/main.js          # Menu, FAQ, hiệu ứng cuộn
│   └── img/                # Logo và hình ảnh (lấy từ backup cũ)
├── _headers                # Cấu hình cache & bảo mật cho Cloudflare Pages
├── _redirects              # Chuyển hướng URL WordPress cũ -> trang chủ
├── robots.txt
└── sitemap.xml
```

## Chạy thử trên máy (local)

Vì là web tĩnh, chỉ cần một máy chủ tĩnh bất kỳ:

```bash
# Python (có sẵn trên macOS)
python3 -m http.server 8080
# Mở http://localhost:8080
```

Hoặc dùng Wrangler để giả lập đúng môi trường Cloudflare Pages:

```bash
npx wrangler pages dev .
```

## Deploy lên Cloudflare Pages

### Cách 1 — Kết nối Git (khuyến nghị)

1. Đẩy code lên GitHub (repo đã có sẵn: `daoanhviet1412-ship-it/sinhtracvantaydanang.com`):
   ```bash
   git add .
   git commit -m "Xây dựng lại website thành landing page tĩnh"
   git push origin main
   ```
2. Vào **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**.
3. Chọn repo `sinhtracvantaydanang.com`.
4. Cấu hình build:
   - **Framework preset:** `None`
   - **Build command:** *(để trống)*
   - **Build output directory:** `/`  (thư mục gốc, vì `index.html` nằm ở gốc)
5. Bấm **Save and Deploy**.

### Cách 2 — Tải trực tiếp (Direct Upload)

```bash
npx wrangler pages deploy . --project-name=sinhtracvantaydanang
```

### Gắn tên miền

Trong project Pages → **Custom domains** → thêm `sinhtracvantaydanang.com` và `www.sinhtracvantaydanang.com`.
Cloudflare sẽ tự cấp SSL miễn phí.

## Nội dung trang chủ

`index.html` được tái dựng **bám sát bản backup cũ** (trang chủ WordPress, post ID 12) — đúng thứ tự,
nội dung chữ, hình ảnh và bố cục các khối:

1. Banner (2 ảnh tự động chuyển)
2. Về chúng tôi / Sứ mệnh / Tầm nhìn
3. Sinh trắc vân tay phù hợp với ai (Trẻ em / Cá nhân / Doanh nghiệp)
4. Quy trình thực hiện (4 bước)
5. Thư viện hình ảnh
6. Câu hỏi thường gặp (6 câu)
7. Phản hồi khách hàng

Toàn bộ hình ảnh được lấy trực tiếp từ bản backup (`wp-content/uploads/2024/06/`).

## Thông tin liên hệ (lấy từ website cũ)

- **Tên:** Trung Tâm Sinh Trắc Touch Finger
- **Địa chỉ:** 48 Phạm Văn Nghị, Q. Thanh Khê, TP. Đà Nẵng
- **Hotline / Zalo:** 0762.595.662
- **Email:** Touchfingerdanang@gmail.com
