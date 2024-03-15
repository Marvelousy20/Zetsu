"use client";

import React, { createContext, useContext, useState } from "react";
import { OfferProps } from "../../types";

interface useCartContextProps {
  cartItems: OfferProps[];
  addToCart: (item: OfferProps) => void;
  removeFromCart: (item: OfferProps) => void;
}

const CartContext = createContext<useCartContextProps | undefined>(undefined);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<OfferProps[]>([]);

  const addToCart = (item: OfferProps) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemToRemove: OfferProps) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemToRemove.id)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export { CartProvider, useCart };
