import React, {useState} from 'react';

const Form = (props) => {
    console.log(`props inside Form -->`,props)

    const [inputText, setInputText] = useState('')

    //handle input changes
    const handleInputChanges = (event) => {
        setInputText(event.target.value);   
    }


    //onSubmit form add the new todo
    const handleSubmit = (event) => {
        //prevent the page from reloading
        event.preventDefault();        
        //call the function from App.js and pass in whatever the user types in        
        props.addTodo(inputText);
        //reset the input back to empty
        setInputText("")
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Add your to do here:</h2>
            <input 
                name="todo"
                placeholder="Type new todo"
                type="text"
                value={inputText}                
                onChange={handleInputChanges}
            />
            <button type="submit">Add</button>
        </form>
        
    </div>
  );
}

export default Form;
