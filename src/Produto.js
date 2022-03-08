
import React from 'react';


class Produtos extends React.Component{
    //define os estdos dentro do constructor
    //super- herdas tdas as propriedades anterios do componente

    constructor(props){
        super(props);
        this.teste = 'teste'; //estato nçao reativo
        this.state = {
            contar: 0,
        };

        //metodo de funções para fazer a referencia do this
        this.handleClick = this.handleClick.bind(this);


    }

    handleClick(){
        this.setState((state) =>({contar: state.contar -1}))
    }


    render(){
        return(
            <div>
            <h1>Classe</h1>
            <h3>{this.props.titulo} : {this.teste}</h3>

            <p>contar</p>
            {this.state.contar}
             <button onClick={() => this.setState((state) =>({contar: state.contar +1}))}>add</button>

             <button onClick={this.handleClick}>remove</button>
            </div>
        )
    }
}


export default Produtos;