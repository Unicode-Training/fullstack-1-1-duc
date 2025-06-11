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

4.3. Kế thừa

```
selector1, selector2, selecto3 {
    Code
}
```

Ý nghĩa: các selector trên sẽ cùng 1 khối (Định dạng giống nhau)

4.4. Cùng cấp (Cùng trong 1 thẻ html)

```
selector1selector2selector3 {
    Code
}
```

4.5. Selector ngang hàng (Anh em)

```
selector1 ~ selector2 ~ selector3 {
    Code
}
```

Chọn seletor nào sau 1 selector khác

Điều kiện:

- Phần tử được chọn và phần tử điều kiện phải ngang hàng và cuộc thuộc 1 cha
- Phần tử được chọn phải ở phía sau

  4.6. Selector ngang hàng (Liền kề)

```
selector1 + selector2 + selector3 {
    Code
}
```

5. Attribute Selector

5.1. Chọn các thẻ html có thuộc tính

```
tenthe[tenthuoctinh] {
    Code
}
```

5.2. Chọn các thẻ html có thuộc tính khớp với giá trị

```
tenthe[tenthuoctinh="giatri"] {
    Code
}
```

5.3. Chọn các thẻ html có thuộc tính chứa giá trị bắt đầu bằng ký tự nào đó

```
tenthe[tenthuoctinh^="tukhoa"] {
Code
}
```

5.4. Chọn các thẻ html có thuộc tính chứa giá trị

```
tenthe[tenthuoctinh*="tukhoa"] {
Code
}
```

5.5. Chọn các thẻ html có thuộc tính kết bằng từ khóa nào đó

```
tenthe[tenthuoctinh$="tukhoa"] {
Code
}
```

## Pseudo

1. Phần tử giả (Pseudo Element)

- Không có thẻ html quy định phần tử
- Thông qua cú pháp của css

Cú pháp:

```css
selector::tenphantu {
    Code
}
```

Danh sách các phần tử phổ biến

- before --> phải có thuộc thuộc tính content
- after --> phải có thuộc thuộc tính content
- first-line
- first-letter
- placeholder
- selection

Lưu ý: before, after thuộc kiểu inline

2. Lớp giả (Pseudo Class)

- Thường gọi trạng thái của các thẻ html
- Cú pháp

```css
selector:tenlop {
    Code
}
```

Danh sách các lớp giả

- hover --> Trỏ chuột
- active --> click và giữ chuột
- focus --> Áp dụng trong form
- checked --> Áp dụng radio và checkbox
- not --> Bỏ qua selector
- first-child --> Chọn phần tử con đầu tiên
- last-child --> Chọn phần tử con cuối cùng
- first-of-type --> Chọn phần tử html đầu tiên theo kiểu thẻ
- last-of-type --> Chọn phần tử html cuối cùng theo kiểu thẻ
- nth-child(stt) --> Chọn phần tử con theo số thứ tự
- nth-of-type(stt) --> Chọn phần tử theo số thứ tự (Cùng kiểu)
  Lưu ý: Với nth-child, nth-of-type có thể kết hợp với hằng số n để xử lý các bài toán phức tạp
  Ví dụ:

```css
:nth-child(2n + 2) {
    Code
}
```

- valid

## Các đơn vị trong CSS

1. Đơn vị tuyệt đối

- px (Điểm ảnh trên màn hình)

2. Đơn vị tương đối

- em --> Tỷ lệ theo font-size của thẻ cha
- rem --> Tỷ lệ theo font-size của mặc định trình duyệt
- %
- vw
- vh

## Thuộc tính định dạng văn bản

- color: mamau|tenmau ==> Thay đổi màu của văn bản
- font-size: cochu+donvi ==> Thay đổi cỡ chữ của văn bản
- line-height: tyle ==> Thay đổi chiều cao của dòng văn bản (Tỷ lệ với font-size của chính nó)
- font-family: tenfont1, tenfont2,... ==> Thay đổi font chữ cho văn bản
- text-decoration: none|underline|overline|line-through ==> Thêm các đường gạch ngang trong văn bản
- text-transform: none|uppercase|lowercase|captialize --> Chữ hoa, chữ thường
- letter-spacing: Tạo khoảng cách giữa các ký tự
- word-spacing: Tạo khoảng cách giữa các từ
- font-weight: Thiết lập đồ dày cho văn bản (Phụ thuộc vào font chữ)

* Các giá trị số từ 100 đến 900 (Bội số của 100)
* normal (Mặc định, tương đương 400)
* bold (Tương đương với 700)

- font-style: Thiết lập chữ ngiêng

* normal: Mặc định
* italic: Nghiêng

- text-align: Thiết lập vị trí của văn bản (Căn theo chiều ngang)

* left
* center
* right
* justify

Bài tập: Dựa vào html sẵn có thực hiện các yêu cầu sau

- Thay đổi html cho phù hợp với yêu cầu
- Khi click vào tên công việc (checkbox được checked) thay đổi định dạng tên công việc như sau:

* Màu đỏ
* Gạch ngang (Giữa văn bản)
* Chữ nghiêng
* Nếu công việc là số lẻ --> Thêm in đậm (700)

## Thuộc tính background

Thay đổi màu nền và hình nền của thẻ html

1. background-color

2. background-image

3. bacground-repeat: Thiết lập lặp ảnh nền

- repeat: Mặc định, lặp 2 chiều
- repeat-x: Lặp theo trục x
- repeat-y: Lặp theo trục y
- no-repeat: Không lặp

4. background-position: Thiết lập vị trí ảnh nền

Mặc định: 0 0

Giá trị đặc biệt

Trục X:

left ~ 0
center ~ 50%
right ~ 100%

Trục y:

top ~ 0
center ~ 50%
bottom ~ 100%

5. background-size

Mặc định: auto auto (Kích thước ảnh gốc)

Giá trị đặc biệt:

- cover: Tính toán để lấp đầy ảnh nền vào khung hiển thị
- contain: Giữ nguyên tỷ lệ gốc của ảnh nền

6. background-attachment

- Cố định ảnh nền khi kéo thanh cuộn
- scroll
- fixed

7. background: Tổng hợp tất cả các thuộc tính trên

background: color image repeat position / size attachment

## Thuộc tính border

Cấu tạo của border = width + style + color

- border-width
- border-style: none | solid | dashed | dotted | double
- border-color

Cú pháp chi tiết theo cạnh

- border-{side}-width
- border-{side}-style
- border-{side}-color

side: left, top, right, bottom

Cú pháp viết tắt (Gộp)

- border: width style color
- border-{side}: width style color

side: left, top, right, bottom
