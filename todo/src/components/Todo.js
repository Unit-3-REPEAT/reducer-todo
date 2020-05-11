import React from 'react';


const Todo = (props) => {
  console.log(`this is props inside Todo`, props)

  const onClickToggle = (e) => {
    e.preventDefault();
    props.completedTodo(props.item.id);
  }


  return (
    <div>
         <h4 
         className={props.item.completed ? 'complete' : ''}
         onClick={onClickToggle}
         >
           {props.item.todo}
         </h4>

    </div>
  );
}

export default Todo;
