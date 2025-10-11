import { useContext } from "react";
import { ProductosContext } from "../context/prodsContext";
import ItemList from "./ItemList";

function ItemListContainer() {

    const { productos } = useContext(ProductosContext);

    return (
        <div>
            <ItemList prods={productos} />
        </div>
    );
}

export default ItemListContainer;
