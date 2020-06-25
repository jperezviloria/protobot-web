import React from "react";
import {LenguajeBase} from "../css/estilo";


function Lenguaje(props){
    return (
            <LenguajeBase>
                <img src={props.imagenLenguaje} alt=""/>
                <p>{props.nombreLenguaje}</p>
            </LenguajeBase>
    )
}

export default Lenguaje;
