//Array: Lưu trữ nhiều giá trị trong 1 biến, thường sẽ thể hiện 1 danh sách
//Ví dụ: Danh sách người dùng, danh sách khách hàng, danh sách sản phẩm,...

//khai báo mảng
// const users = ["An", "Tùng", "Đức", "Dương"];

// console.log(users.length);

// console.log(users[1]);
// console.log(users[users.length - 1]);

// users[users.length] = "Trung";
// users[users.length] = "Hạnh";
// users[0] = "Hoàng An";

// console.log(users);

//Duyệt từng phần tử của mảng
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// for (let index in users) {
//   console.log(users[index]);
// }

// for (let value of users) {
//   console.log(value);
// }
// const newArr = [];
// for (let i = 0; i < users.length; i++) {
//   if (i === 1) {
//     continue;
//   }
//   newArr[newArr.length] = users[i];
// }
// console.log(newArr);

//Kiểm tra mảng
// const a = [];
// console.log(Array.isArray(a));

// const numbers = [4, 2, 9, 0, 1, 8];
//Tính tổng các số chẵn
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
//   }
// }
// console.log(total);

//Tìm các số lẻ và thêm vào mảng mới
// [9,1]

//Tìm số lớn nhất trong mảng trên

//Đổi chỗ phần tử đầu và cuối mảng
//[8, 2, 9, 0, 1, 4]
// const tmp = numbers[0];
// numbers[0] = numbers[numbers.length - 1];
// numbers[numbers.length - 1] = tmp;
// console.log(numbers);

const users = ["User 1", "User 2", "User 3", "User 2", "User 4"];
//Tạo ra 1 mảng mới chứa các phần tử không trùng nhau
//["User 1", "User 2", "User 3", "User 4"]
const newUsers = [];
for (let i = 0; i < users.length; i++) {
  let isExist = false; //Giả sử không tồn tại
  for (let j = 0; j < newUsers.length; j++) {
    if (newUsers[j] === users[i]) {
      isExist = true;
      break;
    }
  }
  if (!isExist) {
    newUsers[newUsers.length] = users[i];
  }
}
console.log(newUsers);
