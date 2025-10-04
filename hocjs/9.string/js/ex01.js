//KHAI BÁO chuỗi
// let fullname = "Hoàng An";
// let welcome = `Xin chào anh em`;

// //Kiểm tra chuỗi
// console.log(typeof fullname);
// console.log(typeof welcome);

// //Kiểm tra độ dài của chuỗi
// console.log(fullname.length);
// console.log(welcome.length);

// //Lấy từng ký tự của chuỗi
// for (let i = 0; i < fullname.length; i++) {
//   console.log(fullname[i]);
// }

//Các hàm xử lý chuỗi

//1. charAt(index) --> Lấy ký tự theo index
// let str = "Hoàng An";
// console.log(str.charAt(1));

//2. charCodeAt(index) --> Lấy ký tự theo index sau để trả về mã ASCII

// let char = "đ";
// console.log(char.charCodeAt(0));

//3. concat() --> Nối chuỗi
// let str1 = "Hoàng";
// let str2 = "An";
// let str3 = "Unicode";
// let str = str1.concat(str2, str3);
// console.log(str);

//4. indexOf(sub_string): Tìm chuỗi con trong chuỗi cha, nếu tìm thấy trả về index đầu tiên tìm được, ngược lại trả về -1
// let str = "Hoàng An Hoàng An Unicode";
// console.log(str.indexOf("An"));

//5. lastIndexOf(sub_string)
// let str = "Hoàng An Hoàng An Unicode";
// console.log([...str]);

// console.log(str.lastIndexOf("An"));

//.  chuỗi cha.      chuỗi con
//6. string.includes(sub_string) --> Tìm chuỗi con trong chuỗi cha, trả về true / false

// let str = "Hoàng An Hoàng An Unicode";
// console.log(str.includes("Unicode1"));

//7. slice(start, end) --> Cắt chuỗi từ vị trí index đến end-1
// let str = "Học lập trình không khó";
// console.log([...str]);

// console.log(str.slice(1, 5));
// console.log(str.slice(1));
// console.log(str.slice(-5));

//8. repeat(number) --> Lặp chuỗi
// let str = "*";
// console.log(str.repeat(10));

//9. replace(old_string, new_string) --> Thay thế chuỗi old_string bằng new_string (Chỉ thấy chuỗi đầu tiên tìm được)
// let str = "Học lập trình tại Unicode. Học lập trình tại Unicode";
// console.log(str.replace("Unicode", "Google"));

//10. replaceAll(old_string, new_string)
// let str = "Học lập trình tại Unicode. Học lập trình tại Unicode";
// console.log(str.replaceAll("Unicode", "Google"));

//11. toUpperCase() --> Chuyển thành chữ hoa
// let str = "Học lập trình tại Unicode";
// console.log(str.toUpperCase());

//12. toLowerCase() --> Chuyển thanh chữ thường
// let str = "Học lập trình tại Unicode";
// console.log(str.toLowerCase());

//13. trim() --> Loại bỏ khoảng trắng đầu và cuối chuỗi
// let str = " Học lập trình tại Unicode ";
// console.log(str);

// console.log(str.trim());

//Bài tập: Cắt username từ email
// const email = "duc123@yahoo.com";

// const position = email.indexOf("@");
// const username = email.slice(0, position); //hoangan.web
// console.log(username);

//Bài tập: Kiểm tra độ mạnh yếu mật khẩu
// - >= 8 ký tự
// - Có ít nhất 1 ký tự hoa
// - Có ít nhất 1 ký tự thường
// - Có ít nhất 1 ký tự số
// - Có ít nhất 1 ký tự đặc biệt: !@#$%^&*()

// "!@#$%^&*".includes("$")
// const symbol = "!@#$%^&*"
// const char = "$"

// const password = "hoangan@123";
// const symbol = "!@#$%^&*";
// const number = "1234567890";
// let isLength = false;
// let countUpper = 0;
// let isLower = false;
// let isNumber = false;
// let isSymbol = false;

// // Check mật khẩu có lớn hơn 8 ký tự không
// if (password.length >= 8) {
//   isLength = true;
//   // Nếu có, thì lặp qua từng ký tự và check các điều kiện tiếp theo
//   for (let i = 0; i < password.length; i++) {
//     const char = password[i];
//     // console.log(`-----Lần check thứ ${i + 1} check chữ ${char}-----`);
//     // Lặp qua các ký tự, check các điều kiện

//     // Chữ {char} có trong khoản A-Z không?
//     if (char >= "A" && char <= "Z") {
//       isUpper = true;
//       //   console.log("Có trong A-Z trong chữ: " + char);
//     } else {
//       //   console.log("Không phải từ A-Z trong chữ: " + char);
//     }

//     // Chữ {char} có trong khoản a-z không?
//     if (char >= "a" && char <= "z") {
//       isLower = true;
//       //   console.log("Có trong a-z trong chữ: " + char);
//     } else {
//       //   console.log("Không phải từ a-z trong chữ: " + char);
//     }

//     // Chữ {char} có trong biến {number} không?
//     if (number.includes(char)) {
//       isNumber = true;
//       //   console.log("Chữ: " + char + " Có bao gồm trong: " + number);
//     } else {
//       //   console.log("Chữ: " + char + " Không bao gồm trong: " + number);
//     }

//     // Chữ {char} có trong biến {symbol} không?
//     if (symbol.includes(char)) {
//       isSymbol = true;
//       //   console.log("Chữ: " + char + " Có bao gồm trong: " + number);
//     } else {
//       //   console.log("Chữ: " + char + " Không bao gồm trong: " + symbol);
//     }
//     // console.log(`-----Hết lần check thứ ${i + 1} check chữ ${char}-----`);
//   }
// } else {
//   console.log("Không đủ 8 ký tự trở lên");
// }

// if (isLength && isNumber && isUpper && isLower && isSymbol) {
//   console.log("Mật khẩu mạnh");
// } else {
//   console.log("Mật khẩu yếu");
// }

let fullname = "tạ hoàng an"; //Tạ hoàng an

const firstChar = fullname[0];

const secondString = fullname.slice(1);

fullname = firstChar.toUpperCase() + secondString;
console.log(fullname);
