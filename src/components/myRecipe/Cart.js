"use client"; // Required in Next.js App Router

import { useCart } from "@/app/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Cart = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useCart();
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <div className="fixed top-10 right-10">
        {cart.length > 0 && (
          <span className="w-[10px] h-[10px] rounded-full bg-red-500 absolute top-0 right-0"></span>
        )}
        <button onClick={() => setOpenCart(!openCart)} className="text-[20px]">
          {openCart ? "❌" : "🛒"}
        </button>
      </div>
      {openCart && (
        <div className="cart p-4 border rounded-lg shadow-md mt-6 fixed top-16 right-10 bg-white">
          <h2 className="text-lg font-bold mb-2">🛒 Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b py-4"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                    {/* <span className="font-bold">{item.name}</span> */}
                  </div>
                  <div className="flex items-center gap-2 ml-3">
                    {/* Decrease Quantity Button */}
                    <button
                      className="bg-gray-300 text-black px-2 py-1 rounded-[15px]"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ➖
                    </button>

                    {/* Show Quantity */}
                    <span>{item.quantity}</span>

                    {/* Increase Quantity Button (Disabled at 5) */}
                    <button
                      className={`px-2 py-1 rounded-[15px] ${
                        item.quantity < 5
                          ? "bg-blue-500 text-white"
                          : "bg-gray-400 text-gray-200"
                      }`}
                      onClick={() => item.quantity < 5 && addToCart(item)}
                      disabled={item.quantity >= 5}
                    >
                      ➕
                    </button>

                    {/* Remove from Cart Button */}
                    <button
                      className="rounded-[15px] bg-gray-400 px-2 py-1"
                      onClick={() => deleteFromCart(item.id)}
                    >
                      ❌
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <button className="button-active mt-3">
            <Link href={'/signup'}>Checkout</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
