//Biểu thức = toán tử và toán hạng
//Ví dụ: s = a + b * c / d

//1. Toán tử số học:
// +, -, *, /
// %: Chia lấy dư
// **: Lũy thừa
// ++: Tăng lên 1 đơn vị
// --: Giảm đi 1 đơn vị

// let a = 10;
// let b = 20;
// let c = (a + b - 2) * 3;
// console.log(c);

// let a = 10;
// let b = "5";
// let c = a / b;
// console.log(c);

// let number1 = 30;
// let number2 = 2.8;
// let number3 = 4;
// let number4 = 25;
// let number5 = 9;
// let number6 = 5;
// let number7 = 1;
// let number8 = 6;

// let result =
//   number1 +
//   number2 / (number3 / number4 - number5 / number6 - number7 / number8);
// console.log(result);

//Toán tử: ++
// let count = 1;
// count++;
// ++count;
// console.log(count);

//Toán tử: --
// let count = 0;
// count--;
// --count;
// console.log(count);

// let count = 1;
// // let total = count++;
// let total = ++count;
// console.log(count);
// console.log(total);

//Kết luận:
//count++, ++count, count--, --count nếu đứng 1 mình --> Giống nhau
//Nếu đưa vào 1 biểu thức:
// count++ --> Lấy giá trị trước khi tăng
// ++count --> Lấy giá trị sau khi tăng

//Bài tập:
// let count = 1;
// let total = count++ + ++count + count++ + ++count; //Bằng bao nhiêu?
// // 1 + 3 + 3 + 5 = 12
// console.log(total);

//2. Toán tử so sánh
// >, <, >=, <=, ==, !=
// === --> So sánh bằng cả giá trị và kiểu dữ liệu
// !== --> So sánh khác cả giá trị và kiểu dữ liệu
// --> Luôn trả về boolean

// let a = 20;
// let b = 10;
// let c = a >= b;
// console.log(c);

// let a = 10;
// let b = "10";
// let c = a === b;
// console.log(c);

// let a = 10;
// let b = "10";
// let c = a !== b;
// console.log(c);

//3. Toán tử gán (=)
// let a = 10;
// let b = 20;

// a = a + b;
// a += b; //a = a + b
// a *= b;
// a /= b;
// a %= b; //a = a % b
// a **= b;
// console.log(a);

//4. Toán tử && (Và)
// let a = 20;
// let check = a >= 5 && a <= 15;
// console.log(check);

//Khái niệm truthy, falsy
// - Trong ngữ cảnh (context) cần phải chuyển sang boolean mà giá trị nhận được tương tự false --> falsy
// - Trong ngữ cảnh (context) cần phải chuyển sang boolean mà giá trị nhận được tương tự true --> truthy
//Cách hoạt động của toán tử &&
// - Tìm falsy --> Nếu tìm thấy falsy --> dừng lại và trả về kết quả falsy
// - Nếu không tìm thấy falsy --> Trả về kết quả của biểu thức cuối cùng
// let a = 10; //true
// let b = 15;
// let result = a && b > 20 && "Hoàng An";
// console.log(result);

//5. Toán tử || (Hoặc)
// - Tìm truthy, nếu tìm thấy sẽ dừng lại và trả về giá trị truthy
// - Nếu không tìm thấy trả về biểu thức cuối cùng
// let a = 0;
// let result = a || "Ok" || "Đức";
// console.log(result);

// let a = 10;
// let result = a >= 0 || a > 100;
// console.log(result);

//6. Toán tử ! (Phủ định)
// - Chuyển biểu thức thành boolean
// - Trả về giá trị ngược lại
// let a = 10;
// let b = !a;
// console.log(b);

// let a = 10;
// // let b = a < 0;
// // let result = !b;
// let result = !(a < 0);
// console.log(result);

//7. Toán tử ?? (Nullish)
// - Tìm null và undefined
// - Nếu tìm thấy null hoặc undefined --> Đi tiếp
// - Nếu không tìm thấy trả về chính giá trị đó
// let a = 1;
// let result = a ?? undefined ?? "Bhihi";
// console.log(result);

//8. Toán tử điều kiện 3 ngôi (?:)
// let a = 10;
// let b = a >= 10 ? 20 : 0;
// console.log(b);
