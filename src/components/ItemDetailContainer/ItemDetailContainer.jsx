import { useEffect, useState } from "react"
import { getUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const params = useParams() 


    useEffect(()=> {
        getUnProducto(params.id) //devuelve el parametro definido en el path, por eso ponemos .id
        .then(respuesta => setProducto(respuesta))
        .catch(error => console.log(error))

    }, [])


  return (
    <>
    <ItemDetail {...producto} />
    
    </>
  )
}

export default ItemDetailContainer