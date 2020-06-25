import React from "react";
import {ResponsiveBase ,ResponsiveImagenes} from "../css/estilo";




function Responsive(){
    return (
        <ResponsiveBase>
            <ResponsiveImagenes>
                <img src="https://i.imgur.com/zEyAIqX.png" alt=""/>
                <img src="https://i.imgur.com/L0HROBB.png" alt=""/>
                <img src="https://i.imgur.com/OUUVE0t.png" alt=""/>
            </ResponsiveImagenes>
            <div className = "letras">
                <p>La mayoría de las visitas Web se realizan en dispositivos móviles, por eso creamos un diseño único para cada tamaño de pantalla</p>
            </div>
            
        </ResponsiveBase>
    )
}


export default Responsive;