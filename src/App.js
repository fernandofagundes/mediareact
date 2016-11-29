import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import AutorBox from './Autor';
import MenuEsquerdo from './componentes/MenuEsquerdo';
import GridProgramacao from './componentes/GridProgramacao';

class App extends Component {

  constructor(){
        super();
        this.state = {lista:[],nome:'', email:'',senha:''}

  }

  render() {
    return (
        <div id="layout">

            <MenuEsquerdo/>  
            
            <div id="main">
                <div className="header">
                    <h1>Cadastro de Autores</h1>
                </div>
            </div>

            <div className="content" id="content">
                    <GridProgramacao/>
            </div>
        </div>
          

  );
  }
}

export default App;
