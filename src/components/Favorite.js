import React, { useContext, useEffect, useState } from "react";
import { Link } from "gatsby";
import { Button, StyledCart } from "../styles/components";
import priceFormat from "../utils/priceFormat";
import { CartContext } from "../context";

export default function Favorite() {
  const { favorite, cart, addToCart } = useContext(CartContext);

  console.log("cart in favorite", cart);
  console.log("favorite in favorite", favorite);

  useEffect(() => {}, []);

  const handleSubmit = () => {
    Object.entries(favorite).map(([key, favorite], i) => addToCart(favorite));
  };

  // const removeFavoriteEntry = () => {
  //   console.log("remove");
  // };

  return (
    <StyledCart>
      <h2>Your Wishlist</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
          {favorite.map((poster) => (
            <tr key={poster.sku}>
              <td>
                <img src={poster.metadata.img} alt={poster.name} />
                {poster.name}
              </td>
              <td>{priceFormat(poster.price)}</td>
              <td>{poster.quantity}</td>
              <td>{priceFormat(poster.quantity * poster.price)}</td>
              <td onClick={handleSubmit}>Send To Cart</td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav>
        <div>
          <Link to="/">
            <Button type="outline">Back</Button>
          </Link>
        </div>
      </nav>
    </StyledCart>
  );
}
