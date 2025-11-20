import React from 'react'
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/833/833314.png";


  return (
    <Link to="/cart">

      <img className='w-8 h-8' src={imgCarrito} alt="Imagen carrito de compras" />

    </Link>)
}

export default CartWidget