import React from "react";
import chicken from "../../assets/chicken.svg";
import RecipeCard from "./RecipeCard";

const recipes = [
  {
    id: 1,
    name: "Mac & Cheese Fusion Bowls",
    cuisine: "North Indian",
    likes: 1263,
    image: chicken,
    link: "/recipe",
  },
  {
    id: 2,
    name: "Spicy Chicken Tikka",
    cuisine: "Indian",
    likes: 980,
    image: chicken,
    link: "/recipe",
  },
  {
    id: 3,
    name: "Classic Butter Chicken",
    cuisine: "Mughlai",
    likes: 1450,
    image: chicken,
    link: "/recipe",
  },
];


const TrendingRecipe = () => {
  return (
    <div className="sliding">
      <h3 className="text-[#64A67E] text-[20px] font-bold mt-7">
        Trending Recipes
      </h3>
      <div className="overflow-auto">
        <div className="trending-cards flex items-center gap-10 min-w-[1000px] mt-4 pb-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingRecipe;
