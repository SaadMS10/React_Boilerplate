import React from "react"
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"
const ProductItem = ()=>{
    let { id } = useParams();
    const product = useSelector(state => state.cart)
    id=id-1;
   const prod=(product[id])
  
    if(!prod){
        return(
            <h2>Product Not found</h2>
        )
    }
    
    return(
        <>
        <div className="container">
         <h6>{prod.id}</h6>
         <h6>{prod.name}</h6>
         <h6>{prod.price}</h6>
        </div>
        </>
    )
}
export default ProductItem;