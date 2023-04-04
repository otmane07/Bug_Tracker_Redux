// Actions Types
import {v4 as uuidv4} from "uuid";

export const BUG_ADDED = "ADD_BUG"
export const BUG_REMOVE = "REMOVE_BUG"
export const BUG_UPDATE = "UPDATE_BUG"

// Reducer
const initialState =  [
    {
        id : 1,
        description : "Description du bug",
        solved : false
    }
]
export default function bugReducer (state = initialState , dispatcher) {
    switch (dispatcher.type){
        case BUG_ADDED :
            return [...state , {id : uuidv4() , description: dispatcher.payload.description , solved: false }]
        case BUG_REMOVE :
            return state.filter(e => {
                return e.id !== dispatcher.payload.id ;
            })
        case BUG_UPDATE :
            return state.map(e => {
                return e.id !== dispatcher.payload.id ? e : {...e , solved : true};
            })
    }
    return state
}