import React from "react";
import classes from "./DrawToogle.css";
const drawToggle = (props) => (
  <div className={classes.DrawToogle} onClick={props.clicked}>
    <div> </div>
    <div> </div>
    <div> </div>
  </div>
);

export default drawToggle;
