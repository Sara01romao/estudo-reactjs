
import { createContext, useState } from "react";


//criar o contexto
export const GlobalContext = createContext;


//cria o provider que passa as infos, ele é chamdo no componentes
export const GlobalStorage = ({children}) =>{
    const [contar, setContar] = useState(0)

    //passar os valores 
    return (
    <GlobalContext.Provider value={{nome: 'sara', contar, setContar}}>{children}</GlobalContext.Provider>
    )
}