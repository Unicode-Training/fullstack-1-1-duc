import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
const LIMIT = 5;
export default function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productList, setProductList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const q = searchParams.get("q");
  const currentPage = searchParams.get("page") || 1;
  useEffect(() => {
    const getProducts = async () => {
      const skip = (currentPage - 1) * LIMIT;
      let url = `${import.meta.env.VITE_SERVER_API}/products?limit=${LIMIT}&skip=${skip}`;
      if (q) {
        url = `${import.meta.env.VITE_SERVER_API}/products/search?q=${q}&limit=${LIMIT}&skip=${skip}`;
      }
      const response = await fetch(url);
      const { products, total } = await response.json();
      setProductList(products);
      const totalPages = Math.ceil(total / LIMIT);
      setTotalPages(totalPages);
    };
    getProducts();
  }, [q, currentPage]);
  const handleChangePage = (page) => {
    setSearchParams({
      page,
      q,
    });
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

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
      {Array.from(Array(totalPages)).map((_, index) => (
        <button
          style={{
            background: index + 1 === +currentPage ? "yellow" : null,
          }}
          key={index}
          onClick={() => handleChangePage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
