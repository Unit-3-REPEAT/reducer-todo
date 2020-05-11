

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

        case "CLEAR_COMPLETED":
           return state.filter((item) => {return !item.completed}); 

        case "COMPLETED_TODO":
            return state.map((item) => {
                // console.log(`item -->`, item)
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

