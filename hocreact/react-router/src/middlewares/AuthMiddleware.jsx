import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthMiddleware() {
  const isAuth = localStorage.getItem("isLogin") === "1" ? true : false;
  const location = useLocation();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={`/login?continue=${location.pathname}`} />
  );
}
