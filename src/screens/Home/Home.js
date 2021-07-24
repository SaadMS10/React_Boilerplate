import React from 'react';
import './Home.scss';

import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { Carousel } from 'antd';

import Cart from '../../components/Cart/Cart';
import Product from '../../components/Product/Product';
import slider1 from '../../assets/images/slider_2.png'
const Home = () => {
    const {id,name,email}=({
        id: localStorage.getItem("user_id"),
        name: localStorage.getItem("user_name"),
        email:localStorage.getItem("user_email")
    })
  

const contentStyle = {
  height: '500px',
  color: 'black',

background:"#f4f4f4"

};
    return (
        <div >
       
            <div  >
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <div >
               <Carousel  effect="fade"  dotPosition='right'>
    <div >
    <div style={contentStyle}>
        <div  class="hero-text">
        <p >Limited Time Offer</p>
    <p>Winter Spring!</p>
    <p>Take 20% off 'Sale Must-Haves'</p>
    <button className="hero-button" style={{float:'left'}}> Shop Women's</button>
        </div>
 
    <img  className="hero-image" src={slider1}/>
  

    </div>
    </div>
    <div>
      <div style={contentStyle}>
    <h3  >2</h3>
    <img  className="hero-image" src={slider1}/>
     <button>Shop Women's</button>
    </div>
    </div>
    <div>
    <div style={contentStyle}>
    <h3  >3</h3>
    </div>
    </div>
    <div>
    <div style={contentStyle}>
    <h3  >4</h3>
    </div>
    </div>
  </Carousel>,

           

                <p>ID:{id}, USERNAME: {name}, EMAIL: {email}</p>
             
                <Link to="/cart">
                    Cart
                </Link>
                </div>
                <Product/>
            </div>
        </div>
    );
}

export default Home;