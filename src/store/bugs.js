// Actions Types
import {v4 as uuidv4} from "uuid";
import {createAction} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit";
// import {createSlice} from "@reduxjs/toolkit";
import {createSelector} from "reselect";

// console.log("addBug",addBug) // Is a function
// console.log("addBug()",addBug()) // when we call it => return an action {type: 'ADD_BUG', payload: undefined}
// console.log("addBug( payload )",addBug({id : 1})) // anything defined in the arg represent the payload {type: 'ADD_BUG', payload: {id : 1}}
// // Function in JS is an object => we can the type prop
// console.log("action type",addBug.type)

// export const BUG_ADDED = "ADD_BUG"
// export const BUG_REMOVE = "REMOVE_BUG"
// export const BUG_UPDATE = "UPDATE_BUG"

// define  actions +  actions creator
// export const addBug = createAction("ADD_BUG")
// export const  removeBug = createAction("REMOVE_BUG")
// export const updateBug = createAction("UPDATE_BUG")



// Reducer
const initialState =  [
    {
        id : 1,
        description : "Description du bug",
        userId: 10 ,
        solved : false
    },
    {
        id : 2,
        description : "Description du bug",
        userId: 5 ,
        solved : false
    }
]
// export default function bugReducer (state = initialState , dispatcher) {
//     switch (dispatcher.type){
//         case addBug.type :
//             return [...state , {id : uuidv4() , description: dispatcher.payload.description , solved: false }]
//         case removeBug.type :
//             return state.filter(e => {
//                 return e.id !== dispatcher.payload.id ;
//             })
//         case updateBug.type :
//             return state.map(e => {
//                 return e.id !== dispatcher.payload.id ? e : {...e , solved : true};
//             })
//     }
//     return state
// }

//Creating a reducer using Toolkit
export default createReducer(initialState , {
    ADD_BUG : function (state ,dispatcher){
        state.push({id : uuidv4() , description: dispatcher.payload.description ,userId: 1 , solved: false })
    } ,
    REMOVE_BUG : function (state, dispatcher){
        let indexElementToRemove = state.findIndex((e)=> e.id === dispatcher.payload.id)
        state.splice(indexElementToRemove,indexElementToRemove+1)
    },
    UPDATE_BUG : function (state ,dispatcher){
        let indexElementToUpdate = state.findIndex((e)=> e.id === dispatcher.payload.id)
        state[indexElementToUpdate].solved = true ;
    },
    ASSIGN_BUG : function (state,dispatcher){
        let indexElementToUpdate = state.findIndex((e)=> e.id === dispatcher.payload.id)
        state[indexElementToUpdate].userId = dispatcher.payload.userId ;
    }
})

// Refactor creatReducer and createAction with createSlice

// const bugsSlice = createSlice({
//     name : "bugs",
//     initialState : initialState,
//     reducers : {
//         ADD_BUG : function (state ,dispatcher){
//             console.log("dispatcher add",dispatcher)
//             state.push({id : uuidv4() , description: dispatcher.payload.description , solved: false })
//         } ,
//         REMOVE_BUG : function (state, dispatcher){
//             let indexElementToRemove = state.findIndex((e)=> e.id === dispatcher.payload.id)
//             state.splice(indexElementToRemove,indexElementToRemove+1)
//         },
//         UPDATE_BUG : function (state ,dispatcher){
//             let indexElementToUpdate = state.findIndex((e)=> e.id === dispatcher.payload.id)
//             state[indexElementToUpdate].solved = true ;
//         }
//     }
// })
//
// console.log("bugsSlice",bugsSlice)
//
// export const {ADD_BUG , REMOVE_BUG , UPDATE_BUG  } = bugsSlice.actions
// export default bugsSlice.reducer ;

// Selectors
export const unresolvedBugsSelector = (state) => {
    return state.bugs.filter(bug => bug.solved === false)
}
// return state.filter(bug => bug.solved === false) eq return state.filter(bug => !bug.solved )

// bugs take as value state.bugs
export const unresolvedBugsSelectorUsingReselect = createSelector(
    state => state.bugs ,
    bugs => bugs.filter(bug => !bug.solved)
)
// selector for getting bug’s by user
export const getBugsByUserSelector = userId =>  createSelector(
    state => state.bugs ,
    bugs => bugs.filter(bug => bug.userId === userId)
)

// if I call getBugsByUserSelector( 2 ) it will return the function definition of our selector
// const selector = getBugsByUserSelector( 2 )
// selector( myState )