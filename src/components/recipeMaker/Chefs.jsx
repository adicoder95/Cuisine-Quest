"use client";
import React, { useState } from "react";
import chipra from "../../assets/chefs/shipra.svg";
import gordon from "../../assets/chefs/gordon.svg";
import vikas from "../../assets/chefs/vikas.svg";
import alain from "../../assets/chefs/alain.svg";
import Image from "next/image";

const chefs = [
  { id: 1, name: "Shipra Khanna", img: chipra },
  { id: 2, name: "Gordon Ramsay", img: gordon },
  { id: 3, name: "Vikas Khanna", img: vikas },
  { id: 4, name: "Alain Passard", img: alain },
];

const Chefs = () => {
  const [activeChef, setActiveChef] = useState(1);

  return (
    <div className="mt-7">
      <p className="text-[#64A67E] text-[17px] font-bold">Pick your Chef</p>
      <div className="overflow-auto">
        <div className="chefs-cards flex items-center gap-5 mt-4 min-w-[830px] pb-4">
          {chefs.map((chef) => (
            <div
              key={chef.id}
              className={`card cursor-pointer ${
                activeChef === chef.id ? "active" : ""
              }`}
              onClick={() => setActiveChef(chef.id)}
            >
              <div className="img">
                <Image src={chef.img} alt={chef.name} />
              </div>
              <h4>{chef.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
