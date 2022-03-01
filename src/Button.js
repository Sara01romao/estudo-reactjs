

const Button = (props)=>{
    return (
        <button style={{width: `${props.width}px`}}>
                {props.children}
        </button>
    )
}


export default Button;