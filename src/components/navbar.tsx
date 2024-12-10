import { NavLink } from "react-router-dom";
import { navLinks } from "./router";
import DarkModeToggle from "./dark-mode-toggle";

export default function Navbar() {
  return (
    <nav className="w-screen h-12 bg-violet-600 flex items-center justify-center fixed mb-12">
      <div className="flex gap-4 ml-auto">
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
      </div>
      <div className="ml-auto mr-16">
        <DarkModeToggle />
      </div>
    </nav>
  );
}
