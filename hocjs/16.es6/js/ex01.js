//Destructuring
// - Truy cập vào các key trong object, array
// - Tạo thành các biến riêng biệt

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   "shipping-address": "HN",
//   default: "Đức",
//   age: undefined,
// };
// const {
//   name: fullname,
//   email,
//   "shipping-address": shippingAddress,
//   default: _default,
//   age = 32,
// } = user;
// console.log(fullname, email, shippingAddress);
// console.log(_default);
// console.log(age);

// const { email, name, ...obj } = user;
// console.log(email, name);
// console.log(obj);

// const users = ["Hoàng An", "hoangan.web@gmail.com", 33, "HN"];
// const [fullname, email, ...rest] = users;
// console.log(fullname, email);
// console.log(rest);

// const [fullname, , age] = users;
// console.log(fullname, age);

//Spread: Dải các key của object, array ra ngoài

// const oldObj = {
//   name: "An",
//   email: "an@mail.com",
// };
// const newObj = {
//   address: "hà nội",
//   age: 33,
//   ...oldObj,
// };
// console.log(newObj);

// const oldArr = ["An", "an@mail.com"];
// const newArr = ["Hà nội", ...oldArr, 33];
// console.log(newArr);

// const sum = (a, b) => {
//   return a + b;
// };
// const nums = [10, 20];
// //spread
// console.log(sum(...nums));

// //rest parameter
// const doSomething = (...args) => {
//   console.log(args);
// };
// doSomething(1, 2, 3, 4);

// const data = {
//   count: 0,
//   products: ["Product 1", "Product 2"],
//   message: "Hello",
// };

/*
{
  count: 0,
  products: ["Product 1", "Product 2", "Product 3"],
  message: "Hello",
};
*/
// const newData = { ...data, products: [...data.products, "Product 3"] };
// console.log(newData);
