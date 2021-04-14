import React from 'react';
import logoImage from '../../assests/images/rick-morty-logo.png'
import classes from './Logo.css'

const logo = (props) => (
    <a href="/" className={classes.Logo}>
        <img src={logoImage} alt="RickAndMortyLogo"/>
    </a>
);

export default logo;