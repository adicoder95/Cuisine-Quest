import React from "react";

const Ingredients = () => {
  return (
    <div className="ingredients">
      <h3 className="text-[#64A67E] text-[20px] font-bold mt-7">
        Main Ingredients
      </h3>
      <textarea
        type="text"
        placeholder="Enter base Ingredients here. Example ( 1 Onion, 1 Garlic, 3 Tomatoes ... 2 Carrots )"
      />
    </div>
  );
};

export default Ingredients;
