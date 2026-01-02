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
                data-id="${value.id}"
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
    const btnList = postListEl.querySelectorAll("button");
    const modalEl = document.querySelector(".js-modal");
    const closeBtnEl = modalEl.querySelector(".js-close-btn");
    const overlayEl = modalEl.querySelector(".js-overlay");
    const resetModal = () => {
      const h2 = modalEl.querySelector("h2");
      const p = modalEl.querySelector("p");
      h2.innerText = "";
      p.innerText = "";
    };
    btnList.forEach((btn) => {
      btn.addEventListener("click", async () => {
        modalEl.classList.remove("hidden");
        const id = btn.dataset.id;
        const h2 = modalEl.querySelector("h2");
        const p = modalEl.querySelector("p");
        h2.innerText = "Loading title...";
        p.innerText = "Loading content...";
        const post = await this.getPost(id);
        h2.innerText = post.title;
        p.innerText = post.content;
      });
    });
    closeBtnEl.addEventListener("click", () => {
      modalEl.classList.add("hidden");
      resetModal();
    });
    overlayEl.addEventListener("click", () => {
      modalEl.classList.add("hidden");
      resetModal();
    });
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        modalEl.classList.add("hidden");
        resetModal();
      }
    });
  },
  renderLoading(show = true) {
    const loadingEl = document.querySelector(".js-loading");
    loadingEl.innerHTML = show
      ? `<span class="text-3xl text-center">Loading...</span>`
      : "";
  },
  renderError(msg, show = true) {
    const errorEl = document.querySelector(".js-error");
    errorEl.innerHTML = show
      ? `<span class="text-3xl text-center text-red-600">Error: ${msg}</span>`
      : "";
  },
  async getPost(id) {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    return response.json();
  },
  async getPosts() {
    //Call api
    try {
      this.renderLoading(true);
      const response = await fetch(`${BASE_URL}/posts`);
      const data = await response.json();
      this.render(data);
    } catch (error) {
      this.renderError(error.message, true);
    } finally {
      this.renderLoading(false);
    }
  },
  start() {
    this.getPosts();
  },
};

app.start();
