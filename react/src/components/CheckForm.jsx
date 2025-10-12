import { useState, useContext } from "react";
import { CartContext } from "../context/cartCntxt";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Button from "./Button";


function CheckForm() {
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);

    const { cart, clear } = useContext(CartContext);

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!nombre || !direccion || !telefono) {
            setError("Error: Debe completar todos los datos");
            return;
        }

        setError("");
        setLoading(true);

        const orden = {
            cliente: { nombre, direccion, telefono },
            items: cart.map(item => ({
                id: item.id,
                nombre: item.nombre,
                precio: item.precio,
                cantidad: item.cantidad
            })),
            fecha: new Date(),
            total: cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
        };

        try {
            const ordenRef = await addDoc(collection(db, "ordenes"), orden);

            setOrderId(ordenRef.id);
            clear();
            setNombre("");
            setDireccion("");
            setTelefono("");

        } catch (err) {
            console.error("Error creando la orden:", err);
            setError("No se pudo generar la orden, intente nuevamente.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <form className="checkform" onSubmit={handleSubmit}>
            <h2>Completa los datos para finalizar tu compra:</h2>

            {error && <p className="error">{error}</p>}

            {loading && <p className="loading">Procesando orden...</p>}

            {orderId && (
                <p className="success">
                    ¡Compra realizada con éxito! <br />
                    Tu ID de orden es: <strong>{orderId}</strong>
                </p>
            )}
            {!orderId && !loading &&(
                <>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Ingresa tu nombre"
                        />
                    </label>

                    <label>
                        Dirección:
                        <input
                            type="text"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                            placeholder="Ingresa tu dirección"
                        />
                    </label>

                    <label>
                        Teléfono:
                        <input
                            type="number"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            placeholder="Ingresa tu teléfono"
                        />
                    </label>

                    <Button type="submit">Enviar</Button>
                </>
            )}</form>
    );
}

export default CheckForm;