const items = document.querySelectorAll("ul li");
const ul = document.querySelector("ul");
const menu = document.querySelector(".menu");
items.forEach((item) => {
  const up = item.querySelector(".up");
  const down = item.querySelector(".down");
  up.addEventListener("click", (e) => {
    e.stopPropagation();
    const prevEl = item.previousElementSibling;
    if (!prevEl) {
      return;
    }
    ul.insertBefore(item, prevEl);
  });
  down.addEventListener("click", (e) => {
    e.stopPropagation();
    const nextEl = item.nextElementSibling;
    if (!nextEl) {
      return;
    }
    ul.insertBefore(nextEl, item);
  });
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const itemSelected = document.querySelector(".selected");
    if (itemSelected) {
      itemSelected.classList.remove("selected");
    }
    item.classList.add("selected");
  });
  item.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    console.log(e.clientX, e.clientY);
    menu.classList.add("show");
    Object.assign(menu.style, {
      top: e.clientY + "px",
      left: e.clientX + "px",
    });
  });
});

document.addEventListener("click", () => {
  const itemSelected = document.querySelector(".selected");
  if (itemSelected) {
    itemSelected.classList.remove("selected");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.altKey && e.shiftKey) {
    if (e.key === "ArrowDown") {
      const itemSelected = document.querySelector(".selected");
      if (!itemSelected) {
        return;
      }
      const newItem = itemSelected.cloneNode(true);
      newItem.classList.remove("selected");
      ul.insertBefore(newItem, itemSelected.nextElementSibling);
    }

    if (e.key === "ArrowUp") {
      const itemSelected = document.querySelector(".selected");
      if (!itemSelected) {
        return;
      }
      const newItem = itemSelected.cloneNode(true);
      newItem.classList.remove("selected");
      ul.insertBefore(newItem, itemSelected);
    }
  }
});
