import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ProductItem from '../../components/ProductItem/ProductItem';
import Home from "../../screens/Home/Home";
import Cart from "../../components/Cart/Cart"
import Header from '../../components/Header/Header';
const RouteConfig =()=>{
    return(
   <Router>
       <Header/>
       <Switch>
       <Route exact path="/" name="home" component={Home} />
       <Route path="/cart"  name= "cart" component={Cart} />
       
       <Route path="/product/:id" component={ProductItem}/>
       <Route component={()=><h2>404 Not Found</h2>}/>
       </Switch>
   </Router>
    )
}
export default RouteConfig;