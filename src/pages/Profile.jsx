import Image from "next/image";
import React from "react";
import ProfileHero from "@/components/profile/ProfileHero";
import ProfileCard from "@/components/profile/ProfileCard";
import Subscribe from "@/components/profile/Subscribe";

const Profile = () => {
  return (
    <div className="container pt-10">
      <ProfileHero content={'My account'} />
      <ProfileCard />
      <Subscribe />
    </div>
  );
};

export default Profile;
