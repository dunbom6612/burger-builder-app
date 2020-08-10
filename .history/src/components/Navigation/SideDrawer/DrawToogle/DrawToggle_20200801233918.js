import React from "react";
import classes from "/DrawToogle.css";
const drawToggle = (props) => (
  <div className={classes.DrawToogle} onClick={props.clicked}>
    {" "}
    MENU
  </div>
);

export default drawToggle;
