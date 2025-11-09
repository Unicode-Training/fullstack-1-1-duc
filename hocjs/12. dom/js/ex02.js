//HTML
// const boxEl = document.querySelector(".box");
// const btn = document.querySelector("button");
//innerHTML
// console.log(boxEl.innerHTML);
// boxEl.innerHTML = `<h2>xin chào ae</h2>`;

//innerText
// console.log(boxEl.innerText);
// boxEl.innerText = `<h2>xin chào ae</h2>`;

//outerHTML
// console.log(boxEl.outerHTML)
// boxEl.outerHTML = `<h2>xin chào ae</h2>`;

//remove(): Xóa phần tử html khỏi cây DOM
// boxEl.remove();

// boxEl.innerText = ""; //Xóa nội dung bên trong
// let initialContent = boxEl.innerHTML;
// btn.addEventListener("click", () => {
//   if (boxEl.innerText) {
//     boxEl.innerText = "";
//     btn.innerText = "Hiện";
//   } else {
//     boxEl.innerHTML = initialContent;
//     btn.innerText = "Ẩn";
//   }
// });

//Thuộc tính
// const imgEl = document.querySelector("img");
// console.log(imgEl.src);
// console.log(imgEl.width);
// console.log(imgEl.height);
// console.log(imgEl.title);
// console.log(imgEl.alt);
// console.log(imgEl.id);
// console.log(imgEl.className);

// imgEl.src =
//   "https://fastly.picsum.photos/id/1029/536/354.jpg?hmac=SZ6VY2VHs_2QDqrH1ViUIOfbqdIM8JqJo-w4Z0soW24";

const inputEl = document.querySelector("input");
const btn = document.querySelector("button");
const errorEl = document.querySelector(".error");
const imageEl = document.querySelector(".image");
btn.addEventListener("click", () => {
  errorEl.innerText = "";
  if (!inputEl.value) {
    errorEl.innerText = "Vui lòng nhập link ảnh";
    return;
  }
  //Logic
  let html = `<img src="${inputEl.value}" width="200" />`;

  //   imageEl.innerHTML += html;
  imageEl.innerHTML = imageEl.innerHTML + html;

  inputEl.value = "";
});

// let a = 10;
// // a = a + 5;
// a += 5;
// console.log(a);
