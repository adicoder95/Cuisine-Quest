import React from "react";

const PopupChef = ({ title }) => {
  return (
    <div className="popupchef p-6 bg-white rounded-[25px] max-w-[467px] mt-6">
      <p className="text-[17px]">{title}</p>
      <div className="flex justify-between gap-5 font-medium pt-5">
        <button className="button-active w-full">Yes</button>
        <button className="w-full !bg-[#F6E3D7] rounded-[10px] text-[#FC8801]">
          No
        </button>
      </div>
    </div>
  );
};

export default PopupChef;
