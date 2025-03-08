import ProfileHero from "@/components/profile/ProfileHero";
import Plan from "@/components/subscribePlan/Plan";
import React from "react";
import "../styles/profile.css";
import SubsSlider from "@/components/subscribePlan/SubsSlider";

const SubscribePlan = () => {
  return (
    <>
      <div className="container pt-10">
        <ProfileHero content={"Subscription plans"} />
      </div>
      <SubsSlider />
      <div className="container">
        <Plan />
      </div>
    </>
  );
};

export default SubscribePlan;
