//Nối biến
// let a = 10;
// let b = 20 + a;
// console.log(b);

// let a = 10;
// let b = "Đức: " + a;
// console.log(b);

// let courseName = "Fullstack js";
// // let welcome = "Chào mừng anh em tới khóa học " + courseName + " tại Unicode";
// let welcome = `Chào mừng anh em tới khóa học ${courseName} tại Unicode`;
// console.log(welcome);

let title = "Chào mừng bạn đến với Unicode Academy";
let class1 = "title";
let class2 = "title-large";
let link = "https://unicode.vn";
let label = "Đăng ký khóa học";
let html = `
<h1 class="${class1} ${class2}">${title}</h1>
<h2><a href="${link}">${label}</a></h2>
`;
document.body.innerHTML = html;
