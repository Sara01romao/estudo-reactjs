
import { useReducer, useState } from 'react';
import './App.css'

//função redutora e estadado inicial
//dispatch- função que vai mandar as ações para o reducer



 function reducer(state, action){

  switch(action){
    case 'aumentar':
      return state +1;
    case 'diminuir':
      return state -1;
    default:
      throw new Error("Erro action não existe")
  }

  /*if(action === 'aumentar'){
    return state + 1;
  }
  if(action === 'diminuir'){
    return state - 1 
  } 

  return new Error("Erro action não existe");*/
}

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

 

  return (
    <div className="App">
    
      <button onClick={() => dispatch('aumentar')}>+</button>
      {state}
      <button onClick={() => dispatch('diminuir')}>-</button>
      
    </div>
      
  );
}



export default App;
