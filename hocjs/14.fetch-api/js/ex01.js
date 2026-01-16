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
  query: {
    currentPage: 1,
    keyword: "",
    sort: "id",
    order: "desc", //asc tăng dần
  },
  currentPost: null,
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
                data-type="detail"
              >
                Xem chi tiết
              </button>
              <div class="space-x-2">
                <button class="text-gray-600 hover:underline" data-id="${value.id}" data-type="edit">Sửa</button>
                <button class="text-red-500 hover:underline" data-id="${value.id}" data-type="delete">Xóa</button>
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
      const modalContent = modalEl.querySelector(".js-modal-content");
      h2.innerText = "";
      modalContent.innerText = "";
    };
    btnList.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = btn.dataset.id;
        if (btn.dataset.type === "detail") {
          modalEl.classList.remove("hidden");
          const h2 = modalEl.querySelector("h2");
          const modalContent = modalEl.querySelector(".js-modal-content");

          h2.innerText = "Loading title...";
          modalContent.innerText = "Loading content...";

          const post = await this.getPost(id);

          h2.innerText = post.title;
          modalContent.innerText = post.content;
        }

        if (btn.dataset.type === "edit") {
          modalEl.classList.remove("hidden");
          const h2 = modalEl.querySelector("h2");
          const modalContent = modalEl.querySelector(".js-modal-content");
          h2.innerText = "Cập nhật bài viết";
          modalContent.innerHTML = `
          <form>
            <div class="mb-3">
              <label class="block mb-1 font-semibold">Tiêu đề</label>
              <input type="text" placeholder="Tiêu đề..." class="border js-title border-gray-300 px-3 py-2 w-full outline-none"/> 
            </div>
            <div class="mb-3">
              <label class="block mb-1 font-semibold">Nội dung</label>
              <textarea placeholder="Tiêu đề..." class="js-content border border-gray-300 px-3 py-2 w-full outline-none min-h-[100px]"></textarea> 
            </div>
            <button class="bg-green-600 text-white px-5 py-2 rounded-full cursor-pointer">Lưu lại</button>
          </form>
          `;
          const titleEl = modalContent.querySelector(".js-title");
          const contentEl = modalContent.querySelector(".js-content");
          const post = await this.getPost(id);
          titleEl.value = post.title;
          contentEl.value = post.content;

          //Lắng nghe form
          const formEl = modalEl.querySelector("form");
          formEl.addEventListener("submit", async (e) => {
            e.preventDefault();
            const titleEl = formEl.querySelector(".js-title");
            const contentEl = formEl.querySelector(".js-content");
            const title = titleEl.value;
            const content = contentEl.value;

            if (!title || !content) {
              return alert("Vui lòng nhập dữ liệu");
            }
            const updateStatus = await this.updatePost({ title, content }, id);
            if (!updateStatus) {
              return alert("Cập nhật không thành công");
            }
            modalEl.classList.add("hidden");
            resetModal();
            this.getPosts();
          });
        }

        if (btn.dataset.type === "delete") {
          modalEl.classList.remove("hidden");
          const h2 = modalEl.querySelector("h2");
          const modalContent = modalEl.querySelector(".js-modal-content");
          h2.innerText = "Bạn có chắc chắn?";
          modalContent.innerHTML = `
          <p>Nếu bấm đồng ý, bạn sẽ không khôi phục lại được</p>
           <div class="mt-3 flex justify-end gap-3">
           <button class="js-confirm bg-green-600 text-white px-5 py-2 rounded-full cursor-pointer">Đồng ý</button>
           <button class="js-cancel bg-red-600 text-white px-5 py-2 rounded-full cursor-pointer">Hủy</button>
           </div>
          `;

          const cancelBtn = modalContent.querySelector(".js-cancel");
          const confirmBtn = modalContent.querySelector(".js-confirm");
          cancelBtn.addEventListener("click", () => {
            modalEl.classList.add("hidden");
            resetModal();
          });
          confirmBtn.addEventListener("click", async () => {
            const deleted = await this.deletePost(id);
            if (!deleted) {
              return alert("Không thể xóa");
            }
            modalEl.classList.add("hidden");
            resetModal();
            if (this.currentPost === 1) {
              this.query.currentPage--;
            }
            this.getPosts();
          });
        }
      });
    });
    //Xử lý khi bấm nút thêm

    const addBtn = document.querySelector(".js-add-btn");
    addBtn.addEventListener("click", () => {
      modalEl.classList.remove("hidden");
      const h2 = modalEl.querySelector("h2");
      const modalContent = modalEl.querySelector(".js-modal-content");
      h2.innerText = `Thêm bài viết`;
      modalContent.innerHTML = `
      <form>
        <div class="mb-3">
          <label class="block mb-1 font-semibold">Tiêu đề</label>
          <input type="text" placeholder="Tiêu đề..." class="border js-title border-gray-300 px-3 py-2 w-full outline-none"/> 
        </div>
        <div class="mb-3">
          <label class="block mb-1 font-semibold">Nội dung</label>
          <textarea placeholder="Tiêu đề..." class="js-content border border-gray-300 px-3 py-2 w-full outline-none min-h-[100px]"></textarea> 
        </div>
        <button class="bg-green-600 text-white px-5 py-2 rounded-full cursor-pointer">Lưu lại</button>
      </form>
      `;

      //Lắng nghe form
      const formEl = modalEl.querySelector("form");
      formEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        const titleEl = formEl.querySelector(".js-title");
        const contentEl = formEl.querySelector(".js-content");
        const title = titleEl.value;
        const content = contentEl.value;

        if (!title || !content) {
          return alert("Vui lòng nhập dữ liệu");
        }
        const addPostStatus = await this.addPost({ title, content });
        if (addPostStatus) {
          //Đóng modal
          modalEl.classList.add("hidden");
          resetModal();

          //Gọi lại dữ liệu
          this.query.currentPage = 1;
          this.getPosts();
        } else {
          alert("Đã có lỗi xảy ra khi thêm");
        }
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
  renderPaginate(totalPages) {
    const paginateEl = document.querySelector(".js-paginate");
    let html = "";
    for (let i = 1; i <= totalPages; i++) {
      let active = i === this.query.currentPage ? "bg-green-600" : "";
      html += `<button
            class="border border-[#ddd] px-3 py-1 cursor-pointer hover:bg-green-600 ${active}"
          >
            ${i}
          </button>`;
    }
    paginateEl.innerHTML = html;

    const btnList = paginateEl.querySelectorAll("button");
    btnList.forEach((btn) => {
      btn.addEventListener("click", () => {
        const page = btn.innerText;
        this.query.currentPage = +page;
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
        this.getPosts();
      });
    });
  },
  async getPost(id) {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    return response.json();
  },
  async getPosts() {
    //Call api
    try {
      this.renderLoading(true);
      const response = await fetch(
        `${BASE_URL}/posts?q=${this.query.keyword}&_page=${this.query.currentPage}&_limit=3&_sort=${this.query.sort}&_order=${this.query.order}`
      );
      const data = await response.json();
      const total = response.headers.get("x-total-count");
      const totalPages = Math.ceil(total / 3);
      this.renderPaginate(totalPages);
      this.render(data);
      this.currentPost = data.length;
    } catch (error) {
      this.renderError(error.message, true);
    } finally {
      this.renderLoading(false);
    }
  },
  async addPost(data) {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Add post failed");
      }
      return true;
    } catch (error) {
      return false;
    }
  },
  async updatePost(data, id) {
    try {
      const response = await fetch(`${BASE_URL}/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Update post failed");
      }
      return true;
    } catch (error) {
      return false;
    }
  },
  async deletePost(id) {
    try {
      const response = await fetch(`${BASE_URL}/posts/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Delete post failed");
      }
      return true;
    } catch (error) {
      return false;
    }
  },
  searchPosts() {
    const inputEl = document.querySelector(".js-search");
    let id;
    inputEl.addEventListener("input", (e) => {
      if (id) {
        clearTimeout(id);
      }
      id = setTimeout(() => {
        const q = e.target.value;
        this.query.keyword = q;
        this.query.currentPage = 1;
        this.getPosts();
      }, 500);
    });
  },
  start() {
    this.getPosts();
    this.searchPosts();
  },
};

app.start();
