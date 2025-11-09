//Phương thức
// => key trong object có giá trị là hàm

//Từ khóa this: Đại diện cho object gọi phương thức
//Hay còn gọi là context
//Lưu ý: this không hỗ trợ trong arrow function
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getName: function () {
//     // console.log(this);
//     return this.name;
//   },
//   getInfo: function () {
//     // const _this = this;
//     return {
//       getEmail: () => {
//         console.log(this);
//         return this.email;
//       },
//     };
//   },
// };
// console.log(user.name);
// console.log(user.getName());
// console.log(user.getEmail());
// console.log(user.getInfo().getEmail());

//Prototype: Object để giải quyết bài toán kế thừa thuộc tính, phương thức
// Object.prototype.message = "Unicode";
// Object.prototype.getMessage = function () {
//   return "Ok chưa?";
// };
// const a = {
//   x: 10,
// };
// const b = {
//   y: 20,
// };

// console.log(a.message);
// console.log(b.message);
// console.log(a.getMessage());
// console.log(b.getMessage());

// const myArr = [1, 2, 3];
// console.log(myArr);
// console.log(myArr.message);

// const fullname = "Hoàng An"; //String --> Object
// console.log(fullname.message);

// const age = 33; //Number --> Object
// console.log(age.message);

// const check = false; //Boolean --> Object
// console.log(check.message);

//Constructor --> Tạo ra 1 khuôn mẫu dùng để mô tả 1 object (Giống như 1 bản thiết kế)
//Ví dụ: Cần tạo 3 object có thuộc tính và phương thức tương tự nhau

//1. Function
// function Person(name, email) {
//   this.name = name; //Thuộc tính
//   this.email = email; //Thuộc tính
//   this.getName = function () {
//     return this.name;
//   };
//   this.getEmail = function () {
//     return this.email;
//   };
// }
// //Tạo object
// const person1 = new Person("User 1", "user1@gmail.com");
// console.log(person1);
// const person2 = new Person("User 2", "user2@gmail.com");
// console.log(person2);

//2. Class
// class Person {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   getName() {
//     return this.name;
//   }
//   getEmail() {
//     return this.email;
//   }
// }

// const person1 = new Person("User 1", "user1@gmail.com");
// console.log(person1);
// console.log(person1.getName());

// const person2 = new Person("User 2", "user2@gmail.com");
// console.log(person2);

//Bài tập
// - Tạo class User có 3 thuộc tính:
// + name
// + email
// + userList --> Mảng chứa nhiều users

// - Viết phương thức:
// + add(name, email) --> Thêm vào mảng userList
// + all() --> Trả về mảng userList
// class User {
//   constructor() {
//     this.name = null;
//     this.email = null;
//     this.userList = [];
//   }
//   add(name, email) {
//     this.name = name;
//     this.email = email;
//     this.userList.push({
//       name: this.name,
//       email: this.email,
//     });
//   }
//   all() {
//     return this.userList;
//   }
// }

// //Test
// const user = new User();
// user.add("User 1", "user1@gmail.com");
// user.add("User 2", "user2@gmail.com");
// user.add("User 3", "user3@gmail.com");

// const result = user.all();
// console.log(result);
/*
[
    {
        name: "User 1",
        email: "user1@gmail.com"
    },
    {
        name: "User 2",
        email: "user2@gmail.com"
    },
    {
        name: "User 3",
        email: "user3@gmail.com"
    }
]
*/

//Bài tập
// class Calculator {
//   constructor(value) {
//     this.value = value;
//   }
//   add(value) {
//     this.value += value;
//     return this;
//   }
//   minus(value) {
//     this.value -= value;
//     return this;
//   }
//   multi(value) {
//     this.value *= value;
//     return this;
//   }
//   divi(value) {
//     this.value /= value;
//     return this;
//   }
//   get() {
//     return this.value;
//   }
// }

// const result = new Calculator(10).add(5).minus(2).multi(6).divi(3).get();
// console.log(result);

// const users = [
//   {
//     id: 1,
//     name: "User1",
//     email: "user1@gmail.com",
//   },
//   {
//     id: 2,
//     name: "User2",
//     email: "user2@gmail.com",
//   },
//   {
//     id: 3,
//     name: "User3",
//     email: "user3@gmail.com",
//   },
// ];
//Xóa email của user có id = 2
/*
[
  {
    id: 1,
    name: "User1",
    email: "user1@gmail.com",
  },
  {
    id: 2,
    name: "User2",
  },
  {
    id: 3,
    name: "User3",
    email: "user3@gmail.com",
  },
];
*/

// const newUser = users.map((user) => {
//   const userClone = Object.assign({}, user);
//   if (userClone.id === 2) {
//     delete userClone.email;
//   }
//   return userClone;
// });
// console.log(newUser);
// console.log(users);

//So sánh object
// - Object là kiểu tham chiếu --> Không so sánh trực tiếp
// - So sánh giá trị của từng key

// const obj1 = {
//   x: 100,
//   y: 10,
//   meta: {
//     z: 20,
//     test: {
//       name: "An",
//     },
//   },
// };
// const obj2 = {
//   x: 100,
//   y: 10,
//   meta: {
//     z: 20,
//     test: {
//       name: "An",
//     },
//   },
// };
// const isObject = (obj) => {
//   return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
// };
// const compareObj = (obj1, obj2) => {
//   let check = true;
//   for (let key in obj1) {
//     if (isObject(obj1[key]) && isObject(obj2[key])) {
//       return compareObj(obj1[key], obj2[key]);
//     }
//     if (obj1[key] !== obj2[key]) {
//       check = false;
//       break;
//     }
//   }
//   return check;
// };
// console.log(compareObj(obj1, obj2));

//Sao chép object
// const a = {
//   name: "An",
//   email: "hoangan@gmail.com",
//   meta: {
//     value: "Đức",
//   },
// };
// const isObject = (obj) => {
//   return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
// };
// const deepCloneObj = (obj) => {
//   const newObj = {};
//   for (let key in obj) {
//     if (isObject(obj[key])) {
//       newObj[key] = deepCloneObj(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// };
// const b = deepCloneObj(a);
// b.name = "An Unicode";
// b.meta.value = "Đức ok";
// console.log(a);
// console.log(b);

// let c = 10;
// let d = c;
// d = 30;
// console.log(c);
// console.log(d);

//Sao chép mảng
// const users = ["An", "Đức", ["Dũng"]];
// // const customers = users;
// const deepCloneArray = (arr) => {
//   const newArr = [];
//   for (let value of arr) {
//     if (Array.isArray(value)) {
//       newArr.push(deepCloneArray(value));
//     } else {
//       newArr.push(value);
//     }
//   }
//   return newArr;
// };
// const customers = deepCloneArray(users);
// customers[0] = "An Unicode";
// customers[customers.length - 1][0] = "Dũng ok";
// console.log(users);
// console.log(customers);

//cách khác copy object, array (sâu)
// - Chuyển object, array về định dạng json (Chuỗi dùng để đặc tả dữ liệu, đảm bảo tính toàn vẹn)
// - Chuyển ngược lại
// Ngoại lệ: Nếu trong object, array có hàm --> Loại bỏ hàm
const users = [() => {}, "An", "Đức", ["Dũng"]];
const json = JSON.stringify(users); //Chuyển về json
const customers = JSON.parse(json);
customers[customers.length - 1][0] = "Dũng ok";
console.log(users);

console.log(customers);
