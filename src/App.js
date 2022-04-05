
//here connect -> is a function which connects your state to the components that you are importing to
import { connect } from 'react-redux';
import './App.css';

//3 principle of redux
//1. single source of truth-ie there is one global store/state.
//2. State is read only - so state is immutable
//3. Changes are made using pure functions aka Reducers


//Action: is something the user does (eg: clicking a button)
//after a user does an action, it goes toa Reducer(which is a pure function)
// Reducer: is a pure function that receives an input and creates an output
//Output: is the entire state of the app(global store)
//Store : Entire state of the app

//action => dispatch => store => view


//now for our store to be passed down, we need to use something specific after return statement which is provided by connect:
//(ie).,

//here props -are passing down global store to app from index.js
function App(props) {
  const handleInc = (event) =>{
    //dispatch is a method: this comes from global store; 
    //dispatch is a function that accepts an object which is used to update the Redux state.
    props.dispatch({
      type: 'INCREMENT'
    })
  }
  const handleDec = (event) =>{
    props.dispatch({
      type: 'DECREMENT'
    })
  }

  return (
    <div className="App">
        <header>
          <button onClick={handleInc}>Increment</button>
          <button onClick={handleDec}>Decrement</button>
            <p>{props.count}</p>
        </header>
       
    </div>
  );
//creating a function that connet will use to pass data down
}

const mapStateToProps = (state) =>{
    return{
      count: state.count
    }
  }

export default connect(mapStateToProps) (App);
