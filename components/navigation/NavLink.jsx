"use client";

import { Anchor } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Anchor
      component={Link}
      href={href}
      style={{
        fontWeight: isActive ? "bold" : "normal",
        color: isActive ? "blue" : "black",
      }}>
      {children}
    </Anchor>
  );
}
