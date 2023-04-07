import {connect} from "react-redux";
import * as actions from "./store/bugs"

function App(props) {
    console.log("state",props.myState)
    //props.dispatch({type:"ADD_BUG",payload:{description : "test"}})

    let x =actions.unresolvedBugsSelector(props.myState) ;
    let y = actions.unresolvedBugsSelector(props.myState) ;
    console.log("compare x to y" , x === y )

    // Selector using Reselect
    let a = actions.unresolvedBugsSelectorUsingReselect(props.myState)
    let b = actions.unresolvedBugsSelectorUsingReselect(props.myState)
    console.log("compare a et b ",a === b)

  return (
      <>
        <h1>State list length {props.myState.length}</h1>
        <button onClick={() => {
            props.dispatch({type:"ADD_BUG",payload:{description : "test"}})
        }
        }> ADD BUG</button>
        <button onClick={()=>{
            props.dispatch({type:"UPDATE_BUG",payload:{id:1}})
        }
        }>
          Update BUG
        </button>
        <button onClick={()=>{
            props.dispatch({type:"REMOVE_BUG",payload:{id:1}})
        }}>
            Delete BUG
        </button>
          <h1>User Section </h1>
          <button onClick={()=>{
              props.dispatch({type:"ADD_USER",payload:{name:"Hamza"}})
          }}>ADD USER</button>
      </>

  )
}
function mapStateToProps(state) {
  return { myState: state}
}

export default connect(mapStateToProps)(App) ;