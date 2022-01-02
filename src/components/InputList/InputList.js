import React, { Component } from 'react'
import './InputList.css';
import PropsTypes from 'prop-types';


export default class InputList extends Component {
    render() {

        const { inputText, inputTodoList, onClick } = this.props
        return (
            <div className="container-input">

                <div 
                className="emoji"
                onClick={onClick}
                > ➕ </div>

                <input 
                type="text"
                placeholder='Adicione novas tarefas' 
                className='input-list'
                value={inputText}
                onChange={inputTodoList}
                />

            </div>
        )
    }
}

InputList.propTypes = {
    inputText: PropsTypes.string.isRequired,
    inputTodoList: PropsTypes.func.isRequired,
  };

