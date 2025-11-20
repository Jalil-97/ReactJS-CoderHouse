import { useState, useEffect } from "react"
import { getProductos, misProductos } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const params = useParams()

  const productosFiltrados = misProductos.filter(prod => prod.categoria === params.categoria)

  useEffect(() => { 
    getProductos()
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))

  }, []) 

   return (
    <>
      <h1 className="text-4xl font-bold text-center">Products</h1>

      <ItemList 
        products={productosFiltrados.length > 0 ? productosFiltrados : productos} 
      /> 
    </>
  )
}

export default ItemListContainer