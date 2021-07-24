/* 
   define all your routes here and it will run automatically
 */

import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {useSelector} from "react-redux"
import RouteConfig from './RouterComponents';
import Login from '../screens/Login/Login';

const Index = () => {
    const isLoggedin = useSelector(state=>state.auth.isAuthenticated)
    console.log(isLoggedin)
    var logon= localStorage.getItem("token");
    return (
        <Router>
            <Switch>
                {(isLoggedin || logon != null)?     
                  <RouteConfig/>       
                :
                <Login/>
            

                }
                
             
            </Switch>
        </Router>
    );
}

export default Index;