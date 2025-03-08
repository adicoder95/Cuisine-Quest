"use client";

import React, { useState } from "react";
import open from "../assets/icon/open.svg";
import close from "../assets/icon/close.svg";
import Image from "next/image";
import cheff from "../assets/sidebar/cheff.svg";
import cheffline from "../assets/sidebar/cheff-line.svg";
import recipeMaker from "../assets/sidebar/recipe-maker.svg";
import recipeMakerline from "../assets/sidebar/recipe-maker-line.svg";
import healthFitness from "../assets/sidebar/health-fitness.svg";
import healthFitnessline from "../assets/sidebar/health-fitness-line.svg";
import favourite from "../assets/sidebar/favourite.svg";
import favouriteline from "../assets/sidebar/favourite-line.svg";
import myRecipe from "../assets/sidebar/my-recipe.svg";
import myRecipeline from "../assets/sidebar/my-recipe-line.svg";

const Sidebar = ({ page }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    { icon: cheff, iconLine: cheffline, text: "Chefff", slug: "/" },
    {
      icon: recipeMaker,
      iconLine: recipeMakerline,
      text: "Recipe Maker",
      slug: "/recipe-maker",
    },
    {
      icon: healthFitness,
      iconLine: healthFitnessline,
      text: "Health & Fitness",
      slug: "/health-fitness",
    },
    {
      icon: favourite,
      iconLine: favouriteline,
      text: "Favourite",
      slug: "/favourite",
    },
    {
      icon: myRecipe,
      iconLine: myRecipeline,
      text: "My Recipes",
      slug: "/my-recipe",
    },
  ];

  return (
    <>
      <div
        className={`sidebar fixed z-10 left-0 top-5 h-[90vh] overflow-hidden bg-[#FFF8F4] transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-0" : "w-16"
        }`}
      >
        <div className="flex flex-col h-full items-center py-4">
          {/* Navigation Menu */}
          <nav className="flex-grow mt-6">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li key={index} className="flex flex-col items-center">
                  <a
                    href={item.slug}
                    className="flex flex-col items-center p-2 transition-colors duration-200"
                  >
                    <Image
                      src={item.text === page ? item.icon : item.iconLine}
                      alt="item"
                      className={
                        item.text === page
                          ? "shadow-[5px_5px_10px_0px_#FC88014D]"
                          : ""
                      }
                    />
                    {page === item.text ? (
                      <span className="text-xs text-center font-semibold mt-3 text-[#FC8801]">
                        {item.text}
                      </span>
                    ) : (
                      ""
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`sidebar fixed z-20 left-0 bottom-[10vh] h-[10vh] bg-[#FFF8F4] transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-16" : "w-16"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="w-full h-full pb-5 pl-3 rounded-full"
        >
          {isCollapsed ? (
            <Image src={open} alt="open" />
          ) : (
            <Image src={close} alt="close" />
          )}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
