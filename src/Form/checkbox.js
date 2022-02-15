


const Checkbox = ({options, value, setValue}) =>{

    function handleChange({target}){
        //confere se o target tá checado
        if(target.checked){
            setValue([...value, target.value]);

        }else{
            setValue(value.filter((itemValue) => itemValue !== target.value))
        }
    }

    return(
        <div>
            {options.map((option) => 
                 <label key={option}>
                    <input type="checkbox" value={option} checked={value.includes(option)} onChange={handleChange}/>
                    {option}
                </label>
            
            )}
           
        </div>
    )
}


export default Checkbox;