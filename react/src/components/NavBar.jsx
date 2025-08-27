import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <div className='navbar'>
            <nav>
            <ul className='nav-links'>
                <li><a href="">Enlace1</a></li>
                <li><a href="">Enlace2</a></li>
                <li><a href="">Enlace3</a></li>
            </ul>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default NavBar