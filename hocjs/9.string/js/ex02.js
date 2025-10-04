let keyword = "JAVAsCripT";
let content = `Học lập trình javascript. Học lập trình javascript. Học lập trình javascript. Học lập trình javascript. Đức Developẻ`;

//Đoạn 1 --> Từ đầu đến vị trí cần xử lý
//Đoạn 2 --> Vị trí cần xử lý
//Đoạn 3 --> Sau vị trí cần xử lý

//B1: Tìm vị trí xuất hiện của chữ javascript trong chuỗi content (indexOf)
let position = content.toLowerCase().indexOf(keyword.toLowerCase());
let newContent = "";
// if (position !== -1) {
//   let content1 = content.slice(0, position);
//   let content2 = content.slice(position, position + keyword.length);
//   let content3 = content.slice(position + keyword.length);

//   newContent = content1 + `<span>${content2}</span>`;

//   content = content3; //Xóa bỏ đoạn đã tìm

//   const position2 = content.toLowerCase().indexOf(keyword.toLowerCase());
//   if (position2 !== -1) {
//     let content1 = content.slice(0, position2);
//     let content2 = content.slice(position2, position2 + keyword.length);
//     let content3 = content.slice(position2 + keyword.length);
//     newContent = newContent + content1 + `<span>${content2}</span>`;
//     content = content3; //Xóa bỏ đoạn đã tìm
//     console.log(content);
//   }
// }

while (position !== -1) {
  let content1 = content.slice(0, position);
  let content2 = content.slice(position, position + keyword.length);
  let content3 = content.slice(position + keyword.length);

  newContent = newContent + content1 + `<span>${content2}</span>`;
  content = content3;
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
}

newContent = newContent + content;

document.body.innerHTML = `
<p>Từ khóa: ${keyword}</p>
<h1>${newContent}</h1>
<p>Số từ khóa tìm được: 0</p>
`;

//B1:
//content = Học lập trình javascript. Học lập trình javascript. Học lập trình javascript. Học lập trình javascript. Đức Developẻ
//newContent = Học lập trình <span>javascript</span>

//B2:
//content = . Học lập trình javascript. Học lập trình javascript. Học lập trình javascript. Đức Developẻ
//newContent = newContent + . Học lập trình <span>javascript</span>

//B3: content = . Học lập trình javascript. Học lập trình javascript. Học lập trình javascript. Đức Developẻ
//newContent = newContent + . Học lập trình <span>javascript</span>
