const items = document.querySelectorAll("ul li");
const ul = document.querySelector("ul");
const menu = document.querySelector(".menu");
const modalDialog = document.querySelector(".modal-dialog");
const deleteItemEl = menu.querySelector(".delete-item");
const renameItemEl = menu.querySelector(".rename-item");
const inputEl = modalDialog.querySelector("input");
const btnEl = modalDialog.querySelector("button");
let currentItem = null;
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
    menu.classList.add("show");
    Object.assign(menu.style, {
      top: e.clientY + "px",
      left: e.clientX + "px",
    });
    currentItem = item;
  });
});

document.addEventListener("click", () => {
  const itemSelected = document.querySelector(".selected");
  if (itemSelected) {
    itemSelected.classList.remove("selected");
  }
  menu.classList.remove("show");
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
menu.addEventListener("click", (e) => {
  e.stopPropagation();
});

deleteItemEl.addEventListener("click", () => {
  currentItem.remove();
  menu.classList.remove("show");
});

renameItemEl.addEventListener("click", () => {
  modalDialog.classList.add("show");
  menu.classList.remove("show");
  const text = currentItem.children[0].innerText;
  inputEl.value = text.trim();
});

btnEl.addEventListener("click", () => {
  if (!inputEl.value) {
    return alert("Không được để trống");
  }
  currentItem.children[0].innerText = inputEl.value;
  modalDialog.classList.remove("show");
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    menu.classList.remove("show");
    modalDialog.classList.remove("show");
  }
});
