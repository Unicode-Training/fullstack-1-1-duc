import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../libs/axios";

export default function Order() {
  const params = useParams();
  useEffect(() => {
    const getProfile = async () => {
      await instance.get(`/auth/profile`);
    };
    getProfile();
  }, []);
  return (
    <div>
      <h1>Đặt hàng sản phẩm: {params.productId}</h1>
    </div>
  );
}
