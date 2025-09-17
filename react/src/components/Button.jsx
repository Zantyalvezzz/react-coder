function Button({children,onClick}) {

const style = {
    backgroundColor: "gray",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "1rem",
    fontSize: "1rem",
    }

    return (
        <button style={style} onClick={onClick}> {children} </button>
    )
}

export default Button