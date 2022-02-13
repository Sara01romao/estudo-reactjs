import {useState} from 'react'


export default function Formulario(){
        const [nome, setNome] = useState('');
        const [textarea, setTextarea] = useState('');
        const [select, setSelect] = useState('');
        const [radio, setRadio] = useState('');
        const [check, setCheck] = useState(false); //checkbox sozinho
        const [checkCores, setCheckCores] = useState([]); //checkbox multiplos

        
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



    //radio
    function handleChangeRadio({target}){
        setRadio(target.value)
    }

    //checkbox multiplo
    function handleCheck({target}){
        if(target.checked){
            setCheckCores([...checkCores, target.value]);
        }else {
            setCheckCores(checkCores.filter((cor) => cor !== target.value))
        }
        
        console.log(checkCores)

    }



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

            <h3>Select</h3>

            <select name={select} id="fruta" onChange={({target}) => setSelect(target.value)}>
                <option disabled value="">Estado</option>
                <option value="uva">Uva</option>
                <option value="jaca">Jacá</option>
            </select>


            <h3>Radio Button</h3>
            <label htmlFor="">

                Café
                <input type='radio' onChange={handleChangeRadio} name="bebida" value="cafe"/>
            </label>

            <label htmlFor="">

               Chá
                <input type='radio' onChange={handleChangeRadio} name="bebida" value="cha"/>
            </label>

            {/* ou */}
            <label htmlFor="">

                refri
                <input type='radio' onChange={handleChangeRadio} checked={radio === 'refri'} value="refri"/>
             </label>
            {radio}


            <h3>Checkbox</h3>
            <label htmlFor="">
                Li os Termos
                <input type="checkbox" name="" id="" value={check} checked={check} onChange={({target}) => setCheck(target.checked)} />
            </label>


            <h3>Multiplos Checkbox</h3>
            <form action="">
                <label htmlFor="">
                   azul
                    <input type="checkbox" name="" id="" value="azul" checked={checkCores.includes('azul')} onChange={handleCheck} />
                </label>

                <label htmlFor="">
                   vermelho
                    <input type="checkbox" name="" id="" value="vermelho" checked={checkCores.includes('vermelho')} onChange={handleCheck} />
                </label>

               
            </form>

        </div>


    )
}