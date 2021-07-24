import React,{useEffect} from 'react';

import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.scss';




import {useSelector} from "react-redux";



const App = () => {

 
  var logon= localStorage.getItem("token");
   

  const isLoggedin = useSelector(state => state.auth.isAuthenticated )


  return (
   <>
      
        
       <Routes/>
    
      

  </>
  
  );
}

export default App;
