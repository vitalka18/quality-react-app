import React, {Component} from 'react';

class TodoFilter extends Component {
  constructor() {
    super();

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(e) {
    e.preventDefault();
    const string = e.target.href.substring(location.origin.length+1);
    this.props.handleFilter(string);
  }

  render() {
    return (
      <div className="Todo-Filter">
        <a href="/" onClick={this.handleFilter}>All</a>
        <a href="/?completed=false" onClick={this.handleFilter}>Active</a>
        <a href="/?completed=true" onClick={this.handleFilter}>Completed</a>
      </div>
    )
  }
}

export default TodoFilter;
