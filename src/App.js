import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css';
import Header from './components/Header/Header'
import Todolist from './components/Todolist/Todolist';


export default class App extends Component {

  
  render() {
    return (
      <>
      <body >
        <main className='todo-area'>
        
          <Header />
          <Todolist />
      </main>
    </body> 
      </>
    )
  }
}
