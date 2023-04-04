import {createStore} from "redux";
import bugReducer from "./reducer"
import {devToolsEnhancer} from "redux-devtools-extension";

const store = createStore(bugReducer , devToolsEnhancer({trace : true}))
// devToolsEnhancer({trace : true} work similarly to window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// but this package "redux-devtools-extension" make the configuration of the extension possible enable trace
export default store ;