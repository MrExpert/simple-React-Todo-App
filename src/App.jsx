import React, { Component } from "react";
import AddTodos from "./AddTodos";
import ViewTodos from "./ViewTodos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(newText, newPriority, id ) {

    this.state.todos.push({ text: newText, priority: newPriority, id: id
    });
    id++;

    this.setState({
      text: newText,
      priority: newPriority,
      id: id
    });
    // this.setState({ todos:  });
  }

  handleSave(newText, newPriority, newId) {
    let copyTodos = this.state.todos;
    for (let i = 0; i < copyTodos.length; i++) {
      if (copyTodos[i].newId == newId) {
        copyTodos[i].newText = newText;
        copyTodos[i].newPriority = newPriority;
      }
    }
    this.setState({ todos: copyTodos });
  }

  handleDelete(id) {
    let remainingTodos = this.state.todos.filter(deletedTodo => {
      if (deletedTodo.id !== id) return deletedTodo;
    });
    this.setState({
      todos: remainingTodos
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <header>
            <h1>Very Simple Todo App</h1>
          </header>
          <tagline>Tracks all the things!!!</tagline>
        </div>

        <div className="row">
          <AddTodos handleAdd={ this.handleAdd } />
          <ViewTodos
            todos={ this.state.todos }
            handleSave={ this.handleSave }
            handleDelete={ this.handleDelete }
          />
        </div>
      </div>
    );
  }
}

export default App;
