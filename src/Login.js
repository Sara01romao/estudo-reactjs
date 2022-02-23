import { useNavigate } from "react-router-dom";

const Login = () =>{

    const navigate = useNavigate(); //hook para navegar no login

    function handleClick(){
        console.log('Fazer login');
        navigate('/sobre')//endereço feito com o login
    }

    return(

        <div>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default Login;