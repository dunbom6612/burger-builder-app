import React from "react";
import classes from './BuildControls.css';


const buildControl = (props) => (
    <div>
        <div>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);

export default buildControl;