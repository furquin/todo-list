import React, { Component } from "react";
import "./Todolist.css";
import PropsTypes from 'prop-types';

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
        const { item, index, exclui } = this.props;
        const {  isChecked, complete } = this.state
        const { handleClickChecked } = this 
        
        

        return (
            <div className="todolist">
                <input className='input-todolist'
                type="checkbox"
                name='todolist'
                onChange={handleClickChecked}
                checked={isChecked} 

                
                /> 
                
                <label 
                htmlFor='todolist'
                className="label-todolist"
                className={complete}
                >
                    {`${index + 1 }.  ${item}`}
                </label>

                <div 
                type="image"
                className="delete"
                onClick={exclui}
                > 🗑️ </div>
            
            </div>
        );
    }

    
}

Todolist.propTypes = {
    item: PropsTypes.string.isRequired,
    index: PropsTypes.number.isRequired,
    exclui: PropsTypes.func.isRequired,
  };

