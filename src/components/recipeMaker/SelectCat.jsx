'use client'
import React, { useState } from "react";

const SelectCat = ({ title, categories }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="mt-8">
      <p className="text-[#64A67E] font-bold text-[17px]">{title}</p>
      <div className="flex flex-wrap gap-3 mt-3">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "button-active" : "simple-btn"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectCat;
