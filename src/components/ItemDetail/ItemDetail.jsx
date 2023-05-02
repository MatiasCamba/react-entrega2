import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({ nombre, id, precio, img, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);


    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
        
    }


    return (
        <div className='contenedorProducto'>
            <h3>{nombre}</h3>
            <p>Precio: $ {precio}</p>
            <p>ID:{id}</p>
            <img src={img} alt={nombre} />

            {agregarCantidad > 0 ? (<Link to="/cart">Finalizar Compra</Link>) : (<ItemCount inicial={1} stock={stock} onAdd={(manejadorCantidad)} />)}


        </div>


    )
}

export default ItemDetail