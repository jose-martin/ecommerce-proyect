import React from 'react'
import carrito from '../../img/carrito.png'
import '../CartWidget/CartWidget.css'
const CartWidget = () => {
  return (
    <div>
        <img className="img-carrito" src={carrito} alt="carrito"/>
    </div>
  )
}

export default CartWidget