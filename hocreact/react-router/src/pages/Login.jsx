import { useState } from "react";
import { instance } from "../libs/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../stores/authStore";

export default function Login() {
  const [form, setForm] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { getProfile } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await instance.post(`/auth/login`, form);
      const token = response.data;
      localStorage.setItem("access_token", token.access_token);
      localStorage.setItem("refresh_token", token.refresh_token);
      getProfile(); //Gọi lên store để lấy thông tin profile và update vào store
      navigate("/");
    } catch {
      setMessage("Tài khoản hoặc mật khẩu không chính xác");
    } finally {
      setLoading(false);
    }
  };
  const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email..."
            name="email"
            onChange={handleChangeValue}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password..."
            name="password"
            onChange={handleChangeValue}
          />
        </div>
        <button disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

/*
Product Detail -> Middleware -> Order Detail
-> Redirect login -> login success -> Order Detail
*/
