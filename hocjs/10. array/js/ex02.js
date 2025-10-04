//1. Array.isArray() --> Kiểm tra mảng
// const arr = [];
// console.log(Array.isArray(arr));

//2. length --> Lấy số lượng phần tử mảng
// const myArr = ["Item 1", "Item 2", "Item 3"];
// // console.log(myArr.length);
// myArr.length = 2;
// console.log(myArr);

//3. concat(arr1, arr2,...) --> Nối tất cả các mảng thành 1 mảng
// const myArr = ["Item 1", "Item 2", "Item 3"];
// const arr1 = [1, 2, 3];
// const arr2 = [true, false, true];
// // const newArr = myArr.concat(arr1, arr2);
// const newArr = myArr.concat("Đức");
// console.log(newArr);

//4. indexOf(value) --> Tìm phần tử trong mảng và trả về index đầu tiên tìm được
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// console.log(myArr.indexOf("Item 2"));

//5. lastIndexOf(value) --> Tìm phần tử trong mảng và trả về index cuối cùng tìm được
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// console.log(myArr.lastIndexOf("Item 2"));

//6. includes(value)

// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// console.log(myArr.includes("Item 2"));

//7. slice(start, end)
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(myArr.slice(1, 3));
// console.log(myArr.slice(1));
// console.log(myArr.slice(-2));

//8. splice(start, count) --> Xóa count phần tử từ vị trí start
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.splice(1, 1, "a", "b", "c");

// console.log(myArr);

//9. push(value1, value2,...) --> Thêm các phần tử vào cuối mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.push("a", "b", "c");
// console.log(myArr);

//10. unshift(value1, value2,...) --> Thêm các phần tử vào đầu mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.unshift("a", "b", "c");
// console.log(myArr);

//11. pop() --> Xóa phần tử cuối mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.pop();
// console.log(myArr);

//12. shift() --> Xóa phần tử đầu mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.shift();
// console.log(myArr);

//13. reverse() --> Đảo ngược mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.reverse();
// console.log(myArr);

//14. sort() --> Sắp xếp mảng theo thứ tự tăng dần
// const names = ["tùng", "an", "dũng", "duc"];
// names.sort();
// console.log(names);

// const numbers = [5, 100, 2, 10, 9, 1, 8];
// numbers.sort((a, b) => {
//   //return về số âm --> Đổi chỗ a, b
//   //b --> Phần tử trước
//   //a --> Phần tử sau
//   if (b > a) {
//     return -1;
//   }
// });
// console.log(numbers);

//Bài tập
// const arr1 = [1, 3, 5, 2, 8, 7, 9];
// const arr2 = [2, 5, 8, 9];
//Tìm giao giữa 2 mảng: [5,2,8]
// const newArr = [];
// for (let i = 0; i < arr1.length; i++) {
//   const value = arr1[i];
//   if (arr2.includes(value)) {
//     newArr.push(value);
//   }
// }
// console.log(newArr);

//Tính tổng các phần tử giao giữa 2 mảng là số chẵn
// let total = 0;
// for (let i = 0; i < arr1.length; i++) {
//   const value = arr1[i];
//   if (arr2.includes(value) && value % 2 === 0) {
//     total += value;
//   }
// }
// console.log(total);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);

// const size = 2;
// //Output: [[1,2], [3,4], [5,6], [7,8], [9]]
// const newArr = [];
// for (let i = 0; i < arr.length; i += size) {
//   console.log(i);

//   const chunk = arr.slice(i, i + size);
//   newArr.push(chunk);
// }
// console.log(newArr);

const fruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Cherry",
  "Grape",
  "Grapefruit",
  "Kiwi",
  "Lemon",
  "Mango",
  "Orange",
];
//Sắp xếp mảng trên theo thứ tự độ dài tăng dần
fruits.sort((a, b) => {
  if (b.length > a.length) {
    return -1;
  }
});
console.log(fruits);
