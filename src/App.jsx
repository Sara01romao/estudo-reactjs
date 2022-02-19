


import './App.css';

import Produtos from './Components/Produto';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Animation from './Components/Animation';
import { useState } from 'react';

import Slide from './Components/Slide';

//importa img

import logo  from './img/logo192.png'






function App() {
  const [ativar, setAtivar] = useState(false);

  const slides =[
    {
      id:"slide1",
      text: 'Slide 1'
    },
    {
      id:"slide2",
      text: 'Slide 2'
    },
    {
      id:"slide3",
      text: 'Slide 3'
    }
  ]

  return (
      <div>
        <Produtos/>


        <div>
          <button onClick={()=> setAtivar(!ativar)}>Ativar</button>
          {ativar && <Animation/> }
        </div>

        <br />
        <br />

        <Slide slides={slides}/>

        <img src={logo} alt="" />
        
      </div>
     
      
      
  );
}

export default App;
