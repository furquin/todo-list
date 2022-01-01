import React, { Component } from 'react'
import './InputList.css';


export default class InputList extends Component {
    render() {
        return (
            <div >
                <input 
                type="text"
                placeholder='Digite nova tarefa' 
                className='input-list'
                />

            </div>
        )
    }
}
