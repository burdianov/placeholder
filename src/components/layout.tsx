import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export default function Layout() {
  return (
    <div className="">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}