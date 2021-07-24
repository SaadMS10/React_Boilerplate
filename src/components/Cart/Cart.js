import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addquantity,
  minusquantity,
  del,
} from "../../Redux/reducers/cartslice";
import { Link } from "react-router-dom";
import "./Cart.scss";
import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import Slide from "../Slider/Slider"
import ImageDisplay from "../Header/ImageDisplay/ImageDisplay";
import Footer from "../Footer/Footer";

const Cart = () => {
  const stated = useSelector((state) => state.cart);
  const count = stated.filter((state) => state.quantity > 0).length;
  const dispatch = useDispatch();
  var total = 0;
  var shipping = 500;
  console.log(stated);
  return (
    <>
      <br />
      <br />
   <br/>
   <br/>
  
      <div className="cart-header">
<h2>Cart</h2>
<div>
<a>Home</a>
<p>|</p>
<Link to="/cart"><a style={{color:"#F53585"}}>Cart</a></Link>
</div>
</div>
      <div className="cart">
       
      
        <table>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantiy</th>
            <th>Total</th>
            <th></th>
            
          </tr>
          {stated
            .filter((state) => state.added == true)
            .map((state) => {
              total = total + state.quantity * state.price;
            
              return (
                
                <tr>
                  <td>
                    <img className="cart-img" src={state.img} />
                  </td>
                  <td>{state.name}</td>
                  <td>{state.price}</td>
                  <td>
                    <div className="cart_quantity_div">
                      <button
                        className="cart_quantity"
                        onClick={() => {
                          dispatch(minusquantity(state));
                        }}
                      >
                        -
                      </button>
                      {state.quantity}
                      <button
                        className="cart_quantity__add"
                        onClick={() => {
                          dispatch(addquantity(state));
                        }}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td> Rs {state.quantity * state.price}</td>
                  <td>
                    <button
                      className="cart-delete"
                      onClick={() => {
                        dispatch(del(state));
                      }}
                    >
                      <DeleteOutlined />
                    </button>
                  </td>
                </tr>
       
                
              );
            })}
        </table>
      </div>
      <div className="cart-card">
        <Card
          title="Cart Total"
          style={{ width: 400, fontFamily: "'Encode Sans SC', sans_serif" }}
        >
          <p>
            SubTotal <span style={{ float: "right" }}>Rs {total} </span>
          </p>
          <p>
            Shipping<span style={{ float: "right" }}> Rs {shipping} </span>{" "}
          </p>
          <p>
            Grand Total
            <span style={{ float: "right" }}> RS {total + shipping}</span>
          </p>
          <button className="cart-button">Proceed To Checkout</button>
        </Card>
      </div>
      <button className="shopping-button">Continue Shopping</button>
     <div className="carousel"><Slide/></div> 
     <div><ImageDisplay/></div>
     <Footer/>
    </>
  );
};
export default Cart;
