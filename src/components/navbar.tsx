import { NavLink } from "react-router-dom";
import { navLinks } from "./router";

export default function Navbar() {
  return (
    <nav className="w-screen h-12 bg-violet-600 flex gap-4 items-center justify-center">
      {navLinks.map((link) => (
        <NavLink
          key={link.id}
          to={link.to}
          className={({ isActive }) => {
            return isActive ? "text-white font-semibold" : "";
          }}
        >
          {link.text}
        </NavLink>
      ))}
    </nav>
  );
}
