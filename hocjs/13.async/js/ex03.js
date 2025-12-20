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

// const myPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       getData: () => new Promise((resolve) => resolve("Unicode")),
//     });
//   }, 1000);
// });

// const displayData = async () => {
//   //Dùng await --> hiển thị ra chữ "Unicode"
//   const result = await myPromise;
//   const data = await result.getData();
//   console.log(data);
// };
// displayData();

/**
 * Lấy danh sách các tỉnh/thành phố
 * @returns {Promise} Danh sách các tỉnh/thành phố
 */
const getProvince = () => {
  return new Promise((resolve, reject) => {
    const provinceAPI = `https://provinces.open-api.vn/api/v2/p/`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", provinceAPI);
    xhr.send();
    /**
     * Xử lý khi đã nhận được dữ liệu từ server
     * @function
     * @param {Event} event - Sự kiện khi đã nhận được dữ liệu
     */
    xhr.onload = function () {
      const data = JSON.parse(xhr.responseText);
      resolve(data);
    };
    /**
     * Xử lý khi có lỗi xảy ra trong quá trình request
     * @function
     * @throws {string} Lỗi xảy ra trong quá trình request
     */
    xhr.onerror = function () {
      reject("Error while request province");
    };
  });
};
/**
 * Lấy danh sách các xã/phường theo tỉnh/thành phố
 * @param {number} provinceId - Mã tỉnh/thành phố
 * @returns {Promise} Danh sách các xã/phường
 */
const getWard = (provinceId) => {
  return new Promise((resolve, reject) => {
    const wardApi = `https://provinces.open-api.vn/api/v2/w/?province=${provinceId}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", wardApi);
    xhr.send();
    /**
     * Xử lý khi đã nhận được dữ liệu từ server
     * @function
     * @param {object} event - Sự kiện khi đã nhận được dữ liệu
     * @property {string} event.target.responseText - Dữ liệu nhận được từ server
     */
    xhr.onload = function () {
      const data = JSON.parse(xhr.responseText);
      resolve(data);
    };
    /**
     * Xử lý khi có lỗi xảy ra trong quá trình request
     * @throws {string} Lỗi xảy ra trong quá trình request
     */
    xhr.onerror = function () {
      reject("Error while request ward");
    };
  });
};

const displayProvince = async () => {
  try {
    const provinces = await getProvince();
    const provinceEl = document.querySelector("#province");
    let html = `<option value="">Chọn Tỉnh/Thành phố</option>`;
    provinces.forEach((item) => {
      html += `<option value="${item.code}">${item.name}</option>`;
    });
    provinceEl.innerHTML = html;
  } catch (error) {
    const errorEl = document.querySelector(".error");
    errorEl.innerText = error;
  }
};
displayProvince();

const provinceEl = document.querySelector("#province");
provinceEl.addEventListener("change", async () => {
  try {
    const provinceId = provinceEl.value;
    const wards = await getWard(provinceId);
    const wardEl = document.querySelector("#ward");
    let html = `<option value="">Chọn Xã/Phường</option>`;
    wards.forEach((item) => {
      html += `<option value="${item.code}">${item.name}</option>`;
    });
    wardEl.innerHTML = html;
  } catch (error) {
    const errorEl = document.querySelector(".error");
    errorEl.innerText = error;
  }
});
