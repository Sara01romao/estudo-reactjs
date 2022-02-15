import { useState } from "react"

const types = {
    cep:{
        regex:!/^\d{5}-?\d{3}$/,
        message: 'Cep inválido'
    }
}


//hook de validação
const useForm = (type) =>{
    const [ value, setValue] = useState('');
    const [ error, setError] = useState(null);

    function validate(value){
        if(value.length === 0){
            setError('Preencha um valor');
            return false;
        }else if(types[type].regex.test(value)){
            setError(type[type].message);
        }else{
            setError(null);
            return true;
        }
    }

    function onChange({target}){
        if(error) validate(target.value);
        setValue(target.value);
    }


    return{
        value,
        setValue,
        error,
        onChange, 
        onBlur:() => validate(value)
    }
}



export default useForm;