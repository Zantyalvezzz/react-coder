import { useParams } from "react-router-dom"
import { useContext, useState } from "react";
import { CartContext } from "../context/cartCntxt";
import { ProductosContext } from "../context/prodsContext";
import Button from "./Button";

function ItemDetail() {

    const [cantidad, setCantidad] = useState("1");

    const { add } = useContext(CartContext);
    const { productos } = useContext(ProductosContext);
    const { id } = useParams();

    const producto = productos.find(prod => prod.id === id);
    if (!productos.length) { return <div>Cargando...</div>; }
    
    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    const handleChange = (e) => { setCantidad(e.target.value); };

    const handleAdd = () => {
        const cantidadNum = Math.max(parseInt(cantidad) || 1, 1);
        add(producto, cantidadNum);
        setCantidad(cantidadNum.toString());
    };


    return (
        <div className="itemdetail">
            <h2>{producto.nombre}</h2>
            <img src={producto.imagen} alt={producto.nombre} />
            <h4>{producto.descripcion}</h4>
            <h3>Precio: ${producto.precio}</h3>
            <input
                type="number"
                value={cantidad}
                min="1"
                onChange={handleChange}
            />
            <Button onClick={handleAdd}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemDetail