"use client";
import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative z-0">
        <Header />
      <main className="relative z-0">{children}</main>
      <Footer />
    </div>
  );
}
