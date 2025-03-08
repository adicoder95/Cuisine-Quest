import Sidebar from "@/components/Sidebar";
import RecipeMaker from "@/pages/RecipeMaker";
import React from "react";
import '../../styles/recipe-maker.css'

const page = () => {
  return (
    <div>
      <Sidebar page={"Recipe Maker"} />
      <RecipeMaker />
    </div>
  );
};

export default page;
