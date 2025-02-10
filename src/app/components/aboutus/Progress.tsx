"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Progress() {
    const protocolRefs = useRef<(HTMLDivElement | null)[]>([]);
    const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
       protocolRefs.current.forEach((ref) => {
            if (ref) {
              gsap.fromTo(
                ref,
                { opacity: 0, y: 50 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: "power1.out",
                  scrollTrigger: {
                    trigger: ref,
                    start: "top 80%",
                  },
                }
              );
            }
          });
    
          progressRefs.current.forEach((progress) => {
            if (progress) {
              const targetWidth = progress.dataset.width || "0%";
              gsap.fromTo(
                progress,
                { width: "0%" },
                {
                  width: targetWidth,
                  duration: 2,
                  ease: "power1.out",
                  scrollTrigger: {
                    trigger: progress,
                    start: "top 80%",
                  },
                }
              );
            }
          });
    
         
      }, []);


  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 my-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Patholab Provides the Best Laboratory Experience
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Patholab’s Complete Care Geno identifies DNA variants specific to an
          individual & provides reports about detoxification. Hormone Insight
          can be useful at various stages of life, like discovering.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="bg-blue-100 p-6 rounded-lg shadow-lg"
          ref={(el) => protocolRefs.current.push(el)}
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Patholab Laboratory Protocol
          </h2>
          <ul className="space-y-4">
            {[
              "Safety & security is must in laboratory",
              "Privacy of Client Data is highly maintained",
              "Continuous Monitoring & quality control",
              "Proper documentation & quick report Delivery",
            ].map((text, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 text-lg text-blue-900"
              >
                <span className="text-2xl">✔</span>
                {text}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <div className="mb-4">
              <p className="text-lg font-semibold text-blue-900">
                Diagnostic Facility
              </p>
              <div
                className="bg-blue-200 h-4 rounded-full"
                style={{ overflow: "hidden" }}
              >
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: "90%" }}
                  ref={(el) => progressRefs.current.push(el)}
                  data-width="90%"
                ></div>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold text-blue-900">
                Accuracy in Findings
              </p>
              <div
                className="bg-blue-200 h-4 rounded-full"
                style={{ overflow: "hidden" }}
              >
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: "96%" }}
                  ref={(el) => progressRefs.current.push(el)}
                  data-width="96%"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/bg-video.jpg"
            alt="Lab Team"
            width={500}
            height={400}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-white text-blue-500 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition">
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
