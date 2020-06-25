import React from "react";
import {TecnologiasBase, TecnologiasLenguaje} from "../css/estilo";

import Lenguaje from "./lenguaje";



function Tecnologia(){
    return (
        <TecnologiasBase>
            <div>
            <h1>Tecnologías</h1>
            <p>
                Desarrollamos desde un Formulario para captar información de potenciales clientes hasta una Tienda Virtual, así como también tiene la posibilidad de vender productos o servicios con tarjetas de crédito
            </p>
            <p>
                Desarrollamos su página web con los lenguajes de programación en la actualidad, permitiendo así que podamos hacer que su emprendimiento crezca mucho mas.
            </p>
            <p>Podemos construir su Base de Datos porque sabemos que las estadísticas son muy importantes y por eso proporcionamos esta información para que la puedas administrar en su web </p>
            <p>
            
            </p>

            </div>

        <TecnologiasLenguaje>
            <div className = "externo">
                <h3>frontend</h3>
                <Lenguaje imagenLenguaje = "https://i.imgur.com/a7XLwNU.png" nombreLenguaje = "HTML5"/>
                <Lenguaje imagenLenguaje = "https://i.imgur.com/tn9Hw2N.png" nombreLenguaje = "CSS3"/>
                <Lenguaje imagenLenguaje = "https://i.imgur.com/247GtbV.png" nombreLenguaje = "JavaScript"/>
                <Lenguaje imagenLenguaje = "https://i.imgur.com/uWnPY60.png" nombreLenguaje = "React JS"/>
                <Lenguaje imagenLenguaje = "https://i.imgur.com/thb3JKF.png" nombreLenguaje = "Styled Components"/>

            </div>

            <div className = "externo">
                <h3>backend</h3>
                <Lenguaje imagenLenguaje = "https://i.imgur.com/Fsqi8DK.png" nombreLenguaje = "Node JS"/>
                <Lenguaje imagenLenguaje = "https://i.imgur.com/AkIJEtl.png" nombreLenguaje = "Java"/>
                <Lenguaje imagenLenguaje = "https://i.imgur.com/xzokcI9.png" nombreLenguaje = "Spring Boot"/>
                <Lenguaje imagenLenguaje = "https://i.imgur.com/4ayYd41.png" nombreLenguaje = "MongoDB"/>
                <Lenguaje imagenLenguaje = "https://i.imgur.com/CrcAmDL.png" nombreLenguaje = "Postman"/>

            </div>
        </TecnologiasLenguaje>
        </TecnologiasBase>
    )
}

export default Tecnologia;