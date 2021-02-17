import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Users from './components/users/Users';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Users />
      </div>
    </div>
  );
}

export default App;
