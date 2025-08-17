//switch case
let action = "abc";
switch (action) {
  case "create":
  case "insert":
  case "add":
    console.log("Thêm mới");
    break;
  case "update":
  case "edit":
    console.log("Sửa");
    break;
  case "delete":
  case "remove":
  case "destroy":
    console.log("Xóa");
    break;
  default:
    console.log("Không hợp lệ");
    break;
}

//Chỉ chấp nhận so sánh ===

//Bài tập: Chuyển đoạn code trên thành if else (Vẫn phải đúng kết quả)
if (action === "create" || action === "insert" || action === "add") {
  console.log("Thêm mới");
} else if (action === "update" || action === "edit") {
  console.log("Sửa");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("Xóa");
} else {
  console.log("Không hợp lệ");
}
