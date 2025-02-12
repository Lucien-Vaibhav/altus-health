"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import HealthCards from "./HealthCards";

interface Package {
  title: string;
  price: number;
  originalPrice: number;
  discount: string;
  description: string;
  tests?: string;
  details?: string[];
  image: string;
}

const packagesData: Record<string, Package[]> = {
  "Complete Care": [
    {
      title: "Coronary Risk Profile (Lipid Profile)",
      price: 200,
      originalPrice: 300,
      discount: "66.67%",
      description:
        "Allergy testing can be useful at different stages of life, like discovering that a family member has a condition.",
      tests: "20 tests",
      image: "/laboratory-1.jpg",
      details: [
        "Complete Blood Count",
        "Upload Prescription",
        "Series Blood Tests",
        "Hormone Shots",
      ],
    },
    {
      title: "Osmotic Fragility Testing",
      price: 400,
      originalPrice: 800,
      discount: "50.00%",
      description:
        "Allergy testing can be useful at different stages of life, like discovering that a family member has a condition.",
      tests: "80 Parameters",
      image: "/image-13.jpg",
      details: [
        "Complete Blood Count",
        "Upload Prescription",
        "Series Blood Tests",
        "Hormone Shots",
      ],
    },
  ],
  "Family Care": [
    {
      title: "Specialized Genetic Testing",
      price: 500,
      originalPrice: 1000,
      discount: "50.00%",
      description:
        "Allergy testing can be useful at different stages of life, like discovering that a family member has a condition.",
      tests: "90 Parameters",
      image: "/laboratory-4.jpg",
      details: [
        "Complete Blood Count",
        "Upload Prescription",
        "Series Blood Tests",
        "Hormone Shots",
      ],
    },
    {
      title: "Family Health Package",
      price: 800,
      originalPrice: 1500,
      discount: "46.67%",
      description:
        "Allergy testing can be useful at different stages of life, like discovering that a family member has a condition.",
      tests: "150 Parameters",
      image: "/laboratory-2.jpg",
      details: [
        "Complete Blood Count",
        "Upload Prescription",
        "Series Blood Tests",
        "Hormone Shots",
      ],
    },
  ],
  "Fitness Care": [
    {
      title: "Full Body Check-Up",
      price: 600,
      originalPrice: 1200,
      discount: "50.00%",
      description:
        "Allergy testing can be useful at different stages of life, like discovering that a family member has a condition.",
      tests: "120 Parameters",
      image: "/ct-1.jpg",
      details: [
        "Complete Blood Count",
        "Upload Prescription",
        "Series Blood Tests",
        "Hormone Shots",
      ],
    },
    {
      title: "Glycosylated Hemoglobin",
      price: 100,
      originalPrice: 200,
      discount: "50.00%",
      description:
        "Allergy testing can be useful at different stages of life, like discovering that a family member has a condition.",
      tests: "40 Tests",
      image: "/laboratory-3.jpg",
      details: [
        "Complete Blood Count",
        "Upload Prescription",
        "Series Blood Tests",
        "Hormone Shots",
      ],
    },
  ],
};

const packages: Record<string, Package[]> = {
  "Show All": Object.values(packagesData).flat(),
  ...packagesData,
};

export default function HealthCheckSection() {
  const [activeTab, setActiveTab] = useState<string>("Show All");
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tabsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    // Card animations
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, delay: index * 0.2 }
        );
      }
    });
  }, [activeTab]);

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-10">
          <p className="text-blue-600 font-semibold text-lg mb-2">
            Complete Health Care Laboratory Services
          </p>
          <h2 className="text-5xl font-bold mb-4 text-[#1d2864]">
            Be healthy with our Patholab health <br />
            check-up packages!
          </h2>
          <p className="text-[#6f7f90] text-[20px]">
            Complete body check-ups starting from{" "}
            <span className="text-[#0071dc] font-bold">$500/-</span>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {Object.keys(packages).map((tab, index) => (
            <button
              key={tab}
              ref={(el) => {
                if (el) {
                  tabsRef.current[index] = el;
                }
              }}
              className={`relative px-6 py-2 rounded-full border-2 overflow-hidden transition-colors duration-300 ${
                activeTab === tab
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-blue-200 text-blue-600"
              }`}
              onMouseEnter={() => {
                gsap.to(tabsRef.current[index].querySelector(".hover-bg"), {
                  x: "0%",
                  duration: 0.1,
                  ease: "power2.out",
                });
                gsap.to(tabsRef.current[index].querySelector(".tab-text"), {
                  color: "#ffffff",
                  duration: 0.1,
                });
              }}
              onMouseLeave={() => {
                gsap.to(tabsRef.current[index].querySelector(".hover-bg"), {
                  x: "-100%",
                  duration: 0.1,
                  ease: "power2.out",
                });
                gsap.to(tabsRef.current[index].querySelector(".tab-text"), {
                  color: "#2563eb",
                  duration: 0.1,
                });
              }}
              onClick={() => setActiveTab(tab)}
            >
              {/* Hover Animation Overlay */}
              <span className="absolute inset-0 bg-blue-600 hover-bg -translate-x-full transition-transform duration-500"></span>

              {/* Text (wrapped to apply animation separately) */}
              <span className="relative z-10 tab-text transition-colors duration-300">
                {tab}
              </span>
            </button>
          ))}
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 justify-center">
          {packages[activeTab].map((pkg, index) => (
            <HealthCards
              key={index}
              pkg={pkg}
              index={index}
              cardsRef={cardsRef}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
