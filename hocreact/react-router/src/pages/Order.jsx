import { useParams } from "react-router-dom";

export default function Order() {
  const params = useParams();
  return (
    <div>
      <h1>Đặt hàng sản phẩm: {params.productId}</h1>
    </div>
  );
}
