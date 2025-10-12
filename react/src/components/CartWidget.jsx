import { useContext, useState } from "react"
import { CartContext } from "../context/cartCntxt"
import Button from "./Button"
import CheckForm from "./CheckForm";


function CartWidget() {

    const [mostrarForm, setMostrarForm] = useState(false);

    const { cart, remove, clear } = useContext(CartContext);


    return (
        <>
            <p className="subtit">Tu carrito:</p>
            <div className="carritocontainer">
                {cart.length === 0 ? (
                    <h2>El carrito está vacío</h2>
                ) : (
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
                    ))
                )}

                {cart.length > 0 && (
                    <>
                        <Button onClick={clear}>Vaciar carrito</Button>
                        <Button onClick={() => setMostrarForm(true)}>Finalizar Compra</Button>
                    </>
                )}
            </div>

            {mostrarForm && (
                <div className="form-container">
                    <div className="form-content">
                        <CheckForm />
                        <Button onClick={() => setMostrarForm(false)}>Cerrar</Button>
                    </div>
                </div>
            )}
        </>
    );
}

export default CartWidget;
