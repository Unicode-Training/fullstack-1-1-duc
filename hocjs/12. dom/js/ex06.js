//removeEventListener: Loại bỏ sự kiện ra khỏi phần tử html

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

const hanlder = () => {
  console.log("Click 1");
};
btn1.addEventListener("click", hanlder);
btn2.addEventListener("click", () => {
  console.log("Click 2");
  btn1.removeEventListener("click", hanlder);
});

const btn = document.querySelector(".btn");
const p = document.querySelector("p");
let value = 0;
btn.addEventListener("click", () => {
  Object.assign(p.style, {
    color: "red",
    backgroundColor: "yellow",
    marginTop: `${(value += 50)}px`,
  });
  if (value >= 250) {
    p.style.backgroundColor = null;
  }
});
