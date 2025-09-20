import { useParams } from "react-router-dom"
import productos from "../data/productos"
import Button from "./Button";

function ItemDetail() {

    const { id } = useParams();

    const producto = productos.find(prod => prod.id === parseInt(id));

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="itemdetail">
            <h2>{producto.nombre}</h2>
            <img src={producto.imagen} alt={producto.nombre} />
            <h4>{producto.descripcion}</h4>
            <h3>Precio: ${producto.precio}</h3>
            <Button>Agregar al carrito</Button>

        </div>
    )
}

export default ItemDetail