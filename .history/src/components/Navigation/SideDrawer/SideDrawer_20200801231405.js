import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux"

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
  return (
    <Aux>
      <div className={classes.SideDrawer}>
        <Backdrop show={props.open} clicked={props.closed}/>
      </div>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
          <NavigationItems />
        </div>
      </div>
    </Aux>
  );
};

export default sideDrawer;
