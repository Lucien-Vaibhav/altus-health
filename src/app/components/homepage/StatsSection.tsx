"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StatsSection() {
  const stats = [
    { icon: "/microscope.png", label: "Patients have been served by us in Patholab laboratory", target: 200, suffix: "k" },
    { icon: "/counter-icon2.png", label: "Client Satisfaction has been achieved by Patholab", target: 100, suffix: "%" },
    { icon: "/dna.png", label: "Kinds of tests are available here in the laboratory", target: 350, suffix: "+" },
    { icon: "/search.png", label: "Amazing research has been conducted by us", target: 10, suffix: "k" },
  ];

  const countRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    stats.forEach((stat, index) => {
      gsap.fromTo(
        countRefs.current[index],
        { innerText: 0 },
        {
          innerText: stat.target,
          duration: 2,
          ease: "power2.out",
          roundProps: "innerText",
          onUpdate: function () {
            if (countRefs.current[index]) {
              countRefs.current[index]!.innerText =
                Math.round(this.targets()[0].innerText) + stat.suffix;
            }
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-white py-14 px-8 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-gray-100 rounded-lg">
            {/* First Row: Icon & Counter */}
            <div className="flex items-center space-x-3">
              <img src={stat.icon} alt={stat.label} className="w-10 h-10" />
              <h2
                ref={(el) => {
                  if (el) {
                    countRefs.current[index] = el;
                  }
                }}
                className="text-4xl font-bold text-[#1d2864]"
              >
                0{stat.suffix}
              </h2>
            </div>

            {/* Second Row: Label */}
            <p className="text-gray-600 text-sm text-center mt-3">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
