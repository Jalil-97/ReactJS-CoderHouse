import { useEffect, useState } from "react"
import { getUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const params = useParams();

useEffect(() => {
  getUnProducto(params.id)
    .then(respuesta => {
      setProducto(respuesta);
    })
    .catch(error => console.log(error));
}, [params.id]);



  return (
    <div className="w-full flex justify-center bg-gray-100 pt-10 pb-20 px-4">
      {producto && <ItemDetail {...producto} />}
    </div>
  );
};



export default ItemDetailContainer