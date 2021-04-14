import React from 'react';

import logo from './../../logo.svg';
import classes from './Home.css';

const home = () => (
    <div className={classes.Home}>
      <img src={logo} className={classes.HomeLogo} alt="logo" />
      <p>Elena Ballesté Izuzquiza</p>
    </div>
)

export default home;
