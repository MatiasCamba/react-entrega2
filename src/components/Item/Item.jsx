import './Item.css'
import { Link } from 'react-router-dom'



const Item = ({id,nombre,precio,img}) => {
  return (
    <div className='cardProducto'>
        <img className='imagenProducto'src={img} alt={nombre} />
        <h3 className='titulo-item'>{nombre}</h3>
        <p className='parrafo-item'>Precio: ${precio}</p>
        <p className='parrafo-item'>ID:{id}</p>
        <Link to={`/item/${id}`}> Ver Detalles </Link>
    </div>
  )
}

export default Item