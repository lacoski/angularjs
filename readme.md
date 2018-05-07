# Tìm hiểu AnglarJS
---
## Mục lục:
- `project`: Thư mục chứa Demo
- `src`: Mã nguồn mẫu 

## Tổng quát
AngularJS là một framework mã nguồn mở dùng cho các ứng dụng web được xây dựng trên nền Javascript. Hiện tại nó vẫn đang được duy trì bởi Google và bỏi cộng đồng các cá nhân, doanh nghiệp để giải quyết các vấn đề khi xây dựng một ứng dụng web.

## Đặc trưng của AngularJS
- Phát triển dự trên Javascript
- Tạo các ứng dụng client-side theo mô hình MVC.
- Khả năng tương thích cao, tự động xử lý mã javascript để phù hợp vứi mỗi trình duyệt.
- Mã nguồn mở, miễn phí hoàn toàn và được sủ dụng rộng rãi.

## Các tính năng cơ bản
- `Scope` : là đối tượng có nhiệm vụ giao tiếp giữa controller và view của ứng dụng.
- `Controller` : xử lí dữ liệu cho đối tượng $scope, từ đây bên views sẽ sử dụng các dữ liệu trong scope để hiển thị ra tương ứng.
- `Data-binding` : tự động đồng bộ dữ liệu giữa model và view
- `Service` : là singleton object được khởi tạo 1 lần duy nhất cho mỗi ứng dụng, cung cấp các phương thức lưu trữ dữ liệu có sãn. `($http, $httpBackend, $sce, $controller, $document, $compile, $parse, $rootElement, $rootScope …..)`
- `Filter` : Lọc các tập con từ tập item trong các mảng và trả về các mảng mới.
- `Directive` : dùng để tạo các thẻ HTML riêng phục vụ những mục đích riêng. AngularJS có những directive có sẵn như ngBind, ngModel…
- `Temple` : một thành phần của view, hiển thị thông tin từ controller
- `Routing` : chuyển đổi giữa các action trong controller, qua lại giữa các view.
- `MVC & MVVM` : mô hình thiết kế để phân chia các ứng dụng thành nhiều phần khác nhau (gọi là Model, View và Controller) mỗi phần có một nhiệm vụ nhất định. AngularJS không triển khai MVC theo cách truyền thống, mà gắn liền hơn với Model-View-ViewModel.
- `Deep link` : Liên kết sâu, cho phép bạn mã hóa trạng thái của ứng dụng trong các URL để nó có thể bookmark với công cụ tìm kiếm. Các ứng dụng có thể được phục hồi lại từ các địa chỉ URL với cùng một trạng thái.
- `Dependency Injection`: AngularJS có sẵn một hệ thống con dependency injection để giúp các lập trình viên tạo ra các ứng dụng dễ phát triển, dễ hiểu và kiểm tra.

## Các components chính
- `ng-app` : định nghĩa và liên kết một ứng dụng AngularJS tới HTML.
- `ng-model` : gắn kết giá trị của dữ liệu ứng dụng AngularJS đến các điều khiển đầu vào HTML.
- `ng-bind` : gắn kết dữ liệu ứng dụng AngularJS đến các thẻ HTML.


## Ưu nhược điểm của angularJS
### Ưu điểm
- Cung cấp khả năng tạo ra các Single Page Aplication dễ dàng.
- Cung cấp khả năng data binding tới HTML, khiến cho người dùng cảm giác linh hoạt, thân thiện.
- Dễ dàng Unit test
- Dễ dàng tái sử dụng component
- Giúp lập trình viên viết code ít hơn với nhiều chức năng hơn.
- Chạy được trên các loại trình duyệt, trên cả PC lẫn mobile.

### Nhược điểm
- Không an toàn : được phát triển từ javascript cho nên ứng dụng được viết bởi AngularJS không an toàn. Nên có sự bảo mật và xác thực phía server sẽ giúp ứng dụng trở nên an toàn hơn.
- Nếu người sử dụng ứng dụng của vô hiệu hóa JavaScript thì sẽ chỉ nhìn thấy trang cơ bản.

## Nguồn

https://viblo.asia/p/angularjs-toan-tap-phan-1-angularjs-la-gi-MgNvWYZEeYx