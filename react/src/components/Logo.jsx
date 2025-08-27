import React from 'react'
import logoImg from "../assets/logo.png"

function Logo() {
    return (
        <div className='logo'>
            <h1>UYSHOPPI</h1>
            <img src={logoImg} alt="" />
        </div>
    )
}

export default Logo