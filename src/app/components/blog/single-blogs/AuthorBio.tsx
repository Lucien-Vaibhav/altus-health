import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

const AuthorBio = () => {
  return (
    <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md gap-4">
      {/* Profile Image */}
      <div className="w-52 h-40 rounded-full overflow-hidden">
        <Image
          src="/avatar.png" // Replace with actual image URL
          alt="Rayan Kellar"
          width={160} // Increased size
          height={160} // Increased size
          className="object-cover w-full h-full"
        />
      </div>

      {/* Author Details */}
      <div className="ml-6">
        <h2 className="text-[32px] font-bold text-gray-900">Rayan Kellar</h2>
        <p className="text-gray-600 mt-2 text-[18px]">
          Author of this blog, Rayan Kellar is a travel nutritionist, writer & photographer.
          She shares her daily life activity in a very entertaining manner.
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#30efad] hover:text-[#2EE3B6]">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#30efad] hover:text-[#2EE3B6]">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#30efad] hover:text-[#2EE3B6]">
            <FaInstagram size={20} />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-[#30efad] hover:text-[#2EE3B6]">
            <FaPinterestP size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
