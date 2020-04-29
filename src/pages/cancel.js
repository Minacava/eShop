import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

const Cancel = () => {
  return (
    <>
      <SEO title="Compra Cancelada" />
      <Purchase>
        <h2>
          Sorry, we couldn’t complete your purchase. Please try again later.
        </h2>
        <Link to="/cart">
          <Button>Back to Cart</Button>
        </Link>
      </Purchase>
    </>
  )
}

export default Cancel
