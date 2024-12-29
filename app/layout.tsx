"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import { Providers } from "./GlobalRedux/provider";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import Navbar from "@/components/navigation/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showNavbar = pathname !== "/login";
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <MantineProvider>
            {showNavbar && <Navbar />}
            <main> {children}</main>
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
