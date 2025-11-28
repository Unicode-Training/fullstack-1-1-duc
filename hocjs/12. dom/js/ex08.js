//parentElement: Lấy cấp cha gần nhất
//nextElementSibling: Lấy phần tử kế tiếp
//previousElementSibling: Lấy phần tử phía trước
//children: Lấy danh sách phần tử con gần nhất
// const btnList = document.querySelectorAll("button");
// btnList.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log(btn.parentElement.parentElement.previousElementSibling);
//   });
// });

// const box2 = document.querySelector(".box2");
// console.log(box2.children[1].children[0].children);

const btnList = document.querySelectorAll("button");
btnList.forEach((btn) => {
  btn.addEventListener("click", () => {
    // const nextEl = btn.nextElementSibling;
    // if (nextEl) {
    //   nextEl.classList.add("show");
    // }
    const children = btn.parentElement.children;
    if (children.length === 2) {
      children[1].classList.add("show");
    }
  });
});
