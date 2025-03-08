"use client"; // Required in Next.js App Router if using useState or useContext

import Image from "next/image";
import Link from "next/link";
import favorite from "../../assets/icon/favorite.svg";
import { useCart } from "@/app/CartContext";

const MyRecipeCart = ({ recipe }) => {
  const { addToCart } = useCart();

  return (
    <div className="recipe-card p-4 rounded-lg card">
      <Link href={`${recipe.link}/${recipe.id}`} className="block">
        <div className="card-top flex justify-between items-center pt-5 pb-10 px-5">
          <p>{recipe.cuisine}</p>
          <p className="flex items-center gap-2">
            <Image src={favorite} alt="love" />
            <span>{recipe.likes}</span>
          </p>
        </div>
        <div className="card-middle scale-[1.1]">
          <Image src={recipe.image} alt={recipe.name} />
        </div>
        <div className="card-bottom pt-10 px-5 pb-5">
          <p className="font-bold">{recipe.name}</p>
        </div>
      </Link>
      <button
        className="button-active w-full"
        onClick={() => addToCart(recipe)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default MyRecipeCart;
