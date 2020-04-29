import React, { useState, useContext, useEffect } from "react"
import priceFormat from "../utils/priceFormat"
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
  SelectStars,
  SelectFavorite,
} from "../styles/components"
import { SEO, Stars } from "."
import { CartContext } from "../context"

export default function productDetail({
  price,
  id,
  product: { name, metadata },
}) {
  const formatePrice = priceFormat(price)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  const { addToCart } = useContext(CartContext)
  const { addToFavorite } = useContext(CartContext)
  const [favorite, setFavorite] = useState(false)

  const handleSubmit = () => {
    addToCart({ price, sku: id, name, metadata, quantity: qty })
  }
  const handleToFavorite = () => {
    addToFavorite({ price, sku: id, name, metadata, quantity: qty })
  }
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b> {formatePrice}</b>
        <SelectFavorite onClick={handleToFavorite} selected={favorite}>
          <span
            onClick={() =>
              favorite === true ? setFavorite(false) : setFavorite(true)
            }
          >
            ♥︎
          </span>
        </SelectFavorite>
        <Stars />
        <p>{metadata.description}</p>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Quantity:</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type="text" disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
        <Button onClick={handleSubmit}>Add to cart</Button>
      </div>
    </StyledProductDetail>
  )
}
