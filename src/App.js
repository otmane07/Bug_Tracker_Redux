import {connect} from "react-redux";
import * as actions from "./store/bugs"
import {getBugsByUserSelector} from "./store/bugs";

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

    console.log("selector" ,actions.getBugsByUserSelector(1)(props.myState) )
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
          <button onClick={()=>{
              props.dispatch({type:"ASSIGN_BUG",payload:{id:1 , userId:1}})
          }}>
              Assign BUG
          </button>
          <h1>User Section </h1>
          <button onClick={()=>{
              props.dispatch({type:"ADD_USER",payload:{name:"Hamza"}})
          }}>ADD USER</button>
          <button onClick={()=>{
              props.dispatch(()=>{
                  props.dispatch({type:"ADD_USER",payload:{name:"Hamza"}})
              })
          }}>Dispatch a function</button>
          <button onClick={()=>{
              props.dispatch({type:"ERROR",payload:{description:"Error Test"}})
          }}>Dispatch Error</button>
          {/*dispatch Api call*/}
          <button onClick={()=>{
              props.dispatch(
                  {
                  type:"apiCallBegan",
                  payload:{
                      url : '/bugs',
                      method : 'get', // default => i can delete it
                      onSuccess : 'RECEIVE_BUGS',
                      onError : 'ApiCallFailed'
                    }
                  })

              // C'est pas bon de dispatcher l'action avec les information suivant [/bugs , 'RECEIVE_BUGS' ]
              // dans UI Layer => il faut créer une action creatore dans bug slice pour faire la meme chose
              // props.dispatch(loadBugs( ))
          }}>Api Call</button>
      </>

  )
}
function mapStateToProps(state) {
  return { myState: state}
}

export default connect(mapStateToProps)(App) ;