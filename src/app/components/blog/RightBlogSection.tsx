"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RightBlogSection(){
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(rightRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
    });
  }, []);

  return (
    <div ref={rightRef} className="w-full md:w-1/3 p-6 bg-white shadow-lg rounded-lg">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold">About Author</h3>
        <img
          src="/author-image.jpg"
          alt="Author"
          className="rounded-lg mt-4"
        />
        <p className="text-gray-600 mt-2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </p>
        <div className="flex gap-3 mt-3">
          <span className="text-blue-500">🌍</span>
          <span className="text-blue-500">🐦</span>
          <span className="text-blue-500">📌</span>
          <span className="text-blue-500">📷</span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold">Categories</h3>
        <ul className="mt-2 text-gray-700">
          <li>Genetics (4)</li>
          <li>Neuroscience (7)</li>
          <li>Nutrition (5)</li>
          <li>Research (8)</li>
        </ul>
      </div>
    </div>
  );
};


