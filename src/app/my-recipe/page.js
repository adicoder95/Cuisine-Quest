import Sidebar from "@/components/Sidebar";
import MyRecipe from "@/pages/MyRecipe";
import React from "react";

const page = () => {
  return (
    <div>
      <Sidebar page={"My Recipes"} />
      <MyRecipe />
    </div>
  );
};

export default page;
