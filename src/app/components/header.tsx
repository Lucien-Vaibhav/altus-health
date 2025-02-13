"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaRegCalendarAlt,
  FaBars,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn, MdClose } from "react-icons/md";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const clockRef = useRef<SVGSVGElement | null>(null);
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  const socialRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About Us", path: "/aboutus" },
    { text: "Blogs", path: "/blogs" },
    { text: "Contact Us", path: "/contactus" },
  ];

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Rotating clock animation
    gsap.to(clockRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 5,
      ease: "linear",
      transformOrigin: "center",
    });

    navRefs.current.forEach((navItem) => {
      if (!navItem) return;
      const underline = navItem.querySelector(".nav-underline");

      navItem.addEventListener("mouseenter", () => {
        gsap.fromTo(
          underline,
          { width: "0%", left: 0, opacity: 1 },
          { width: "100%", duration: 0.3, ease: "power2.out" }
        );
      });

      navItem.addEventListener("mouseleave", () => {
        gsap.to(underline, {
          width: "100%",
          left: "100%",
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    gsap.from(socialRefs.current, {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <header ref={headerRef} className="w-full">
      {/* Top Bar */}
      <div className="hidden md:flex bg-blue-900 text-white text-sm py-4 px-4 justify-between items-center">
        <div className="flex items-center space-x-6">
          <span>
            BOOK <strong>FREE</strong> HOME COLLECTION
          </span>
          <span className="flex items-center space-x-1">
            <span className="bg-white text-blue-900 p-1 rounded-full">
              <MdPhone />
            </span>
            <span>+123 456 7899 90</span>
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-2 border-r border-white pr-4">
            <svg
              ref={clockRef}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-white"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Mon - Sat 8.00-18.00, Sun - Closed</span>
          </span>
          <span className="flex items-center space-x-1 border-r border-white pr-4">
            <MdEmail /> <span>Info@Patholab.com</span>
          </span>
          <span className="flex items-center space-x-1">
            <MdLocationOn /> <span>183 Marina Avenue, Miami</span>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="w-60 h-auto">
          <Link href="/">
            <Image
              src="/logo-blue.png"
              alt="Patholab Logo"
              width={180}
              height={180}
              priority
            />
          </Link>
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          className="md:hidden text-blue-900 text-2xl"
          onClick={() => setIsMenuOpen(true)}
        >
          <FaBars />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-blue-900 nav-menu">
          {menuItems.map((item, index) => (
            <li
              key={item.text}
              ref={(el) => {
                if (el) navRefs.current[index] = el;
              }}
              className="relative font-bold hover:text-blue-600"
            >
              <Link href={item.path} className="hover:text-blue-600 font-bold">
                {item.text}
              </Link>
              <span className="nav-underline absolute left-0 bottom-0 h-0.5 bg-blue-600 opacity-0"></span>
            </li>
          ))}
        </ul>

        {/* Social Icons & Button */}
        <div className="hidden md:flex space-x-4 items-center">
          {[
            { icon: <FaFacebookF />, href: "#" },
            { icon: <FaTwitter />, href: "#" },
            { icon: <FaInstagram />, href: "#" },
            { icon: <FaPinterestP />, href: "#" },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              ref={(el) => {
                if (el) socialRefs.current[index] = el;
              }}
            >
              {social.icon}
            </Link>
          ))}
          <Link href="/appointment">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 flex items-center space-x-2">
              <FaRegCalendarAlt />
              <span>Make Appointment</span>
            </button>
          </Link>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex justify-end">
          <div className="bg-white w-3/4 max-w-xs h-full shadow-lg p-6 flex flex-col relative">
            <button
              className="text-blue-900 text-2xl self-end"
              onClick={() => setIsMenuOpen(false)}
            >
              <MdClose />
            </button>
            <ul className="mt-8 space-y-4 text-blue-900 text-lg">
              {menuItems.map((item) => (
                <li key={item.text} className="font-bold hover:text-blue-600">
                  <Link href={item.path}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
