const RecentPosts = () => {
    const posts = [
      { title: "Patient-Centered Hospital Labs Start Here", date: "August 31, 2023", img: "/images/post1.jpg" },
      { title: "Blood Protein Signatures Change Across Lifespan", date: "August 29, 2023", img: "/images/post2.jpg" },
      { title: "Microbiologics Introduces SARS-CoV-2 Synthetic", date: "August 29, 2023", img: "/images/post3.jpg" },
    ];
  
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-bold text-blue-900">Recent Posts</h3>
        <ul className="mt-3 space-y-4">
          {posts.map((post, index) => (
            <li key={index} className="flex space-x-3">
              <img src={post.img} alt="Post" className="w-12 h-12 rounded-md" />
              <div>
                <p className="text-sm font-semibold">{post.title}</p>
                <span className="text-xs text-green-500">{post.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RecentPosts;
  