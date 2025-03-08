import React from "react";

const Plan = () => {
  return (
    <div className="subscribe-plan mt-10">
      <p className="text-[#64A67E] font-bold">Pick a plan</p>
      <div className="plan flex gap-6 items-center mt-7 font-medium">
        <div className="fifty text-white">
          <span>₹ 99.00</span>
          <h3>₹ 49.00</h3>
          <p>per month</p>
          <div className="persen">
            <p>Save 50%</p>
          </div>
        </div>
        <div className="fifty-eight fifty text-[#FC8801]">
          <span>₹ 1199.00</span>
          <h3>₹ 499.00</h3>
          <p>per year</p>
          <div className="persen">
            <p>Save 50%</p>
          </div>
        </div>
      </div>
      <button className="button-active w-full mt-10 mb-16 shadow-[0px_10px_14px_0px_#F8C272B2]">
        Subscribe Now
      </button>
    </div>
  );
};

export default Plan;
