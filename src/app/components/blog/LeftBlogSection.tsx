"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const blogPosts = [
  {
    id: 1,
    image: "/blog1.jpg",
    date: "📅 August 31, 2023",
    author: "Rayan Kellar",
    categories: ["NUTRITION", "RESEARCH"],
    comments: "0 COMMENTS",
    title: "Patient-Centered Hospital Labs Start Here",
  },
  {
    id: 2,
    image: "/blog2.jpg",
    date: "📅 September 10, 2023",
    author: "Sophia Adams",
    categories: ["TECHNOLOGY", "HEALTHCARE"],
    comments: "3 COMMENTS",
    title: "How AI is Revolutionizing Medical Diagnostics",
  },
  {
    id: 3,
    image: "/blog3.jpg",
    date: "📅 October 5, 2023",
    author: "James Carter",
    categories: ["MEDICINE", "INNOVATION"],
    comments: "5 COMMENTS",
    title: "The Future of Personalized Healthcare Treatments",
  },
];

export default function BlogSection() {
  return (
    <div
      className="w-full md:w-3/4 p-8 space-y-16 ml-6 h-[170vh] overflow-y-auto scrollbar-hide"
    >
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

function BlogCard({ post }: { post: any }) {
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (leftRef.current) {
      gsap.from(leftRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
      });
    }
  }, []);

  return (
    <div ref={leftRef} className="relative flex flex-col items-start max-w-[100%] mx-auto">
      {/* Image Wrapper */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg w-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-3xl"
        />

        {/* Date Badge */}
        <div
          className="absolute bottom-0 left-0 text-white px-6 py-2 text-sm font-semibold flex items-center rounded-tr-lg"
          style={{
            background: "linear-gradient(to right, #24b7d3, #30efad)",
            color: "#ffffff",
          }}
        >
          {post.date}
        </div>
      </div>

      {/* Blog Content */}
      <div className="mt-6 w-full">
        {/* Author, Categories, and Comments */}
        <div className="text-gray-600 text-sm flex flex-wrap items-center space-x-4">
          <span className="font-semibold text-gray-800">{post.author}</span>
          {post.categories.map((category: string, index: number) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-xs font-semibold"
            >
              {category}
            </span>
          ))}
          <span className="text-gray-500">{post.comments}</span>
        </div>

        {/* Blog Title */}
        <h2 className="text-3xl font-bold text-[#001f54] mt-3 leading-snug">
          {post.title}
        </h2>

        {/* Read More Link */}
        <p className="mt-3 text-[#24b7d3] text-lg font-semibold cursor-pointer flex items-center hover:underline">
          READ MORE <span className="ml-1">↗</span>
        </p>
      </div>
    </div>
  );
}
