import './CartItem.css'

const CartItem = ({ item, cantidad}) => {
    return (
        <div className='contenedor-item'>
            <h4 className='titulo-item'>{item.nombre}</h4>
            <p className='parrafo-item'>Cantidad : {cantidad}</p>
            <p className='parrafo-item'>Precio : $ {item.precio}</p>

        </div>
    )
}

export default CartItem