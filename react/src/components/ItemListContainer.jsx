import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import productos from "../data/productos"

function ItemListContainer() {

    const { items, setItems } = useState([]);
    useEffect(() => {
        const fetchProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }
                , 2000);
        });
        fetchProductos.then((res) => {
            setItems(res)
        })
            , []
    })

    return (
        <div>
            <ItemList prods={productos} />
        </div>
    )
}

export default ItemListContainer