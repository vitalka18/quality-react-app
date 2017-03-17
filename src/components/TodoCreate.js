import React, {Component} from 'react';

class TodoCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddNewTodo = this.handleAddNewTodo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleAddNewTodo(e) {
    e.preventDefault();
    this.props.handleAddNewTodo(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleAddNewTodo}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </form>
    )
  }
}
export default TodoCreate;
