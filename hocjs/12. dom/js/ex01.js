// const h1 = document.querySelector("h1");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   h1.innerText = "Đức ok";
// });

//1. Chọn phần tử DOM
// - document.querySelector(css-selector) --> Chọn phần tử đầu tiên khớp với css selector
// - document.querySelectorAll(css-selector) --> Chọn tất cả
// const h1 = document.querySelector("h1");
// console.log(h1);
// const headings = document.querySelectorAll("h1");
// headings.forEach((item) => {
//   item.innerText = "Đức ok";
// });

//2. Lắng nghe sự kiện
//Cú pháp: element.on<ten-su-kien> = function() {}
//element.addEventListener('ten-su-kien', callback)
const btn = document.querySelector("button");
// btn.onclick = function () {
//   console.log("clicked");
// };
// btn.onclick = function () {
//   console.log("clicked 2");
// };
btn.addEventListener("click", function (e) {
  //e = event object
  console.log("clicked");
  //   console.log(e);
});
// btn.addEventListener("click", function () {
//   console.log("clicked 2");
// });

//Danh sách các sự kiện hay dùng
// - click
// - dblclick
// - mouseover
// - mousemove
// - mouseout
// - mousedown
// - mouseup
// - keydown
// - keyup
// - submit: submit form
// - input: Nhập dữ liệu vào input trong form
// - change: Nhập xong dữ liệu, bấm ra ngoài
// - focus: focus vào input
// - blur: thoát focus

// const input = document.querySelector("input");
// input.addEventListener("input", () => {});
// input.addEventListener("change", () => {
//   console.log("changed");
// });
// input.addEventListener("keyup", (e) => {
//   console.log("nhả phím", e.key);
// });
