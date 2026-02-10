import React from "react";

const CategoryFilter = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories?.map((category) => {
        const isActive = selected === category;

        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300
              ${
                isActive
                  ? "bg-gradient-to-r from-green-700 to-emerald-700 text-white shadow-lg scale-105"
                  : "bg-white text-green-700 border border-green-300 hover:bg-green-50 hover:border-green-400"
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
