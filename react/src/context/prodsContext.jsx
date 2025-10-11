import { createContext, useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const ProductosContext = createContext();

export function ProductosProvider({ children }) {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const prodsCollection = collection(db, "productos");
        getDocs(prodsCollection)
            .then(snapshot => {
                const productos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProductos(productos);
            })
            .catch(err => console.error("Error al traer productos:", err))
    }, []);

    return (
        <ProductosContext.Provider value={{ productos }}>
            {children}
        </ProductosContext.Provider>
    );
}