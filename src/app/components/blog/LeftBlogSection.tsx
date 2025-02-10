"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LeftBlogSection(){
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(leftRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
    });
  }, []);

  return (
    <div ref={leftRef} className="w-full md:w-2/3 p-6">
      <img
        src="/lab-image.jpg"
        alt="Lab"
        className="rounded-lg shadow-lg w-full"
      />
      <div className="mt-4 flex items-center">
        <span className="bg-green-500 text-white px-3 py-1 rounded-md text-sm">
          📅 August 31, 2023
        </span>
      </div>
      <h2 className="text-2xl font-bold mt-3">
        Patient-Centered Hospital Labs Start Here
      </h2>
      <p className="mt-2 text-gray-600">
        READ MORE →
      </p>
    </div>
  );
};


