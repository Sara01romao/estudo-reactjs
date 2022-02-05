

export default function Item({dados}){

    return(
        <div>

            {dados.nome}
            <img src={dados.fotos[0].src} alt="" />
        </div>
    )
}