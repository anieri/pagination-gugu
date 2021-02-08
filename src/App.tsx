import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomeApp from './home/HomeApp';
import LoginApp from './login/LoginApp';
import SignupApp from './signup/SignupApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact><HomeApp /></Route>
        <Route path="/login" exact><LoginApp /></Route>
        <Route path="/signup" exact><SignupApp /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
