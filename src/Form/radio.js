

const Radio = ({options, value, setValue, ...props}) =>{
    return(
        <>

        {options.map((option) => 
            <label key={option}>
                {option}
                <input type="radio" value={option} checked={value === option} onChange={({target}) => setValue(target.value)} {...props}/>
            </label> 
        )}
           
        
        </>
    )
}


export default Radio;