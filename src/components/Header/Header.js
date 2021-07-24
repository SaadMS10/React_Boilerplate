import React from 'react';
import './Header.scss';
import { clearToken } from '../../Redux/reducers/authslice';
import {useSelector} from "react-redux"
import user from "../../assets/images/user.png"
import wishlist from "../../assets/images/wishlist.png"
import compare from "../../assets/images/compare.png"
import login from "../../assets/images/login.png"
import logout from "../../assets/images/logout.png"
import cart from "../../assets/images/cart.png"
import logo from "../../assets/images/icons8-abc-96.png"
import {Link} from "react-router-dom"
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import pinterest from "../../assets/images/pinterest.png";
import instagram from "../../assets/images/instagram.png";
import phone from "../../assets/images/phone.png";
import icon from "../../assets/images/icon.png";
import mail from "../../assets/images/mail.png";
import { Button, notification } from 'antd';

import Cart from '../Cart/Cart';

const Header = () => {
    const stated = useSelector(state => state.cart)
   
    const count=(stated).filter(state=>state.quantity> 0).length
   
const opensidebar = () => {
    const args = {
      message: 'Notification Title',
      description:
    
      <div className="footer">
      <ul>
        <h3 >About The Store</h3>
        <div className="border-1"></div>
        <div className="border-2"></div>
        <li>
          <p>One of the most popular on the web <br/> is shopping</p>
        </li>
        <li>
          <img src={icon} />
          Wonder Street USA,Newyork
        </li>
        <li>
          <img src={phone} />
          +1-541-754-3010
        </li>
        <li>
          <img src={mail} />
          hello@saad.com
        </li>
        <li className="footer-links">
            <a href="#"> <img src={facebook}/> </a>
            <a href="#"> <img src={instagram}/> </a>
            <a href="#"> <img src={linkedin}/> </a>
            <a href="#"> <img src={twitter}/> </a>
            <a href="#"> <img src={pinterest}/> </a>
        </li>
      </ul>
    </div>
,
      duration: 0,
      className: 'sidebar',
      top:0
    };
    console.log("Insiderbar")
    notification.open(args);
  };
    function cleartoken(){
        window.localStorage.clear();
        window.location.reload(true);
        

    }
    
    
    return (
    <>
     <div className="header">
        <p className="header__p">Welcome To Ecommerce</p> 
        <p className="header__ps">Call +92 3444444444</p> 
      
        <a className="header__a"><img src={user}/>Account</a>

        <a className="header__a"><img src={wishlist}/>Wishlist</a>
        <a className="header__a"><img src={compare}/>Compare</a>
        <a className="header__a"><img src={login}/>Login</a>
        {/* <button   onClick={cleartoken} className="btn-primary btn">Signout</button>
       <p className="header__ps">{count}</p>  */}
       </div>
      

   <div className="sub-header">

    <ul >
        <li className="nav-logo"><img src={logo}></img></li>
        <li className="nav"><a>Home</a></li>
        <li className="nav"><a>Shop</a></li>
        <li className="nav"><a>About</a></li>
        <li className="nav"><a>Women's </a></li>
        <li className="nav"><a>Men's</a></li>
        <li className="nav"><a>Blog</a></li> 
        <li className="nav-icon"><button onClick={opensidebar}><img src={cart}/></button>{count}</li>
    

    </ul>

   </div>

    
    </>
    );
}

export default Header;
