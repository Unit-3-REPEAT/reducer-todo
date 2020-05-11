import React from 'react';
import Todo from './Todo';


const TodoList = (props) => {
  console.log(`this is props inside TodoList -->`, props.state)
  return (
    <div>
        <h3>This is Todolist:</h3>
        {props.state.map((todo) => {
          // console.log(todo);
          return <Todo key={todo.id} newTodo={todo}/>
        })}
        
    </div>
  );
}

export default TodoList;
