import { useState } from "react";
import Item from "./Item";
import MainButtons from "./MainButtons";
import "./styles.css"

const categorias = {
    hombres: "Hombres",
    mujeres: "Mujeres",
    accesorios: "Accesorios",
};

function ItemList({ prods }) {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

    const filteredProds = categoriaSeleccionada ?
        prods.filter(prod => prod.categoria === categoriaSeleccionada) : prods;

    return (
        <div>
            <p className="subtit">Categorias:</p>
            <div className="mainbuttons">
                <MainButtons onFilter={setCategoriaSeleccionada}></MainButtons>
            </div>
            <section className="itemlist">
                {filteredProds.map((prod) => (
                    <Item key={prod.id} id={prod.id} nombre={prod.nombre} imagen={prod.imagen} precio={prod.precio} />
                ))}
            </section>
        </div>
    )
}

export default ItemList