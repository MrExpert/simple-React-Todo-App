import React from "react";


class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createTodoText: this.props.createTodoText,
      createTodoPriority: this.props.createTodoPriority,
      toggleDisplay: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditDisplay= this.handleEditDisplay.bind(this);
  }
  
  handleChange(e) {
    if (e.target.name === "createTodoText") {
      this.setState({ createTodoText: e.target.value });
    } else if (e.target.name === "createTodoPriority") {
      this.setState({ createTodoPriority: e.target.value });
    }
  }
  
  handleEditDisplay() {
      this.setState({
        toggleDisplay: !this.state.toggleDisplay
      });
  };


  
  render() {
    return(
      <div>
        <div 
          className='list-group-item-success clearfix'
        >
          {this.props.createTodoText}
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

        {this.state.toggleDisplay ?

          <div className='alert-success clearfix'>

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
              className="update-todo btn btn-success pull-right"
              style={{
                marginRight: 20,
                marginBottom: 10
              }}
              name="button"
              type="submit"
              onClick={() =>
                this.props.handleSave(
                  this.state.createTodoText,
                  this.state.createTodoPriority,
                  this.props.id,
                  this.toggleDisplay
                )
              }
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