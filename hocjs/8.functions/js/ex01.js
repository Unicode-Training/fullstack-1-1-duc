//Function (Hàm)
// - Cho phép nhóm các đoạn chương trình còn thành 1 khối và đặt tên
// - Tái sử dụng khi cần

//Ví dụ: Có 1 biểu thức a + b

// function getMessage(msg) {
//   //parameter
//   //Nội dung hàm
//   //   console.log("Xin chào anh");
//   //   console.log("học js không khó");
//   console.log(msg);
// }
// getMessage("Xin chào anh"); //Argument
// getMessage("Đức");

// function getTotal(a, b) {
//   const total = a + b;
//   //Để làm trả về dữ liệu --> Dùng từ khóa return
//   //Khi từ khóa return được gọi --> Thoát hàm
//   return total;
// }
// const value = 10;
// const result = getTotal(10, 20) + value;
// console.log(result);

//Bài tập: Viết hàm thực hiện phép chia của 2 tham số
// division(a, b)
//Yêu cầu:
// - Hàm có giá trị trả về (Hiển thị log ngoài hàm)
// - Nếu số bị chia = 0  --> Trả về false

// function division(a, b = 0) {
//   if (b === 0) {
//     return false;
//   }
//   return a / b;
// }
// const result = division(10, 3);
// console.log(result);

//Bài tập: Viết hàm tính trị tuyệt đối của 1 số nguyên
//Ví dụ: getAbs(-10) --> 10
// function getAbs(n) {
//   //Code
//   if (n > 0) {
//     return n;
//   }
//   return n * -1;
// }
// const result = getAbs(10);
// console.log(result);

//Biến toàn cục
//Biến cục bộ
// let data = "Hello Kitty";
// function something() {
//   let a = 10; //Biến cục bộ
//   console.log(a);
//   //   console.log(data);
//   data = "Ahihi";
// }
// something();
// console.log(data);

//Anonymus Function (Hàm ẩn danh)
// - Không chạy độc lập
// - Gán vào 1 biến hoặc đưa vào tham số của hàm khác

//Expression Function
// const something = function () {
//   console.log("ok");
// };
// if (typeof something === "function") {
//   something();
// }

//Callback Function
// const display = function (a, b) {
//   console.log(a);
//   if (typeof b === "function") {
//     b();
//   }
// };
// const handler = function () {
//   console.log("Đức");
// };
// const getMessage = function () {
//   console.log("An");
// };
// display(10, function () {
//   console.log("Học js không khó");
// });
// const showResult = function (a, b, callback) {
//   //Code

//   if (typeof callback === "function") {
//     const total = a + b;
//     callback(total); //Lời gọi hàm chủ động
//   }
// };
// showResult(10, 20, function (data) {
//   console.log(data);
// });
