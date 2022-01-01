import React, { Component } from 'react'
import './App.css';
import Header from './components/Header/Header'
import Todolist from './components/Todolist/Todolist';
import InputList from'./components/InputList/InputList'



export default class App extends Component {

  
  
  render() {

    const list = [1,2,3]
    

    return (
      
       <div>
            <main className='todo-area'>
            
            <Header />

            <InputList />

            {list.map((item, index) => 
                <Todolist 
                item={item}
                key={index}
                /> 
                
                )}
            

            
            
            </main>
        </div>
    
    )
  }
}
