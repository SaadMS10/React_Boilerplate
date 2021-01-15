/* 
   define all your routes here and it will run automatically
 */

import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from "../screens/Home/Home";

const index = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" name="home" component={Home} />
            </Switch>
        </Router>
    );
}

export default index;