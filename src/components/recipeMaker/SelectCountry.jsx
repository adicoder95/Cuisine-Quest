import React from "react";

const SelectCountry = () => {
  return (
    <div className="mt-5">
      <p className="text-[#64A67E] text-[17px] font-bold">
        Select the country of your chef
      </p>
      <select
        name="cars"
        id="cars"
        className="w-full bg-white py-3 px-5 rounded-[10px] text-[#999] outline-none mt-3"
      >
        <option value="volvo">India</option>
        <option value="saab">Bangladesh</option>
        <option value="opel">United States</option>
        <option value="audi">UK</option>
      </select>
    </div>
  );
};

export default SelectCountry;
