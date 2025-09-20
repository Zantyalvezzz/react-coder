import { Link } from "react-router-dom"

function Item({ nombre, descripcion, precio, imagen, id }) {
    return (
        <Link to={`/productos/${id}`} className="itemcontainer">
            <h2>{nombre}</h2>
            <img src={imagen} alt={nombre} />
            <p>{descripcion}</p>
            <h3>$ {precio}</h3>
        </Link>
    )
}

export default Item