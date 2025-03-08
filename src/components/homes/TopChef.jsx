import Image from "next/image";
import React from "react";
import chipra from "../../assets/chefs/shipra.svg";
import gordon from "../../assets/chefs/gordon.svg";
import vikas from "../../assets/chefs/vikas.svg";
import alain from "../../assets/chefs/alain.svg";

const TopChef = () => {
  return (
    <div className="sliding">
      <h3 className="text-[#64A67E] text-[20px] font-bold mt-7">Top Chefs</h3>
      <div className="overflow-auto">
        <div className="chefs-cards flex items-center gap-5 mt-4 min-w-[830px] pb-4">
          <div className="card">
            <div className="img">
              <Image src={chipra} alt="chef" />
            </div>
            <h4>Shipra Khanna</h4>
          </div>
          <div className="card">
            <div className="img">
              <Image src={gordon} alt="chef" />
            </div>
            <h4>Gordon Ramsay</h4>
          </div>
          <div className="card">
            <div className="img">
              <Image src={vikas} alt="chef" />
            </div>
            <h4>Vikas Khanna</h4>
          </div>
          <div className="card">
            <div className="img">
              <Image src={alain} alt="chef" />
            </div>
            <h4>Alain Passard</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopChef;
