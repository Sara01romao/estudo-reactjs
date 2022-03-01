
import { useState } from 'react';
import './App.css'
import Header from './Header';

//MEMO- retorna um componente memorizado, evitando que o mesmo seja atualizado toda vez que o estado de
// elemento pai mudar.Use apenas para elementos que não dependam de estados diferentes 
function App() {
  const [contar, setContar] = useState(0);
  

  return (
    <div className="App">
      <Header/>
      <button onClick={() => setContar(contar+1)}>{contar}</button>
      
    </div>
      
  );
}



export default App;
