"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the BlogPost type
interface BlogPost {
  id: number;
  image: string;
  date: string;
  author: string;
  categories: string[];
  comments: string;
  title: string;
  slug: string;
  content: string;
}

// Blog posts data (can be moved to a separate file)
const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/blog1.jpg",
    date: "August 31, 2023",
    author: "Rayan Kellar",
    categories: ["NUTRITION", "RESEARCH"],
    comments: "0 COMMENTS",
    title: "Patient-Centered Hospital Labs Start Here",
    slug: "patient-centered-hospital-labs-start-here",
    content: "This is the full content of the first blog...",
  },
  {
    id: 2,
    image: "/blog2.jpg",
    date: "September 10, 2023",
    author: "Sophia Adams",
    categories: ["TECHNOLOGY", "HEALTHCARE"],
    comments: "3 COMMENTS",
    title: "How AI is Revolutionizing Medical Diagnostics",
    slug: "how-ai-is-revolutionizing-medical-diagnostics",
    content: "This is the full content of the second blog...",
  },
  {
    id: 3,
    image: "/blog3.jpg",
    date: "October 5, 2023",
    author: "James Carter",
    categories: ["MEDICINE", "INNOVATION"],
    comments: "5 COMMENTS",
    title: "The Future of Personalized Healthcare Treatments",
    slug: "the-future-of-personalized-healthcare-treatments",
    content: "This is the full content of the third blog...",
  },
];

// Define the BlogContext type
interface BlogContextType {
  blogs: BlogPost[];
  getBlogBySlug: (slug: string) => BlogPost | undefined;
}

// Create the context
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Provider component
export function BlogProvider({ children }: { children: ReactNode }) {
  // Function to get a blog by slug
  const getBlogBySlug = (slug: string) => {
    return blogPosts.find((blog) => blog.slug === slug);
  };

  return (
    <BlogContext.Provider value={{ blogs: blogPosts, getBlogBySlug }}>
      {children}
    </BlogContext.Provider>
  );
}

// Custom hook for using the BlogContext
export function useBlog() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
}
