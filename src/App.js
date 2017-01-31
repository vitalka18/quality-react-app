import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>

        <div className="Todos-App">
          <form>
            <input type="text" />
          </form>

          <div className="Todos-List">
            <ul>
              <li> <input type="checkbox" /> Learn JSX </li>
              <li> <input type="checkbox" /> Learn JSX </li>
              <li> <input type="checkbox" /> Learn JSX </li>
              <li> <input type="checkbox" /> Learn JSX </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
