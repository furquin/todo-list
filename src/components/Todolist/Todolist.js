import React, { Component } from "react";
import "./Todolist.css";

export default class Todolist extends Component {
    render() {
        const { item, index, handleClickChecked, isChecked, complete } = this.props;
        
        

        return (
            <div className="todolist">
                <input className='input-todolist'
                type="checkbox"
                name='todolist'
                isChecked={isChecked}
                onClick={handleClickChecked}

                
                /> 
                
                <label 
                className="label-todolist"
                className={complete}
                >
                    {`${index + 1 }.  ${item}`}
                </label>
            
            </div>
        );
    }
}
