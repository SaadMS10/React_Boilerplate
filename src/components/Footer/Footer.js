import React from "react";
import "./Footer.scss";
import phone from "../../assets/images/phone.png";
import icon from "../../assets/images/icon.png";
import mail from "../../assets/images/mail.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import pinterest from "../../assets/images/pinterest.png";
import instagram from "../../assets/images/instagram.png";
const Footer = () => {
  return (
    <>
    <div className="footer-main">
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
 
      <div className="footer">
        <ul>
          <h3>Quick Links</h3>
          <div className="border-1"></div>
          <div className="border-2"></div>
          <li>
           About Us
          </li>
          <li>
            Shop Now!
          </li>
          <li>
          Women's
          </li>
          <li>
           FAQ's
          </li>
          <li>
         Contact Us
          </li>
          
        </ul>
      </div>
      <div className="footer">
        <ul>
          <h3>Customer Support</h3>
          <div className="border-1"></div>
          <div className="border-2"></div>
          <li>
           My Account
          </li>
          <li>
            Checkout
          </li>
          <li>
          Cart
          </li>
          <li>
           Order Tracking
          </li>
          <li>
         Help & Support
          </li>
          
        </ul>
      </div>

      <div className="footer">
        <ul>
          <h3>News Letter</h3>
          <div className="border-1"></div>
          <div className="border-2"></div>
          <li><p>To get the latest news and latest updates <br/> form us</p></li>
      <li>
      <label>
          Yout Email Address:
      </label>
      </li>
      <li>
      <input type="text" placeholder="Enter your email"/>
    
      </li>
      <li>
      <button>Subscribe</button>
      </li>
          
        </ul>
      </div>
      <p className="p-footer">Copyright 2021 Designed By Muhammad Saad- All rights reserved. </p>
      </div>
    
    </>
  );
};
export default Footer;
