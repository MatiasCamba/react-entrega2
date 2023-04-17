import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({nombre,id,precio,img}) => {
    return (
        <div className = 'contenedorProducto'>
            <h3>{nombre}</h3>
            <p>Precio: $ {precio}</p>
            <p>ID:{id}</p>
            <img src={img} alt={nombre} />

            <ItemCount inicial={0} stock={10} onAdd={(cantidad)=> console.log('cantidad agregada:' , cantidad)}/>
        </div>

        
    )
}

export default ItemDetail