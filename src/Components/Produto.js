
import styles from './Produto.module.css'

//styleComponent
import styled from 'styled-components';

const Info = styled.small`
    color: tomato;


`





const Produtos =() =>{

return(
    <>
        <h1 className={styles.titulo}>Produto</h1>
        <h2>Notebook</h2>

        <Info>i5 e 4gb</Info>
        <p className={styles.preco}>R$ 20000</p>
        <button>Comprar</button>

        bootsrap
        <div className='card bg-dark text-white mt-5'>
            <h3>bootsrap 5 no reactjs</h3>

          
        </div>



    
    </>
)

}


export default Produtos;