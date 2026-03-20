import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <h2>Admin Header</h2>
      <Link to={"/admin"}>Dashboard</Link>
      <Link to={"/admin/users"}>Users</Link>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
