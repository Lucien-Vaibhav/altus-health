"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

export default function Header() {
  const headerRef = useRef(null);
  const clockRef = useRef<SVGSVGElement | null>(null);
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  const socialIconsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Header animation
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

    // GSAP Nav Link Underline Animation
    navRefs.current.forEach((navItem) => {
      if (navItem) {
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
      }
    });

    // Social Icons Reveal Animation
    gsap.from(socialIconsRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.2, // Adds delay between each icon's animation
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <header ref={headerRef} className="w-full">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm py-4 px-4 flex justify-between items-center whitespace-nowrap">
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
        {/* Logo Section */}
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

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-blue-900 nav-menu">
          {["Home", "About", "Blog", "Contact"].map((text, index) => (
            <li
              key={text}
              ref={(el) => {
                navRefs.current[index] = el;
              }}
              className="relative font-bold hover:text-blue-600"
            >
              <Link
                href={`/${text.toLowerCase()}`}
                className="hover:text-blue-600 font-bold"
              >
                {text}
              </Link>
              <span className="nav-underline absolute left-0 bottom-0 h-0.5 bg-blue-600 opacity-0"></span>
            </li>
          ))}
        </ul>

        {/* Social Icons + Button */}
        <div className="flex space-x-4 items-center">
          {[
            { icon: <FaFacebookF />, link: "https://facebook.com" },
            { icon: <FaTwitter />, link: "https://twitter.com" },
            { icon: <FaInstagram />, link: "https://instagram.com" },
            { icon: <FaPinterestP />, link: "https://pinterest.com" },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              ref={(el) => {
                socialIconsRef.current[index] = el;
              }}
            >
              <span className="text-blue-900 cursor-pointer hover:text-blue-600">
                {social.icon}
              </span>
            </Link>
          ))}
          <Link href="/appointment">
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              <FaRegCalendarAlt />
              <span>Make Appointment</span>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
