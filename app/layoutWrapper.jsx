"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const hiddenRoutes = [
    "/pages/Portals/",
    // "/Forms/",
  ];


  const hideLayout = hiddenRoutes.some(route =>
    pathname.startsWith(route)
  );

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}