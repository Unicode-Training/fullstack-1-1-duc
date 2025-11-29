// const items = document.querySelectorAll("ul li");
// const ul = document.querySelector("ul");
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   ul.innerHTML += `<li>Item ${ul.children.length + 1}</li>`;
// });

// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.style.color = "red";
//   });
// });

const root = document.querySelector("#root");
//Tạo node mới
// const h1 = document.createElement("h1");
// h1.innerText = "Học lập trình không khó";

// const h2 = document.createElement("h2");
// h2.innerText = "Học js không khó";
// root.append(h1);
// root.prepend(h2);

// const btn = document.createElement("button");
// btn.innerText = "Click me";

// const ul = document.createElement("ul");

// root.append(ul);

// root.append(btn);

// btn.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.innerText = "new item: " + (ul.children.length + 1);
//   ul.append(li);
//   li.addEventListener("click", handleClickItem);
// });

// const handleClickItem = (e) => {
//   e.target.style.color = "red";
// };

// //insertBefore(newNode, childNode)
// const h3 = document.createElement("h3");
// h3.innerText = "H3 content";
// // root.insertBefore(h3, h1);

// root.insertBefore(h3, h1.nextElementSibling);
// // root.prepend(h3);

// //replaceChild(newNode, childNode)
// const h4 = document.createElement("h4");
// h4.innerText = "Ok";
// root.replaceChild(h4, h3);

// // document.body.append(h3);

// //removeChild
// root.removeChild(h1);

// document.body.append(h1);

//textNode
const h1 = document.createElement("h1");
h1.innerText = "Count: ";
// const span = document.createElement("span");
// span.innerText = 0;
// h1.append(span);
const textNode = document.createTextNode(0);
h1.append(textNode);
root.append(h1);

const btn = document.createElement("button");
btn.innerText = "+";
root.append(btn);

btn.addEventListener("click", () => {
  //   span.innerText++;
  textNode.data++;
});
