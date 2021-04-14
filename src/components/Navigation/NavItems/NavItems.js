import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.css'

const navItems = (props) => (
    <ul className={classes.NavItems}>
        <NavItem link="/"> Home </NavItem>
        <NavItem link="/characters"> Characters </NavItem>
    </ul>
);

export default navItems;