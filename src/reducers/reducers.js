
//2  parameter
//1-state
//2- actions defined(increment and decrement actions we wrote in actions.js)

export default function reducerFunc(
    state = {
        count: 0
    },
    action 
) {
    switch (action.type) {
        case 'INCREMENT':
            // To duplicate entire state as a copy, not directly effecting state: ...state
                return{
                    ...state,
                    count: state.count + 1    
                }
        case 'DECREMENT' :
                return{
                    ...state,
                    count: state.count - 1
                }
        default:
                return state;
        }
}
