import React, { Component } from 'react'
import Todos from "./Todos.js"
import PropTypes from 'prop-types'

export class TodoList extends Component {
    markComplete = () => {
        console.log("hello")
    }

    render() {
        return this.props.todos.map((todo) => (
               <Todos key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
      
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default TodoList
