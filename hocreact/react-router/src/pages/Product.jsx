import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
export default function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();
  const q = searchParams.get("q");
  useEffect(() => {
    const getProducts = async () => {
      let url = `${import.meta.env.VITE_SERVER_API}/products`;
      if (q) {
        url = `${import.meta.env.VITE_SERVER_API}/products/search?q=${q}`;
      }
      const response = await fetch(url);
      const { products } = await response.json();
      setProductList(products);
    };
    getProducts();
  }, [q]);
  return (
    <div>
      <h1>Product</h1>
      <h2>Từ khóa: {searchParams.get("q")}</h2>
      <input
        type="text"
        placeholder="Tìm kiếm..."
        onChange={(e) => {
          setSearchParams({
            q: e.target.value,
          });
        }}
      />
      {productList.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.thumbnail} alt="" width={200} />
          <p>{product.price}</p>
          <button onClick={() => navigate(`/products/${product.id}`)}>
            Chi tiết
          </button>
        </div>
      ))}
    </div>
  );
}
