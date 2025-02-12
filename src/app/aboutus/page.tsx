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
  const listRefs = useRef([]);

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
          start: "top 80%", // Starts animating when the element enters the viewport
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (experienceRef.current) {
            experienceRef.current.textContent = `${Math.round(
              animatedValue.value
            )}`;
          }
        },
      });
    }

    // GSAP Context for animations
    const ctx = gsap.context(() => {
      // Main Hexagon
      if (mainHexRef.current && mainImageRef.current) {
        gsap.set(mainHexRef.current, { willChange: "transform" });
        gsap.set(mainImageRef.current, { willChange: "transform" });

        mainHexRef.current.addEventListener("mouseenter", () => {
          gsap.to(mainHexRef.current, {
            scale: 1.05,
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(mainImageRef.current, {
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        mainHexRef.current.addEventListener("mouseleave", () => {
          gsap.to(mainHexRef.current, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
          gsap.to(mainImageRef.current, {
            scale: 1,
            duration: 0.4,
            ease: "power2.inOut",
          });
        });
      }

      // Secondary Hexagon
      if (secondaryHexRef.current && secondaryImageRef.current) {
        gsap.set(secondaryHexRef.current, { willChange: "transform" });
        gsap.set(secondaryImageRef.current, { willChange: "transform" });

        secondaryHexRef.current.addEventListener("mouseenter", () => {
          gsap.to(secondaryHexRef.current, {
            scale: 1.05,
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(secondaryImageRef.current, {
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        secondaryHexRef.current.addEventListener("mouseleave", () => {
          gsap.to(secondaryHexRef.current, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
          gsap.to(secondaryImageRef.current, {
            scale: 1,
            duration: 0.4,
            ease: "power2.inOut",
          });
        });
      }
    });
    if (!counterRefs.current || counterRefs.current.length === 0) return;

    counterRefs.current.forEach((counter) => {
      if (counter) {
        const targetValue = parseInt(counter.dataset.value || "0", 10);
        const suffix = counter.nextElementSibling?.textContent || "";

        const animatedValue = { value: 0 }; // Store value in an object

        gsap.to(animatedValue, {
          value: targetValue,
          duration: 3,
          ease: "power1.out",
          snap: { value: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none none", // Ensures it plays when scrolled into view
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
    <section className="relative">
      {/* Breadcrumb Section */}
      <div
        ref={breadcrumbRef}
        className="relative h-60 md:h-80 bg-cover bg-center bg-[url('/breadcrumb-bg.png')]"
        style={{
          backgroundPosition: "center top",
          transition: "background-position 0.3s ease-out",
        }}
      >
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              About Us
            </h1>
            <nav className="text-white text-sm md:text-lg mt-2 md:mt-0">
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">About Us</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="max-w-full mx-auto py-12 px-6 md:px-16 relative">
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
            className="rounded-lg overflow-hidden w-full"
          >
            {["/slider1.jpg", "/slider-2.jpg", "/slider3.jpg"].map(
              (src, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={1600}
                    height={800}
                    className="w-full h-[500px] md:h-[600px] object-cover rounded-lg"
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
          <button className="prev-btn absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black/70 transition">
            ❮
          </button>
          <button className="next-btn absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black/70 transition">
            ❯
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C2760]">
          About Patholab Laboratory
        </h2>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          We guide our clients through difficult issues, bringing insight and
          judgment to each situation. Our innovative approaches create original
          solutions to our clients' most complex domestic & multi-jurisdictional
          deals and disputes. By thinking on behalf of our clients every day, we
          anticipate what they want, provide what they need, and build lasting
          relationships.
        </p>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Patholab is the best diagnostic lab in the city. I have great
          experience with them. They provide authentic results & have the best
          environment inside here. I highly recommend them.
        </p>
        <p className="text-[#3066E0] font-semibold text-lg mt-6">
          Over the last 35 Years we made an impact that is strong & we have a
          long way to go.
        </p>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Patholab is the best diagnostic lab in the city. I have great
          experience with them. They provide authentic results & have the best
          environment inside here. I highly recommend them.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-12 px-6 md:px-16">
        {/* Text Content */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Patholab Provides the Best Laboratory Experience
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Patholab’s Complete Care Geno identifies DNA variants specific to an
            individual & provides reports about detoxification. Hormone Insight
            can be useful at various stages of life, like discovering.
          </p>

          <div className="mt-6 space-y-6">
            <div className="flex items-center bg-white p-6 rounded-2xl shadow-lg">
              <Image
                src="/icon-ctb.png"
                alt="Experience Icon"
                width={64}
                height={64}
                className="w-16 h-16"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  25 Years of Experience
                </h3>
                <p className="text-gray-600 mt-2">
                  Your full-service lab for clinical trials. Our mission is to
                  ensure the generation of accurate and precise findings.
                </p>
              </div>
            </div>

            <div className="flex items-center bg-white p-6 rounded-2xl shadow-lg">
              <Image
                src="/icon-ctb2.png"
                alt="Support Icon"
                width={64}
                height={64}
                className="w-16 h-16"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  World-Class Laboratory Support
                </h3>
                <p className="text-gray-600 mt-2">
                  The millions of patients we treat each year prepare us to
                  treat the ones who matter most — your development.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[700px] md:h-[800px] w-full">
          {/* Large Main Hexagon */}
          <div
            ref={mainHexRef}
            className="absolute left-0 top-0 w-[400px] h-[400px] z-10 cursor-pointer"
          >
            <div className="hexagon-shadow w-full h-full overflow-hidden">
              <Image
                ref={mainImageRef}
                src="/hexagon-image1.jpg"
                alt="Lab Team"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute mt-[5%] top-[60%] left-6 w-40 h-40 bg-[#0071dc] flex flex-col items-center justify-center text-white font-bold text-sm"
              style={{
                maskImage: "url('/mask-banner2.png')",
                WebkitMaskImage: "url('/mask-banner2.png')",
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <span
                ref={experienceRef}
                className="text-white font-bold text-3xl md:text-4xl"
              >
                0
              </span>
              <span className="text-white font-bold text-base md:text-lg text-center leading-tight">
                YEARS EXPERIENCE
              </span>
            </div>
          </div>

          {/* Smaller Secondary Hexagon */}
          <div
            ref={secondaryHexRef}
            className="absolute right-0 bottom-0 w-[300px] h-[300px] z-20 transform translate-x-24 -translate-y-40 cursor-pointer"
          >
            <div className="hexagon-shadow w-full h-full overflow-hidden">
              <Image
                ref={secondaryImageRef}
                src="/hexagon-image2.jpg"
                alt="Microscope"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Achievements in Numbers
        </h2>
      </div>
      {/* Counter Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center px-6 md:px-16">
        {[
          {
            value: 100,
            suffix: "M+",
            label: "Tests Conducted",
            subLabel: "Accurate & Reliable",
          },
          {
            value: 300,
            suffix: "M+",
            label: "Expert Pathologists",
            subLabel: "Industry Leaders",
          },
          {
            value: 20,
            suffix: "+",
            label: "Premium Branches",
            subLabel: "Expanding Nationwide",
          },
          {
            value: 100,
            suffix: "%",
            label: "Quality Assurance",
            subLabel: "Certified & Trusted",
          },
        ].map((item, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
            {/* Counter Value */}
            <h2
              ref={(el) => {
                if (el) counterRefs.current[index] = el;
              }}
              data-value={item.value}
              className="text-4xl md:text-5xl font-bold text-[#2ad2c1]"
            >
              0
            </h2>

            {/* Suffix */}
            <span className="text-2xl font-semibold">{item.suffix}</span>

            {/* Label */}
            <p className="mt-2 text-gray-700 font-semibold text-lg">
              {item.label}
            </p>

            {/* Sub Label */}
            <p className="text-gray-500 text-sm mt-1">{item.subLabel}</p>
          </div>
        ))}
      </div>
      <Progress />
      <Employees />
      <Testimonial />
      <Awards />
    </section>
  );
}
