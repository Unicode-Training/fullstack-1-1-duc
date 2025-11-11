//Event object:
// - Đối tượng mô tả thông tin của event
// - Mỗi event sẽ có thông tin khác nhau

// const btn = document.querySelector("button");
// btn.addEventListener("mousedown", (e) => {
//e = event object
//   console.log(e);
// });

// const input = document.querySelector("input");
// input.addEventListener("keyup", (e) => {
//   if (e.key === "Enter") {
//     console.log(input.value);
//   }
// });

// document.addEventListener("keyup", (e) => {
//   console.log(e.key);
// });

//preventDefault()
// const a = document.querySelector("a");
// a.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(a.href);
// });

//stopPropagation()
// const btn = document.querySelector("button");
// btn.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("button clicked");
// });

// const box = document.querySelector(".box");
// box.addEventListener("click", (e) => {
//   console.log("Box clicked");
// });

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit");
});
