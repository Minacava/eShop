import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

const Cancel = () => {
  return (
    <>
      <SEO title="Compra Cancelada" />
      <Purchase>
        <h2>Compra Cancelada </h2>
        <Link to="/">
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </>
  )
}

export default Cancel
