import React from 'react'
import { NavLink } from 'react-router-dom'

const ItemDetail = ({ id, nombre, precio, img, detalle }) => {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-5 flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{nombre}</h2>
            <h3 className="text-lg text-gray-600 mb-4">${precio}</h3>
            
            <img 
                src={img} 
                alt={nombre} 
                className="w-64 h-64 object-cover rounded-lg mb-4 shadow-sm"
            />
            
            <p className="text-gray-700 text-center mb-4">{detalle}</p>

            <button className="mt-2 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                <NavLink>Add to cart</NavLink>
            </button>
        </div>
    )
}


export default ItemDetail