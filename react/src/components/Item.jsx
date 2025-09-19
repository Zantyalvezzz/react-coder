import { Link } from "react-router-dom"
import productos from "../data/productos"

function Item({ nombre, descripcion, precio, imagen, id }) {
    return (
        <Link to={`/productos/${id}`} className="itemcontainer">
            <h2>{nombre}</h2>
            <img src={imagen} alt={nombre} />
            <p>{descripcion}</p>
            <p>$ {precio}</p>
        </Link>
    )
}

export default Item