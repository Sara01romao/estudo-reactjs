import { useContext } from "react";
import { GlobalContext} from "./GlobalContext"


export default function Produto(){
    const {dados, limparDados} = useContext(GlobalContext);

   console.log(dados)

   if(dados === null) return null;

    return(
        <div>
            Produto:
            {dados.map((produto) =>{
                return(
                <li key={produto.id}>{produto.nome}</li>
                )
            })}

            <button onClick={limparDados}>Limpar</button>
        </div>
    )
}