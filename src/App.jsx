import React, { Component } from 'react';
import AddTodosForm from './AddTodosForm';
import ViewTodos from './ViewTodos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      createTodoItems: [],
      id: 0
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(createTodoText, createTodoPriority) {
    let id = this.state.id++;
    let newTodo = {
      createTodoText: createTodoText,
      createTodoPriority: createTodoPriority,
      id: id
    };
    id++;
    this.state.createTodoItems.push(newTodo);
    this.setState({ createTodoItems: this.state.createTodoItems});
    console.log(this.state.createTodoItems);
  }
  render() {
    return (
      <div className='container'>
        <div>
          <header>
            <h1>Very Simple Todo App</h1>
          </header>
          <tagline>Tracks all the things!!!</tagline>
        </div>

        <div className='row'>
          <AddTodosForm handleAdd={this.handleAdd}/>
          <ViewTodos createTodoItems={this.state.createTodoItems}/>
        </div >
      </div >
    );
  }
}

export default App;
