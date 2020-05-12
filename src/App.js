import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom"
import TodoList from "./components/TodoList.js"
import Header from "./components/layout/header.js"
import AddTodo from "./components/AddTodo.js"
import AboutUs from "./components/pages/About"
import axios from "axios"
// import {v4 as uuid} from "uuid";

export class App extends Component {
    state = {
        // todos: [
        //     {
        //         id:uuid(),
        //         title:"Take of the phone",
        //         completed:false
        //     },
        //     {
        //         id:uuid(),
        //         title:"Learn React",
        //         completed:false
        //     },
        //     {
        //         id:uuid(),
        //         title:"Learn vue",
        //         completed:true
        //     }
        // ]
        todos:[]
    }
    componentDidMount(){
            axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(res => {
                this.setState({todos: res.data})
            })
    }

    markComplete = (id) => {
       this.setState({todos: this.state.todos.map(todo => {
           if(todo.id === id){
               todo.completed = !todo.completed
           }
           return todo
       })})
    }
    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}/`)
        .then(res => this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        }))
        
    }
    addTodo = (title) => {
      axios.post('https://jsonplaceholder.typicode.com/todos', {
          title: title,
          completed:false
      })
      .then(res => {
          console.log(res)
          this.setState({todos: [...this.state.todos, res.data]});
      }      
      )       
    }
    render() {       
        return (
            <Router>
                <div className="App">
                    <div className="container"> 
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                 <AddTodo addTodo={this.addTodo}/>
                                 <TodoList todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                            </React.Fragment>
                        )}/>
                        <Route path="/about" component={AboutUs}/>                       
                    </div>
                    
                </div> 
            </Router>
        )
    }
}

export default App
