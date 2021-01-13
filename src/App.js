import React from 'react';
import ContextWrapper from './context/ContextWrapper';
import Routes from './routes'

const App = () => {
  return (
    <ContextWrapper>
      <Routes/>
    </ContextWrapper>
  );
}

export default App;
