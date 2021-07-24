// import { createStore} from "redux"
// import setuser from "./reducer"
// const store=createStore(setuser)
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./reducers/Rootreducers";
const store=configureStore({
    reducer:rootReducer
})
export default store;