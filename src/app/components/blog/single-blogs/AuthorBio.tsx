import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

const AuthorBio = () => {
  return (
    <div className="flex flex-col sm:flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md gap-6 sm:text-center">
      {/* Profile Image */}
      <div className="w-40 h-40 sm:w-32 sm:h-32 rounded-full overflow-hidden">
        <Image
          src="/avatar.png"
          alt="Rayan Kellar"
          width={160}
          height={160}
          className="object-cover w-full h-full rounded-full"
        />
      </div>

      {/* Author Details (Stacks below image on mobile) */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-900">Rayan Kellar</h2>
        <p className="text-gray-600 mt-2 text-lg">
          Author of this blog, Rayan Kellar is a travel nutritionist, writer & photographer.
          She shares her daily life activity in a very entertaining manner.
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-4 mt-4">
          {[
            { icon: FaFacebookF, url: "https://facebook.com", label: "Facebook" },
            { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
            { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
            { icon: FaPinterestP, url: "https://pinterest.com", label: "Pinterest" },
          ].map(({ icon: Icon, url, label }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow on ${label}`}
              className="text-[#30efad] hover:text-[#2EE3B6] transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
