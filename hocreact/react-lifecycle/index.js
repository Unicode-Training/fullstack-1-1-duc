// import { useState } from "react";

const root = document.querySelector("#root");

const container = ReactDOM.createRoot(root);
let value = 0;

const Message = () => {
  React.useEffect(() => {
    console.log(`Component đã được gắn vào DOM`);
    return () => {
      console.log(`Component đã loại khỏi DOM`);
    };
  }, []);
  return <h2>Message</h2>;
};

const MyComponent = () => {
  const [count, setCount] = React.useState(0);
  const [isShow, setShow] = React.useState(true);
  const handleIncrement = () => {
    setCount(count + 1);
    if (value < 5) {
      value++;
    }
  };

  //   React.useEffect(() => {
  //     console.log("Effect: " + count);
  //     return () => {
  //       //Cleanup: Lấy được dữ liệu của lần render trước
  //       console.log(`Cleanup: ${count}`);
  //     };
  //   }, [count]);

  //   console.log(`Re-render: ${count}`);

  return (
    <div>
      <h1>MyComponent: {count}</h1>
      {/* {console.log("UI Update:" + count)} */}
      <button onClick={handleIncrement}>Up</button>
      <button onClick={() => setShow(!isShow)}>Message Toggle</button>
      {isShow && <Message />}
    </div>
  );
};
const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [error, setError] = React.useState();
  React.useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        if (!response.ok) {
          throw new Error("Fetch to failed");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, []);
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <h4>Price: {product.price}</h4>
          </div>
        ))
      )}
    </div>
  );
};
const jsx = (
  <>
    <Products />
  </>
);

container.render(jsx);

/**
React.useEffect(callback, dependencies)

dependencies = [] --> callback chỉ chạy sau lần render đầu tiên
dependencies = null, undefiend --> callback chạy sau khi component re-render (Chạy sau khi giao diện cập nhật)
dependencies = [bien1,bien2,...] --> 1 trong các biến thay đổi, component re-render

Thứ tự chạy
- State thay đổi
- Component re-render
- UI Update
- Cleanup (Nếu có)
- Effect Callback

Lưu ý: 
- Nếu dependency là [] --> Callback useEffect sẽ là Mounted, cleanup sẽ Unmounted
*/
