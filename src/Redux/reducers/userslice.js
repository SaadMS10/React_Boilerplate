import {createSlice}from "@reduxjs/toolkit";
const initialState={
    id: 0,
    username: "",
    email: "",
    password: ""
}
const user = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
      setUser(state, { payload }) {
        return(state=payload)
      },
    },
  });
export const {setUser}=user.actions
export default user.reducer