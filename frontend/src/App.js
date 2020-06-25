import React from 'react';
import Tecnologias from "./components/tecnologias";
import Presentacion from "./components/Presentacion";
import Responsive from "./components/Responsive";
import Ideas from "./components/Ideas";
import CEO from "./components/CEO";
import {Fondo} from "./css/estilo";

function App() {
  return (
    <Fondo className="App">
      <Presentacion/>
      <Responsive/>
      <Ideas/>
      <Tecnologias/>
      <CEO/>

    </Fondo>
  );
}

export default App;
