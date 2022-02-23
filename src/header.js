


import {NavLink} from 'react-router-dom';


export default function Header(){

    return(

    <>
        <h3>Header</h3>

        <NavLink to="/" end >Home</NavLink> | 
        <NavLink to="sobre" >Sobre</NavLink> | <NavLink to="login" >Login</NavLink>
    
    </>
    )
}