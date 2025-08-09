//Các kiểu dữ liệu
// - Không cần khai báo kiểu dữ liệu
// - Kiểm tra kiểu dữ liệu: Dùng từ khóa typeof hoặc hàm typeof()
// 1. Kiểu dữ liệu nguyên thủy (Primitive)
// - number
// - string
// - null
// - undefined
// - boolean
// - symbol
// - bigint
// 2. Kiểu dữ liệu tham chiếu (Reference)
// - object

//Number:
// let a = 10.5;
// console.log(a, typeof a);

//String:
// let a = "hoàng an";
// console.log(a, typeof a);

//Null:
// let a = null;
// console.log(a);

//Undefined:
// let a;
// console.log(a);

//Boolean:
// let a = false;
// console.log(a, typeof a);

//Symbol:
// let a = Symbol("id"); //Thường dùng để tạo ra giá trị duy nhất
// console.log(a, typeof a);

//Bigint
// let a = BigInt(1000);
// let a = 1000n;
// console.log(a, typeof a);

//Object
const user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
console.log(user);
console.log(typeof user);
