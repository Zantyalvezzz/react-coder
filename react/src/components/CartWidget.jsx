import { useContext } from "react"
import { CartContext } from "../context/cartCntxt"
import Button from "./Button"


function CartWidget() {
    const { cart, remove, clear } = useContext(CartContext);

    return (
        <>
            <p className="subtit">Tu carrito:</p>
            <div className="carritocontainer">
                {cart.length === 0 ? <p>El carrito esta vacío</p> :
                    cart.map((item) => (
                        <div className="itemcartcont" key={item.id}>
                            <img src={item.imagen} alt="" />
                            <div>
                                <p>{item.nombre} - ${item.precio}</p>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Subtotal: ${item.precio * item.cantidad}</p>
                            </div>
                            <Button onClick={() => remove(item.id)}>X</Button>
                        </div>
                    ))}
                {cart.length > 0 && (<Button onClick={clear}>Vaciar carrito</Button>)}
            </div>
        </>
    )
}

export default CartWidget
