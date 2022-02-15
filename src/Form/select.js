


const Select = ({options, value, setValue, ...props}) =>{
    return(
        <>
            <select value={value} onChange={(target) => setValue(target.value)} {...props}>

                <option value="" disabled>Selecione</option>

                {options.map((option) => <option value={option} key={option} >{option}</option>)}

                <option value="amarelo">Amarelo</option>
            </select>
        
        
        </>
    )
}

export default Select;