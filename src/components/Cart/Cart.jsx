import { Link } from "react-router-dom"
import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
import './Cart.css'




const Cart = () => {
    const { carrito, vaciarCarrito } = useContext (CarritoContext);

    const totalCantidad = carrito.reduce ((total,producto) => total + producto.cantidad, 0);

    const total = carrito.reduce ((total,producto) => total + (producto.item.precio * producto.cantidad ) , 0 ) ;

    if(totalCantidad === 0 ) {
        return (
            <>
                <h2 className='titulo-carrito'>No hay productos agregados!</h2>

                <Link to='/'> Ir a productos</Link>
            </>
        )
    }

    return (
        <div className='contenedor-carrito'>
            {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            <h3 className='titulo-carrito'>TOTAL : ${total}</h3>
            <button className='btn-carrito' onClick={()=> vaciarCarrito()}> Vaciar carrito </button>
            <Link to='/checkout'>Finalizar compra</Link>

        </div>
    )
   
}

export default Cart