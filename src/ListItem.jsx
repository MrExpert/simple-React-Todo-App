import React from "react";

function handlePriorityColor(createTodoPriority) {
  if (createTodoPriority == 1) {
    return "success";
  } else if (createTodoPriority == 2) {
    return "warning";
  } else if (createTodoPriority == 3) {
    return "danger";
  }
}

function handleCompletedTodo(completedTodo) {
  if (completedTodo === true) {
    return 'line-through';
  } else {
    return '';
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createTodoText: this.props.createTodoText,
      createTodoPriority: this.props.createTodoPriority,
      toggleDisplay: false,
      completedTodo: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditDisplay = this.handleEditDisplay.bind(this);
    this.handleCrossedOut = this.handleCrossedOut.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "createTodoText") {
      this.setState({ createTodoText: e.target.value });
    } else if (e.target.name === "createTodoPriority") {
      this.setState({ createTodoPriority: e.target.value });
    }
  }
  
  handleEditDisplay() {
    this.props.handleSave(
      this.state.createTodoText,
      this.state.createTodoPriority,
      this.props.id,
    );
    this.setState({
      toggleDisplay: !this.state.toggleDisplay
    });
  };

  handleCrossedOut() {
    this.setState({
      completedTodo: !this.state.completedTodo
    });
  }

  render() {
    return(
      <div>
        <div 
          className={`list-group-item-${handlePriorityColor(this.state.createTodoPriority)} clearfix`}
        >
          <input 
            type='checkbox'
            style={{
              marginleft: 10
            }}
            value={this.state.completedTodo}
            onChange={ () => this.handleCrossedOut()}
          />
            <span style={{textDecoration: `${handleCompletedTodo(this.state.completedTodo)}`}}>{this.props.createTodoText}</span>
            <button
              className="list-group-item-danger pull-right"
              onClick={() => this.props.handleDelete(this.props.id)}
              >
              <span className="glyphicon glyphicon-trash"/>
            </button>

            <button
              className="list-group-item-success pull-right"
              value={this.state.toggleDisplay}
              onClick={() => this.handleEditDisplay()}
            >
              <span className="glyphicon glyphicon-edit"/>
            </button>
        </div>

        {this.state.toggleDisplay  ?

          <div className={`alert-${handlePriorityColor(this.state.createTodoPriority)} clearfix`}>

            <div className="form-group col-md-10">
              <label htmlFor="create-todo-text">
                Description
              </label>
              <textarea
                className="create-todo-text form-control"
                name="createTodoText"
                type="string"
                value={this.state.createTodoText}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group col-md-10">
              <label htmlFor="create-todo-priority">
                How much of a priority is this?
                </label>
              <select
                className="create-todo-priority form-control"
                name="createTodoPriority"
                value={this.state.createTodoPriority}
                onChange={this.handleChange}
              >
                <option>Select a priority</option>
                <option value="1">Low priority</option>
                <option value="2">Medium priority</option>
                <option value="3">High priority</option>
              </select>
            </div>

            
            <button
              className="update-todo btn btn-success pull-right pull-bottom"
              style={{
                marginRight: 20,
                marginBottom: 10
              }}
              name="button"
              type="submit"
              onClick={() => this.handleEditDisplay()}
            >
              Save!
            </button>

          </div>

          : null
          
        }
            
        
        

      </div>
    )
  }
}

export default ListItem;