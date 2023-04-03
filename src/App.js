import Store from "./store";
import store from "./store";
import * as actions from "./actionTypes"
function App() {
  // get the current State
  // console.log(Store.getState())

  // Subscribe to the Store
  store.subscribe(()=>{
    console.log("Store State",Store.getState())
  })
  // To setState we need dispatch [send] an action
  // Add new Bug to our State
  Store.dispatch({
    type : actions.BUG_ADDED,
    payload : {
      description : "",
    }
  })

  // Update Bug Status
  Store.dispatch(
      {
        type : actions.BUG_UPDATE ,
        payload : {
          id : 1
        }
      }
  )
  // Remove a bug from our State
  Store.dispatch({
    type : actions.BUG_REMOVE ,
    payload : {
      id : 1 ,
    }
  })

  return null
}

export default App;
