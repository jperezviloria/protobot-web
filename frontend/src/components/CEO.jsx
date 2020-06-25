import React from "react";
import { GrupoContactosCEO, CEOBase } from "../css/estilo";

function CEO() {
  return (
    <CEOBase>
      <img src="https://i.imgur.com/Ah3Dyh9.png" alt="" />
      <p>Julio Pérez</p>
      <p>CEO de Protobot</p>
      <GrupoContactosCEO>
        <div>
          <a href="https://www.instagram.com/julioperez96_/" target="_blank" rel="noopener noreferrer" >
            <img src="https://i.imgur.com/6UHEUkW.png" alt="" />
          </a>
        </div>
        <div>
          <a href="https://wa.me/5491159230699?text=Vengo%20de%20parte%20de%20Protobot%20!" target="_blank" rel="noopener noreferrer" >
            <img src="https://i.imgur.com/XBXbiS1.png" alt="" />
          </a>
        </div>
        <div>
          <a href="mailto:ceo@protobot.dev" target="_blank" rel="noopener noreferrer" >
            <img src="https://i.imgur.com/XfwSM2e.png" alt="" />
          </a>
        </div>
        <div>
          <a href="http://www.linkedin.com/in/julio-perez-viloria" target="_blank" rel="noopener noreferrer" >
            <img src="https://i.imgur.com/dUHYq7K.png" alt="" />
          </a>
        </div>
      </GrupoContactosCEO>
    </CEOBase>
  );
}
export default CEO;