"use client";
import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children}:LayoutProps ) {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
}
