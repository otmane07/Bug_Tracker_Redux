import Store from "./store/configureStore";
import * as actions from "./store/bugs"
function App() {
  // get the current State
  // console.log(Store.getState())

  // Subscribe to the Store
  Store.subscribe(()=>{
    console.log("Store State",Store.getState())
  })
  // To setState we need dispatch [send] an action
  // Add new Bug to our State

  // Store.dispatch({
  //   type : actions.BUG_ADDED,
  //   payload : {
  //     description : "",
  //   }
  // })

  // Same but using Toolkit action creator
  Store.dispatch(actions.addBug({description : ""}))

  // Update Bug Status

  // Store.dispatch(
  //     {
  //       type : actions.BUG_UPDATE ,
  //       payload : {
  //         id : 1
  //       }
  //     }
  // )

  // Same but using Toolkit action creator
  Store.dispatch(actions.updateBug({id : 1}))

  // Remove a bug from our State
  // Store.dispatch({
  //   type : actions.BUG_REMOVE ,
  //   payload : {
  //     id : 1 ,
  //   }
  // })

  // Same but using Toolkit action creator
  Store.dispatch(actions.removeBug({id : 1}))

  return null
}

export default App;
