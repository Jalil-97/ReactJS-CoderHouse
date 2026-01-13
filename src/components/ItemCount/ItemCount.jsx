import { useState } from "react"


const ItemCount = ({ stock, initial, onAdd }) => {


    const [count, setCount] = useState(initial);

    const sumar = () => {
        if (count < stock) setCount(count + 1);
    }

    const restar = () => {
        if (count > 1) setCount(count - 1);
    }

    const handleAdd = () => {
        onAdd(count)
    }

    if (stock === 0) {
        return <p>Sin stock disponible</p>
    }

    return (
        <div className="flex items-center gap-4 w-full justify-center mt-6">

            <button onClick={restar} disabled={count === 1} className="px-4 py-2 border rounded-lg text-lg font-medium disabled:opacity-40 disabled:cursor-not- hover:bg-gray-100 transition">-</button>

            <span className="text-xl font-semibold min-w-[40px] text-center">{count}</span>

            <button onClick={sumar} disabled={count === stock} className="px-4 py-2 border rounded-lg text-lg font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition">+</button>

            <button onClick={handleAdd} disabled={stock === 0} className="ml-4 px-6 py-3 bg-black text-white rounded-lg font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-800 transition">Add to cart</button>

        </div>
    )

}

export default ItemCount