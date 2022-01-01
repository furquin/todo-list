import React, { Component } from "react";
import "./style.css";

export default class Todolist extends Component {
    render() {
        const { isChecked, handleClickChecked, item } = this.props;
        
        

        return (
            <div className="input-list">
                <input 
                type="checkbox"
                name='input-list'
                /> 
                
                <label>
                    {item}
                </label>
            
            </div>
        );
    }
}
