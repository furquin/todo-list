import React, { Component } from 'react'
import './App.css';
import Header from './components/Header/Header'
import Todolist from './components/Todolist/Todolist';
import InputList from'./components/InputList/InputList'



export default class App extends Component {

    constructor () {
        super();

        this.state = {
            inputText:'',
            todoList:[],
            
        }
    }

    inputTodoList = ({target: {value}}) => {
        this.setState({inputText: value })

    }

    onClick = (taskName) => {
        const { inputText } = this.state
            if(inputText !== '') {

                let newList = this.state.todoList
                newList.push(this.state.inputText)
                this.setState({todoList: newList})
                this.setState({inputText:''})

            }

    }

    onEnter = () => {
        
    }

    
  
  
  render() {
    const { inputText, todoList, isChecked, complete } = this.state
    const {onClick, inputTodoList} = this
    

    return (
      
        
       <div>
            <main className='todo-area'>
            
            <Header 
            />

            <InputList 
            inputText={inputText}
            inputTodoList={inputTodoList}
            onClick={onClick}
            
            />

            {todoList.map((item, index) => 
                <Todolist 
                item={item}
                index={index}
                handleClickChecked={this.handleClickChecked}
                key={index}
                isChecked={isChecked}
                complete={complete}
                /> 
                
                )}
            

            
            
            </main>
        </div>
    
    )
  }
}
