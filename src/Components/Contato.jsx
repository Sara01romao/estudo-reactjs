
import styles from './Contato.module.css'

import imgContato from '../img/contato.jpg'
import Head from './Head';


const Contato = () =>{


    return(
        <div className={`${styles.contato} animeLeft`}>
            <Head title="Contatos" description="Contatos da empresa" />
            <img src={imgContato} alt="contato" />

            <div className={styles.dados}>
                <h1>Contato</h1>

                <ul>
                    <li>andre@origamid.com</li>
                    <li>9999-9999</li>
                    <li>Rua ali pero, n° 45</li>
                </ul>
            </div>
           
        </div>
    )
}


export default Contato;