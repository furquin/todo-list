import React, { Component } from 'react'
import './InputList.css';


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
