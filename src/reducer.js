import { v4 as uuidv4 } from 'uuid';
import * as actions from "./actionTypes"
const initialState =  [
    {
        id : 1,
        description : "Description du bug",
        solved : false
    }
]
export default function bugReducer (state = initialState , dispatcher) {
    switch (dispatcher.type){
        case actions.BUG_ADDED :
            return [...state , {id : uuidv4() , description: dispatcher.payload.description , solved: false }]
        case actions.BUG_REMOVE :
            return state.filter(e => {
                return e.id !== dispatcher.payload.id ;
            })
        case actions.BUG_UPDATE :
            return state.map(e => {
                return e.id !== dispatcher.payload.id ? e : {...e , solved : true};
            })
    }
    return state
}