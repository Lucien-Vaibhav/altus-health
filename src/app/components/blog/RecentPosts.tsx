"use client";

import { useBlog } from "../../contexts/logContext";

const RecentPosts = () => {
  const { blogs } = useBlog(); // Get blogs from context

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold text-blue-900">
        Recent Posts ({blogs.length}) {/* Display the total number of posts */}
      </h3>
      <ul className="mt-3 space-y-4">
        {blogs.map((post) => (
          <li key={post.id} className="flex space-x-4">
            <img src={post.image} alt={post.title} className="max-w-[65px] h-auto rounded-md object-cover aspect-square" />
            <div>
              <p className="text-sm font-semibold text-[#1d2864]">{post.title}</p>
              <span className="text-xs text-green-500">{post.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;
