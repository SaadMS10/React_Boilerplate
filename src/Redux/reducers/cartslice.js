import {createSlice} from "@reduxjs/toolkit"


import {INITIAL_STATE} from "../state/state"
const cart= createSlice({
     name:"cart",
     initialState:INITIAL_STATE,
     reducers:{

          add(state,{payload}){
           

               return state.map(item=>{
                    if(item.id !==payload.id ){         
                    return(item)
                    }
                    else if(item.id==payload.id){
                    return{
                        
                         ...item,
                         quantity:item.quantity+1,
                         added:true

                    }
               }
                  
               })

          },
                  del(state,{payload}){
           

               return state.map(item=>{
                    if(item.id !==payload.id ){         
                    return(item)
                    }
                    else if(item.id==payload.id){
                    return{
                        
                         ...item,
                         quantity:0,
                         added:false

                    }
               }
                  
               })

          },
         addquantity(state,{payload}){
              return state.map(item=>{
                   if(item.id==payload.id){
                        return{
                             ...item,
                             quantity:item.quantity + 1,
                             added:true
                        }
                   }
                   else{         
                    return(item)
                    }
              })
         },
         minusquantity(state,{payload}){
          return state.map(item=>{
               if(item.id==payload.id){
                    return{
                         ...item,
                         quantity:item.quantity -1,
                         added:true
                    }
               }
               else{         
                    return(item)
                    }
          })
     }
     }
     
})
export const {add,addquantity,minusquantity,del} =cart.actions
export default cart.reducer