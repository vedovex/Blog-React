import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../Firebase';

import './new.css';


class New extends Component{

    constructor(props){
        super(props);
        this.state = {
            titulo: '',
            imagem: '',
            descricao: '',
            alert: ''
        };

        this.cadastrar = this.cadastrar.bind(this);
    }

    componentDidMount(){
        //se nao tiver usuario logado, manda para tela de login
        if(!firebase.getCurrent()){
            this.props.history.replace('/');
            return null;
        }   
    }

    cadastrar = async (e) => {
        e.preventDefault();

        if(this.state.titulo !== '' && 
            this.state.imagem !== '' && 
            this.state.descricao !== '' && 
            this.state.url !== ''){
            let posts = firebase.app.ref('posts');
            let chave = posts.push().key;
                await posts.child(chave).set({
                titulo: this.state.titulo,
                imagem: this.state.imagem,
                descricao: this.state.descricao,
                Autor: localStorage.nome

            });
            this.props.history.push('/dashboard');
        }else{
            this.setState({alert: 'Preencha todos os campos'});
        }
    }

    render(){
        return(
            <div>
                <header id="new">
                    <Link to="/dashboard">Voltar</Link>
                </header>

                <form onSubmit={this.cadastrar} id="new-post">
                    <span>{this.state.alert}</span>
                    <label>Titulo:</label><br/>
                    <input type="text" placeholder="Nome do post" value={this.state.titulo}
                    autoFocus onChange={(e) => this.setState({titulo: e.target.value})} /> <br/>

                    <label>Url da imagem:</label><br/>
                    <input type="text" placeholder="Url da imagem" value={this.state.imagem}
                    onChange={(e)=> this.setState({imagem: e.target.value})} /> <br/>

                    <label>Descrição:</label><br/>
                    <textarea type="text" placeholder="Descrição do post..." value={this.state.descricao}
                    onChange={(e)=> this.setState({descricao: e.target.value})} /> <br/> 

                    <button type="submit">Cadastrar Post</button>          

                </form>
            </div>
        );
    }
}

export default withRouter(New);