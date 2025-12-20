//Promise.all() --> Xử lý nhiều promise --> trả về 1 kết quả

// const promise1 = Promise.resolve("Kết quả 1");
// const promise2 = Promise.resolve("Kết quả 2");
// const promise3 = Promise.resolve("Kết quả 3");
// const promise4 = Promise.reject("Lỗi 4");

// Promise.all([promise1, promise2, promise4, promise3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

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
// const promiseArr = ids.map((value) => getUser(value));
// Promise.all(promiseArr).then((data) => {
//   const total = data.reduce((acc, cur) => acc + cur.salary, 0);
//   console.log(total);
// });

//Tỉnh / Thành phố: https://provinces.open-api.vn/api/v2/p/

//Xã - phường theo tỉnh / thành phố: https://provinces.open-api.vn/api/v2/w/?province={code-tinh}

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

getProvince()
  .then((data) => {
    const provinceEl = document.querySelector("#province");
    let html = `<option value="">Chọn Tỉnh/Thành phố</option>`;
    data.forEach((item) => {
      html += `<option value="${item.code}">${item.name}</option>`;
    });
    provinceEl.innerHTML = html;
  })
  .catch((error) => {
    const errorEl = document.querySelector(".error");
    errorEl.innerText = error;
  });

const provinceEl = document.querySelector("#province");
provinceEl.addEventListener("change", () => {
  const provinceId = provinceEl.value;
  getWard(provinceId)
    .then((data) => {
      const wardEl = document.querySelector("#ward");
      let html = `<option value="">Chọn Xã/Phường</option>`;
      data.forEach((item) => {
        html += `<option value="${item.code}">${item.name}</option>`;
      });
      wardEl.innerHTML = html;
    })
    .catch((error) => {
      const errorEl = document.querySelector(".error");
      errorEl.innerText = error;
    });
});
