import {combineReducers} from "@reduxjs/toolkit"
import AuthReducer from "./authslice"
import UserReducer from "./userslice"
import cartReducer from "./cartslice"
const rootReducer=combineReducers(
    {
        auth:AuthReducer,
        user:UserReducer,
        cart:cartReducer,
    }
)
export default rootReducer
