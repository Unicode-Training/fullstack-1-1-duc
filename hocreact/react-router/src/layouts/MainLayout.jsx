import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";

export default function MainLayout() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
