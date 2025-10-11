import { createContext, useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ProductosContext = createContext();

export function ProductosProvider({ children }) {

    const [productos, setProductos] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

    useEffect(() => {
        const prodsCollection = collection(db, "productos");

        const q = categoriaSeleccionada ? query(prodsCollection, where("categoria", "==", categoriaSeleccionada))
            : prodsCollection;


        getDocs(q)
            .then(snapshot => {
                const productos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProductos(productos);
            })
            .catch(err => console.error("Error al traer productos:", err))
    }, [categoriaSeleccionada]);

    return (
        <ProductosContext.Provider value={{ productos , categoriaSeleccionada , setCategoriaSeleccionada }}>
            {children}
        </ProductosContext.Provider>
    );
}





