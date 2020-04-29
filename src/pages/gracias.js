import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default () => {
  return (
    <>
      <SEO title="Compra Exitosa" />
      <Purchase>
        <h2>Your purchase was successful</h2>
        <p>We want you to smile when you receive your Shark product.</p>
        <p>
          Expected delivery time is 3-5 business days, depending on the shipping
          destination
        </p>
        <span role="img" aria-label="emoji">
          ❤️
        </span>
        <Link to="/">
          <Button>Back Home</Button>
        </Link>
      </Purchase>
    </>
  )
}
