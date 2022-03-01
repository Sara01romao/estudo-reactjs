
import React, { useState } from 'react';
import './App.css'
/* import Contato from './contato'; */


//Lazy  - usando para carregar o obj, returno uma funcção de callback com uma promessa do import
//usado quando algo especifico tem que ser carregado

const Contato = React.lazy(() => import('./Contato'));

function App() {

  const [ativo, setAtivo] = useState(false);

  return (
    <div className="App">
      {ativo && (
       <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato/>
       </React.Suspense>
      )}

      <button onClick={() => setAtivo(true)}>Ativar</button>
       
    </div>
      
  );
}


export default App;
