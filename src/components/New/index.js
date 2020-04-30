import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import './new.css';


class New extends Component{

    constructor(props){
        super(props);
        this.state = {
            titulo: '',
            imagem: '',
            descricao: ''
        };

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(){

    }

    render(){
        return(
            <div>
                <header id="new">
                    <Link to="/dashboard">Voltar</Link>
                </header>

                <form onSubmit={this.cadastrar} id="new-post">
                    <label>Titulo:</label><br/>
                    <input type="text" placeholder="Nome do post" value={this.state.titulo}
                    autoFocus onChange={(e) => this.setState({titulo: e.target.value})} /> <br/>

                    <label>Url da imagem:</label><br/>
                    <input type="text" placeholder="Url da imagem" value={this.state.imagem}
                    onChange={(e)=> this.setState({imagem: e.target.value})} /> <br/>

                    <label>Descrição:</label><br/>
                    <textarea type="text" placeholder="Descrição do post..." value={this.state.descricao}
                    onChange={(e)=> this.setState({imagem: e.target.descricao})} /> <br/> 

                    <button type="submit">Cadastrar Post</button>          

                </form>
            </div>
        );
    }
}

export default withRouter(New);