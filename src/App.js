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
            todoList:["func editar", "func excluir", "adc categoria"],
            
        }
    }

    inputTodoList = ({target: {value}}) => {
        this.setState({inputText: value })

    }

    onClick = () => {
        const { inputText } = this.state
            if(inputText !== '') {

                let newList = this.state.todoList
                newList.push(this.state.inputText)
                this.setState({todoList: newList})
                this.setState({inputText:''})

            }

    }

    exclui = (item) => {

        const { todoList } = this.state
       
           let newList = this.state.todoList
           newList.splice(newList.indexOf(item), 1)
           this.setState({todoList: newList})
       
    }

  

    

    
  
  
  render() {
    const { inputText, todoList } = this.state
    const {onClick, inputTodoList, exclui} = this
    

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
                key={index}
                exclui={() => exclui(item)}
                /> 
                
                )}
            

            
            
            </main>
        </div>
    
    )
  }
}
