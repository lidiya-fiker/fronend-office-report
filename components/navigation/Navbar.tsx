"use client";

import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </nav>
  );
}
