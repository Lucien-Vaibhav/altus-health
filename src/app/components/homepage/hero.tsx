"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  const circleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.set(contentRef.current, { opacity: 1 });

    gsap.to(circleRef.current, {
      rotate: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });

    gsap.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    );
  }, []);

  return (
    <section
      className="relative w-full bg-[#EAF2FF] py-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center text-center md:text-left gap-12 md:gap-16"
      style={{ background: "radial-gradient(circle at 20% 50%,#FFF,#c3e0fe)" }}
    >
      {/* Man's Image - Mobile on Top, Desktop as it is */}
      <div className="relative w-full max-w-lg md:max-w-xl flex justify-center md:justify-end order-1 md:order-none ">
        {/* Rotating Circle - Visible on All Screens */}
        <div ref={circleRef} className="absolute w-[500px] h-[500px]">
          <Image
            src="/obj-items.png"
            alt="Rotating Circle"
            width={500}
            height={500}
            className="absolute z-0"
          />
        </div>

        {/* Man's Image - Mobile on Top, Desktop Normal */}
        <div className="relative z-10 md:mt-10">
          <Image
            src="/man.png"
            alt="Smiling Man"
            width={500}
            height={500}
            className="w-full h-auto md:w-[500px] md:h-[600px]"
            priority
          />
        </div>
      </div>

      {/* Left Side (Content) */}
      <div
        ref={contentRef}
        className="w-full max-w-3xl flex flex-col justify-center order-2 md:order-none"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-[#1d2864] leading-tight">
          Track all the crucial health parameters <br />
          with care packages
        </h1>
        <p className="text-[#6f7f90] mt-4 text-lg md:text-xl">
          We have world-class pathologists & lab assistants. Equipped with
          top-quality laboratory machinery & reagents to ensure accurate
          results.
        </p>

        {/* Pricing & Tests Box */}
        <div className="mt-8 bg-transparent border-2 border-white shadow-lg flex flex-col md:flex-row items-center md:items-stretch relative rounded-br-[40px] md:rounded-br-[60px] px-1">
          {/* Price Box */}
          <div className="flex-1 py-4 px-6 md:py-5 md:px-7 border-r border-gray-200 bg-white relative">
            {/* 50% OFF Tag */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1e73be] text-white px-3 py-2 md:px-4 md:py-4 rounded-full text-sm md:text-xl font-bold">
              50% OFF
            </div>

            <div className="relative flex flex-row gap-2 md:gap-4 items-center justify-center h-full mt-4">
              <p className="text-[28px] md:text-[32px] font-extrabold text-[#1e73be]">
                $500
              </p>
              <div className="relative">
                <span className="text-[#6f7f90] text-[28px] md:text-[32px] font-extrabold relative inline-block">
                  $1000
                  <span className="absolute left-0 top-1/2 w-full h-[3px] bg-[#1e73be] transform -translate-y-1/2"></span>
                </span>
              </div>
            </div>
          </div>

          {/* Tests & Parameters - Now in One Row in ALL Views */}
          <div className="flex flex-row w-full md:flex-row">
            {/* Tests Box */}
            <div className="flex-1 py-4 px-4 md:py-5 md:px-7 border-l border-white bg-transparent flex items-center gap-2 md:gap-3 justify-center">
              <div className="bg-white p-1.5 rounded-full flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/offer-Icon.png"
                  alt="Test Icon"
                  width={36}
                  height={36}
                  className="w-8 md:w-9 h-8 md:h-9 object-contain"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[30px] md:text-[34px] font-extrabold text-[#1d2864]">
                  30
                </p>
                <p className="text-[#6f7f90] text-base font-normal">Tests</p>
              </div>
            </div>

            {/* Parameters Box */}
            <div className="flex-1 py-4 px-4 md:py-5 md:px-7 border-l border-white bg-transparent flex items-center gap-2 md:gap-3 justify-center">
              <div className="bg-white p-1.5 rounded-full flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/equalizer-1.png"
                  alt="Parameter Icon"
                  width={32}
                  height={32}
                  className="w-8 md:w-9 h-8 md:h-9 object-contain"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[30px] md:text-[34px] font-extrabold text-[#1d2864]">
                  90
                </p>
                <p className="text-[#6f7f90] text-base font-normal">
                  Parameters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
