import Sidebar from "@/components/Sidebar";
import Favourite from "@/pages/Favourite";
import React from "react";

const page = () => {
  return (
    <div>
      <Sidebar page={'Favourite'} />
      <Favourite />
    </div>
  );
};

export default page;
