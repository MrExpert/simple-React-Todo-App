import React from 'react';
import ListItem from './ListItem'

const ViewTodos = props => {
    return (
      
      <div className='col-md-8'>
        <div className='card' >
          <ul className='list-group'>View Todos
            { 
              props.createTodoItems.map( newTodo => {
                return (
                  
                  <ListItem 
                  key={newTodo.id} 
                  id={newTodo.id}
                  createTodoText={newTodo.createTodoText} 
                  createTodoPriority={newTodo.createTodoPriority}
                  handleSave={props.handleSave}
                  handleDelete={props.handleDelete}
                  />
                )
              })
            }
          </ul>
        </div>
      </div> 
    );
}
export default ViewTodos;