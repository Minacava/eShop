import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const addToCard = element => {
    setCart([...cart, element])
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCard,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
