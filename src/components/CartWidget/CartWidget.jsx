import React from 'react'
import './CartWidget.css'

const CartWidget = () => {

    const imagenCarrito = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/1200px-Shopping_cart_icon.svg.png"
  return (
    <div>
        <img className = "imagenCarro" src= {imagenCarrito} alt="foto de icono de carrito de compras" />
        <strong>1</strong>
    </div>
  )
}

export default CartWidget