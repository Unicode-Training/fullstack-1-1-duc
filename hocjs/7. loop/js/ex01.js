//Vòng lặp: Cú pháp cho phép đoạn chương trình lặp đi lặp lại
// 1. Lặp với số lần lặp xác định trước (for)
// 2. Lặp với số lần lặp không xác định trước (while)

//For
// for (let i = 1; i <= 10; i++) {
//   console.log("Xin chào anh em: " + i);
// }
// for (let i = 10; i >= 1; i--) {
//   console.log("Xin chào anh em: " + i);
// }

//Ví dụ: tính tổng s = 1 + 2 + 3 + ... + n
// let total = 0;
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   //   console.log(`${total} + ${i} = ${total + i}`);
//   total = total + i;
// }
// console.log(total);

//Bài tập: Tính n! = 1 * 2 * 3 * ... * n
// let n = 5;
// let result = 1;
// for (let i = 1; i <= n; i++) {
//   result = result * i;
// }
// console.log(result);

//Bài tập: Tính giá trị biểu thức sau
//S = 1 + 1*2 + 1*2*3 + ... + 1*2*3*...*n
// let n = 5; //1 + 1*2 + 1*2*3 + 1*2*3*4 + 1*2*3*4*5
// let tmp = 1;
// let total = 0;
// for (let i = 1; i <= n; i++) {
//   tmp = tmp * i;
//   //tmp sẽ là i!
//   total = total + tmp;
// }
// console.log(total);

//Từ khóa break: Thoát vòng lặp khi chưa chạy hết
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
// }

//Từ khóa continue: Bỏ qua lần lặp để chạy đến lần lặp tiếp theo
// let total = 0;
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   total = total + i;
// }
// console.log(total);

//Kiểm tra số nguyên tố
// - Số nguyên
// - > 1
// - Chỉ chia hết cho 1 và chính nó
let n = 49;
let isPrime = true; //Giả định n là số nguyên tố
if (n % 1 !== 0 || n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${n} là số nguyên tố`);
} else {
  console.log(`${n} không phải số nguyên tố`);
}

//Kỹ thuật đặt cờ hiệu (Cắm cờ)

//5278 --> 8725
