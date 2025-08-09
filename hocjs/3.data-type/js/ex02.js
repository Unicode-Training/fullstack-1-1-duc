//Ép kiểu dữ liệu
// let a = "10"; //string
// let b = 20; //number

// //Ép các kiểu khác sang số
// // a = Number(a);
// a = +a;

// let c = a + b; //string + number --> string

// console.log(c);

//Chuyển các kiểu dữ liệu sang chuỗi
// let a = 1234;
// // a = a + "";
// a = a.toString(); //Chuyển về chuỗi
// a = a.split("").reverse().join(""); //Xử lý chuỗi
// a = +a; //Chuyển về số
// console.log(a, typeof a);

//Chuển các kiểu dữ liệu sang boolean
//Quy tắc:
// - Các trường hợp sau sẽ chuyển về false: 0, "", null, undefined, NaN, false
// - Các trường sau sẽ chuyển về true: Còn lại
let a = "";
const check = Boolean(a);
console.log(check);
