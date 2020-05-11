import React from 'react';


const Todo = (props) => {
  console.log(`this is props inside Todo`, props.newTodo )
  return (
    <div>
         <p>{props.newTodo.todo}</p>
    </div>
  );
}

export default Todo;
