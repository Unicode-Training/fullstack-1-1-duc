import { Link, Links } from "react-router-dom";
import { useAuth } from "../stores/authStore";

export default function Nav() {
  const { user, isAuthenticated } = useAuth();
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact</Link>
      {isAuthenticated ? (
        <span>Chào {user.name}</span>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
    </nav>
  );
}
