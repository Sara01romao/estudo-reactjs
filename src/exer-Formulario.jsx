
import {useState} from 'react';


//campos que mudam no inputs

const formFields = [
    {
        id: 'nome',
        label: 'Nome',
        type: 'text'
    },

    {
        id: 'email',
        label: 'Email',
        type: 'email'
    },

    {
        id: 'senha',
        label: 'Senha',
        type: 'password'
    },

    {
        id: 'cep',
        label: 'CEP',
        type: 'text'
    },

    {
        id: 'rua',
        label: 'Rua',
        type: 'text'
    },

    {
        id: 'numero',
        label: 'Numero',
        type: 'text'
    },

    {
        id: 'bairro',
        label: 'Bairro',
        type: 'text'
    },

    {
        id: 'cidade',
        label: 'Cidade',
        type: 'text'
    },

    {
        id: 'estado',
        label: 'Estado',
        type: 'text'
    },





]


export default function ExerFormulario(){

    const [form1, setForm1] = useState({
        nome: '',
        email: '',
        senha:'',
        cep:'',
        rua:'',
        numero:'',

        bairro:'',
        cidade:'',
        estado:''

    })

    const [response, setResponse] = useState(null);

    function handleChange({target}){
        const {id, value} = target;
        setForm1({...form1, [id]:value})
    }

    function handleSubmit(event){
        event.preventDefault();

        fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'Post',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form1),

        }).then((response) =>{
            setResponse(response);
        });
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h1>Exer Formulario</h1>

            {formFields.map(({id, label, type}) =>{
                return(
                    <div key={id}>
                         <label htmlFor={id}>{label}</label>
                         <input
                            id={id} 
                            type={type}
                            value={form1[id]}
                            onChange={handleChange}
                         />

                    </div>
                )
            })}
           
            {response && response.ok && <p>Formulário Enviado</p>}

             <button>Enviar</button>
        </form>
    )
}