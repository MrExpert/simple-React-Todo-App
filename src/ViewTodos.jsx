import React from 'react';
import ListItem from './ListItem'

const ViewTodos = props => {
    return (
      
      <div className='col-md-8'>
        <div className='card' >
          <ul className='list-group'>View Todos
            <li className='list-group-item-success'>
              Such Wow</li>
            <li className='list-group-item-danger'>
              this is also a thing</li>
            <li className='list-group-item-warning'>
              All the Things</li>
            { 
              props.createTodoItems.map( newTodo => {
                return (
                  <ListItem 
                  key={newTodo.id} 
                  createTodoText={newTodo.createTodoText} 
                  createTodoPriority={newTodo.createTodoPriority}
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