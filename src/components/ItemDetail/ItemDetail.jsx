import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { miContexto } from "../../providers/CartProvider";

const ItemDetail = ({ id, nombre, precio, img, detalle, stock }) => {
  const [addedQty, setAddedQty] = useState(0);
  const { addToCart } = useContext(miContexto);

  const handleOnAdd = (qty) => {
    const productToAdd = {
      id,
      nombre,
      precio,
      img,
      cantidad: qty
    };

    addToCart(productToAdd);
    setAddedQty(qty);
  };

  return (
    <div className="text-center max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-[0_12px_40px_rgba(2,6,23,0.08)] overflow-hidden p-6">

      <img
        src={img}
        alt={nombre}
        className="w-full h-96 object-contain mb-6"
      />

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {nombre}
      </h2>

      <p className="text-xl font-bold text-gray-700 mb-4">
        ${precio}
      </p>

      <p className="text-gray-600 mb-6">
        {detalle}
      </p>

      {stock === 0 ? (
        <p className="text-red-600 font-semibold">
          Out of stock
        </p>
      ) : addedQty === 0 ? (
        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p className="text-green-600 font-semibold">
            ✔ Product added to cart
          </p>

          <Link
            to="/cart"
            className="px-6 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg transition"
          >
            Go to cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
