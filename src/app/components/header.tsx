"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <header ref={headerRef} className="w-full">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span>BOOK <strong>FREE</strong> HOME COLLECTION</span>
          <span className="flex items-center space-x-2">
            <span>📞</span> <span>+123 456 7899 90</span>
          </span>
        </div>
        <div className="hidden md:flex space-x-4 text-sm">
          <span>🕒 Mon - Sat 8.00-18.00, Sun - Closed</span>
          <span>📧 Info@Patholab.com</span>
          <span>📍 183 Marina Avenue, Miami</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="w-32 h-auto">
          <Link href="/">
            <Image src="/logo-blue.png" alt="Patholab Logo" width={100} height={100} priority />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-blue-900 nav-menu">
          <li><Link href="/" className="hover:text-blue-600 font-medium">Home</Link></li>
          <li><Link href="/aboutus" className="hover:text-blue-600 font-medium">About</Link></li>
          <li><Link href="/blogs" className="hover:text-blue-600 font-medium">Blog</Link></li>
          <li><Link href="/contactus" className="hover:text-blue-600 font-medium">Contact</Link></li>
        </ul>

        {/* Social Icons + Button */}
        <div className="flex space-x-4 items-center">
          <Link href="https://facebook.com" target="_blank"><FaFacebookF className="text-blue-900 cursor-pointer hover:text-blue-600" /></Link>
          <Link href="https://twitter.com" target="_blank"><FaTwitter className="text-blue-900 cursor-pointer hover:text-blue-600" /></Link>
          <Link href="https://instagram.com" target="_blank"><FaInstagram className="text-blue-900 cursor-pointer hover:text-blue-600" /></Link>
          <Link href="https://pinterest.com" target="_blank"><FaPinterestP className="text-blue-900 cursor-pointer hover:text-blue-600" /></Link>
          <Link href="/appointment">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Make Appointment</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
