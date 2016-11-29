import React, {Component} from 'react';

export default class GridProgramacao extends Component{
    render(){
        return(
            <div>
                <input className="App-field" type="text" name="day1" value="" />
                <input className="App-field" type="text" name="day2" value="" />
                <input className="App-field" type="text" name="day3" value="" />
                <input className="App-field" type="text" name="day4" value="" />
                <input className="App-field" type="text" name="day5" value="" />
                <input className="App-field" type="text" name="total" value="" />
            </div>
        );
    }
}