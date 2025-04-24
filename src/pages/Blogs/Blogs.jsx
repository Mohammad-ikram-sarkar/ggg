import React, { useState } from "react";
import blogData from "../../../public/blogs.json";

export default function Blogs() {
  const [showAll, setShowAll] = useState(false);
  const displayedBlogs = showAll ? blogData : blogData.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-16 border-b-4 border-purple-600 pb-4 inline-block">
          React Blogs
        </h1>

        <div className="space-y-10">
          {displayedBlogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white p-8 border-l-4 border-purple-600 hover:border-purple-800 transition-colors duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {blog.question}
              </h2>
              <p className="text-gray-700 mb-5 text-lg">{blog.answer}</p>
              <div className="flex justify-end">
                <span className="text-sm text-gray-500 italic">
                  {blog.added_at}
                </span>
              </div>
            </div>
          ))}
        </div>

        {!showAll && blogData.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </div>
  );
}