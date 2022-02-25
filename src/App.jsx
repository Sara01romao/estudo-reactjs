import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Produtos from "./Components/Produtos";
import './App.css'
import Contato from "./Components/Contato";
import Item from "./Components/Item";


function App() {

  

  return (
    <div className="App">
     <BrowserRouter>
      <Header/>

      <div className="content">
          <Routes>
            <Route path="/" element={<Produtos/>}/>
            <Route path="contato" element={<Contato/>}/>
            <Route path="produto/:id" element={<Item/>}/>
          </Routes>
      </div>
      
     
     </BrowserRouter>
   
    </div>
      
  );
}

export default App;
