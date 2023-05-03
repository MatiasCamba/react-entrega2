import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import './CartWidget.css'

const CartWidget = () => {
  const {carrito} = useContext(CarritoContext);
  const totalCantidad = carrito.reduce ((total,producto) => total + producto.cantidad, 0);

    const imagenCarrito = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/1200px-Shopping_cart_icon.svg.png"
  return (
    <Link to={'/cart'}>
        <img className = "imagenCarro" src= {imagenCarrito} alt="foto de icono de carrito de compras" />

      {
        totalCantidad
      }
    </Link>
  )
}

export default CartWidget


    