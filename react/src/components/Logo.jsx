import logoImg from "../assets/logo.png"

function Logo() {
    return (
        <div className='logo'>
            <h1>UYSHOPPI</h1>
            <img src={logoImg} alt="Logo" />
        </div>
    )
}

export default Logo