"use client"; // Required for GSAP animations in Next.js (App Router)

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const AwardsSection = () => {
  const awardsRef = useRef<HTMLDivElement | null>(null);
  const leftContentRef = useRef<HTMLDivElement | null>(null);
  const rightContentRef = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLHeadingElement | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      leftContentRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      rightContentRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );

    if (awardsRef.current) {
      gsap.fromTo(
        awardsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
        }
      );
    }

    let obj = { value: 0 };
    gsap.to(obj, {
      value: 20,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        setCount(Math.floor(obj.value));
      },
    });
  }, []);

  const awards = [
    "awar1.png",
    "awar2.png",
    "awar3.png",
    "awar4.png",
    "awar5.png",
    "awar6.png",
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Title, Award Count */}
        <div
          ref={leftContentRef}
          className="md:w-1/2 flex flex-col text-left space-y-6"
        >
          <p className="text-[#0071dc] text-[18px] font-semibold">
            Promising Best Quality Services
          </p>
          <h2 className="text-[42px] font-bold text-[#1d2864]">
            We have got prestigious <br />
            awards for our work
          </h2>

          {/* Centered Section Only */}
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <h1
                ref={numberRef}
                className="text-[158px] leading-none text-[#1d2864] font-black"
              >
                {count}
              </h1>
              <span className="text-[#0071dc] text-[58px] absolute top-[-15px] right-[-20px]">
                +
              </span>
            </div>
            <p className="text-gray-600 text-lg">
              Awards from all over the world
            </p>
          </div>
        </div>

        {/* Right Side: Award Images */}
        <div ref={rightContentRef} className="md:w-1/2 text-left md:pl-10">
          <p className="text-gray-600 mb-6">
            Patholab’s Complete Care Geno identifies DNA variants specific to an
            individual & provides reports about detoxification. Hormone Insight
            can be useful at various stages of life, like discovering that a
            family member has a condition.
          </p>

          {/* Award Images */}
          <div
            ref={awardsRef}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {awards.map((award, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 flex justify-center items-center"
              >
                <img
                  src={award}
                  alt={`Award ${index + 1}`}
                  className="w-[140%] h-[140%] md:w-[120%] md:h-[120%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
