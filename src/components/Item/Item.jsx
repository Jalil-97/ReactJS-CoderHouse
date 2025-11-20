import { Link, NavLink } from "react-router-dom"


const Item = ({ id, descripcion, nombre, precio, img }) => {
    return (

        <>
            <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">

                <img
                    src={img}
                    alt={nombre}
                    className="w-full h-48 object-cover"
                />

                <div className="p-4 flex flex-col items-center text-center">

                    <h3 className="text-xl font-semibold text-gray-800">{nombre}</h3>
                    <p>{descripcion}</p>
                    <p className="text-lg text-gray-600 mt-1">${precio}</p>

                    <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">  
                        <NavLink to={`/detalle/${id}`} element="">
                        More details 
                        </NavLink>
                        </button>
                </div>
            </div>
        </>

    )
}

export default Item