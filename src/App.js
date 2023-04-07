import {connect} from "react-redux";

function App(props) {
  console.log("state",props.myState)
  //props.dispatch({type:"ADD_BUG",payload:{description : "test"}})

  return (
      <>
        <h1>State list length {props.myState.length}</h1>
        <button onClick={() => {
            props.dispatch({type:"ADD_BUG",payload:{description : "test"}})
        }
        }> ADD </button>
        <button onClick={()=>{
            props.dispatch({type:"UPDATE_BUG",payload:{id:1}})
        }
        }>
          Update
        </button>
        <button onClick={()=>{
            props.dispatch({type:"REMOVE_BUG",payload:{id:1}})
        }}>
            Delete
        </button>
      </>
  )
}
function mapStateToProps(state) {
  return { myState: state}
}

export default connect(mapStateToProps)(App) ;