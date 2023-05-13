import { useEffect,useState } from "react";


import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/config";
import { getDoc , doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [products,setProducts] = useState(null);

  const {idItem} =useParams ();

  useEffect ( () => {
    const nuevoDoc = doc (db, "productos", idItem);
    getDoc(nuevoDoc) 
    .then ( res => {
      const data = res.data();
      const nuevoProducto  = {id : res.id , ...data}
      setProducts(nuevoProducto);
    })
    .catch ( error => console.error (error))

  },[idItem])


  return (
  <div>
    <ItemDetail {...products} />
  </div> 
  )
}

export default ItemDetailContainer