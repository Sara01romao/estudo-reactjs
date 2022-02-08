
import Produto from './produto';
import './App.css';
import { GlobalStorage } from './GlobalContext';
import Item from './item';



function App() {
 

  return (

    <GlobalStorage>
      <Produto/>
      <hr />
      <Item/>
    </GlobalStorage>
   
  );
}

export default App;
