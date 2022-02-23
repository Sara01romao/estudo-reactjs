


import './App.css';






import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home';
import Sobre from './sobre';
import Header from './header';
import Footer from './footer';
import NaoEncontrada from './erro';
import Login from './Login';

//BrowserRouter- envolve doto app relacionado a rotas
//  Routes- envolve rotas especificas
//route - oassta o caminho


function App() {

  

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="sobre" element={<Sobre/>}/>
        <Route path='login' element={<Login/>} />
        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
      
  );
}

export default App;
