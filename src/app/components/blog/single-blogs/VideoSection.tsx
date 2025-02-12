import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import gsap from "gsap";

const VideoSection = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const rippleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rippleRef.current) return;

    // GSAP timeline for continuous looping animation
    gsap.to(rippleRef.current, {
      scale: 3,
      opacity: 0,
      duration: 1.2, // Slower animation
      ease: "power2.out",
      repeat: -1, // Infinite loop
      repeatDelay: 1, // Small delay between animations
    });
  }, []);

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4">
      {/* Background Image */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
        <Image
          src="/blog-bg-video.jpg"
          alt="Laboratory"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />

        {/* Play Button */}
        <button
          ref={buttonRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Continuous Ripple Effect */}
          <div
            ref={rippleRef}
            className="absolute w-20 h-20 bg-white rounded-full opacity-50"
          ></div>

          {/* Main Play Button */}
          <div className="relative w-20 h-20 bg-teal-400 text-white flex items-center justify-center rounded-full shadow-lg transition-transform transform hover:scale-110">
            <FaPlay size={28} />
          </div>
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
