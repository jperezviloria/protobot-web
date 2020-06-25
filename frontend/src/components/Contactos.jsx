import React from "react";
import {GrupoContactos} from "../css/estilo";

function Contactos() {
  return (
    <GrupoContactos>
        <div>
      <a href="https://wa.me/5491159230699?text=Vengo%20de%20parte%20de%20Protobot%20!"target="_blank" rel="noopener noreferrer" >
        <img src="https://i.imgur.com/XBXbiS1.png" alt="" />
      </a>
    </div>
    <div>
      <a href="mailto:ceo@protobot.dev" target="_blank" rel="noopener noreferrer" >
        <img src="https://i.imgur.com/XfwSM2e.png" alt="" />
      </a>
    </div>
    <div>
      <a href="https://github.com/Protobot-dev" target="_blank" rel="noopener noreferrer" >
        <img src="https://i.imgur.com/e3lw1I9.png" alt="" />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/julio-perez-viloria/" target="_blank" rel="noopener noreferrer" >
        <img src="https://i.imgur.com/dUHYq7K.png" alt="" />
      </a>
    </div>
    </GrupoContactos>
    
  );
}

export default Contactos;
