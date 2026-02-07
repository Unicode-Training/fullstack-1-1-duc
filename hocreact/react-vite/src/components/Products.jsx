import { useEffect, useState } from "react";
import ProductDetailModal from "./ProductDetailModal";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [isOpenModal, setOpenModal] = useState(false);
  const [productId, setProductId] = useState(0);
  useEffect(() => {
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
            <button
              onClick={() => {
                setOpenModal(true);
                setProductId(product.id);
              }}
            >
              Detail
            </button>
          </div>
        ))
      )}
      {isOpenModal && (
        <ProductDetailModal
          id={productId}
          onHide={() => {
            setOpenModal(false);
          }}
        />
      )}
    </div>
  );
}
