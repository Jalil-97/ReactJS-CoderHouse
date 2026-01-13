import { useContext, useState } from "react";
import { miContexto } from "../../providers/CartProvider";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Checkout = () => {
    const { cart, clearCart } = useContext(miContexto);
    const [orderId, setOrderId] = useState(null);

    const [buyer, setBuyer] = useState({
        nombre: "",
        email: "",
        telefono: ""
    });

    const total = cart.reduce(
        (acc, prod) => acc + prod.precio * prod.cantidad,
        0
    );

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const handleConfirm = async (e) => {
        e.preventDefault();

        const orden = {
            buyer,
            items: cart.map(prod => ({
                id: prod.id,
                nombre: prod.nombre,
                precio: prod.precio,
                cantidad: prod.cantidad
            })),
            total,
            date: new Date()
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), orden);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error("Error creating order", error);
        }
    };

    /* ---------- ORDER SUCCESS ---------- */
    if (orderId) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Thank you for your purchase 🙌
                </h2>
                <p className="text-gray-600 mb-2">
                    Your order number is:
                </p>
                <strong className="text-xl bg-gray-100 px-6 py-3 rounded-lg">
                    {orderId}
                </strong>
            </div>
        );
    }

    /* ---------- EMPTY CART ---------- */
    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <h2 className="text-2xl font-semibold text-gray-700">
                    There are no products to buy
                </h2>
            </div>
        );
    }

    /* ---------- CHECKOUT FORM ---------- */
    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
                Checkout
            </h1>

            <form
                onSubmit={handleConfirm}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 space-y-6"
            >
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Full name
                    </label>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="John Doe"
                        value={buyer.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                        value={buyer.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="telefono"
                        placeholder="+1 555 123456"
                        value={buyer.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t">
                    <h3 className="text-xl font-bold text-gray-800">
                        Total: ${total}
                    </h3>

                    <button
                        type="submit"
                        className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
                    >
                        Confirm purchase
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
