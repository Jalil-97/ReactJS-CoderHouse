import { useContext } from "react";
import { miContexto } from "../../providers/CartProvider";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart } = useContext(miContexto);

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Your cart is empty
                </h2>
                <Link
                    to="/"
                    className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                    Go shopping
                </Link>
            </div>
        );
    }

    const total = cart.reduce(
        (acc, prod) => acc + prod.precio * prod.cantidad,
        0
    );

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
                Your Cart
            </h1>

            <div className="space-y-6">
                {cart.map(producto => (
                    <div
                        key={producto.id}
                        className="flex flex-col md:flex-row items-center gap-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                    >
                        <img
                            src={producto.img}
                            alt={producto.nombre}
                            className="w-24 h-24 object-contain"
                        />

                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {producto.nombre}
                            </h3>
                            <p className="text-gray-500">
                                Price: ${producto.precio}
                            </p>
                            <p className="text-gray-500">
                                Quantity: {producto.cantidad}
                            </p>
                        </div>

                        <div className="text-lg font-semibold text-gray-700">
                            ${producto.precio * producto.cantidad}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <h3 className="text-2xl font-bold text-gray-800">
                    Total: ${total}
                </h3>

                <div className="flex gap-4">
                    <button
                        onClick={clearCart}
                        className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                    >
                        Clear cart
                    </button>

                    <Link to="/checkout">
                        <button className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition">
                            Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
