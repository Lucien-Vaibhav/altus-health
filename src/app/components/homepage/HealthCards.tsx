"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

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

interface HealthCardsProps {
  pkg: Package;
  index: number;
  cardsRef: React.MutableRefObject<HTMLDivElement[]>;
}

const HealthCards: React.FC<HealthCardsProps> = ({ pkg, index, cardsRef }) => {
  const maskRef = useRef<HTMLDivElement>(null);
  const maskIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (maskRef.current && maskIconRef.current) {
      const tl = gsap.timeline();
  
      tl.to(maskRef.current, {
        scale: 1.1,
        duration: 1.2,
        ease: "power1.inOut",
      });
  
      tl.to(maskIconRef.current, {
        scale: 1.1,
        duration: 1.2,
        ease: "power1.inOut",
      }, "-=1.2"); // Ensures both animations run together
    }
  }, []);

  return (
    <div
      key={index}
      ref={(el) => {
        if (el) {
          cardsRef.current[index] = el;
        }
      }}
      className="group relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-[650px] w-[450px] mx-auto mb-4"
    >
      {/* Card Front */}
      <div className="absolute inset-0 z-10 bg-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out h-full flex flex-col">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-80 w-full object-cover mb-4 rounded-s"
        />
        <div className="px-8">
          <h3 className="text-2xl mt-10 font-semibold mb-2 text-[#1d2864] text-left">
            {pkg.title}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
              <p className="text-xl font-bold text-[#1d2864]">Price </p>
              <p className="text-2xl font-bold text-blue-600">${pkg.price}</p>
              <p className="text-sm line-through text-gray-400">
                ${pkg.originalPrice}
              </p>
            </div>

            <div
              className="absolute top-[42%] right-4 w-24 h-24 bg-blue-600 flex flex-col items-center justify-center text-white font-bold text-sm"
              style={{
                maskImage: "url('/mask-banner2.png')",
                WebkitMaskImage: "url('/mask-banner2.png')",
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            >
              <span className="text-xs">OFF</span>
              <span className="text-lg font-bold">{pkg.discount}</span>
            </div>
          </div>

          <p className="text-gray-600 text-lg text-left mb-3 line-clamp-3">
            {pkg.description}
          </p>
          {pkg.tests && (
            <p className=" text-blue-600 text-xl font-medium mb-4 text-left">
              <span className="text-[#1d2864]">Includes </span>
              {pkg.tests}
            </p>
          )}
        </div>
      </div>

      {/* Card Back */}
      <div className="inset-0 z-0 p-6 bg-blue-600 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out h-full flex flex-col relative justify-between">
        {/* Masked Icon Animation */}
        <div
          ref={maskIconRef}
          className="absolute mt-[5%] top-[2%] left-6 w-24 h-24 bg-white flex flex-col items-center justify-center text-white font-bold text-sm"
          style={{
            maskImage: "url('/mask-banner2.png')",
            WebkitMaskImage: "url('/mask-banner2.png')",
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <img
            src="/diagnostic.png"
            className="object-cover w-[60px] h-[60px]"
            alt="Diagnostic"
          />
        </div>

        <div className="px-6 mt-[5%]">
          <h3 className="text-2xl mt-[30%] font-semibold mb-2 text-white text-left">
            {pkg.title}
          </h3>
          <p className="text-white text-lg text-left mb-3 line-clamp-3">
            {pkg.description}
          </p>

          <ul className="space-y-2 flex-1 overflow-y-auto">
            {pkg.details?.map((detail, i) => (
              <li key={i} className="flex items-start gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="17"
                  height="17"
                >
                  <path
                    fill="white"
                    d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-.091,15.419c-.387.387-.896.58-1.407.58s-1.025-.195-1.416-.585l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701,1.404,1.425-5.793,5.707Z"
                  />
                </svg>
                <span className="text-sm">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-row gap-3">
          <button className="mt-4 px-6 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Know More
          </button>
          <button className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthCards;
