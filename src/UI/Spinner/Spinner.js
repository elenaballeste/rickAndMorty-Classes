import React from 'react';
import classes from './Spinner.css'
import logo from './../../logo.svg';

const spinner = (props) => (
    <div className={classes.SpinnerMain}>
        <img src={logo} className={classes.Spinner} alt="logo" />
    </div>
);

export default spinner;