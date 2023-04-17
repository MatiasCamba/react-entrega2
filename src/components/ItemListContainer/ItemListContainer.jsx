import { useState, useEffect } from "react"
import { getProducts, getProductsPorCategoria } from '../../asyncmock'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {idCategoria} = useParams();

    useEffect (()=>{
        const funcionProducto = idCategoria ? getProductsPorCategoria : getProducts;

         funcionProducto(idCategoria)
            .then (Response=>setProducts(Response))
            .catch(error => console.error(error));  
    }, [idCategoria])

    return (
        <div>
            <h2>Productos Disponibles</h2>
            <ItemList products={products}/>

        </div>
    )
}

export default ItemListContainer