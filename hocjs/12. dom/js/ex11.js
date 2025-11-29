const items = document.querySelectorAll("ul li");
const ul = document.querySelector("ul");
items.forEach((item) => {
  const up = item.querySelector(".up");
  const down = item.querySelector(".down");
  up.addEventListener("click", () => {
    const prevEl = item.previousElementSibling;
    if (!prevEl) {
      return;
    }
    ul.insertBefore(item, prevEl);
  });
  down.addEventListener("click", () => {
    const nextEl = item.nextElementSibling;
    if (!nextEl) {
      return;
    }
    ul.insertBefore(nextEl, item);
  });
});
