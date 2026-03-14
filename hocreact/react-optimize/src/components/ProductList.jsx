import { useState, useMemo, useCallback } from "react";
import ClearButton from "./ClearButton";

export default function ProductList() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productList, setProductList] = useState([]);
  const handleAdd = (e) => {
    e.preventDefault();
    setProductList([
      ...productList,
      {
        name,
        price,
      },
    ]);
    setName("");
    setPrice("");
  };
  const total = useMemo(() => {
    return productList.reduce((acc, cur) => {
      console.log("reduce");
      return acc + cur.price;
    }, 0);
  }, [productList]);
  //Caching kết quả tính toán của lần render trước
  //Quyết định khi nào sẽ tính toán lại thông qua dependency

  const handleClear = useCallback(() => {
    setProductList([]);
  }, []);
  //Caching hàm

  return (
    <div>
      <h2>Product Add</h2>

      <form onSubmit={handleAdd}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div>
          <label htmlFor="">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price..."
            onChange={(e) => setPrice(+e.target.value)}
            value={price}
            required
          />
        </div>
        <button>Add</button>
      </form>
      <h2>Product List</h2>
      <h3>Total: {total}</h3>
      {productList.map((product, index) => (
        <h3 key={index}>
          {product.name} - {product.price}
        </h3>
      ))}
      <ClearButton onClick={handleClear} />
    </div>
  );
}
