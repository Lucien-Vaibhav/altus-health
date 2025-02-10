"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const services = [
  {
    title: "General Diagnostic Testing",
    description:
      "Lab testing can be a very effective way to understand what’s happening…",
    icon: "/diagnostic.png",
  },
  {
    title: "Naturopathic Lab Testing",
    description:
      "Naturopathic doctors use unique lab tests to help us get a picture…",
    icon: "/plant-cell.png",
  },
  {
    title: "Specialized Genetic Testing",
    description:
      "Genetic testing looks for changes in your DNA that can inform your…",
    icon: "/microscope.png",
  },
  {
    title: "Hormone Insights Testing",
    description:
      "At-home food sensitivity tests, specifically IgG tests, do not reliably identify triggers…",
    icon: "/education.png",
  },
  {
    title: "Allergy & Sensitivity Testing",
    description:
      "At-home food sensitivity tests, specifically IgG tests, do not reliably identify triggers…",
    icon: "/science.png",
  },
  {
    title: "Complete Health Checkup",
    description:
      "Once collected, samples will be sent to labs for processing. Detailed reports…",
    icon: "/science.png",
  },
  {
    title: "Clinical Microbiology Tests",
    description:
      "Lab testing can be a very effective way to understand what’s happening…",
    icon: "/science.png",
  },
  {
    title: "Vaccine Research Center",
    description:
      "Lab testing can be a very effective way to understand what’s happening…",
    icon: "/science.png",
  },
  {
    title: "Advanced Blood Analysis",
    description:
      "Lab testing can be a very effective way to understand what’s happening…",
    icon: "/science.png",
  },
  {
    title: "DNA Ancestry Testing",
    description:
      "Lab testing can be a very effective way to understand what’s happening…",
    icon: "/science.png",
  },
];

const ITEMS_PER_PAGE = 8;
const TOTAL_PAGES = Math.ceil(services.length / ITEMS_PER_PAGE);

// Create pages with exact items, no duplication
const paginatedServices = Array.from({ length: TOTAL_PAGES }, (_, i) =>
  services.slice(i * ITEMS_PER_PAGE, (i + 1) * ITEMS_PER_PAGE)
);

const ServiceSection = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.to(sliderRef.current, {
      x: `-${activeIndex * 100}%`,
      duration: 0.8,
      ease: "power2.inOut",
    });
  }, [activeIndex]);

  return (
    <div className="py-16 px-6 bg-gradient-to-b from-white to-[#C2E0FD] text-center">
      <h3 className="text-sm text-blue-600 font-semibold">
        High Performance Laboratory Services
      </h3>
      <h2 className="text-4xl font-bold mt-2">Our Premium Services</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4">
        Our mission is to provide the highest standard of clinical laboratory
        service to physicians, clinics, hospitals, and healthcare providers.
      </p>

      {/* Slider Container */}
      <div className="overflow-hidden mt-10 relative w-full">
        <div
          ref={sliderRef}
          className="flex w-full transition-transform duration-500 ease-in-out"
        >
          {paginatedServices.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
            >
              {page.map((service, index) => (
                <div
                  key={index}
                  className="relative bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:-translate-y-2 flex flex-col items-start h-[350px] border border-transparent overflow-hidden group px-10"
                >
                  <span className="absolute top-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>

                  <div className="transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={50}
                      height={50}
                    />
                  </div>

                  <h3 className="text-lg font-semibold mt-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-left">
                    {service.description}
                  </p>

                  <a
                    href="#"
                    className="flex items-center text-blue-500 font-medium mt-auto group"
                  >
                    READ MORE
                    <div className="ml-2 transition-transform duration-300 group-hover:rotate-0 rotate-[-45deg]">
                      <Image
                        src="/right-arrow.png"
                        alt="Arrow"
                        width={16}
                        height={16}
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center space-x-3">
        {paginatedServices.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border border-blue-600 font-semibold text-lg transition-all transform
        ${
          activeIndex === index
            ? "bg-blue-600 text-white scale-110 shadow-lg shadow-blue-500/50"
            : "text-blue-600"
        }
        hover:bg-blue-700 hover:text-white hover:scale-125 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 hover:rotate-3`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
