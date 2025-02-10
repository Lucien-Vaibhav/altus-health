"use client"

import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

const AboutAuthor = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-bold text-blue-900">About Author</h3>
        <img src="/blog1.jpg" alt="Author" className="w-full rounded-md mt-3" />
        <p className="text-gray-600 text-sm mt-2">
          Sed ut perspiciatis unde omnis iste natus accusantium doloremque.
        </p>
        <div className="flex items-center space-x-3 mt-3">
      <span className="font-bold text-gray-800">Contact:</span>
      <a href="#" className="bg-cyan-100 p-3 rounded-full text-cyan-500">
        <FaFacebookF />
      </a>
      <a href="#" className="bg-cyan-100 p-3 rounded-full text-cyan-500">
        <FaTwitter />
      </a>
      <a href="#" className="bg-cyan-100 p-3 rounded-full text-cyan-500">
        <FaPinterestP />
      </a>
      <a href="#" className="bg-cyan-100 p-3 rounded-full text-cyan-500">
        <FaInstagram />
      </a>
    </div>
      </div>
    );
  };
  
  export default AboutAuthor;
  