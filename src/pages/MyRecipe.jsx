"use client";
import { CartProvider } from "@/app/CartContext";
import Cart from "@/components/myRecipe/Cart";
import MyRecipeCom from "@/components/myRecipe/MyRecipeCom";
import Hero from "@/components/recipeMaker/Hero";
import React from "react";

const Favourite = () => {
  return (
    <div className="container">
      <CartProvider>
        <Hero />
        <MyRecipeCom />
        <Cart />
      </CartProvider>
    </div>
  );
};

export default Favourite;
