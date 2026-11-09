
"use client";

import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const menus = ["Home", "About", "Menu", "Contact"];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Sweet Crumbs<span>.</span>
      </a>

      <div className="nav-links">
        {menus.map((menu) => (
          <a
            key={menu}
            href={`#${menu.toLowerCase()}`}
            className={active === menu ? "active" : ""}
            onClick={() => setActive(menu)}
          >
            {menu}
          </a>
        ))}
      </div>
    </nav>
  );
}
