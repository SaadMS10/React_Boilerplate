import {Setuser,Settoken,Setauth} from "./action"
const initialState={
    id:"",
    usernamme:"",
    email:"",
    password:""
    
}

const setuser=(state=initialState,state1=initialAuthState,action)=>{
    switch(action.type){
        case(Setuser):
        return(state=action.payload!=null ? action.payload : null)
  
    }

}
export default setuser;
