'use client';
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (recipe) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === recipe.id);

      if (existingItem) {
        if (existingItem.quantity < 5) {
          return prev.map((item) =>
            item.id === recipe.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return prev;
      }

      return [...prev, { ...recipe, quantity: 1 }];
    });
  };

  const removeFromCart = (recipeId) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === recipeId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prev.map((item) =>
            item.id === recipeId ? { ...item, quantity: item.quantity - 1 } : item
          );
        }
        return prev.filter((item) => item.id !== recipeId);
      }

      return prev;
    });
  };

  const deleteFromCart = (recipeId) => {
    setCart((prev) => prev.filter((item) => item.id !== recipeId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
