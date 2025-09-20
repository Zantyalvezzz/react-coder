import Button from "./Button"

function MainButtons({ onFilter }) {
    return (
        <>
            <Button onClick={() => onFilter("Hombres")}> Hombres </Button>
            <Button onClick={() => onFilter("Mujeres")}> Mujeres </Button>
            <Button onClick={() => onFilter("Accesorios")}> Accesorios </Button>
            <Button onClick={() => onFilter("")}> Todos </Button>
        </>
    )
}

export default MainButtons