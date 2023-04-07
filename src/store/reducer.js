import { combineReducers } from 'redux'
import bugsReducer from "./bugs"
import userReducer from "./users"

export default combineReducers (
{
            bugs : bugsReducer ,
            users : userReducer
        }
)