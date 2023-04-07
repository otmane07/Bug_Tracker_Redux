import {v4 as uuidv4} from "uuid";
import {createReducer} from "@reduxjs/toolkit";
const initialeState = [
    {
        id: 1 ,
        name : "otmane"
    }
]
export default createReducer(initialeState , {
    ADD_USER : function (state,dispatch){
        state.push({id:uuidv4(),name:dispatch.payload.name})
    }
})