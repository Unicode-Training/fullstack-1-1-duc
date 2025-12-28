//Request
// - URL. Ví dụ: http://localhost:3000/users
// - Method: GET, POST, PUT, PATCH, DELETE
// - Headers
// - Body

//Response
// - Status
// - Headers
// - Body

//Call api
// - Thư viện
// - fetch
// - XmlHttpRequest

const BASE_URL = `http://localhost:3000`;
// fetch(`${BASE_URL}/users`, {
//   method: "GET",
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const getUsers = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/users1`);
//     if (!response.ok) {
//       throw new Error("Not found");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getUsers();

// const createUser = async (body) => {
//   const response = await fetch(`${BASE_URL}/users`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   console.log(response);
// };
// createUser({
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// });

// const updateUser = async (id, body) => {
//   const response = await fetch(`${BASE_URL}/users/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
// };
// updateUser(4, {
//   name: "Hoàng An Unicode",
// });

// const deleteUser = async (id) => {
//   const response = await fetch(`${BASE_URL}/users/${id}`, {
//     method: "DELETE",
//   });
// };
// deleteUser(4);

//Blog
const app = {
  render(data) {
    const postListEl = document.querySelector(".js-post-list");
    // let output = "";
    // data.forEach((value) => {
    //   output += `<div class="border rounded-md p-5">
    //         <h2 class="text-lg font-bold mb-2">
    //           ${value.title}
    //         </h2>
    //         <p class="text-gray-600 mb-4">
    //           ${value.content}
    //         </p>

    //         <div class="flex justify-between items-center">
    //           <button
    //             class="border rounded-full px-4 py-1 hover:bg-gray-100 transition"
    //           >
    //             Xem chi tiết
    //           </button>
    //           <div class="space-x-2">
    //             <button class="text-gray-600 hover:underline">Sửa</button>
    //             <button class="text-red-500 hover:underline">Xóa</button>
    //           </div>
    //         </div>
    //       </div>`;
    // });
    let output = data
      .map(
        (value) => `<div class="border rounded-md p-5">
            <h2 class="text-lg font-bold mb-2">
              ${value.title}
            </h2>
            <p class="text-gray-600 mb-4">
             ${value.content}
            </p>

            <div class="flex justify-between items-center">
              <button
                class="border rounded-full px-4 py-1 hover:bg-gray-100 transition"
              >
                Xem chi tiết
              </button>
              <div class="space-x-2">
                <button class="text-gray-600 hover:underline">Sửa</button>
                <button class="text-red-500 hover:underline">Xóa</button>
              </div>
            </div>
          </div>`
      )
      .join("");

    postListEl.innerHTML = output;
  },
  async getPosts() {
    //Call api
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();
    this.render(data);
  },
  start() {
    this.getPosts();
  },
};

app.start();
