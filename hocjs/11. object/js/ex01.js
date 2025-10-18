//Object
// - Cấu tạo bởi các cặp key:value
// - Dùng mô tả thông tin chi tiết của 1 vật thể

//Ví dụ: Thông tin 1 sản phẩm
// - Tên
// - Giá
// - Link sản

//thông tin 1 người dùng
// - Tên
// - Email
// - Địa chỉ

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 33,
// };

//Truy cập
// console.log(user.email);
// console.log(user["age"]);

//Thêm key mới
// user.address = "Hà Nội";

//Cập nhật key
// user.name = "Hoàng An Unicode";

//Xóa key
// delete user.address;

// console.log(user);

//Duyệt các key trong object
// for (let key in user) {
//   //   console.log(key);
//   console.log(user[key]);
// }

//Các phương thức xử lý Object
//1. Object.keys(obj) --> Trả về 1 mảng chứa danh sách các key của object
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 33,
// };
// console.log(Object.keys(user));

//2. Object.values(obj) --> Trả về 1 mảng chứa danh sách các values của object

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 33,
// };
// console.log(Object.values(user));

//3. Object.entries(obj) --> Trả về 1 mảng 2 chiều chứa danh sách các key và value
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 33,
// };
// console.log(Object.entries(user));

//4. Object.assign(target, source1, source2,...)
// Nối các source1, source2,... vào target
// const obj1 = {
//   x: 1,
//   y: 2,
// };
// const obj2 = {
//   a: "An",
//   b: "Đức",
// };
// const obj3 = {
//   z: 100,
// };
// const newObj = Object.assign({}, obj1, obj2, obj3);
// console.log(obj1);
// console.log(newObj);

//Bài tập
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: null,
//   address: "",
//   position: undefined,
// };

// //Xóa các key không có dữ liệu trong object trên
// for (let key in user) {
//   const value = user[key];
//   if (!value) {
//     delete user[key];
//   }
// }
// console.log(user);

//Viết chương trình kiểm tra xem object error có rỗng hay không?
// - Nếu rỗng --> Hiển thị "Không có lỗi", ngược lại: hiển thị "Có lỗi"
// const errors = { x: 10 };
// if (Object.keys(errors).length === 0) {
//   console.log("Không có lỗi");
// } else {
//   console.log("Có lỗi");
// }
// let check = false;
// for (let key in errors) {
//   check = true;
//   break;
// }
// if (check) {
//   console.log("Có lỗi");
// } else {
//   console.log("Không có lỗi");
// }

// const query = {
//   keyword: "Fullstack JavaScript",
//   status: "active",
//   category: 1,
// };

//Chuyển object query thành chuỗi sau
// keyword=Fullstack+JavaScript&status=active&category=1
// const queryString = Object.entries(query)
//   .map((item) => {
//     return `${item[0]}=${item[1]}`;
//   })
//   .join("&")
//   .replaceAll(" ", "+");
// console.log(queryString);

// let queryString = "";
// for (let key in query) {
//   const value = query[key];
//   queryString += `${key}=${value}&`;
// }
// queryString = queryString.slice(0, -1).replaceAll(" ", "+");
// console.log(queryString);

// const queryString =
//   "keyword=Fullstack+JavaScript&category=3&status=active&category=1&category=2";

/*
{
    keyword: "Fullstack JavaScript",
    status: "active",
    category: [1,2]
}
*/

// const queryArr = queryString.split("&");
// const query = {};
// queryArr.forEach((item) => {
//   const items = item.split("=");
//   const key = items[0];
//   const value = items[1].replaceAll("+", " ");
//   if (query[key]) {
//     if (!Array.isArray(query[key])) {
//       query[key] = [query[key], value];
//     } else {
//       query[key].push(value);
//     }
//   } else {
//     query[key] = value;
//   }
// });
// console.log(query);

// Cho trước mảng sau

const students = [
  { name: "Lan", scores: [8, 9, 7] },
  { name: "Huy", scores: [6, 5, 7] },
  { name: "Minh", scores: [9, 8, 10] },
];

// Yêu cầu:

// - Tính điểm trung bình của từng học sinh.

// - Trả về danh sách học sinh đạt loại giỏi (điểm TB >= 8).

// - Sắp xếp học sinh theo điểm trung bình giảm dần.

//1:
/*
[
  { name: "Lan", scores: [8, 9, 7], avgScore: 1 },
  { name: "Huy", scores: [6, 5, 7], avgScore: 2 },
  { name: "Minh", scores: [9, 8, 10], avgScore: 3 },
]
*/
// const newStudents = students.map((student) => {
//   const studentClone = Object.assign({}, student);
//   const avg =
//     studentClone.scores.reduce((acc, cur) => {
//       return acc + cur;
//     }, 0) / studentClone.scores.length;
//   studentClone.avg = avg;
//   return studentClone;
// });
// console.log(newStudents);

// const studentsAvg = newStudents.filter((student) => {
//   return student.avg >= 8;
// });
// console.log(studentsAvg);

// const sortStudents = newStudents.sort((a, b) => {
//   return b.avg - a.avg;
// });
// console.log(sortStudents);

//Bài tiếp
const posts = [
  {
    id: 1,
    title: "JavaScript cơ bản",
    tags: ["js", "basic"],
    comments: [
      { user: "An", text: "Hay quá!" },
      { user: "Bình", text: "Rất dễ hiểu" },
    ],
  },
  {
    id: 2,
    title: "Học React không khó",
    tags: ["react", "js"],
    comments: [{ user: "Chi", text: "Cảm ơn chia sẻ" }],
  },
];

/*
- In ra tất cả title kèm số lượng comments của từng bài viết.

[
  {title: "", commentCount: 1},
  {title: "", commentCount: 1},
]

- Tạo mảng mới chứa tất cả tags (không trùng lặp).
*/

const tags = [];
posts.forEach((post) => {
  post.tags.forEach((tag) => {
    if (!tags.includes(tag)) {
      tags.push(tag);
    }
  });
});
console.log(tags);
