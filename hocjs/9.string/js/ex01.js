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

//6. includes(sub_string) --> Tìm chuỗi trong chuỗi cha, trả về true / false

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
