import React, { Component } from 'react';
import $ from 'jquery';
import InputCustomizado from './componentes/InputCustomizado';

export default class Livro  extends Component {

    constructor(){
        super();
        this.state = {titulo:'', preco:'', autor:'', autores:[]};
        this.setTitulo = this.setTitulo.bind(this);
        this.setPreco = this.setPreco.bind(this);
        this.setAutor = this.setAutor.bind(this);
        this.setEnviarForm = this.setEnviarForm.bind(this);
    }
    
    componentDidMount(){
        $.ajax({
            url:"http://localhost:8080/api/livros",
            dataType: 'json',
            success:function(resposta){
                console.log(resposta);
            },
            error:function(resposta){

            },
            beforeSend:function(){

            }
        });

        $.ajax({
            url:"http://localhost:8080/api/autores",
            dataType: 'json',
            success:function(resposta){
                this.setState({autores:resposta});
            }.bind(this)
        });
    }


    setTitulo(e){
        this.setState({titulo: e.target.value});
    }
    setPreco(e){
        this.setState({preco: e.target.value});
    }
    setAutor(e){
        this.setState({autor: e.target.value});
    }

    render(){
        return (
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.setEnviarForm} method="post" >
                    <InputCustomizado id="titulo" type="text" name="titulo" value={this.state.titulo} onChange={this.setTitulo} label="Título" />
                    <div className="pure-control-group">
                        <label>Autor</label>
                        <select name="autor" id="autor" onChange={this.setAutor} value={this.state.autor}  >
                            <option value="" >Selecione um autor</option>
                            {
                                this.state.autores.map(data =>
                                    <option key={data.id} value={data.id} >{data.nome}</option>)
                            }

                        </select>
                        <span className="error">{this.state.msgErro} {this.state.autor} </span>
                    </div>
                    <InputCustomizado id="preco" type="text" name="preco" value={this.state.preco} onChange={this.setPreco} label="Preço" />
                    <div className="pure-control-group">
                        <label></label>
                        <button type="submit" className="pure-button pure-button-primary">Gravar</button>
                    </div>
                </form>
            </div>
        );
    }

    setEnviarForm(e){
        e.preventDefault();
        $.ajax({
            url:'http://localhost:8080/api/livros',
            contentType:'application/json',
            dataType:'json',
            type:'post',
            data: JSON.stringify({
                titulo: this.state.titulo,
                autorId: this.state.autor,
                preco: this.state.preco
            }),
            success: function(resposta){
                console.log(resposta);
            },
            error:function(resposta){
                console.log('chegou no erro '+resposta.status);
            },
            beforeSend:function(){
                console.log(this.state.autor);
            }.bind(this)
        });
    }
    
}
