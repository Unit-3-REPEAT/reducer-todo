import React, {useReducer} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Form from './components/Form';
import {reducer, initialState} from './reducers/reducer';




const App = () => {

  //Bring in reducer
  const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(`state -->`, state);
    // console.log(`dispatch -->`, dispatch);
    // console.log(`reducer -->`, reducer);
    // console.log(`initialState -->`, initialState);  
    
    //set up addNewtodo handler
    const addTodo = (input) => {
      const newTodo = {      
        todo: input,
        completed:false,
        id: Math.random()
      }
      //dispatch function takes in a type and payload (payload is optional)
      //it sets the payload to some data and sends it to the reducer to do something
      // with it

      dispatch({type: 'ADD_NEW_TODO', payload:newTodo});
    }


    const clearCompleted = () => {
      dispatch({type:"CLEAR_COMPLETED"})
    }

    const completedTodo = (id) => {
      dispatch({type: "COMPLETED_TODO", payload: id});
    }


  return (
    <div className="App">  
       {/* pass down the function addTodo to form*/}
      <Form addTodo={addTodo} clearCompleted={clearCompleted}/>

      {/* pass down the state to the TodoList component */}
      <TodoList state={state} completedTodo={completedTodo} />
    </div>
  );
}

export default App;
