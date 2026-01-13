import { Link } from 'react-router-dom';
import { miContexto } from '../../providers/CartProvider';
import { useContext } from 'react';

const CartWidget = () => {
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/833/833314.png";
  const { totalCantidad } = useContext(miContexto);

  return (
    <Link to="/cart" className="relative inline-block">
      <img
        className="w-8 h-8 hover:scale-110 transition"
        src={imgCarrito}
        alt="Shopping cart icon"
      />

      {totalCantidad > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
          {totalCantidad}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
