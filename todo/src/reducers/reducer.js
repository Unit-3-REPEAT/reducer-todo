//NOTES AT THE BOTTOM OF THE REDUCER

//Set up initialState
export const initialState = 
  [
    {
      todo: '',
      completed:false,
      id: Math.random()
    }
  ]

//Set up basic reducer
export const reducer = (state, action) => {
    // console.log(`Hello from reducer`);

    switch(action.type){
        case "ADD_NEW_TODO":
            return [
                ...state, 
                action.payload                
            ]

        //this can be written with if else statement too
        //basically we are filtering over an array and saying
        //if the item.completed is false keep that item 
        //otherwise clear it as completed    
        case "CLEAR_COMPLETED":
           return state.filter((item) => {return !item.completed}); 
         
        //map over the array of objects and check to see 
        //this done so that JS know which item was clicked on (using id) 
        //see completedTodo(id) function in App.js
        //if the clicked items.id (completedTodo(ID)) is matching the current items.id
        //See Todo.js onClickToggle function  
        case "COMPLETED_TODO":
            return state.map((item) => {
                 console.log(`item -->`, item)
                return item.id === action.payload ? {...item, completed: !item.completed} : item
            })   
       
        
        default:
            return state;
    }
}


//Set up basic reducer - first step - make it look like something like this:
// export const reducer = (state, action) => {
//     console.log(`Hello from reducer`);

//     switch(action.type){
       
//         default:
//             return state;
//     }
// }


//SOME NOTES

//Create event handlers in App.js
//Dispatch function sends the type and payload data to the reducer to do something with it
//Keep in mind that some of event handlers will run inside other functions
//such as clearCompleted() located inside (App.js)
//will run inside clearTodoOnClick() inside (Form.js) when the user clicks on the button
//After you create the event handlers think about 
//when you need to run them and if needed in which function they need to be called

