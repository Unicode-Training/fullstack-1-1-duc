const btn = document.querySelector("button");
const initial = {
  x: 0,
  y: 0,
};
btn.addEventListener("mousedown", (e) => {
  if (e.button !== 0) {
    return;
  }
  initial.x = e.offsetX;
  initial.y = e.offsetY;

  document.addEventListener("mousemove", handleDrag);
});

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", handleDrag);
});

const handleDrag = (e) => {
  btn.style.top = `${e.clientY - initial.y}px`;
  btn.style.left = `${e.clientX - initial.x}px`;
};
