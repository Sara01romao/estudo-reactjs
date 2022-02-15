

import './App.css';
import Input from './Form/input';
import {useState} from 'react';
import Select from './Form/select';
import Radio from './Form/radio';
import Checkbox from './Form/checkbox';




function App() {
 //Input
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  //Select
  const [cor, setCor ] = useState('')

  //Radio
  const [sexo, setSexo] = useState('');

  //Checkbox
  const [fruta, setFruta] = useState([])

  return (

      <div>
        <h3>Componentes Input</h3>
        <form action="">
          <Input id="nome" label='Nome' value={nome} setValue={setNome} required/>
          <Input id="email" label='Email' value={email} setValue={setEmail}/>

          <Select options={['Azul', 'Rosa']} value={cor} setValue={setCor}/>


          <Radio options={['azul', 'vermelho']} value={sexo} setValue={setSexo}/>
          <Checkbox options={['Uva', 'laranja', "Amora"]} value={fruta} setValue={setFruta}/>
        </form>
      </div>
  );
}

export default App;
