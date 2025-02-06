"use client"; // Ensure it runs only on the client side

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function BenefitsSection() {
  const microscopeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      microscopeRef.current,
      { opacity: 0, scale: 0.8, y: 20 }, // Initial state
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" } // Animation effect
    );

    gsap.to(microscopeRef.current, {
      y: 10, // Floating effect
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="relative overflow-hidden py-16 px-6 md:px-16 lg:px-24 bg-[#EAF2FF]">
      {/* Background Image - Flipped */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/bg.jpg')", 
          transform: "scaleX(-1)", // Flip horizontally
          opacity: 0.3 // Adjust opacity if needed
        }} 
      ></div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Hexagon Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {[
            { title: "Experts Scientists", subtitle: "Highly skilled researchers", icon: "/icon-grid-1.png" },
            { title: "Accuracy in Findings", subtitle: "Precise lab reports", icon: "/icon-grid-1.png" },
            { title: "Genetic Research", subtitle: "Advanced DNA analysis", icon: "/icon-grid-1.png" },
            { title: "Fast Report Delivery", subtitle: "Quick & efficient service", icon: "/icon-grid-1.png" },
            { title: "Microbiology Lab", subtitle: "State-of-the-art facilities", icon: "/icon-grid-1.png" },
            { title: "Easy Testing Procedure", subtitle: "Hassle-free diagnostics", icon: "/icon-grid-1.png" },
          ].map((item, index) => (
            <div 
              key={index} 
              className="hexagon flex flex-col items-center justify-center bg-white shadow-lg text-center p-6"
            >
              <Image src={item.icon} alt={item.title} width={50} height={50} />
              <h3 className="text-md font-semibold mt-3 text-black">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Right Side - Benefits Box */}
        <div className="bg-blue-700 text-white p-8 md:p-12 rounded-xl relative">
          <h2 className="text-3xl font-bold">Benefits by Patholab Laboratory</h2>
          <p className="text-sm text-gray-200 mt-3">
            Patholab’s Complete Care Geno identifies DNA variants specific to an individual & provides reports about detoxification.
          </p>

          {/* Benefits List */}
          <ul className="mt-6 grid grid-cols-2 gap-3" style={{zIndex:1}}>
            {[
              "Cleanliness Ensured",
              "Fast Report Delivery",
              "Expert Phlebotomists",
              "Accuracy in Findings",
              "Microbiology Lab",
              "Easy Testing Procedure",
            ].map((benefit, index) => (
              <li key={index} className="flex items-center">
                <span className="text-lg mr-2">✅</span> {benefit}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">
              Learn More
            </button>
            <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold">
              Get Appointment
            </button>
          </div>

          {/* Microscope Image - GSAP Animated */}
          <div ref={microscopeRef} className="absolute bottom-[-100] z-[0] right-6 hidden md:block">
            <Image
              src="/img-11.png"
              alt="Microscope"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Add Custom Styles */}
      <style jsx>{`
        .hexagon {
          position: relative;
          width: 190px;
          height: 250px;
          background-color: white;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }
      `}</style>
    </section>
  );
}
