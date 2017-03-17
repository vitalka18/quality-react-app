import React, { Component } from 'react';
import Todo from './components/Todo';
import TodoCreate from './components/TodoCreate';
import TodoFilter from './components/TodoFilter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
        todos: [
          {id: 1, name: 'Lorem Ipsum 1', isCompleted: false},
          {id: 2, name: 'Lorem Ipsum 2', isCompleted: false},
          {id: 3, name: 'Lorem Ipsum 3', isCompleted: false},
          {id: 4, name: 'Lorem Ipsum 4', isCompleted: true},
          {id: 5, name: 'Lorem Ipsum 5', isCompleted: false}
        ],
        createValue: '',
        queryParams: this.parseQuery(window.location.search)
      };
      this.handleTodoChange = this.handleTodoChange.bind(this);
      this.addNewTodo = this.addNewTodo.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
  }

  filter(Todos) {
    const query = this.state.queryParams;
    if (query.completed === 'true') {
      return Todos.filter(Todo => Todo.isCompleted === true);
    } else if (query.completed === 'false') {
      return Todos.filter(Todo => Todo.isCompleted === false);
    } else {
      return Todos;
    }
  }

  parseQuery(params) {
    var queryParams = {};
    var query = params.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      queryParams[pair[0]] = pair[1];
    }
    return queryParams;
  }

  handleFilter(queryString) {
    window.history.pushState("", "", `/${queryString}`);
    this.setState({
      queryParams: this.parseQuery(queryString)
    });
  }

  handleTodoChange(index, value) {
    this.setState((prevState, props) => {
      let todos = prevState.todos;
      todos[index]['isCompleted'] = value;
      return {
        todos: todos
      }
    });
  }

  addNewTodo(todoName) {
    this.setState((prevState, props) => {
      let todos = prevState.todos;
      todos.push({
        id: todos.length + 1,
        name: todoName,
        isCompleted: false
      });
      return {
        todos: todos
      }
    });
  }

  render() {
    return (
      <div className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h2>React Todos</h2>
          </div>

          <div className="Todos-App">
              <TodoCreate handleAddNewTodo={this.addNewTodo}/>

              <TodoFilter handleFilter={this.handleFilter}/>

              <div className="Todo-List">
                  <ul>
                    {this.filter(this.state.todos).map((todo, index) => <Todo key={todo.id} index={index} todo={todo} handleTodoChange={this.handleTodoChange}/>)}
                  </ul>
              </div>

              <div className="Todo-Foot">
                <span>All: <span className="count">{this.state.todos.length} </span></span>
                <span>Completed: <span className="count">{this.state.todos.filter(todo => todo.isCompleted).length} </span></span>
                <span>Active: <span className="count">{this.state.todos.filter(todo => !todo.isCompleted).length} </span></span>
              </div>
          </div>
      </div>
    )
  }
}

export default App;
