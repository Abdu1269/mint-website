import React from "react";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
