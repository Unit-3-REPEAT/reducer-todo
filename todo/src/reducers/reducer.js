

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
    console.log(`Hello from reducer`);

    switch(action.type){
        case "ADD_NEW_TODO":
            return [
                ...state, 
                action.payload                
            ]
       
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

