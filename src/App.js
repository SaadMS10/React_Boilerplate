import React from 'react';
import ContextWrapper from './Context/ContextWrapper';
import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.scss';
import Header from "./components/Header/Header";

const App = () => {
  return (
    <ContextWrapper>
        <Header></Header>
      <Routes/>
    </ContextWrapper>
  );
}

export default App;
