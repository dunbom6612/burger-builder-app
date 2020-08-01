import React from 'react';
import classes from './NavigationItem.css'
import NavigationItem from './NavigationItem/NavigationItem'


const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem />   
    </ul>

);

export default navigationItems;