import camisacuadros from "../assets/camisa-cuadros-azul.jpg"
import camisaformal from "../assets/camisa-formal.jpg"
import musculosa from "../assets/musculosa-adidas.jpg"
import camperarosa from "../assets/campera-puffer-rosa.jpeg"
import calzadeportiva from "../assets/calza-negra.jpg"
import pantalondeportivo from "../assets/pantalon-deportivo-negro.jpg"
import lentessol from "../assets/lentes-sol.jpg"
import gorropescador from "../assets/gorro-pescador.webp"
import cadenaplata from "../assets/cadenita-plata.jpg"

const productos = [
    {id:1, nombre:"Camisa a cuadros", descripcion:"Camisa a cuadros con botones básica, color azul/violeta.", precio:1000, categoria: "Hombres" , imagen: camisacuadros},
    {id:2, nombre:"Camisa lisa", descripcion:"Camisa lisa color blanco, ideal para formalidades.", precio:2500, categoria: "Hombres", imagen: camisaformal},
    {id:3, nombre:"Remera musculosa", descripcion:"Remera estilo musculosa, color negro.", precio:500, categoria: "Hombres", imagen: musculosa},
    {id:4, nombre:"Pantalon deportivo ", descripcion:"Pantalon deportivo muy cómodo para el día a día, color negro", precio:1000, categoria: "Hombres", imagen: pantalondeportivo},
    {id:5, nombre:"Campera puffer", descripcion:"Campera abrigada puffer color rosa", precio:1500, categoria: "Mujeres", imagen: camperarosa},
    {id:6, nombre:"Calza deportiva", descripcion:"Calza idea para deportes, muy buena calidad, color azul", precio:2000, categoria: "Mujeres" , imagen: calzadeportiva},
    {id:7, nombre:"Lentes de sol", descripcion:"Lentes de sol de marca muy reconocida, color negro", precio:1500, categoria: "Accesorios", imagen: lentessol},
    {id:8, nombre:"Gorro de pescador", descripcion:"Gorro estilo pescador Supreme color azul", precio:3500, categoria: "Accesorios", imagen: gorropescador},
    {id:9, nombre:"Cadena de plata", descripcion:"Cadenita de plata 925", precio:800, categoria: "Accesorios", imagen: cadenaplata},
];
export default productos;