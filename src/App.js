import logo from './logo.svg';
import React from 'react';
import './App.css';

const baseURL = `${process.env.REACT_APP_BACKEND_SERVICE_URL}`;

const getUser = () => {
  fetch(baseURL + '/user/').then((response) => {
    return response.json;
  });
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getUser}>GET /user/</button>
      </header>
    </div>
  );
}

export default App;
