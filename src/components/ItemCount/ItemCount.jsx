import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, inicial, onAdd }) => {
    const [cantidad, setCantidad] = useState(inicial)

    const incremento = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const decremento = () => {
        if (cantidad > stock) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>

            <div className='contador'>
                <button className='btnContador' onClick={decremento}>-</button>
                <h3 className='cantidadContador'>{cantidad}</h3>
                <button className='btnContador' onClick={incremento}>+</button>
            </div>
            <div>
                <button className='btnContador' onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount