import Ingred from "@/components/Ingred";
import Hero from "@/components/recipeMaker/Hero";
import Ingredients from "@/components/recipeMaker/Ingredients";
import SelectCat from "@/components/recipeMaker/SelectCat";
import React from "react";

const HealthFitness = () => {
  return (
    <div className="container">
      <Hero />
      <Ingred />
      <SelectCat title={"Gender"} categories={["Male", "Female"]} />
      <div className="text-[#999]">
        <button className="w-[275px] py-3 px-5 bg-[#FFF8F4] rounded-[10px] mt-4">
          Your Current Weight
        </button>{" "}
        <br />
        <button className="w-[275px] py-3 px-5 bg-[#FFF8F4] rounded-[10px] mt-4">
          Weight to reduce
        </button>
      </div>
      <SelectCat
        title={"Pick a Dish Category"}
        categories={["Breakfast", "Lunch", "Dinner"]}
      />
      <SelectCat
        title={"Macronutrient Balance"}
        categories={["High Protein", "Low Carb", "Balanced"]}
      />
      <SelectCat
        title={"Nutrient Density"}
        categories={[
          "High in Vitamuns",
          "High in Minerals",
          "High in other beneficial Nutrients",
        ]}
      />
      <SelectCat
        title={"Calorie Control"}
        categories={["Low", "Medium", "High"]}
      />
      <SelectCat
        title={"Sugar preference"}
        categories={["No added sugar", "Low sugar", "Sugar free"]}
      />
      <button className="button-active w-full mt-20 mb-16 shadow-[0px_10px_14px_0px_#F8C272B2]">
        Let’s Cook
      </button>
    </div>
  );
};

export default HealthFitness;
