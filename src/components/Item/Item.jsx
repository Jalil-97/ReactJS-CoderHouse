import { NavLink } from "react-router-dom"


const Item = ({ id, descripcion, nombre, precio, img }) => {

    return (

        <div className="max-w-xs bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

            <div className="overflow-hidden">
                <img src={img} alt={nombre} className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105" />
            </div>

            <div className="p-5 flex flex-col items-center text-center">

                <h3 className="text-lg font-semibold text-neutral-800">{nombre}</h3>
                <p className="text-sm text-neutral-500 mt-1">{descripcion}</p>
                <p className="text-xl font-bold text-neutral-700 mt-3">${precio}</p>

                <NavLink to={`/detalle/${id}`} className="mt-5 w-full px-4 py-2 bg-neutral-900 hover:bg-neutral-800 active:bg-black text-white font-medium rounded-lg transition-all duration-200 shadow hover:shadow-lg">More details</NavLink>

            </div>

        </div>
    );
};



export default Item