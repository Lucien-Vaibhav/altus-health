"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  const circleRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", immediateRender: true } });
  
    // Ensure visibility instantly before animation starts
    gsap.set([leftSectionRef.current, rightSectionRef.current], { opacity: 1 });
  
    // Rotating circle animation
    gsap.to(circleRef.current, {
      rotate: 360,
      duration: 10, // Faster rotation
      repeat: -1,
      ease: "linear"
    });
  
    // Section animations (starting immediately)
    tl.fromTo(leftSectionRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4 }
    ).fromTo(rightSectionRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4 },
      "-=0.2"
    );
  
  }, []);
  

  return (
    <section className="relative w-full bg-[#EAF2FF] py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{
        background: "radial-gradient(circle at 20% 50%,#FFF,#c3e0fe)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-stretch ">
        {/* Left Side - Image with Rotating Circle */}
        <div ref={leftSectionRef} className="relative md:w-1/2 flex items-center justify-center h-full">
          <div ref={circleRef} className="absolute w-[550px] h-[550px]">
            <Image
              src="/obj-items.png"
              alt="Rotating Circle"
              width={550}
              height={550}
              className="absolute z-0"
            />
          </div>
          <div className="relative z-10 h-full flex items-center">
            <Image
              src="/man.png"
              alt="Smiling Man"
              width={500}
              height={500}
              className="h-auto w-full max-w-[500px] object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side - Text & Pricing Section */}
        <div ref={rightSectionRef} className="md:w-1/2 text-center md:text-left flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1d2864] leading-tight pr-20">
            Track all the crucial health parameters <br />
            with care packages
          </h1>
          <p className="text-[#6f7f90] mt-4 text-xl" style={{fontFamily:"Heebo,sans-serif",fontWeight:400}}>
            We have world-class pathologists & lab assistants. Equipped with
            top-quality laboratory machinery & reagents to ensure accurate
            results.
          </p>

          {/* Pricing Box Container */}
          <div className="mt-8 bg-transparent border-2 border-white shadow-lg flex items-stretch relative rounded-br-[60px] px-1">
            {/* Price Box - Wider section */}
            <div className="flex-[1] py-5 px-7 relative border-r border-gray-200 bg-white">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1e73be] text-white px-3 py-1 rounded-full text-sm font-semibold">
                50% OFF
              </div>
              <div className="flex flex-row gap-4 items-center justify-center h-full">
                <p className="text-[32px] font-extrabold text-[#1e73be]">$500</p>
                <div className="relative">
                  <span className="text-[#6f7f90] text-[32px] font-extrabold relative inline-block" style={{fontFamily:"Red Hat Display, sans-serif"}}>
                    $1000
                    <span className="absolute left-0 top-1/2 w-full h-[3px] bg-[#1e73be] transform -translate-y-1/2"></span>
                  </span>
                </div>
              </div>
            </div>

            {/* Tests Box */}
            <div className="flex-1 py-5 px-7 border-l border-white bg-transparent">
              <div className="flex items-center gap-3 h-full pl-4">
                <div className="bg-white p-1.5 rounded-full flex items-center justify-center w-12 h-12">
                  <Image 
                    src="/offer-Icon.png" 
                    alt="Test Icon"
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[34px] font-extrabold text-[#1d2864]">30</p>
                  <p className="text-[#6f7f90] text-base font-normal">Tests</p>
                </div>
              </div>
            </div>

            {/* Parameters Box */}
            <div className="flex-1 py-5 px-7 border-s-2 border-white bg-transparent">
              <div className="flex items-center gap-3 h-full pl-4">
                <div className="bg-white p-1.5 rounded-full flex items-center justify-center w-12 h-12">
                  <Image 
                    src="/equalizer-1.png"
                    alt="Parameter Icon"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[34px] font-extrabold text-[#1d2864]">90</p>
                  <p className="text-[#6f7f90] text-base font-normal">Parameters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}