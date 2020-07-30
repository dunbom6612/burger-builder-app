import React from "react";
import classes from './BuildControls.css';


const buildControl = (props) => (
    <div>
        <div>{props.label}</div>
        <button>Less</button>
        <button>More</button>
    </div>
);

export default buildControl;