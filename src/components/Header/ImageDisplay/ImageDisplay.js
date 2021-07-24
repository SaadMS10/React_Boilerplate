import React from "react"
import "./ImageDisplay.scss"
import display1 from "../../../assets/images/1 (3).jpg"
import display2 from "../../../assets/images/1 (2).jpg"
import display3 from "../../../assets/images/1 (9).jpg"
import display4 from "../../../assets/images/1 (11).jpg"
import display5 from "../../../assets/images/1 (14).jpg"
import icon from "../../../assets/images/instagram-color.png"


const ImageDisplay=()=>{
    return(
        <>
        <div className="displaydiv">
        {/* <a href='#'><img src={icon} /></a> */}
<img src={display1}/>
<img src={display2}/>
<img src={display3}/>
<img src={display4}/>
<img src={display5}/>

        </div>
        </>

    )
}
export default ImageDisplay;