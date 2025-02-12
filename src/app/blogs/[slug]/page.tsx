"use client";

import { useBlog } from "../../contexts/logContext";
import { useEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

import RightSingleBlogSection from "@/app/components/blog/single-blogs/RightSingleBlogSection";
import ImageGallery from "@/app/components/blog/single-blogs/ImageGallery";
import DoctorBanner from "@/app/components/blog/single-blogs/DoctorBanner";
import VideoSection from "@/app/components/blog/single-blogs/VideoSection";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import AuthorBio from "@/app/components/blog/single-blogs/AuthorBio";
import CommentSection from "@/app/components/blog/single-blogs/CommentSection";

export default function BlogDetails() {
  const { getBlogBySlug } = useBlog();
  const router = useRouter();
  const { slug } = useParams();

  useEffect(() => {
    gsap.from(".blog-content", { opacity: 0, y: 50, duration: 1 });
  }, []);

  // Get the blog using the slug
  const blog = getBlogBySlug(slug as string);

  if (!blog) {
    return (
      <p className="text-center mt-10 text-red-500">
        Blog not found.{" "}
        <span
          onClick={() => router.push("/blogs")}
          className="text-blue-500 cursor-pointer underline"
        >
          Go back
        </span>
        .
      </p>
    );
  }

  return (
    <section className="p-8 flex flex-col md:flex-row justify-between gap-1 h-screen bg-transparent">
      <div className="md:w-[75%] h-full overflow-y-auto scroll-smooth bg-transparent p-4">
        <p className="mt-2 text-gray-500">
          By {blog.author} | {blog.date}
        </p>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-lg shadow-md mb-6"
        />
        <h1 className="text-4xl font-bold text-[#1C2760]">{blog.title}</h1>
        <div className="max-w-5xl mx-auto ">
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperia m, eaque ipsa
            quae ab illo inventore veritatis et quasi arch itecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione volupta te m sequi nesciunt.
          </p>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperia m, eaque ipsa
            quae ab illo inventore veritatis et quasi arch itecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione volupta te m sequi nesciunt.
          </p>
        </div>
        <div className="mb-8">
          <ImageGallery />
        </div>

        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperia m, eaque ipsa quae
          ab illo inventore veritatis et quasi arch itecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione volupta te m sequi nesciunt.
        </p>
        <div className="mt-8 mb-8">
          <DoctorBanner />
        </div>

        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperia m, eaque ipsa quae
          ab illo inventore veritatis et quasi arch itecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione volupta te m sequi nesciunt.
        </p>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperia m, eaque ipsa quae
          ab illo inventore veritatis et quasi arch itecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione volupta te m sequi nesciunt.
        </p>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperia m, eaque ipsa quae
          ab illo inventore veritatis et quasi arch itecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione volupta te m sequi nesciunt.
        </p>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperia m, eaque ipsa quae
          ab illo inventore veritatis et quasi arch itecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione volupta te m sequi nesciunt.
        </p>
        <div className=" mt-8 mb-8">
          <VideoSection />
        </div>

        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperia m, eaque ipsa quae
          ab illo inventore veritatis et quasi arch itecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione volupta te m sequi nesciunt.
        </p>
        <div className="flex items-center gap-3 mt-6 justify-end">
          <span className=" font-chakra text-2xl font-bold text-gray-800">
            Share:
          </span>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#3b5998] text-white flex items-center justify-center rounded-full transition-transform hover:scale-110"
          >
            <FaFacebookF size={18} />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/intent/tweet?url=YOUR_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#1DA1F2] text-white flex items-center justify-center rounded-full transition-transform hover:scale-110"
          >
            <FaTwitter size={18} />
          </a>

          {/* Pinterest */}
          <a
            href="https://pinterest.com/pin/create/button/?url=YOUR_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#bd081c] text-white flex items-center justify-center rounded-full transition-transform hover:scale-110"
          >
            <FaPinterestP size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#0077b5] text-white flex items-center justify-center rounded-full transition-transform hover:scale-110"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
        <div className="mb-8">
          {" "}
          <AuthorBio />
        </div>

        <div className="className=mb-8">
          <CommentSection />
        </div>
      </div>

      <div className="w-1/4 h-full overflow-y-auto scroll-smooth bg-transparent p-4">
        <RightSingleBlogSection />
      </div>
    </section>
  );
}
