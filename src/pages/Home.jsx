import FoodItems from "@/components/homes/FoodItems";
import Hero from "@/components/homes/Hero";
import Title from "@/components/homes/Title";
import React from "react";
import "../styles/home.css";
import TopChef from "@/components/homes/TopChef";
import TrendingRecipe from "@/components/homes/TrendingRecipe";
import HomeBottom from "@/components/homes/HomeBottom";

const Home = () => {
  return (
    <div>
      <div className="container">
        <Hero />
        <Title />
      </div>
      <FoodItems />
      <TopChef />
      <TrendingRecipe />
      <HomeBottom />
    </div>
  );
};

export default Home;
