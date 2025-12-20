// alert("Xin chào");
// console.log("OK");

// setTimeout(() => {
//   console.log("Xin chào");
// }, 0);
// console.log("Ok");

//Cách hoạt động của JS
// - Browser Runtime: Môi trường chạy js
// - JavaScript Engine --> Biên dịch mã javascript về mã máy (js là bậc cao)
// - Call stack: Luồng chạy chính chương trình JS
// - Engine -> biên dịch -> đưa vào call stack để thực thi (Tại 1 thời điểm chỉ có 1 lệnh trong call stack, bởi vì js là ngôn ngữ đơn luồng)
// Trong quá trình thực thi xảy ra 2 quá trình
// - Nếu engine phát hiện cú pháp tiêu chuẩn của js --> Thực thi luôn tại chỗ
// - Nếu engine phát hiện cú pháp không phải của js mà của trình duyệt --> ủy thác cho trình duyệt xử lý (web apis) --> Sau khi trình duyệt xử lý xong --> Lấy được callback trong hàm --> Đưa vào hàng đợi để chờ
// - Event loop: Kiểm tra khi nào callstack trống --> Đưa callback từ hàng đợi vào callstack để engine thực thi --> có kết quả

//Xử lý bất đồng bộ

//1. Callback
// const setUsers = (callback) => {
//   setTimeout(() => {
//     const users = ["User 1", "User 2", "User 3"];
//     callback(users);
//   }, 1000);
// };
// const getProducts = (callback) => {
//   setTimeout(() => {
//     const products = ["Product 1", "Product 2", "Product 3"];
//     callback(products);
//   }, 1500);
// };
// const getPosts = (callback) => {
//   setTimeout(() => {
//     const posts = ["Post 1", "Post 2", "Post 3"];
//     callback(posts);
//   }, 1500);
// };
// setUsers((users) => {
//   console.log(users);
//   getProducts((products) => {
//     console.log(products);
//     getPosts((posts) => {
//       console.log(posts);
//     });
//   });
// });

//2. Promise
// State:
// - pending: Chờ kết quả
// - fulfilled: Đã có kết quả thành công
// - rejected: Đã có kết quả thất bại

//Khởi tạo promise
const myPromise = new Promise((resolve, reject) => {
  //resolve: Đại diện cho trạng thái thành công
  //reject: Đại diện cho trạng thái thất bại
  setTimeout(() => {
    let status = false;
    if (status) {
      resolve("Result");
    } else {
      reject("Error");
    }
  }, 1000);
});

//Truy cập dữ liệu trong promise
// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Hoàn thành");
//   });

const myPromise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Result 2");
  }, 1000);
});
const myPromise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Result 3");
  }, 1000);
});
myPromise
  .then((data) => {
    console.log(data);
    return myPromise2;
  })
  .catch((error) => {
    console.log(error);
    return myPromise2;
  })
  .then((data) => {
    console.log(data);
    return myPromise3;
  })
  .then((data) => {
    console.log(data);
  });

//Promise chain (Giải quyết callback hell)
//Promise: Auto unwrap

// const demoPromise = Promise.resolve(Promise.resolve(Promise.resolve("An")));
// demoPromise.then((data) => {
//   console.log(data);
// });
