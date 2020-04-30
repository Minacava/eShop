import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const addToCart = (element) => {
    setCart([...cart, element]);
  };

  const addToFavorite = (item) => {
    setFavorite([...favorite, item]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        favorite,
        addToFavorite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
