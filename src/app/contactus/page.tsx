"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BranchLocation from "../components/contactus/BranchLocation";
import ContactForm from "../components/contactus/ContactForm";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
  const breadcrumbRef = useRef<HTMLDivElement | null>(null);
  const mainHexRef = useRef<HTMLDivElement | null>(null);
  const mainImageRef = useRef<HTMLImageElement | null>(null);
  const secondaryHexRef = useRef<HTMLDivElement | null>(null);
  const secondaryImageRef = useRef<HTMLImageElement | null>(null);
  const counterRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  const listRefs = useRef([]);

  useEffect(() => {
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

    // GSAP Context for animations
    const ctx = gsap.context(() => {
      // Main Hexagon
      if (mainHexRef.current && mainImageRef.current) {
        gsap.set(mainHexRef.current, { willChange: "transform" });
        gsap.set(mainImageRef.current, { willChange: "transform" });

        mainHexRef.current.addEventListener("mouseenter", () => {
          gsap.to(mainHexRef.current, {
            scale: 1.05,
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(mainImageRef.current, {
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        mainHexRef.current.addEventListener("mouseleave", () => {
          gsap.to(mainHexRef.current, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
          gsap.to(mainImageRef.current, {
            scale: 1,
            duration: 0.4,
            ease: "power2.inOut",
          });
        });
      }

      // Secondary Hexagon
      if (secondaryHexRef.current && secondaryImageRef.current) {
        gsap.set(secondaryHexRef.current, { willChange: "transform" });
        gsap.set(secondaryImageRef.current, { willChange: "transform" });

        secondaryHexRef.current.addEventListener("mouseenter", () => {
          gsap.to(secondaryHexRef.current, {
            scale: 1.05,
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(secondaryImageRef.current, {
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        secondaryHexRef.current.addEventListener("mouseleave", () => {
          gsap.to(secondaryHexRef.current, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
          gsap.to(secondaryImageRef.current, {
            scale: 1,
            duration: 0.4,
            ease: "power2.inOut",
          });
        });
      }
    });
    if (!counterRefs.current || counterRefs.current.length === 0) return;

    counterRefs.current.forEach((counter) => {
      if (counter) {
        const targetValue = parseInt(counter.dataset.value || "0", 10);
        const suffix = counter.nextElementSibling?.textContent || "";

        const animatedValue = { value: 0 }; // Store value in an object

        gsap.to(animatedValue, {
          value: targetValue,
          duration: 3,
          ease: "power1.out",
          snap: { value: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none none", // Ensures it plays when scrolled into view
          },
          onUpdate: () => {
            counter.textContent = `${Math.round(animatedValue.value)}${suffix}`;
          },
        });
      }
    });

    listRefs.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power1.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          }
        );
      }
    });
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
              Contact Us
            </h1>
            <nav className="text-white text-sm md:text-lg mt-2 md:mt-0">
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">Contact Us</span>
            </nav>
          </div>
        </div>
      </div>

     <BranchLocation/>
     <ContactForm/>
    </section>
  );
}
