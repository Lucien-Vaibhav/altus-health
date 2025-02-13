"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import {
  FaFacebookF,
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import ContactLetter from "./ContactLetter";

const Footer = () => {
  const phoneIconRef = useRef(null);

  useEffect(() => {
    if (phoneIconRef.current) {
      gsap.to(phoneIconRef.current, {
        x: -2,
        repeat: -1,
        yoyo: true,
        duration: 0.1,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Main Content */}
        <ContactLetter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {/* Left - Logo & Socials */}
          <div className="text-center md:text-left">
            <Image
              src="/logo-blue.png"
              alt="Patholab Logo"
              width={180}
              height={50}
              className="mx-auto md:mx-0"
            />
            <p className="text-sm mt-3">
              Patholab laboratory is a well-equipped lab that provides the best services.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-3 mt-4">
              {[FaFacebookF, FaGoogle, FaTwitter, FaInstagram, FaPinterest].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg shadow-sm transition-all duration-300 hover:bg-[#0071DC] group cursor-pointer"
                  >
                    <Icon className="text-[#1d2864] text-lg transition-all duration-300 group-hover:text-white" />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Center - Services */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">Our Services</h3>
            <Image
              src="/line-title.png"
              alt="Wavy Underline"
              width={35}
              height={35}
              className="mx-auto md:mx-0 mt-1"
            />
            <ul className="mt-3 space-y-2 text-sm">
              <li>Clinical Histopathology Tests</li>
              <li>Clinical Biochemistry Tests</li>
              <li>Vaccine Research Center</li>
              <li>Clinical Microbiology Tests</li>
              <li>Complete Health Checkup</li>
            </ul>
          </div>

          {/* Center - Customers */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">For Customers</h3>
            <Image
              src="/line-title.png"
              alt="Wavy Underline"
              width={35}
              height={35}
              className="mx-auto md:mx-0 mt-1"
            />
            <ul className="mt-3 space-y-2 text-sm">
              <li>Upload Prescription</li>
              <li>Request a Call Back</li>
              <li>Healthcare Packages</li>
              <li>Download Reports</li>
              <li>Track Progress</li>
            </ul>
          </div>

          {/* Right - Opening Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">Opening Hours</h3>
            <Image
              src="/line-title.png"
              alt="Wavy Underline"
              width={35}
              height={35}
              className="mx-auto md:mx-0 mt-1"
            />
            <ul className="mt-3 text-sm space-y-2">
              {[
                ["Monday", "9am – 7pm"],
                ["Tuesday", "9am – 7pm"],
                ["Wednesday", "9am – 7pm"],
                ["Thursday", "9am – 7pm"],
                ["Friday", "9am – 7pm"],
                ["Saturday", "9am – 7pm"],
                ["Sunday", "Closed"],
              ].map(([day, time], index) => (
                <li key={index} className="flex justify-between text-gray-700">
                  <span>{day}</span>
                  <span className={day === "Sunday" ? "text-blue-500 font-medium" : "text-gray-500"}>
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-lg p-6 mt-10 text-gray-900 text-center md:text-left">
          {/* Phone */}
          <div className="flex flex-col md:flex-row items-center space-x-4 mb-4 md:mb-0">
            <div ref={phoneIconRef} className="bg-blue-600 text-white p-3 rounded-full">
              <MdPhone className="text-2xl" />
            </div>
            <div>
              <p className="text-sm font-semibold">Need Help? Book Lab Visit</p>
              <p className="text-lg font-bold text-[#1d2864]">+234 567 899</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col md:flex-row items-center space-x-4 mb-4 md:mb-0">
            <MdEmail className="text-blue-600 text-2xl" />
            <span className="font-semibold text-gray-900">Info@Patholab.com</span>
          </div>

          {/* Location */}
          <div className="flex flex-col md:flex-row items-center space-x-4">
            <MdLocationOn className="text-blue-600 text-2xl" />
            <span className="font-semibold text-gray-900">
              183 Marina Avenue, Miami Ci Mall, USA
            </span>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 pt-6 grid grid-cols-1 md:grid-cols-3 text-center text-sm text-gray-600 gap-4">
          {/* Copyright */}
          <div>
            © 2023, <span className="text-blue-500 font-medium">BRAVISTHEME</span>. All rights reserved.
          </div>

          {/* Policies */}
          <div>
            <a href="#" className="hover:underline">Privacy Policy</a> |
            <a href="#" className="ml-2 hover:underline">Terms & Conditions</a> |
            <a href="#" className="ml-2 hover:underline">Promo T&Cs Apply</a>
          </div>

          {/* Payment Gateways */}
          <div className="flex justify-center space-x-3">
            <span className="font-semibold text-gray-900">Payment Gateways:</span>
            <Image src="/payment.png" alt="Payment Methods" width={150} height={30} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
