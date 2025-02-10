import LeftBlogSection from "../components/blog/LeftBlogSection";
import RightBlogSection from "../components/blog/RightBlogSection";


export default function BlogPage() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <LeftBlogSection/>
      <RightBlogSection/>
    </div>
  );
}
