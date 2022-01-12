import React from 'react'
import "./App.css"
import Header from './components/Header'
import FormTodo from './components/FormTodo'
import ListTask from './components/ListTask'

const App = () => {
    return (
        <div className="App">
           <div className="container">
               <Header/>
                <FormTodo/>
                <ListTask/>
            </div> 
        </div>
    )
}

export default App
