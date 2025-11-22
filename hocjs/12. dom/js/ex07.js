const btn = document.querySelector("button");
const box = document.querySelector(".box");
const boxStyle = window.getComputedStyle(box);
const borderBoxWidth = boxStyle.borderWidth.replace("px", "");

const boxXStart = box.offsetLeft;
const boxXEnd = box.offsetLeft + box.offsetWidth;
const boxYStart = box.offsetTop;
const boxYEnd = box.offsetTop + box.offsetHeight;
const initial = {
  x: 0,
  y: 0,
};
let isBox = false;
const initialOffsetBtn = {
  left: btn.offsetLeft,
  top: btn.offsetTop,
};
btn.addEventListener("mousedown", (e) => {
  if (e.button !== 0) {
    return;
  }
  initial.x = e.offsetX;
  initial.y = e.offsetY;

  document.addEventListener("mousemove", handleDrag);

  btn.classList.remove("transition");
});

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", handleDrag);
  box.classList.remove("drag");
  btn.classList.add("transition");
  if (isBox) {
    btn.style.left = boxXEnd - btn.offsetWidth - borderBoxWidth + "px";
    btn.style.top = boxYEnd - btn.offsetHeight - borderBoxWidth + "px";
  } else {
    btn.style.top = initialOffsetBtn.top + "px";
    btn.style.left = initialOffsetBtn.left + "px";
  }
});
console.log(boxXStart, boxXEnd);

const handleDrag = (e) => {
  btn.style.top = `${e.clientY - initial.y}px`;
  btn.style.left = `${e.clientX - initial.x}px`;
  box.classList.add("drag");
  const x = e.clientX - initial.x;
  const y = e.clientY - initial.y;
  if (
    x >= boxXStart &&
    x <= boxXEnd - btn.offsetWidth &&
    y >= boxYStart &&
    y <= boxYEnd - btn.offsetHeight
  ) {
    box.classList.add("drop");
    isBox = true;
  } else {
    box.classList.remove("drop");
    isBox = false;
  }
};
