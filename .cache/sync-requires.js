const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-product-js": hot(preferDefault(require("/Users/minamac/Desktop/Proyectos/eShop/src/templates/Product.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/minamac/Desktop/Proyectos/eShop/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/minamac/Desktop/Proyectos/eShop/src/pages/404.js"))),
  "component---src-pages-cancel-js": hot(preferDefault(require("/Users/minamac/Desktop/Proyectos/eShop/src/pages/cancel.js"))),
  "component---src-pages-cart-js": hot(preferDefault(require("/Users/minamac/Desktop/Proyectos/eShop/src/pages/cart.js"))),
  "component---src-pages-favorite-js": hot(preferDefault(require("/Users/minamac/Desktop/Proyectos/eShop/src/pages/favorite.js"))),
  "component---src-pages-gracias-js": hot(preferDefault(require("/Users/minamac/Desktop/Proyectos/eShop/src/pages/gracias.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/minamac/Desktop/Proyectos/eShop/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/minamac/Desktop/Proyectos/eShop/src/pages/page-2.js")))
}

