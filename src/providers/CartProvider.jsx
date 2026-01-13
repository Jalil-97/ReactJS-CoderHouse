import { createContext, useState } from "react"

export const miContexto = createContext()

const Provider = miContexto.Provider

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const clearCart = () => {
        setCart([]);
    };


    const addToCart = (productoNuevo) => {

        setCart(prevCart => {
            const existe = prevCart.find(
                item => item.id === productoNuevo.id
            )

            if (existe) {
                return prevCart.map(item =>
                    item.id === productoNuevo.id
                        ? { ...item, cantidad: item.cantidad + productoNuevo.cantidad }
                        : item
                )
            }

            return [...prevCart, productoNuevo]
        })
    }

    const totalCantidad = cart.reduce(
        (acc, prod) => acc + prod.cantidad,
        0
    )

    const valorDelContexto = {
        cart,
        addToCart,
        totalCantidad
    }



    return (

        <Provider value={{valorDelContexto, cart, totalCantidad, clearCart, addToCart}}>

            {children}

        </Provider>

    )
}

export default CartProvider