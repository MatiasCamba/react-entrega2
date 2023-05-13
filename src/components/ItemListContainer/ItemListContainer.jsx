import { useState, useEffect } from "react"

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query, Query } from "firebase/firestore";
import { db } from "../../services/firebase/config";



const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { idCategoria } = useParams();
    


    useEffect(() => {
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");
        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(nuevosProductos)
            })
            .catch(error => console.error(error))
    }, [idCategoria]);
    return (
        <div>
            <h2>Productos Disponibles</h2>
            <ItemList products={products} />

        </div>
    )
}

export default ItemListContainer