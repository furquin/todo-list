import React, { Component } from "react";
import "./Todolist.css";

export default class Todolist extends Component {
    render() {
        const { isChecked, handleClickChecked, item } = this.props;
        
        

        return (
            <div className="todolist">
                <input className='input-todolist'
                type="checkbox"
                name='todolist'
                /> 
                
                <label className="label-todolist">
                    {item}
                </label>
            
            </div>
        );
    }
}
