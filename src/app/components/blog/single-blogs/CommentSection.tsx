import React from "react";

const CommentSection = () => {
  return (
    <div className="w-full bg-gray-100 py-12 px-0 md:px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 ">
        <h2 className="text-[48px] font-bold text-[#1d2864] mb-4 text-left">
          Leave a Comment
        </h2>
        <p className="text-gray-600 mb-6 text-left">
          Your email address will not be published *
        </p>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            placeholder="Name"
            className="p-4 border border-gray-300 rounded-lg w-full outline-none focus:border-blue-500 text-left"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 border border-gray-300 rounded-lg w-full outline-none focus:border-blue-500 text-left"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="p-4 border border-gray-300 rounded-lg w-full outline-none focus:border-blue-500 text-left"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center mb-6 text-left">
          <input type="checkbox" id="saveDetails" className="w-5 h-5 mr-2" />
          <label htmlFor="saveDetails" className="text-gray-600">
            Save my details in this browser for the next time I comment.
          </label>
        </div>

        {/* Textarea */}
        <textarea
          placeholder="Comment"
          className="w-full p-4 border border-gray-300 rounded-lg h-40 outline-none focus:border-blue-500 text-left"
        ></textarea>

        {/* Submit Button */}
        <button className="mt-6  py-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-left px-6">
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
