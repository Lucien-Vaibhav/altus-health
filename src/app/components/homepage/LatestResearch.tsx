"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const researchData = [
  {
    date: "AUGUST 31, 2023",
    image: "/research1.jpg",
    title: "Patient-Centered Hospital Labs Start Here",
  },
  {
    date: "AUGUST 29, 2023",
    image: "/research2.jpg",
    title: "Blood Protein Signatures Change Across Lifespan",
  },
  {
    date: "AUGUST 29, 2023",
    image: "/research3.jpg",
    title: "Microbiologics Introduces SARS-CoV-2 Synthetic",
  },
];

export default function LatestResearch() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current?.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-2"> {/* Reduced Side Padding */}
        <div className="text-center mb-12">
          <h5 className="text-blue-600 font-semibold text-lg">What Good Works We Are Doing</h5>
          <h2 className="text-5xl font-bold text-gray-800">Our Latest Research</h2>
          <p className="text-gray-500 mt-3 text-lg">
            We have world-class pathologists & lab assistants, equipped with the best laboratory machinery & reagents.
          </p>
        </div>

        <div ref={containerRef} className="flex flex-wrap justify-center gap-4"> {/* Reduced Gap */}
          {researchData.map((item, index) => (
            <div key={index} className="bg-white shadow-xl rounded-2xl overflow-hidden p-6 w-[450px] h-[600px] flex flex-col">
              
              {/* Image Wrapper */}
              <div className="relative w-full h-[250px] p-2"> {/* Less Padding */}
                <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-xl" />
                <span className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between mt-3"> {/* Reduced Spacing */}
                {/* Author & Comments */}
                <div className="flex items-center justify-between mb-2"> {/* Less Margin */}
                  <div className="flex items-center gap-2">
                    <img src="/user.png" alt="Author" className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-gray-600 text-md font-medium">Rayan Kellar</span>
                  </div>
                  <div className="text-gray-500 text-md flex items-center gap-1">
                    <span>•</span>
                    <span>0 Comments</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-2"> {/* Less Spacing */}
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    AI SCIENCE
                  </span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    SCIENTIFIC
                  </span>
                </div>

                {/* Title */}
                <p className="text-gray-900 font-bold text-xl leading-snug">
                  {item.title}
                </p>

                {/* Read More */}
                <a href="#" className="text-gray-500 font-medium flex items-center gap-2 text-md mt-2">
                  READ MORE <span>↗</span>
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
