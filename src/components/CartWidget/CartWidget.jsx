import React from 'react'

const CartWidget = () => {

  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/833/833314.png";


    return (
        <div>

            <img className='w-8 h-8' src={imgCarrito} alt="Imagen carrito de compras" />

        </div>)
}

export default CartWidget