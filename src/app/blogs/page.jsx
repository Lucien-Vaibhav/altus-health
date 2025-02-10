"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LeftBlogSection from "../components/blog/LeftBlogSection";
import RightBlogSection from "../components/blog/RightBlogSection";

export default function BlogPage() {
  const breadcrumbRef = useRef(null); // ✅ Removed explicit HTMLDivElement type

  useEffect(() => {
    if (typeof window !== "undefined") { // ✅ Ensures this runs only on the client
      gsap.registerPlugin(ScrollTrigger);

      if (breadcrumbRef.current) {
        gsap.to(breadcrumbRef.current, {
          backgroundPositionY: "50%",
          ease: "power2.out",
          scrollTrigger: {
            trigger: breadcrumbRef.current,
            start: "top top",
            scrub: 1,
          },
        });
      }
    }
  }, []);

  return (
    <section className="relative">
      {/* Breadcrumb Section */}
      <div
        ref={breadcrumbRef}
        className="relative h-60 md:h-80 bg-cover bg-center bg-[url('/breadcrumb-bg.png')]"
        style={{
          backgroundPosition: "center top",
          transition: "background-position 0.3s ease-out",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              About Us
            </h1>
            <nav className="text-white text-sm md:text-lg mt-2 md:mt-0">
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">About Us</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="flex flex-col md:flex-row gap-6 px-6">
        <LeftBlogSection />
        <RightBlogSection />
      </div>
    </section>
  );
}
