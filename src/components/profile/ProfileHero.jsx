'use client'
import Image from "next/image";
import React from "react";
import left from "../../assets/icon/left.svg";
import { useRouter } from "next/navigation";

const ProfileHero = ({content}) => {
  const router = useRouter();

  return (
    <div className="back-left flex gap-3">
      <button onClick={() => router.back()} className="cursor-pointer">
        <Image src={left} alt="back" />
      </button>
      <p className="text-[#FC8801] font-bold text-[15px]">{content}</p>
    </div>
  );
};

export default ProfileHero;
