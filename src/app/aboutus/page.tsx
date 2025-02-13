"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Employees from "../components/aboutus/Employees";
import Progress from "../components/aboutus/Progress";
import Testimonial from "../components/aboutus/Testimonial";
import Awards from "../components/aboutus/Awards";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsSection() {
  const breadcrumbRef = useRef<HTMLDivElement | null>(null);
  const mainHexRef = useRef<HTMLDivElement | null>(null);
  const mainImageRef = useRef<HTMLImageElement | null>(null);
  const secondaryHexRef = useRef<HTMLDivElement | null>(null);
  const secondaryImageRef = useRef<HTMLImageElement | null>(null);
  const counterRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const experienceRef = useRef<HTMLSpanElement | null>(null);
  const listRefs = useRef([] as (HTMLDivElement | null)[]);

  useEffect(() => {
    if (breadcrumbRef.current) {
      gsap.to(breadcrumbRef.current, {
        backgroundPositionY: "50%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: breadcrumbRef.current,
          start: "top top",
          scrub: 1,
        },
      });
    }

    if (experienceRef.current) {
      const animatedValue = { value: 0 };

      gsap.to(animatedValue, {
        value: 25,
        duration: 3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (experienceRef.current) {
            experienceRef.current.textContent = `${Math.round(animatedValue.value)}`;
          }
        },
      });
    }

    counterRefs.current.forEach((counter) => {
      if (counter) {
        const targetValue = parseInt(counter.dataset.value || "0", 10);
        const suffix = counter.nextElementSibling?.textContent || "";

        const animatedValue = { value: 0 };

        gsap.to(animatedValue, {
          value: targetValue,
          duration: 3,
          ease: "power1.out",
          snap: { value: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            counter.textContent = `${Math.round(animatedValue.value)}${suffix}`;
          },
        });
      }
    });

    listRefs.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power1.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="relative px-4 md:px-16 py-8 md:py-12">
      {/* Breadcrumb Section */}
      <div
        ref={breadcrumbRef}
        className="relative h-60 md:h-80 bg-cover bg-center bg-[url('/breadcrumb-bg.png')]"
        style={{
          backgroundPosition: "center top",
          transition: "background-position 0.3s ease-out",
        }}
      >
        <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h1 className="text-white text-3xl md:text-5xl font-bold">About Us</h1>
            <nav className="text-white text-sm md:text-lg mt-2 md:mt-0">
              <Link href="/" className="hover:text-blue-400 transition">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">About Us</span>
            </nav>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto text-center md:text-left py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C2760]">
          About Patholab Laboratory
        </h2>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          We guide our clients through difficult issues, bringing insight and judgment to each situation...
        </p>
      </div>

      {/* Image Slider */}
      <div className="max-w-full mx-auto py-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="rounded-lg overflow-hidden w-full"
        >
          {["/slider1.jpg", "/slider-2.jpg", "/slider3.jpg"].map((src, index) => (
            <SwiperSlide key={index}>
              <Image src={src} alt={`Slide ${index + 1}`} width={1600} height={800} className="w-full h-[400px] md:h-[500px] object-cover rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Achievements Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Achievements in Numbers
        </h2>
      </div>

      {/* Counter Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center px-4 md:px-16 py-8">
        {[
          { value: 100, suffix: "M+", label: "Tests Conducted", subLabel: "Accurate & Reliable" },
          { value: 300, suffix: "M+", label: "Expert Pathologists", subLabel: "Industry Leaders" },
          { value: 20, suffix: "+", label: "Premium Branches", subLabel: "Expanding Nationwide" },
          { value: 100, suffix: "%", label: "Quality Assurance", subLabel: "Certified & Trusted" },
        ].map((item, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
            <h2
              ref={(el) => {
                if (el) counterRefs.current[index] = el;
              }}
              data-value={item.value}
              className="text-4xl md:text-5xl font-bold text-[#2ad2c1]"
            >
              0
            </h2>
            <span className="text-2xl font-semibold">{item.suffix}</span>
            <p className="mt-2 text-gray-700 font-semibold text-lg">{item.label}</p>
            <p className="text-gray-500 text-sm mt-1">{item.subLabel}</p>
          </div>
        ))}
      </div>

      {/* Additional Components */}
      <Progress />
      <Employees />
      <Testimonial />
      <Awards />
    </section>
  );
}
