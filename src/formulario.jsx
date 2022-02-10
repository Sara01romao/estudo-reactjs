import {useState} from 'react'


export default function Formulario(){
        const [nome, setNome] = useState('');
        const [textarea, setTextarea] = useState('');

        function handleSubmit(event){
            event.preventDefault();

            console.log(nome)
        }

        //como objeto
        const [form, setForm] = useState({
            email: '',
        })

        function handleChange({target}){
            const {id, value} = target;
            setForm({...form, [id]: value});
;        }


    return(

        <div>

       
            //evento do button direto no form
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>

                <input 
                    type="text"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                />

                <label htmlFor="email">Email</label>

                <input 
                    id='email'
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                />



                <button>Enviar</button>
            </form>

            <h3>Text area</h3>
            <textarea 
                id="textarea"
                value={textarea}
                onChange={({target}) => setTextarea(target.value)}
                rows="5">

            </textarea>
        </div>


    )
}