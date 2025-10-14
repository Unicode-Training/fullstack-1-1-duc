//forEach(callback): Duyệt mảng và nhận value, index trong hàm callback
// const items = ["Item 1", "Item 2", "Item 3"];
// items.forEach((value, index) => {
//   console.log(value, index);
// });

//map(callback): Duyệt qua từng phần, trả về 1 mảng mới được ánh xạ từ mảng cũ

// const items = ["Item 1", "Item 2", "Item 3"];
// const newArr = items.map((value, index) => {
//   console.log(value, index);
//   return `${index}.${value}`;
// });
// console.log(newArr);

//filter(callback): Duyệt qua từng phần tử, trả về 1 mảng mới dựa vào điều kiện trong callback (return truthy)
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const newArr = numbers.filter((value, index) => {
//   //   console.log(value, index);
//   return value % 2 === 0;
// });
// console.log(newArr);

//find(callback): Duyệt qua từng phần tử, trả về phần tử đầu tiên thỏa mãn điều kiện trong callback
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers.find((value, index) => {
//   //   console.log(value, index);
//   return value % 2 === 0;
// });
// console.log(result);

//findLast(callback): Duyệt qua từng phần tử, trả về phần tử cuối cùng thỏa mãn điều kiện trong callback
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers.findLast((value, index) => {
//   //   console.log(value, index);
//   return value % 2 === 0;
// });
// console.log(result);

//findIndex(callback): Giống find nhưng trả về index

//findLastIndex(callback): Giống findLast nhưng trả về index

//some(callback): Duyệt qua từng phần tử, nhưng sẽ trả về giá trị true nếu có ít nhất 1 lần return truthy
// const numbers = [1, 3, 2, 9, 7];
// const result = numbers.some((value, index) => {
//   return value % 2 === 0;
// });
// console.log(result);

//every(callback): Tất cả phải đúng
// const numbers = [1, 2, 11, 9, 7];
// const result = numbers.every((value, index) => {
//   return value % 2 !== 0;
// });
// console.log(result);

//Bài tập: Hiển thị danh sách các quả có độ dài từ 5 ký tự trở lên (Dùng filter)
// const fruits = [
//   "Apple",
//   "Apricot",
//   "Avocado",
//   "Banana",
//   "Cherry",
//   "Grape",
//   "Grapefruit",
//   "Kiwi",
//   "Lemon",
//   "Mango",
//   "Orange",
// ];

//Lọc trùng mảng dưới (Dùng filter)
// const items = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// const result = items.filter((value, index) => {
//   console.log(value, index, items.indexOf(value));
//   return index === items.indexOf(value);
// });
// console.log(result);

//Chuyển ký tự đầu của mỗi phần tử thành chữ hoa (Dùng các phương thức đã học ở trên)
// const words = ["an", "đạt", "tùng"];
// // ['An', 'Đạt', 'Tùng']
// const newArr = words.map((value) => {
//   return value.charAt(0).toUpperCase() + value.slice(1);
// });
// console.log(newArr);

// const myArr = [
//   [1, "User 1", "user1@gmail.com"],
//   [2, "User 2", "user2@gmail.com"],
//   [3, "User 3", "user3@gmail.com"],
//   [4, "User 4", "user4@gmail.com"],
// ];

//Xóa phần tử có id = 2

//splice, findIndex
// const index = myArr.findIndex((value) => {
//   return value[0] === 2;
// });
// if (index !== -1) {
//   myArr.splice(index, 1);
// }
// console.log(myArr);

//reduce(callback, initialValue)
//callback có 3 tham số
// - accumulator: Giá trị lưu sau mỗi lần return
// - currentValue: Giá trị phần tử mảng duyệt đến
// - index
// const numbers = [5, 10, 15, 20, 25, 30];
// const result = numbers.reduce((acc, cur, index) => {
//   console.log(`acc: ${acc}, cur: ${cur}, index: ${index}`);
//   return cur;
// });
// console.log(result);
// const total = numbers.reduce((acc, cur) => {
//   return acc + cur;
// }, 0);
// console.log(total);

//Tìm max bằng reduce
const numbers = [5, -1, 9, 2, 8];
