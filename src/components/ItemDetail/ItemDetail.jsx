import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ItemDetail = ({nombre,id,precio,img,stock}) => {

    const [agregarCantidad,setAgregarCantidad] = useState (0);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        console.log("cantidad agregada", cantidad);
    }

   
    return (
        <div className = 'contenedorProducto'>
            <h3>{nombre}</h3>
            <p>Precio: $ {precio}</p>
            <p>ID:{id}</p>
            <img src={img} alt={nombre} />

            {agregarCantidad > 0 ? (<Link to="/cart">Finalizar Compra</Link>) : (<ItemCount inicial={1} stock={stock} onAdd={(manejadorCantidad)}/>)}

           
        </div>

        
    )
}

export default ItemDetail