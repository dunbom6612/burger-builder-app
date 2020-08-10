import React from "react";
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawToogle/DrawToggle';
const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <T>
    <div className={classes.Logo}>
        <Logo />
    </div>
    <nav className={classes.DestopOnly}>
        <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
