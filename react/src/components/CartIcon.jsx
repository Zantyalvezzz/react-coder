import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/cartCntxt';
import carritoImg from '../assets/carrito.png';


function CartIcon() {

    const { cart } = useContext(CartContext)

    const totalUnidades = cart.reduce((acumulador, item) => acumulador + item.cantidad, 0);

    return (
        <Link to="/cart">
            <span className='cart-icon-container'>
                <img src={carritoImg} alt="Carrito" />
                {totalUnidades > 0 && (<span className="badge">{totalUnidades}</span>)}
            </span>
        </Link>
    );
}

export default CartIcon;