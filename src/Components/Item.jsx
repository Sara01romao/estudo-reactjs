import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Item.module.css'


const Item = () =>{


    const {id} = useParams();
    const [produto, setProduto] = useState(null);
    const [ carregando, setCarregando] = useState(false);
    const [error, setError] = useState(null);
    

    useEffect(()=>{

        //criar uma funcioção async
        async function fetchProduto(url){
            try{
                setCarregando(true)
                const response = await fetch(url);
                const json = await response.json();
                setProduto(json);


            }catch(erro){
                setError('Um erro ocorreu')

            }finally{
                setCarregando(false)

            }
            
        }

        fetchProduto(`https:/ranekapi.origamid.dev/json/api/produto/${id}`)

       
    },[id])

    console.log(produto)

    if(carregando) return <div className="loading"></div>
    if(error) return <p>{error}</p>
    if(produto === null) return null

    return(
        <section className={`${styles.produto} animeLeft`}>
            
           
                <div>
                    {produto.fotos.map((foto) =>(
                        <img key={foto.src} src={foto.src} alt={foto.titulo}/>
                    ))}
                </div>
              
                <div>
                    <h1>{produto.nome}</h1>
                    <span className={styles.preco}>{produto.preco}</span>
                    <p className={styles.descricao}>{produto.descricao}</p>
                    
                </div>
               

            
        </section>
    )
}


export default Item;