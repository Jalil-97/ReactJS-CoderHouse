import { useState, useEffect } from "react"
import { getProductos } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(false)


  const titulo = params.categoria ? params.categoria : "Shop Our Collection";


  useEffect(() => {
    setLoading(true)

    getProductos(params.categoria)

      .then((respuesta) => setProductos(respuesta))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) });

  }, [params.categoria]);

  return (
    <div className="bg-gray-100 pt-5 px-4">

      <h2 className="text-gray-700 font-medium text-5xl md:text-6xl font-extrabold text-center mb-1 tracking-widest uppercase">{loading ? "Loading..." : titulo}</h2>

      <div className="w-full flex justify-center items-center py-20">

        {loading ? (<p className="h-12 w-12 border-4 border-gray-300 border-t-gray-700 rounded-full animate-spin">Loading products...</p>) : (<ItemList products={productos} />)}

      </div>

    </div>
  );

};

export default ItemListContainer