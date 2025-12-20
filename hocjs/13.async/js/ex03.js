//try..catch

// try {
//   let a = -1;
//   if (a < 0) {
//     //Ném lỗi
//     throw new Error("a phải là số dương");
//   }
//   console.log(1);
//   ahihi(); //Lỗi
//   console.log(2);
// } catch (error) {
//   console.log("Lỗi", error.message);
// } finally {
//   console.log("Kết thúc");
// }

//Async/Await

//Async: Từ khóa nằm trước 1 hàm --> Tự động tạo promise bọc ở bên ngoài
//Await: Từ khóa nằm trước 1 promise
// --> Tự động resolve promise đó để trả về giá trị
// --> Phải nằm trong async function
// --> Các câu lệnh bên dưới sẽ chờ khi nào promise có kết quả thì sẽ chạy tiếp
//Cách nhớ: 1 await tương ứng với 1 then
// const myPromsie = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("My data");
//   }, 1000);
// });
// const myPromsie2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("My data 2");
//   }, 2000);
// });
// const myPromsie3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("My data 2");
//     reject("Error3");
//   }, 1500);
// });
// const doSomething = async () => {
//   const data1 = await myPromsie;
//   console.log(data1);

//   const data2 = await myPromsie2;
//   console.log(data2);

//   try {
//     const data3 = await myPromsie3;
//     console.log(data3);
//   } catch (err) {
//     console.log(err);
//   }
// };
// doSomething();
// doSomething().then((data) => {
//   console.log(data);
// });

// const getUser = (userId) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const users = [
//         {
//           id: 1,
//           name: "User 1",
//           salary: 1000,
//         },
//         {
//           id: 2,
//           name: "User 2",
//           salary: 2000,
//         },
//         {
//           id: 3,
//           name: "User 3",
//           salary: 3000,
//         },
//       ];
//       resolve(users.find((user) => user.id === userId));
//     }, 1000);
//   });
// };

// const ids = [1, 2, 3];

// const getSalary = async () => {
//   //Tính tổng: Dùng async/await
//   let total = 0;
//   for (let i = 0; i < ids.length; i++) {
//     const user = await getUser(ids[i]);
//     total += user.salary;
//   }
//   console.log(total);
// };
// getSalary();

const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      getData: () => new Promise((resolve) => resolve("Unicode")),
    });
  }, 1000);
});

const displayData = async () => {
  //Dùng await --> hiển thị ra chữ "Unicode"
  const result = await myPromise;
  const data = await result.getData();
  console.log(data);
};
displayData();
