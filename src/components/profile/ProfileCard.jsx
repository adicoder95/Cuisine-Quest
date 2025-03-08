import Image from "next/image";
import React from "react";
import right from "../../assets/icon/right.svg";
import profile from "../../assets/profile.svg";

const ProfileCard = () => {
  return (
    <div className="profile-card relative">
      <div className="profile-card-top flex flex-col justify-center items-center pt-14">
        <Image src={profile} alt="profile" />
        <h3 className="text-[20px] font-bold mt-9">Naruto Usumaki</h3>
        <p className="">narutousumali@gmail.com</p>
      </div>
      <button className="profile-card-bottom absolute flex justify-between items-center bottom-0 py-3 px-4 bg-[#FFF8F4] rounded-[10px] m-5 w-[-webkit-fill-available]">
        <span>Edit Account Information</span>
        <Image src={right} alt="arrow" />
      </button>
    </div>
  );
};

export default ProfileCard;
