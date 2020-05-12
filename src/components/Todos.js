import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todos extends Component {
    
    getstyle = () => {
        return {
            backgroundColor: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px solid #ccc",
            textDecoration: this.props.todo.completed ? "line-through" : "none" 
        }
    }
    
    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getstyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
     backgroundColor: "#ff0000",
     color:"#fff",
     border: 'none',
     borderRadius: "50%",
     padding:'5px 9px',
     cursor: "pointer",
     float: "right"
}

Todos.propTypes = {
    todo: PropTypes.object.isRequired
}



export default Todos
