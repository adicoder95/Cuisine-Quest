import React from "react";

const FoodItems = () => {
  return (
    <div className="overflow-auto sliding">
      <div className="food-items text-[#FC8801] text-[18px] font-medium space-x-4">
        <button>🍜 Ramen</button>
        <button>🍲 Soup</button>
        <button>🍤 Sea food</button>
        <button>🍣 Sushi</button>
        <button>🍜 Ramen</button>
        <button>🍲 Soup</button>
        <button>🍤 Sea food</button>
        <button>🍣 Sushi</button>
      </div>
    </div>
  );
};

export default FoodItems;
