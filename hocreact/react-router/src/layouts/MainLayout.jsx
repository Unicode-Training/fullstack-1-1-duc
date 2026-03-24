import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { useAuth } from "../stores/authStore";
import { useEffect } from "react";

export default function MainLayout() {
  // const location = useLocation();
  // console.log(location);
  const { getProfile } = useAuth();
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
