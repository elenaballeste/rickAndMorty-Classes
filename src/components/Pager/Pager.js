import React from 'react';

import classes from './Pager.css';

const pager = (props) => (
    <div className={classes.Pager}>
        <button onClick={props.clickedPrev} disabled={props.disabledPrev}>Prev</button>
        <p>Page {props.currentPage} of {props.totalPages}</p>
        <button onClick={props.clickedNext} disabled={props.disabledNext}>Next</button>
    </div>
);

export default pager;