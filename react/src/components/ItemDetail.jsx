import { useParams } from "react-router-dom"
import productos from "../data/productos"

function ItemDetail() {

    const { id } = useParams();

    const producto = productos.find(prod => prod.id === parseInt(id));

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div>
            <h2>{producto.nombre}</h2>
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.descripcion}</h3>
            <h4>Precio: ${producto.precio}</h4>
        </div>
    )
}

export default ItemDetail