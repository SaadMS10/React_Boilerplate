import React from 'react';
import ContextWrapper from './context/ContextWrapper';
import Routes from './routes'
import './index.scss';
import "bootstrap";

const App = () => {
  return (
    <ContextWrapper>
      <Routes/>
    </ContextWrapper>
  );
}

export default App;
