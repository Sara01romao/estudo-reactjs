
//...props repassa todos as propriedades restante, o ideal que seja igual entre os inputs

const Input = ({id, label, value, onChange, type, onBlur, placeholder, error}) =>{
    return(
        <>
            <label htmlFor={id}>{label}</label>
            <input 

                id={id} 
                name={id}
                onChange={onChange} 
                placeholder={placeholder}
                onBlur={onBlur}
                type={type}
                value={value}
            />

            {error && <p>{error}</p>}

        </>
    )
}

export default Input;