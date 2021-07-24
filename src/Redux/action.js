export const Setuser = "SETUSER"
export const Settoken= "SETTOKEN"
export const Setauth="SETAUTH"

export const setuser=()=>{
    return{
    type: Setuser,
    payload: user
    }
}
