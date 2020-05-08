import React from 'react';

import Header from './components/Header';
import Finder from './components/Finder';

import './styles/global.css';

const appStyle = {
  display: 'flex',
  justifyContent: 'center',
}

function App() {
  return (
    <>
      <Header />
      <div style={appStyle}>
        <Finder />
      </div>
    </>
  );
}

export default App;
