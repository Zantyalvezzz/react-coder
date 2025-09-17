function Item({ nombre, descripcion, precio, imagen }) {
    return (
        <article className="itemcontainer">
            <h2>{nombre}</h2>
            <img src={imagen} alt={nombre} />
            <p>{descripcion}</p>
            <p>$ {precio}</p>
        </article>
    )
}

export default Item