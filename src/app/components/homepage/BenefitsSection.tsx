"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function BenefitsSection() {
  const microscopeRef = useRef<HTMLDivElement | null>(null);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsTabletOrMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      microscopeRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.to(microscopeRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  const benefits = [
    {
      title: "Experts Scientists",
      subtitle: "Highly skilled researchers",
      icon: "/icon-grid-1.png",
    },
    {
      title: "Accuracy in Findings",
      subtitle: "Precise lab reports",
      icon: "/icon-grid-1.png",
    },
    {
      title: "Genetic Research",
      subtitle: "Advanced DNA analysis",
      icon: "/icon-grid-1.png",
    },
    {
      title: "Fast Report Delivery",
      subtitle: "Quick & efficient service",
      icon: "/icon-grid-1.png",
    },
    {
      title: "Microbiology Lab",
      subtitle: "State-of-the-art facilities",
      icon: "/icon-grid-1.png",
    },
    {
      title: "Easy Testing Procedure",
      subtitle: "Hassle-free diagnostics",
      icon: "/icon-grid-1.png",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 px-6 md:px-16 lg:px-24 bg-[#EAF2FF]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg.jpg')",
          transform: "scaleX(-1)",
          opacity: 0.7,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-10 lg:space-y-0">
        {/* Hexagon Grid */}
        <div
          className={`flex ${
            isTabletOrMobile
              ? "flex-col items-center space-y-6"
              : "flex-col items-center space-y-6"
          }`}
        >
          {/* First Row */}
          <div
            className={`flex ${
              isTabletOrMobile ? "flex-col space-y-6" : "space-x-6"
            }`}
          >
            {benefits.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="hexagon flex flex-col items-center justify-center"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                />
                <h3 className="text-[14px] font-semibold mt-3 text-[#1d2864]">
                  {item.title}
                </h3>
                <p className="text-[10px] text-[#6f7f90]">{item.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div
            className={`flex ${
              isTabletOrMobile ? "flex-col space-y-6" : "space-x-6 mt-[-40px]"
            }`}
          >
            {benefits.slice(3, 5).map((item, index) => (
              <div
                key={index}
                className="hexagon flex flex-col items-center justify-center"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                />
                <h3 className="text-md font-semibold mt-3 text-black">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Last Row */}
          <div
            className={`mt-[-40px] ${isTabletOrMobile ? "flex flex-col" : ""}`}
          >
            <div className="hexagon flex flex-col items-center justify-center">
              <Image
                src={benefits[5].icon}
                alt={benefits[5].title}
                width={50}
                height={50}
              />
              <h3 className="text-md font-semibold mt-3 text-black">
                {benefits[5].title}
              </h3>
              <p className="text-sm text-gray-500">{benefits[5].subtitle}</p>
            </div>
          </div>
        </div>

        {/* Benefits Card */}
        <div className={`${isTabletOrMobile ? "mt-10 w-full" : "lg:w-1/2"}`}>
          <BenefitsCard microscopeRef={microscopeRef} />
        </div>
      </div>

      <style jsx>{`
        .hexagon {
          width: 190px;
          height: 250px;
          background-color: white;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
}

// Separate Benefits Card Component
import { RefObject } from "react";

function BenefitsCard({
  microscopeRef,
}: {
  microscopeRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="bg-blue-700 text-white h-[500px] p-8 md:p-12 rounded-xl relative">
      <h2 className="text-3xl font-bold">Benefits by Patholab Laboratory</h2>
      <p className="text-sm text-gray-200 mt-3">
        Patholab’s Complete Care Geno identifies DNA variants specific to an
        individual & provides reports about detoxification.
      </p>

      <ul className="mt-6 grid grid-cols-2 gap-3">
        {[
          "Cleanliness Ensured",
          "Fast Report Delivery",
          "Expert Phlebotomists",
          "Accuracy in Findings",
          "Microbiology Lab",
          "Easy Testing Procedure",
        ].map((benefit, index) => (
          <li key={index} className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="17"
              height="17"
            >
              <path
                fill="white"
                d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-.091,15.419c-.387.387-.896.58-1.407.58s-1.025-.195-1.416-.585l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701,1.404,1.425-5.793,5.707Z"
              />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-2 items-center">
        <button className="bg-white text-[16px] text-blue-700 px-4 py-3 rounded-full font-semibold hover:bg-gray-200">
          Learn More
        </button>
        <button className="bg-[#69ABEA] text-white px-4 py-3 rounded-full font-semibold">
          Get Appointment
        </button>
      </div>
    </div>
  );
}
