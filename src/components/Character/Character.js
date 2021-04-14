import React from 'react';

import classes from './Character.css';

const characterCard = (props) => (
    <li className={classes.Card} onClick={props.clickedItem}>
        <img src={props.img} alt={props.name}/>
        <p> {props.name} </p>
    </li>
);

export default characterCard;