import React from 'react';
import { NavLink } from 'react-router-dom'
import logoImage from '../../assests/images/rick-morty-logo.png'
import classes from './Logo.css'

const logo = (props) => (
    <NavLink to="/" exact className={classes.Logo}>
        <img src={logoImage} alt="RickAndMortyLogo"/>
    </NavLink>
);

export default logo;