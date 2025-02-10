"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const testimonials = [
  {
    name: "Brandon Maxwell",
    location: "NEW YORK",
    rating: 5,
    image: "/testi-1.jpg",
    feedback:
      "Patholab is the best diagnostic lab in the city. I have great experience with them. They provide authentic results & have the best environment inside here. I highly recommend them.",
  },
  {
    name: "Raymond Castillo",
    location: "NEW YORK",
    rating: 5,
    image: "/testi-2.jpg",
    feedback:
      "Regardless of which division, testing services, silicone mock vessels, or test equipment, our team will go above and beyond to ensure the highest. I highly recommend them.",
  },
  {
    name: "Sarah Johnson",
    location: "CALIFORNIA",
    rating: 5,
    image: "/testi-3.png",
    feedback:
      "Very professional service! The staff is well trained, and the diagnostic process is seamless. I’m very satisfied with the results.",
  },
  {
    name: "Michael Lee",
    location: "TEXAS",
    rating: 5,
    image: "/testi-1.jpg",
    feedback:
      "One of the best labs in the city! The reports are accurate and delivered on time. Highly recommended for anyone needing lab tests.",
  },
];

export default function Testimonial() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    imageRefs.current.forEach((img) => {
      if (!img) return;

      gsap.set(img, { scale: 1 });

      img.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.3, duration: 0.3, ease: "power2.out" });
      });

      img.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-teal-500 to-green-400 py-16 px-8 relative">
      <h2 className="text-white text-4xl font-bold text-center mb-10">
        Clients Testimonial
      </h2>

      {/* Custom Navigation Arrows */}
      <div className="relative top-[-50px] transform flex gap-4 justify-end mr-24">
        <button
          ref={prevRef}
          className="w-16 h-12 flex items-center justify-center border-2 border-white rounded-full text-white text-2xl transition-all hover:bg-black hover:text-white"
        >
          ❮
        </button>
        <button
          ref={nextRef}
          className="w-16 h-12 flex items-center justify-center border-2 border-white rounded-full text-white text-2xl transition-all hover:bg-black hover:text-white"
        >
          ❯
        </button>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 5000 }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="rounded-2xl"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-10 rounded-2xl shadow-lg h-[320px] flex flex-col items-center justify-center">
                {/* Profile Section */}
                <div className="flex items-center w-full mb-4">
                  {/* Profile Image Wrapper (Keeps Border Static) */}
                  <div className="w-24 h-24 rounded-full border-4 border-gray-300 overflow-hidden flex items-center justify-center">
                    <Image
                      ref={(el) => {
                        imageRefs.current[index] = el;
                      }}
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                    />
                  </div>

                  {/* Name, Location, Rating */}
                  <div className="ml-6 flex flex-col w-full">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-2xl font-semibold text-left text-[#1d2864]">
                          {testimonial.name}
                        </h3>
                        <span className="text-[#2ad2c1] text-lg font-small text-left block">
                          {testimonial.location}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-[#1d2864] text-xl font-bold text-left block">
                          Rating:{" "}
                        </span>
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <span key={i} className="text-yellow-400 text-2xl">
                              ★
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-lg text-gray-700 text-left">
                  {testimonial.feedback}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
