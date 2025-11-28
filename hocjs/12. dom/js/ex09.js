const nextBtn = document.querySelector(".next");
const products = document.querySelector(".products");
nextBtn.addEventListener("click", () => {
  const productActive = products.querySelector(".active");
  const nextEl = productActive.nextElementSibling;
  if (nextEl) {
    nextEl.classList.add("active");
    productActive.classList.remove("active");
  } else {
    const firstProduct = products.querySelector("h2:first-child");
    firstProduct.classList.add("active");
    productActive.classList.remove("active");
  }
});
