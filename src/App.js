import React from 'react';
import './App.css';
import EscolaForm from "./componentes/EscolaForm";
import EscolaList from "./componentes/EscolaList";

function App() {

  return (
    <div className="App">
      <EscolaList/>

      <EscolaForm/>
    </div>
  );
}

export default App;
