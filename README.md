# Responsive Web Design và Tailwind CSS

## Responsive Design
Tự động điều chỉnh giao diện, kích cỡ phù hợp với độ phân giải của màn hình thiết bị hiển thị.

## Tailwind CSS
Tailwind CSS là framework CSS, cung cấp các lớp tiện ích nhưng không cung cấp các thành phần UI có sẵn. Thay vào đó, nó cung cấp các lớp CSS để tự tạo kiểu dáng cho thành phần của mình.

### Breakpoints

| Breakpoint prefix | Minimum width | CSS |
|-------------------|---------------|-----|
| sm | 640px | `@media (min-width: 640px) { ... }` |
| md | 768px | `@media (min-width: 768px) { ... }` |
| lg | 1024px | `@media (min-width: 1024px) { ... }` |
| xl | 1280px | `@media (min-width: 1280px) { ... }` |
| 2xl | 1536px | `@media (min-width: 1536px) { ... }` |

### Cài đặt Tailwind CSS

1. Tạo project React như bình thường
2. Cài đặt Tailwind CSS
### Split component: 
chia 1 conponent lớn thành nhiều component nhỏ, mỗi component nhỏ tập trung vào 1 chức năng cụ thể. => tái sử dụng code, dễ quản lý và debug
### Custom hook: 
tự tạo ra 1 hook mới với chức năng riêng biệt, tái sử dụng, tránh lặp lại code.
### Routing: 
điều hướng các trang mà không tải lại toàn bộ web.

-	npm isntall react-router-dom
-	import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  
BrowserRouter bao bọc toàn bộ ứng dụng, chịu trách nhiệm cho việc xử lý thay đổi về URL. Khi URL thay đổi, nó sẽ check URL và hiển thị component tương ứng.
Routes chứa danh sách các Route và quyết định component nào hiển thị ở URL hiện tại. Nó kiểm tra từng Route, khi URL của trình duyệt khớp với path của Route thì nó hiện component đó.
useNegative thay đổi URL và chuyển hướng người dùng đến 1 trang khác khi nhấn nút…

BrowserRouter: Bọc ứng dụng để cung cấp khả năng điều hướng.
Routes: Xác định các đường dẫn và thành phần tương ứng.
Route: Định nghĩa từng đường dẫn và thành phần.
useNavigate: Điều hướng lập trình để chuyển đổi giữa các trang. 

