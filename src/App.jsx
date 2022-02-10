
import Produto from './produto';
import './App.css';
import { GlobalStorage } from './GlobalContext';
import Item from './item';
import Formulario from './formulario';
import ExerFormulario from './exer-Formulario';



function App() {
 

  return (

    <GlobalStorage>
      <Produto/>
      <hr />
      <Item/>
      <hr />
      <Formulario/>
      <hr />
      {/* <ExerFormulario/> */}
    </GlobalStorage>
   
  );
}

export default App;
