import React, { Component } from "react";
import "./Todolist.css";

export default class Todolist extends Component {

    constructor () {
        super();

        this.state = {
            isChecked: false,
            complete: ''
        }
    }

    handleClickChecked = () => {
        const { isChecked } = this.state
             if(isChecked !== true) {
                 this.setState({isChecked: true, complete: 'completa'})
 
             }if(isChecked !== false ) {
                 this.setState({isChecked: false, complete: ''})
             }
 
      }

    render() {
        const { item, index } = this.props;
        const {  isChecked, complete } = this.state
        const { handleClickChecked } = this 
        
        

        return (
            <div className="todolist">
                <input className='input-todolist'
                type="checkbox"
                name='todolist'
                onClick={handleClickChecked}
                checked={isChecked} 

                
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
