import axios from "axios";
import * as actions from "../store/api"

const api = ({dispatch , getState}) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action)
    //make the apiCallBegan action visible
    next(action)

    const {url,methode,onSuccess,onError} = action.payload
    try {
        const callResponse = await axios({
            baseURL:"http://localhost:9001/api",
            url : url,
            method : methode ,
        })
        console.log('callResponse',callResponse)
        dispatch({type: onSuccess , payload: callResponse})
    }
    catch (error){
        console.log("error",error)
        dispatch({type: onError , payload: error})
    }
}

export default api;