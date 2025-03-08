import TopChef from "@/components/homes/TopChef";
import Ingred from "@/components/Ingred";
import Chefs from "@/components/recipeMaker/Chefs";
import Hero from "@/components/recipeMaker/Hero";
import Ingredients from "@/components/recipeMaker/Ingredients";
import PopupChef from "@/components/recipeMaker/PopupChef";
import SelectCat from "@/components/recipeMaker/SelectCat";
import SelectCountry from "@/components/recipeMaker/SelectCountry";
import React from "react";

const RecipeMaker = () => {
  return (
    <>
      <div className="container">
        <Hero />
        <Ingred />
        <PopupChef
          title={"Would you like to apply the style of popular chef ?"}
        />
        <SelectCountry />
        <Chefs />
        <SelectCat
          title={"Pick a Dish Category"}
          categories={["Breakfast", "Lunch", "Dinner"]}
        />
        <SelectCat
          title={"Pick a Cuisine"}
          categories={["Italian", "Maxican", "Asian", "Vegetarian"]}
        />
        <SelectCat
          title={"Cooking Method"}
          categories={["Baking", "Grilling", "Frying", "Sautéing"]}
        />
        <PopupChef title={"Would you a Michelin Recipe ?"} />
        <button
          className="button-active w-full mt-10 mb-16 shadow-[0px_10px_14px_0px_#F8C272B2]"
        >
          Let’s Cook
        </button>
      </div>
    </>
  );
};

export default RecipeMaker;
