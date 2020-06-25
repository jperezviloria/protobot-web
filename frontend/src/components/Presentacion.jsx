import React from "react";
import Contactos from "./Contactos";
import {PresentacionBase} from "../css/estilo";

function Presentacion (){
    return (
        <PresentacionBase>
            <img src="https://i.imgur.com/K01zeD9.png" alt=""/>
            <Contactos/>
            <p>DESARROLADOR WEB</p>
            <hr/>
            
        </PresentacionBase>
    )
}

export default Presentacion;