const Categories = () => {
    const categories = [
      { name: "Genetics", count: 4 },
      { name: "Neuroscience", count: 7 },
      { name: "Nutrition", count: 5 },
      { name: "Research", count: 5 },
    ];
  
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-bold text-blue-900">Categories</h3>
        <ul className="mt-3 space-y-2">
          {categories.map((cat, index) => (
            <li key={index} className="flex justify-between text-gray-600">
              <span>{cat.name}</span>
              <span>({cat.count})</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Categories;
  