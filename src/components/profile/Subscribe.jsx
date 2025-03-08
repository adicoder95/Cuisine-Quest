'use client'
import Image from "next/image";
import React from "react";
import right from "../../assets/icon/right.svg";
import { useRouter } from "next/navigation";

const Subscribe = () => {
    const router = useRouter()
  return (
    <div className="mt-20">
      <div className="flex justify-between items-center text-[#64A67E] font-bold">
        <p>Subscription model :</p>
        <p>FREE</p>
      </div>
      <button
        onClick={() => router.push("/subscribe-plan")}
        className="button-active w-full mt-2 mb-16 shadow-[0px_10px_14px_0px_#F8C272B2]"
      >
        Subscribe Now
      </button>
      <button className="flex justify-between items-center py-2.5 px-5 bg-white w-full rounded-[10px]">
        <span>Notification</span>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-[#F6E5D9] rounded-full peer dark:bg-[#F6E5D9] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
      </button>
      <button className="flex justify-between items-center py-2.5 px-5 bg-white w-full rounded-[10px] my-3">
        <span>About us</span>
        <Image src={right} alt="right" />
      </button>
      <button className="flex justify-between items-center py-2.5 px-5 bg-white w-full rounded-[10px]">
        <span>Terms and Conditions</span>
        <Image src={right} alt="right" />
      </button>
      <button className="font-medium py-2.5 px-5 border border-[#FC8801] text-[#FC8801] rounded-[10px] w-full my-20">
        Log out
      </button>
    </div>
  );
};

export default Subscribe;
