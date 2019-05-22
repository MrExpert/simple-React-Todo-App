import React from "react";
import ListItem from "./ListItem";

const ViewTodos = props => {
  return (
    <div className="col-md-8">
      <div className="card">
        <ul className="list-group">
          View Todos
          {props.todos.map(todo => {
            return (
              <ListItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                priority={todo.priority}
                handleSave={props.handleSave}
                handleDelete={props.handleDelete}
                handleEditDisplay={props.handleEditDisplay}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ViewTodos;
