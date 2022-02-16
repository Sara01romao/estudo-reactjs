

import './App.css';
import Input from './Form/input';
import useForm from './Hooks/useForm';





function App() {
 //Input
  const cep = useForm('cep');
  const email = useForm('email');

  console.log(cep)
 

  //valida quando usa btn enviar
  function handleSubmit(event){
    event.preventDefault();
    if(cep.validate() && email.validate()){
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
           {...cep}
           placeholder="00000-000"
          />

          <Input
           type="email"
           id="cep" 
           label='Email' 
           {...email}
          
          />
         
         
        
          <button>Enviar</button>
        </form>
      </div>
  );
}

export default App;
