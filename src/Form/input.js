
//...props repassa todos as propriedades restante, o ideal que seja igual entre os inputs

const Input = ({id, label, value, onChange, ...props}) =>{
    return(
        <>
            <label htmlFor={id}>{label}</label>
            <input 
                type="text" 
                id={id} 
                name={id}
                value={value} 
                onChange={onChange} 
                {...props}
            />

        </>
    )
}

export default Input;