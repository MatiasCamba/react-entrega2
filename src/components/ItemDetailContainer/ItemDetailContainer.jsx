import { useEffect,useState } from "react";
import { getProductoPorID} from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [products,setProducts] = useState(null);

  const {idItem} =useParams ();


  useEffect(()=>{
    getProductoPorID(idItem)
    .then(respuesta => setProducts(respuesta))
  },[idItem])

  return (
  <div>
    <ItemDetail {...products} />
  </div> 
  )
}

export default ItemDetailContainer