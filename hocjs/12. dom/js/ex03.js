//classList
// const box = document.querySelector(".box");
// const btn = document.querySelector("button");
// console.log(box.classList);
// box.classList.add("block-1", "block-2", "block-3");
// btn.addEventListener("click", () => {
//   box.classList.remove("block-1", "block-3");
//   box.classList.replace("block-2", "active");
//   box.setAttribute("data-id", 1);
//   console.log(box.getAttribute("data-id"));
//   box.dataset.id = 1;
//   box.dataset.indexNumber = 2; //data-index-number
//   console.log(box.dataset.indexNumber);
//   box.removeAttribute("data-id");
// });

//classList.add() --> Thêm class
//classList.toggle() --> Kiểm tra nếu chưa có class -> thêm mới, ngược lại sẽ xóa
//classList.contains() --> Kiểm tra có class hay không?
//classList.remove() --> Xóa class
//classList.replace() --> Thay thế

//dataset: Tạo ra custom attribute (data-ten)

//getAttribute(tenthuoctinh): Lấy giá trị thuộc tính
//setAttribute(tenthuoctinh, giatri): Thay đổi giá trị thuộc tính
//removeAttribute(tenthuoctinh)

//Add event vào list
const items = document.querySelectorAll("ul li");
items.forEach((item) => {
  const btn = item.querySelector("button");
  //   const span = item.querySelector("span");
  btn.addEventListener("click", () => {
    const itemActive = document.querySelector(".show");
    item.classList.toggle("show");
    if (itemActive) {
      itemActive.classList.remove("show");
      const btnActive = itemActive.querySelector("button");
      btnActive.innerText = "Mở";
    }

    if (item.classList.contains("show")) {
      btn.innerText = "Đóng";
    } else {
      btn.innerText = "Mở";
    }
  });
});
