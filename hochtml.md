# Ngôn ngữ đánh dấu siêu văn bản HTML

- Cấu tạo bởi các thẻ
- Rất nhiều thẻ (Chỉ cần học khoảng 30 thẻ)
- Các thẻ html có thể lồng vào với nhau

## Cấu tạo

1. Thẻ HTML đầy đủ

```
<tenthe thuoctinh1="giatri1" thuoctinh2="giatri2">Nội dung</tenthe>
```

2. Thẻ HTML tự đóng

```
<tenthe thuoctinh1="giatri1" thuoctinh2="giatri2" />
```

Trang web tra cứu thẻ html: https://htmlreference.io/

## Nhóm thẻ

1. Thẻ block

- Luôn ở hàng mới
- Chiều rộng mặc định bằng chiều rộng của thẻ cha

2. Thẻ inline

- Chiều rộng mặc định bằng với nội dung của thẻ
- Các thẻ inline đứng cạnh nhanh sẽ nằm trên 1 hàng

## Các thẻ html trong nhóm block

1. Thẻ heading: Trình bày tiêu đề của trang web

```
<h1>Nội dung tiêu đề</h1>
<h2>Nội dung tiêu đề</h2>
<h3>Nội dung tiêu đề</h3>
<h4>Nội dung tiêu đề</h4>
<h5>Nội dung tiêu đề</h5>
<h6>Nội dung tiêu đề</h6>
```

Lưu ý:

- Trong 1 trang web chỉ có 1 thẻ html
- Các thẻ heading phải tuân thủ thứ tự: h1 -> h2 -> h3 ...

2. Thẻ đoạn văn

```
<p>Đoạn văn</p>
```

3. Thẻ định dạng danh sách

```
<ul>
    <li>Danh sách 1</li>
    <li>Danh sách 2</li>
    <li>Danh sách 3</li>
    <li>Danh sách 4</li>
</ul>
```

```
<ol>
    <li>Danh sách 1</li>
    <li>Danh sách 2</li>
    <li>Danh sách 3</li>
    <li>Danh sách 4</li>
</ol>
```

4. Thẻ trích dẫn

- Trích dẫn 1 nội dung ở trang web khác
- Trích dẫn câu nói của người nổi tiếng

```
<blockquote>
    Nội dung
</blockquote>
```

5. Thẻ phân chia bố cục (div)

- Nhóm các thẻ html khác thành các khối
- Chỉ có tác dụng khi chia bố cục bằng css

```
<div>
    Các thẻ html khác
</div>
```

6. Thẻ gạch ngang

```
<hr/>
```

## Các thẻ trong nhóm inline

1. Thẻ chèn liên kết (a = anchor)

```
<a href="dia_chi_trang_web">Văn bản hiển thị</a>
```

Các thuộc tính khác:

- target --> Mở nội dung trang web ở đâu?

* `_self`: Tab hiện tại
* `_target`: Tab mới

- title --> Tiêu đề khi trỏ chuột

2. Thẻ chèn hình ảnh (img)

```
<img src="duong-dan-anh" />
```

Các thuộc tính khác

- width: Chiều rộng
- height: Chiều cao
- title: Tiêu đề khi trỏ chuột vào ảnh
- alt: Văn bản thay thế khi ảnh bị lỗi

3. Thẻ định dạng

3.1. Thẻ in đậm

```
<b>Nội dung</b>
```

3.2. Thẻ in nghiêng

```
<i>Nội dung</i>
```

3.3. Thẻ gạch chân

```
<u>Nội dung</u>
```

3.4. Thẻ gạch ngang

```
<s>Nội dung</s>
```

4. Thẻ ngắt dòng (Xuống dòng)

```
<br/>
```

5. Thẻ công thức hóa học, toán học

```
<sub>Nội dung</sub>
```

```
<sup>Nội dung</sup>
```

6. Thẻ định dạng kiểu (span)

```
Học <span>lập trình</span> không khó
```

Đặc điểm:

- Chỉ có tác dụng khi kết hợp css
- Đảm bảo tính inline của thẻ html (Nằm trên 1 dòng)

## Form

- Biểu mẫu cho phép người dùng nhập liệu, lựa chọn để gửi dữ liệu lên server
- Trong 1 trang web có thể có 1 hoặc nhiều form (Các form không lồng nhau)
- Trong 1 form = các trường nhập liệu (field) + nút gửi (submit)

- Để tạo 1 form, dùng thẻ form

Danh sách các trường:

- input text: `<input type="text" placeholder="Mô tả" value="Nội dung mặc định"/>`
- input email: `<input type="email" placeholder="Mô tả" value="Nội dung mặc định" />`
- input password: `<input type="password" placeholder="Mô tả" value="Nội dung mặc định" />`
- input number: `<input type="number" placeholder="Mô tả" value="Nội dung mặc định" />`
- input file: `<input type="file" />`
- input date: `<input type="date" value="Giá trị mặc định" />`
- input radio: `<input type="radio" name="nhom" value="Giá trị"/>`
- input checkbox: `<input type="checkbox" name="nhom" value="Giá trị"/>`
- select:

```
<select>
    <option value="value1">Text 1</option>
    <option value="value2">Text 2</option>
    <option value="value3">Text 3</option>
    <option value="value4">Text 4</option>
</select>
```
