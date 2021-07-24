import {createSlice} from "@reduxjs/toolkit"
const intialState={
    token: null,
    isAuthenticated:false
}
const auth=createSlice({
    name:"auth",
    initialState:intialState,
    reducers:{
        saveToken(state,{payload}){
        return{...state,token:payload}
        },
        clearToken(state){
            return{...state,isAuthenticated:false,token:null}
        },
        AuthState(state,{payload}){
            return{...state,isAuthenticated:payload}
        }

    }
})
export const {saveToken,clearToken,AuthState}=auth.actions;
export default auth.reducer