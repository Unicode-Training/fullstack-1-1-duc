# Ngôn ngữ CSS

- Ngôn ngữ định dạng CSS (Cascading Style Sheets)
- Định dạng các phần tử html: Bố cục (Layout), màu sắc, cỡ chữ, font chữ,... --> Làm đẹp, tạo hình hài,...
- CSS không chạy độc lập trên trình duyệt mà phải thông qua html

## Các cách đưa css vào html

1. Viết trực tiếp css trong html thông qua thẻ style (Internal CSS)

```
<style>
    Code css
</style>
```

2. Tách riêng file .css (External CSS)

```
<link rel="stylesheet" href="duong-dan-toi-file-css" />
```

3. Viết trực tiếp trong thẻ html thông qua thuộc tính style (Inline css)

## Cấu trúc của CSS

```
selector1 {
   property1: value1;
   property2: value2;
   property3: value3;
}

selector2 {
   property1: value1;
   property2: value2;
   property3: value3;
}

selector3 {
   property1: value1;
   property2: value2;
   property3: value3;
}
```

selector: Bộ chọn để chọn đúng vào thẻ html cần định dạng

Trong tất cả các thẻ html, có 2 thuộc tính

- id: Thể hiện thẻ này là duy nhất
- class: Có thể áp dụng thẻ này xuất hiện nhiều lần, nhiều nơi

Quy tắc đặt tên

- Không bắt đầu bằng số
- Chấp nhận: Chữ hoa, thường, số, gạch ngang, gạch dưới, 1 số ký tự đặc biệt
- Nên đặt bằng Tiếng Anh
- Dùng danh từ

Lưu ý với id và class

- id: Chỉ đặt được 1 id trong 1 phần tử html
- class: Có thể đặt được nhiều class trong 1 phần tử html (Mỗi class cách nhau bởi khoảng trắng)

```html
<h1 id="title">Học lập trình</h1>

<h2 class="sub-title title-large title-red">Học CSS</h2>
```

## Quy tắc selector

1. Chọn theo id

```
#tenid {
    thuoctinh: giatri;
}
```

2. Chọn theo class

```
.tenclass {
    thuoctinh: giatri;
}
```

3. Chọn theo tagname

```
tagname {
    thuoctinh: giatri;
}
```

Bài tập: Dựa vào nội dung html đã có sẵn, thực hiện các yêu cầu sau:

- Đổi màu thẻ h1 --> Đỏ
- Đổi màu thẻ p thứ nhất và ul --> Xanh green
- Đổi màu thẻ p thứ hai --> tím (blueviolet)
- Đổi màu thẻ p cuối cùng --> xanh blue

Lưu ý:

- Thoải mái đặt class, id
- Cho phép nhóm thẻ div

4. Selector kết hợp

4.1. Nằm trong

```
selector1 selector2 selector3 {
    code
}
```

Lưu ý: Không giới hạn số lượng cấp

4.2. Cha con

```
selector1 > selector2 > selector3 {
 code
}
```
