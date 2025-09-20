import { Link, } from 'react-router-dom'
import CartIcon from './CartIcon'

function NavBar() {
    return (
        <div className='navbar'>
            <nav>
                <ul className='nav-links'>
                    <li> <Link to={"/"}>Home</Link> </li>
                    <li> <Link to={"Tienda"}>Tienda</Link> </li>
                    <li> <Link to={"SobreNosotros"}>Sobre Nosotros</Link> </li>
                </ul>
            </nav>
            <Link to={"Cart"}> <CartIcon /> </Link>
        </div>
    )
}

export default NavBar