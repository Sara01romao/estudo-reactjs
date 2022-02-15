

import './App.css';
import Input from './Form/input';
import {useState} from 'react';





function App() {
 //Input
  const [cep, setCep] = useState('');
  const [error, setError] = useState(null)

  function validateCep(value){
    if(value.length === 0){
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)){
      setError('Preencha um CEP válido');
      return false
    }else{
      setError(null)
      return true
    }
  }
  
  //vericar digitos com regex numeros do cep. Quando tiro o foco
  function handlerBlur({target}){
    validateCep(target.value)
   
  }

  //valida quando caso tenha um erro com qualquer mudança que tiver
  function handleChange({target}){
    if(error) validateCep(target.value);
    setCep(target.value)
  }

  //valida quando usa btn enviar
  function handleSubmit(event){
    event.preventDefault();
    if(validateCep(cep)){
      console.log('Enviou');
    }else{
      console.log('Não enviar')
    }
  }
  

  return (

      <div>
        <h3>Componentes Input</h3>
        <form onSubmit={handleSubmit}>
          <Input
           type="text"
           id="cep" 
           label='CEP' 
           value={cep} 
           onBlur={handlerBlur}
           onChange={handleChange}
           placeholder="00000-000"
          />
          {error && <p>{error}</p>}
        
          <button>Enviar</button>
        </form>
      </div>
  );
}

export default App;
