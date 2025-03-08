import React from "react";
import chicken from "../../assets/chicken.svg";
import MyRecipeCart from "./MyRecipeCart";
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

const MyRecipeCom = () => {
  return (
    <div className="trending-cards flex flex-col items-center gap-10 mt-4 pb-4">
      {recipes.map((recipe) => (
        <MyRecipeCart key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default MyRecipeCom;
