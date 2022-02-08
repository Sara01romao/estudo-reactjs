import { createContext, useEffect, useState } from "react";

//nome do contexto
export const GlobalContext = createContext();

//função com os estados compartilhado, encapsula corpo do app
export const GlobalStorage = ({children}) =>{

    const [dados, setDados] = useState(null);   
     

    //dados da api com efeito
    useEffect(() =>{
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
        .then((response) => response.json())
        .then((json) => setDados(json));
    }, []);


    function limparDados(){
        setDados(null);
    }

    return(
        <GlobalContext.Provider value={{dados, limparDados}}>
            {children}
        </GlobalContext.Provider>
    );
}