"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import AboutAuthor from "../AboutAuthor";
import Categories from "../Categories";
import RecentPosts from "../RecentPosts";
import Tags from "../Tags";

export default function RightSingleBlogSection() {
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.from(rightRef.current, { opacity: 0, x: 50, duration: 1 });
  }, []);

  return (
    <div ref={rightRef} className="w-full p-6 space-y-6">
      <AboutAuthor />
      <Categories />
      <RecentPosts />
      <Tags />
    </div>
  );
};


