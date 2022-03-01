
import './App.css'
import Button from './Button';
import PropTypes from 'prop-types'

//propType - define o tipo das propriedades que devem ser usada
function App() {

  

  return (
    <div className="App">
      
      <Button width={200}  >Clique aqui</Button>
    </div>
      
  );
}

//valor padrao 
Button.defaultProps = {
  margin:'10px',
}

//valor conferido
Button.PropTypes={
  with: PropTypes.number.isRequired,

}

export default App;
