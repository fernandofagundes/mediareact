import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import AutorBox from './Autor';
import MenuEsquerdo from './componentes/MenuEsquerdo';
import GridProgramacao from './componentes/GridProgramacao';
import Home from './Home';

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
                    <div className="content" id="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;