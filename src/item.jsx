

import { useEffect } from "react/cjs/react.development";
import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";


export default function Item(){
   const [ produto, setProduto] = useLocalStorage('produto', '')
   const {request, data, loading, error} = useFetch();


   function handleClick({target}){
        setProduto(target.innerText)
   }

   useEffect(() => {
       async function fetchData(){
            const {response, json}= await request('https://ranekapi.origamid.dev/json/api/produto/')
       }
       fetchData();

   },[request])

   if (error) return <p>{error}</p>
   if(loading) return <p>Carregando...</p>
   if(data) 
    return(
        <div>
            <h1>Item preferido: {produto}</h1>
           <button style={{marginRight:'20px'}} onClick={handleClick}>notebook</button>
           <button onClick={handleClick}>tablet</button>

           <div>
               {data.map((item) =>{
                   return(
                       <li key={item.id}>{item.nome}</li>
                   )
               })}
           </div>
        </div>
    );
   else return null;
}