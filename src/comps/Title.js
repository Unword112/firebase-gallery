import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Navbar';
import SignIn from './Account/Signin';
import SignUp from './Account/Signup';
import App from '../App';

const Title = () => {
  return (
      <h1>Gallery</h1>
      <h2>Your Gallery</h2>
      <p>import to your Gallery</p>
    </div>
  )
}

export default Title;