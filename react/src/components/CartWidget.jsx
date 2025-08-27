import React from 'react'
import carritoImg from "../assets/carrito.png"

function CartWidget() {
    return (
        <div>
            <img src={carritoImg} alt="carrito" width="60" />
        </div>
    )
}

export default CartWidget