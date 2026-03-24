import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../stores/authStore";

export default function AuthMiddleware() {
  const { isLoading, isAuthenticated } = useAuth();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return isAuthenticated ? <Outlet /> : <Navigate to={`/login`} />;
}
