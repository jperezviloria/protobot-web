import React from "react";
import { IdeasBase, IdeasImagenes } from "../css/estilo";

function Ideas() {
  return (
    <IdeasBase>
      <p className = "titulo">Ideas para su proyecto</p>
      <IdeasImagenes>
        <div>
          <img src="https://i.imgur.com/1mdvTnU.png" alt="" />
          <p>Atención médica</p>
        </div>
        <div>
          <img src="https://i.imgur.com/2s8MHz6.png" alt="" />
          <p>Reserva de citas odontológicas</p>
        </div>
        <div>
          <img src="https://i.imgur.com/O50aYps.png" alt="" />
          <p>Educación virtual</p>
        </div>
        <div>
          <img src="https://i.imgur.com/rv5f5G4.png" alt="" />
          <p>Tienda virtual</p>
        </div>
        <div>
          <img src="https://i.imgur.com/O6LerzF.png" alt="" />
          <p>Web administrativa</p>
        </div>
      </IdeasImagenes>
    </IdeasBase>
  );
}

export default Ideas;
