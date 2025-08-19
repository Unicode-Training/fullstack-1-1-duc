/*
while (dieukien) {
    Code
}

Khi điều kiện đúng --> Chạy nội dung trong vòng lặp, sau đó quay lại kiểm tra điều kiện rồi lặp lại cho đến khi nào điều kiện sai

do {
    Code
} while (dieukien);

Tương tự như while, tuy nhiên ở lần đầu tiên sẽ chạy trước rồi kiểm tra
*/

// let i = 100;
// while (i < 10) {
//   i++;
//   console.log(i);
// }

// let i = 100;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

//Ví dụ: Cho trước số nguyên n, đếm xem số nguyên đó có bao nhiêu chữ số

// let count = 0; //Đếm
// let n = 424312121;
// while (n > 0) {
//   const temp = n % 10;
//   n = (n - temp) / 10;
//   count++;
// }
// console.log(count);

//S = 1 + 2 + 3 + ... + 100

//Bài tập: Đảo ngược số nguyên n (Không dùng chuỗi, mảng,...)

let n = 5236732;
let result = 0;
while (n > 0) {
  const temp = n % 10; //Số hàng đơn vị
  result = result * 10 + temp; //Đưa vào output
  n = (n - temp) / 10; //Loại bỏ hàng đơn vị
}
console.log(result);
