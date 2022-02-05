import { useEffect, useState } from "react/cjs/react.development"
import Item from "./item";

export default function Produto(){
    const [dados, setDados] = useState(null);
    const [carregando, setCarrengando]= useState(null);

    async function handleClick(event){
        setCarrengando(true)
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
        const json = await response.json();
        setDados(json)
        setCarrengando(false)
    }

    /*** UseEffect */

    const [produto, setProduto] = useState(null);

    //executa inicialmente só uma vez
    useEffect(() =>{
        const produtoLocal = window.localStorage.getItem('produto');
        if(produtoLocal !== null) 
        setProduto(produtoLocal)
    }, [])
    
    //sempre que produto for modificado quero que o efeito ocorra
    useEffect(() => {
        if(produto != null)
        window.localStorage.setItem('produto', produto)
    }, [produto])

    function handleProduto({target}){
        setProduto(target.innerText)
    }
   
    //0303

    return(
        <div>
            <h1>Produto</h1>

            <button style={{margin: '.5rem'}} onClick={handleClick}>notebook</button>
            <button style={{margin: '.5rem'}} onClick={handleClick}>smartphone</button>
            <button style={{margin: '.5rem'}} onClick={handleClick}>tablet</button>

            <br />
            {carregando && <p>Carregando...</p>}

            
            {!carregando && dados &&  <Item dados={dados}/> }
           
            <hr />
            <h3>UseEffect</h3>
            <p>Preferencia:{produto}</p>
            <button onClick={handleProduto} style={{marginRight: '1rem'}}>notebook</button>
            <button onClick={handleProduto} style={{marginRight: '1rem'}}>smartphone</button>

        </div>
    )

}

