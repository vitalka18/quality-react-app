import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleTodoChange(this.props.index, e.target.checked);
  }

  render() {
    const todo = this.props.todo;
    const activeStyle = {
      textDecoration: 'line-through'
    };
    return (
      <li key={todo.id}>
        <input
          id={`input-${todo.id}`}
          name={`input-${todo.id}`}
          type="checkbox"
          checked={todo.isCompleted}
          onChange={this.handleChange}/>
        <label htmlFor={`input-${todo.id}`} style={todo.isCompleted? activeStyle: {}}>
          {todo.name}
        </label>
      </li>
    )
  }
}

export default Todo;
