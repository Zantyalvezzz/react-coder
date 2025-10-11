import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const add = (item, cantidad) => {
        setCart((prevCart) => {
            const exists = prevCart.find((prod) => prod.id === item.id);
            if (exists) {
                return prevCart.map((prod) => prod.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod);
            }
            return [...prevCart, { ...item, cantidad: cantidad }];
        });
    };

    const remove = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clear = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, add, remove, clear }}>
            {children}
        </CartContext.Provider>
    );
};