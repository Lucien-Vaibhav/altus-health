"use client";

import { useBlog } from "../../contexts/logContext";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BlogSection() {
  const { blogs } = useBlog();

  return (
    <div className="w-full md:w-3/4 p-8 space-y-16 ml-6 h-[170vh] overflow-y-auto scrollbar-hide">
      {blogs.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

function BlogCard({ post }: { post: any }) {
  const leftRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (leftRef.current) {
      gsap.from(leftRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
      });
    }
  }, []);

  const handleReadMore = () => {
    router.push(`/blogs/${post.slug}`); // Navigate using slug
  };

  return (
    <div ref={leftRef} className="relative flex flex-col items-start max-w-[100%] mx-auto">
      <div className="relative rounded-3xl overflow-hidden shadow-lg w-full">
        <img src={post.image} alt={post.title} className="w-full rounded-3xl" />

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

      <div className="mt-6 w-full">
        <h2 className="text-3xl font-bold text-[#001f54] mt-3 leading-snug">{post.title}</h2>

        {/* Read More Button */}
        <p onClick={handleReadMore} className="mt-3 text-[#24b7d3] text-lg font-semibold cursor-pointer flex items-center hover:underline">
          READ MORE <span className="ml-1">↗</span>
        </p>
      </div>
    </div>
  );
}
