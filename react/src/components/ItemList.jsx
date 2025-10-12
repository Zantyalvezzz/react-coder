import { useContext } from "react";
import { ProductosContext } from "../context/prodsContext";
import Item from "./Item";
import MainButtons from "./MainButtons";
import "./styles.css"


function ItemList() {
    const { productos, setCategoriaSeleccionada} = useContext(ProductosContext)

    return (
        <div>
            <h2 className="subtit">Categorias:</h2>
            <div className="mainbuttons">
                <MainButtons onFilter={setCategoriaSeleccionada}/>
            </div>
            <section className="itemlist">
                {productos.map((prod) => (
                    <Item key={prod.id} id={prod.id} nombre={prod.nombre} imagen={prod.imagen} precio={prod.precio} />
                ))}
            </section>
        </div>
    )
}

export default ItemList