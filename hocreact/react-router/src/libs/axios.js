import axios from "axios";
import { useAuth } from "../stores/authStore";
export const instance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.status === 401 && error.config.url !== "/auth/refresh-token") {
      try {
        const refreshToken = localStorage.getItem("refresh_token");
        const response = await instance.post(`/auth/refresh-token`, {
          refreshToken,
        });
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        return instance(error.config);
      } catch {
        //Refresh thất bại
        //Cập nhật lại store
        useAuth.getState().logout();
      }
    }
    return Promise.reject(error);
  },
);

//Request (Token) --> Server check --> Response status 401 --> Interceptor Response
// - Nếu status khác 401 --> bỏ qua
// - Nếu status = 401 --> gọi api refresh
// + Thất bại (refresh hết hạn) --> logout
// + Thành công --> nhận được access token mới, refresh token mới --> lưu lại vào storage --> gọi lại request failed

//Ví dụ: GET /api/products
