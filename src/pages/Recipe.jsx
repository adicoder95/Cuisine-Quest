"use client";
import Image from "next/image";
import React from "react";
import left from "../assets/icon/left.svg";
import share from "../assets/icon/share.svg";
import favourite from "../assets/icon/love.svg";
import food from "../assets/food.svg";
import { useRouter } from "next/navigation";
import Ingred from "@/components/Ingred";

const Recipe = () => {
  const router = useRouter();

  return (
    <div className="max-w-[785px] m-auto pt-10 pb-16 px-5">
      <div className="recipe-hero">
        <div className="recipe-card">
          <div className="card-top p-5 flex justify-between items-center">
            <button
              onClick={() => router.back()}
              className="back-btn cursor-pointer"
            >
              <Image src={left} alt="back" />
            </button>
            <div className="space-x-4">
              <button>
                <Image src={share} width={16} height={16} alt="love" />
              </button>
              <button>
                <Image src={favourite} width={16} height={16} alt="love" />
              </button>
            </div>
          </div>
          <div className="card-bottom">
            <Image src={food} alt="recipe" className="w-full" />
          </div>
        </div>
      </div>
      <div className="md:flex mt-10 gap-5">
        <div className="ingredients-used w-full">
          <h3 className="text-[#64A67E] text-[15px] font-bold">
            Ingredients Used
          </h3>
          <div className="list py-5 px-10 bg-[#FFF8F4] text-[#999] rounded-[10px] mt-5">
            <ul className="list-disc space-y-1.5 text-[14px]">
              <li>1 cup Emperor's green rice, </li>
              <li>4 white cloves,</li>
              <li>2 tablespoons vegetable broth or low-fat cooking spray</li>
              <li>4 bay leaves</li>
              <li>6 green cardamom pods</li>
              <li>2 three-inch-long cinnamon sticks</li>
              <li>2 strong black tea bags</li>
              <li>1 two-inch-long fresh ginger, peeled and minced</li>
              <li>1 1/2 cups water</li>
              <li>1/2 cup finely chopped fresh cilantro</li>
              <li>1 teaspoon salt</li>
              <li>1 teaspoon cumin seeds</li>
              <li>1 teaspoon coriander powder</li>
              <li>1/2 teaspoon garam masala</li>
              <li>1/2 cup sliced almonds, toasted</li>
              <li>Lime wedges and cilantro sprigs, for garnish</li>
            </ul>
          </div>
        </div>
        {/* <div className="ingredients-used w-full">
          <h3 className="text-[#64A67E] text-[15px] font-bold">
            Making Process
          </h3>
          <div className=" bg-[#FFF8F4] text-[#999] rounded-[10px] mt-5">
            <textarea
              name=""
              id=""
              placeholder="Enter base Ingredients here. Example ( 1 Onion, 1 Garlic, 3 Tomatoes ... 2 Carrots )"
            ></textarea>
          </div>
        </div> */}
        <Ingred />
      </div>
    </div>
  );
};

export default Recipe;
