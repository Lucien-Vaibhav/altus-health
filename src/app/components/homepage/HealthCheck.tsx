"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

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
      description: "Allergy testing can be useful at different stages of life, like discovering that a family member has a condition.",
      tests: "20 tests",
      image: "/laboratory-1.jpg",
      details: ["Cholesterol level testing", "Lipid abnormalities detection"]
    },
    {
      title: "Osmotic Fragility Testing",
      price: 400,
      originalPrice: 800,
      discount: "50.00%",
      description: "Monitor your fitness levels with advanced testing.",
      tests: "Includes 80 Parameters",
      image: "/image-13.jpg",
      details: ["Blood cell fragility analysis", "Comprehensive RBC tests"]
    }
  ],
  "Family Care": [
    {
      title: "Specialized Genetic Testing",
      price: 500,
      originalPrice: 1000,
      discount: "50.00%",
      description: "Allergy testing can be useful at different stages of life, like discovering that a family member has a condition.",
      tests: "Includes 90 Parameters",
      image: "/laboratory-4.jpg",
      details: ["DNA analysis", "Hereditary risk assessment"]
    },
    {
      title: "Family Health Package",
      price: 800,
      originalPrice: 1500,
      discount: "46.67%",
      description: "Covers routine tests for the entire family.",
      tests: "Includes 150 Parameters",
      image: "/laboratory-2.jpg",
      details: ["General health check-ups", "Blood sugar and cholesterol tests"]
    }
  ],
  "Fitness Care": [
    {
      title: "Full Body Check-Up",
      price: 600,
      originalPrice: 1200,
      discount: "50.00%",
      description: "Get a comprehensive health analysis with all parameters.",
      tests: "Includes 120 Parameters",
      image: "/ct-1.jpg",
      details: ["Heart health analysis", "Liver and kidney function tests"]
    },
    {
      title: "Glycosylated Hemoglobin",
      price: 100,
      originalPrice: 200,
      discount: "50.00%",
      description: "Allergy testing can be useful at different stages of life, like discovering that a family member has a condition.",
      tests: "Includes 40 Tests",
      image: "/laboratory-3.jpg",
      details: ["HbA1c measurement", "Diabetes risk assessment"]
    }
  ]
};

const packages: Record<string, Package[]> = {
  "Show All": Object.values(packagesData).flat(),
  ...packagesData
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

    // Tab animations
    tabsRef.current.forEach((tab, index) => {
      if (tab) {
        const isActive = tab.textContent === activeTab;
        const tabTimeline = gsap.timeline({ paused: true });

        tabTimeline.to(tab, {
          scale: 1.05,
          backgroundColor: isActive ? "#2563eb" : "#fff",
          borderColor: "#60a5fa",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          duration: 0.3
        });

        const handleMouseEnter = () => !isActive && tabTimeline.play();
        const handleMouseLeave = () => !isActive && tabTimeline.reverse();

        tab.addEventListener("mouseenter", handleMouseEnter);
        tab.addEventListener("mouseleave", handleMouseLeave);

        if (isActive) {
          gsap.fromTo(
            tab,
            { scale: 0.95 },
            {
              scale: 1,
              backgroundColor: "#2563eb",
              borderColor: "#2563eb",
              duration: 0.4,
              ease: "back.out(1.7)"
            }
          );
        }
      }
    });
  }, [activeTab]);

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto text-center">
        <p className="text-blue-600 font-semibold text-lg mb-2">
          Complete Health Care Laboratory Services
        </p>
        <h2 className="text-3xl font-bold mb-4">
          Be healthy with our Patholab health check-up packages!
        </h2>
        <p className="text-gray-600 mb-8">
          Complete body check-ups starting from{" "}
          <span className="font-bold">$500</span>
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {Object.keys(packages).map((tab, index) => (
            <button
              key={tab}
              ref={(el) => el && (tabsRef.current[index] = el)}
              className={`relative px-6 py-2 rounded-full border-2 transition-colors duration-200 ${
                activeTab === tab
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-blue-200 text-blue-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center">
          {packages[activeTab].map((pkg, index) => (
            <div
              key={index}
              ref={(el) => el && (cardsRef.current[index] = el)}
              className="group relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-[520px] w-[340px] mx-auto"
            >
              {/* Card Front */}
              <div className="absolute inset-0 z-10 p-6 bg-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out h-full flex flex-col">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-48 w-full object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {pkg.description}
                </p>
                {pkg.tests && (
                  <p className="text-blue-600 text-sm font-medium mb-4">
                    {pkg.tests}
                  </p>
                )}
                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">
                        ${pkg.price}
                      </p>
                      <p className="text-sm line-through text-gray-400">
                        ${pkg.originalPrice}
                      </p>
                    </div>
                    <span className="bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                      SAVE {pkg.discount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Back */}
              <div className="absolute inset-0 z-0 p-6 bg-blue-600 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4">Package Details</h3>
                <ul className="space-y-2 flex-1 overflow-y-auto">
                  {pkg.details?.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-4 h-4 mr-2 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  View Full Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}