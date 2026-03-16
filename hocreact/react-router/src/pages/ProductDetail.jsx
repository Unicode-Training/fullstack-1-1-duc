import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API}/products/${id}`,
      );
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [id]);
  return (
    <div>
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>
      <div>
        <img src={product.thumbnail} alt="" />
      </div>
      <div>{product.description}</div>
    </div>
  );
}
