//Closure
// let a = 10;

// const display = function (value) {
//   console.log("display");

//   let b = 20;

//   const something = () => {
//     console.log("something");
//     console.log(`a: ${a}`);
//     console.log(`b: ${b}`);
//     console.log(`value: ${value}`);
//   };

//   something();
// };
// display("Unicode");

//Hàm closure sẽ đọc được
// - Biến cục bộ của chính nó
// - Tham số của chính nó
// - Biến cục bộ của hàm cha
// - Tham số của hàm cha
// - Biến toàn cục

// const counter = () => {
//   let count = 1;
//   const increment = () => {
//     count++;
//     console.log(count);
//   };
//   return increment;
// };
// const func1 = counter();
// func1();
// func1();
// func1();

// const func2 = counter();
// func2();
// func2();

//Arrow function
// const getMessage = (a) => {
//   console.log("Xin chào anh em", a);
// };
// getMessage("Unicode");

// const sum = (a, b) => a + b;
// const total = sum(10, 20);
// console.log(total);

// const getUser = () => ({
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.co",
// });
// console.log(getUser());

//Đệ quy: Kỹ thuật gọi lại chính hàm đang định nghĩa để giải quyết 1 bài toán lặp

// const showNumber = (n) => {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };
// showNumber(10);

//Tính tổng s = 1 + 2 + 3 + ... + n
// let n = 10;
// const getTotal = (n) => {
//   if (n === 1) {
//     return 1;
//   }

//   const result = n + getTotal(n - 1);
//   return result;
// };
// console.log(getTotal(n));

//n = 10;
//total = 10 + getTotal(9)
//      = 10 + 9 + getTotal(8)
//      = 10 + 9 + 8 + getTotal(7)
//      = 10 + 9 + 8 + 7 + getTotal(6)
//      = 10 + 9 + 8 + 7 + 6 + getTotal(5)
//      = 10 + 9 + 8 + 7 + 6 + 5 + getTotal(4)
//      = 10 + 9 + 8 + 7 + 6 + 5 + 4 + getTotal(3)
//      = 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + getTotal(2)
//      = 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1

//Tính tổng các số chẵn (Dùng đệ quy)
// const getEvenTotal = (n) => {
//   if (n % 2 !== 0) {
//     n--;
//   }
//   if (n === 2) {
//     return 2;
//   }
//   return n + getEvenTotal(n - 2);
// };

// let n = 11;
// console.log(getEvenTotal(n));
