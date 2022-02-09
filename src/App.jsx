
import Produto from './produto';
import './App.css';
import { GlobalStorage } from './GlobalContext';
import Item from './item';
import Formulario from './formulario';



function App() {
 

  return (

    <GlobalStorage>
      <Produto/>
      <hr />
      <Item/>
      <hr />
      <Formulario/>
    </GlobalStorage>
   
  );
}

export default App;
