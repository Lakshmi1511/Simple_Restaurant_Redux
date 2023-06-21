import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restReducer } from "./restReducer";

//reducer
const reducer=combineReducers({
    reducer1:restReducer
})
//create middleware
const middleware=[thunk]
//create store
const store=createStore(reducer,applyMiddleware(...middleware))

//export
export default store