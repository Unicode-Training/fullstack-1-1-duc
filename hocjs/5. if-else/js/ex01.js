//Thực thi khối lệnh dựa vào 1 điều kiện nào đó
/*
if (dieukien) {
    Khối lệnh
}

if (dieukien) {
    Khối lệnh nếu đúng
} else {
    Khối lệnh nếu sai    
}

if (dieukien1) {
    Khối lệnh 1
} else if (dieukien2) {
    Khối lệnh 2
} else if (dieukien3) {
    Khối lệnh 3
} else {
    Khối lệnh 4    
}
*/

// let age = 31;
// if (age > 30) {
//   console.log("Thanh niên");
// } else {
//   console.log("Không phải thanh niên");
// }

// let number = 8;
// if (number < 0) {
//   console.log("Số âm");
// } else if (number < 5) {
//   console.log("Số siêu nhỏ");
// } else if (number < 10) {
//   console.log("Số nhỏ");
// } else if (number < 15) {
//   console.log("Số trung bình");
// } else {
//   console.log("Số lớn");
// }

//Bài tập: Cho trước lương cơ bản 1 nhân viên, yêu cầu tính lương thực nhận sau khi trừ thuế
//Bảng thuế:
// - Lương <= 5tr --> 0%
// - Lương > 5tr và <= 10tr --> 3%
// - Lương > 10tr và <= 15tr --> 5%
// - Lương > 15tr --> 7%

// let salary = 20000000;

// // 1.000 - 1.000*3/100
// // 1.000 * (100 - 3) / 100

// let income;
// let tax; //Phần trăm thuế

// if (salary <= 5000000) {
//   tax = 0;
// } else if (salary <= 10000000) {
//   tax = 3;
// } else if (salary <= 15000000) {
//   tax = 5;
// } else {
//   tax = 7;
// }
// income = salary - (salary * tax) / 100;
// console.log(income);

/*
Tính tiền taxi

Viết chương trình tính tiền taxi từ số km biết trước

- Số km ≤ 1 giá 15000đ
- 1 < số km ≤ 5 giá 13500đ
- Số km > 5 giá 11000đ
- Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền
*/

// let km = 4; // 15.000 * 1 + 3 * 13.500
// let km = 7; // 1*15.000 + 4 * 13.500 + 2*11.000 --> total
// let km = 125 // (1 * 15000 + 4 * 13500 + 120 * 11000) - 10%

//Gán biến để chứa các khoảng
const THRESHOLD_1 = 1;
const THRESHOLD_2 = 5;
const THRESHOLD_3 = 120;

const PRICE_1 = 15000;
const PRICE_2 = 13500;
const PRICE_3 = 11000;

const DISCOUNT = 10;

const km = 125;
let total = 0;
if (km <= THRESHOLD_1) {
  total = PRICE_1 * km;
} else if (km <= THRESHOLD_2) {
  total = PRICE_1 * THRESHOLD_1 + (km - THRESHOLD_1) * PRICE_2;
} else {
  total =
    PRICE_1 * THRESHOLD_1 +
    (THRESHOLD_2 - THRESHOLD_1) * PRICE_2 +
    (km - THRESHOLD_2) * PRICE_3;
  if (km > THRESHOLD_3) {
    total -= (total * DISCOUNT) / 100; //Trừ discount%
  }
}
console.log(total);
