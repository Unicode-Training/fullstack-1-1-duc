import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Product";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Admin/Dashboard";
import UsersIndex from "./pages/Admin/Users/UsersIndex";
import UserCreate from "./pages/Admin/Users/UserCreate";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/Login";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import Order from "./pages/Order";
export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route element={<AuthMiddleware />}>
          <Route path="/order/:productId" element={<Order />} />
        </Route>
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route element={<AuthMiddleware />}>
          <Route path="" element={<Dashboard />} />
          <Route path="users">
            <Route path="" element={<UsersIndex />} />
            <Route path="create" element={<UserCreate />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
