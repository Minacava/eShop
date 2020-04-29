import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { Button, StyledCart } from "../styles/components"
import priceFormat from "../utils/priceFormat"
import { CartContext } from "../context"

export default function Cart() {
  const { favorite } = useContext(CartContext)
  const [data, setData] = useState(favorite)
  const [total, setTotal] = useState(0)

  // const getTotal = () => {
  //   setTotal(
  //     cart.reduce((acc, current) => acc + current.price * current.quantity, 0)
  //   )
  // }

  useEffect(() => {
    // getTotal()
  }, [])

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
          {data.map(poster => (
            <tr key={poster.sku}>
              <td>
                <img src={poster.metadata.img} alt={poster.name} />
                {poster.name}
              </td>
              <td>{priceFormat(poster.price)}</td>
              <td>{poster.quantity}</td>
              <td>{priceFormat(poster.quantity * poster.price)}</td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        {/* <div>
          <h3>Subtotal:</h3>
          <small>{priceFormat(total)}</small>
        </div> */}
        <div>
          <Link to="/">
            <Button type="outline">Back</Button>
          </Link>
        </div>
      </nav>
    </StyledCart>
  )
}
