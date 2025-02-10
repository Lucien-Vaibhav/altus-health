const Tags = () => {
    const tags = ["AI Science", "Genetics", "Laboratory", "Medical", "Neuroscience", "Pathology", "Scientific"];
  
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-bold text-blue-900">Tags</h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default Tags;
  