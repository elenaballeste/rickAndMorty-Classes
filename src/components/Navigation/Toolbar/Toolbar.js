import React from 'react';
import Logo from '../../../UI/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './Toolbar.css'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Logo />
        <nav>
            <NavItems />
        </nav>
    </header>
);

export default toolbar;