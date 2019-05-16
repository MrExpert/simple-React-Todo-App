import React, { Component } from 'react';
import AddTodosForm from './AddTodosForm';
import ViewTodos from './ViewTodos';
let id = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      createTodoItems: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleAdd(createTodoText, createTodoPriority) {
    let newTodo = {
      createTodoText: createTodoText,
      createTodoPriority: createTodoPriority,
      id: id,
      completedTodo: false,
      toggleDisplay: !this.state.toggleDisplay
    };
    id++;
    this.state.createTodoItems.push(newTodo);
    this.setState({ 
      createTodoItems: this.state.createTodoItems
    });
    // console.log(this.state.createTodoItems);
  }

  handleSave(createTodoText, createTodoPriority, id) {
    let copy = this.state.createTodoItems;
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].id == id) {
        copy[i].createTodoText = createTodoText;
        copy[i].createTodoPriority = createTodoPriority;
        copy[i].toggleDisplay = false;
      }
    }
    this.setState({ createTodoitems: copy });
    console.log(this.state.createTodoItems);
  }

  handleDelete(id) {
    const remainingTodos = this.state.createTodoItems.filter((deleteTodo) => {
      if (deletedTodo.id !== id) return deletedTodo;
    });
    this.setState({ 
      createTodoItems: remainingTodos 
    });
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
          <AddTodosForm 
          handleAdd={this.handleAdd}
          />
          <ViewTodos 
          createTodoItems={this.state.createTodoItems}
          handleSave={this.handleSave}
          handleDelete={this.handleDelete}

          // toggleCrossout={this.}
          />
        </div >
      </div >
    );
  }
}

export default App;
