// import {createStore} from "redux";
// import bugReducer from "./bugs"
// import {devToolsEnhancer} from "redux-devtools-extension";
//
// const configureAppStore = createStore(bugReducer , devToolsEnhancer({trace : true}))
// // devToolsEnhancer({trace : true} work similarly to window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// // but this package "redux-devtools-extension" make the configuration of the extension possible enable trace
// export default configureAppStore ;

// creating the store using toolkit function

import {configureStore , getDefaultMiddleware} from "@reduxjs/toolkit";
import rootReducer from "./reducer"
import logger from "../middleware/logger"
import error from "../middleware/error";

const configureAppStore = configureStore(
    {
            reducer : rootReducer ,
            middleware : [...getDefaultMiddleware(),logger("console passed in param"),error]
         }
)

export default configureAppStore ;