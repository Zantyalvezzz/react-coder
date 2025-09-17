import { Link } from 'react-router-dom';
import carritoImg from '../assets/carrito.png';

function CartIcon() {
    return (
        <Link to="/cart">
            <img src={carritoImg} alt="Carrito" width="50" style={{ cursor: 'pointer' }} />
        </Link>
    );
}

export default CartIcon;