import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "antd";

import "./HomeApp.css";

const HomeApp = () => {
  return (
    <div className="HomeApp">
      <ul>
        <li>
          <Link component={Button} to="/">Home</Link>
        </li>
        <li>
          <Link component={Button} to="/login">Login</Link>
        </li>
        <li>
          <Link component={Button} to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomeApp;
