"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const DoctorsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null); // ✅ Updated type

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1 })
      .fromTo(textRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.5")
      .fromTo(buttonsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.5")
      .fromTo(imageRef.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.5");
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-blue-500 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto overflow-visible mb-28">
      {/* Text Section */}
      <div ref={textRef} className="md:w-1/2 text-center md:text-left space-y-4 py-16 px-8">
        <h2 className="text-3xl font-bold">
          Thousands of Renowned <br /> Doctors & Clinics trusted Us
        </h2>
        <p className="text-lg">
          Dedicated professionals committed to providing you with accurate and reliable diagnostic services. Get patholab services today from the best lab experts & make a visit to our laboratory.
        </p>

        {/* Buttons */}
        <div ref={buttonsRef} className="flex flex-col md:flex-row gap-4 mt-6">
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Get Patholab Services
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Book A Home Visit
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          ref={imageRef} // ✅ Correct ref type
          src="/bg-right.png"
          alt="Doctors"
          className="max-w-full rounded-xl -mt-10"
        />
      </div>
    </div>
  );
};

export default DoctorsSection;
