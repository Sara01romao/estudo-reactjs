
import { useContext, useEffect, useState } from 'react';
import './App.css';
import Produto from './produto';
import UserContext from './UserContext'

import {GlobalContext, GlobalStorage} from './GlobalContext'

function App() {
  //useSate
  const [frutas, setFrutas] = useState(['Uva', 'coco']);


   function add(fruta){
    //adicionar novo item mantendo o que já tinha 
     setFrutas([...frutas, fruta]);
   }

   /******************************************* */
   const [contar, setContar] = useState(0)

   //executa inicialmente ou em outro momento que vc querer
   useEffect(() =>{
     console.log('Executou')
   }, []);

   //exmplo de api

   const [dados, setDados] = useState(null);


   useEffect (() =>{
        fetch('https://ranekapi.origamid.dev/json/api/produto/tablet')
          .then((response) => response.json())
          .then((json) => setDados(json));
   }, [])


   //usecontext

   const global = useContext(GlobalContext);
   

  return (
    <div className="App">

       <div style={{border:'1px solid #000'}}> 
          <h2>Use State</h2>
          <div>
            {frutas.map((f) =>{
                return(
                  <li key={f}>{f}</li>
                )
              })}

              <button onClick={()=> add('jaca')}> Adicionar</button>
          </div>
          <hr />

          <div>
              <h2>Exercício</h2>

            
            <Produto/>
          </div>

       </div>
       <hr />

       <div style={{border:'1px solid #000'}}>
         <h2>Use useEffect</h2>

         <button onClick={() => setContar(contar+1)}>{contar}</button>

         {dados && <div>
           <h1>{dados.nome}</h1>
           <p>{dados.preco}</p>
           </div>}
       </div>

       <hr />

       <UserContext.Provider>
         <div>
              <Produto/>
         </div>
       </UserContext.Provider>

      <GlobalStorage>
        <div>

        </div>
      </GlobalStorage>
       
    </div>
  );
}

export default App;
