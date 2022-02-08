
import Produto from './produto';
import './App.css';
import { GlobalStorage } from './GlobalContext';



function App() {
 

  return (

    <GlobalStorage>
      <Produto/>
    </GlobalStorage>
   
  );
}

export default App;
