import React from 'react';
import classes from './burgerIngredient/css';

const burgerIngredient = (props) => {
    let ingredient = null;
    
    switch(props.type) {
        case ('bread-bottom'): 
            ingredient = <div className={classes.BreadBottom}></div>
            break;
            case ('bread-top'): 
            ingredient = (<div className={classes.BreadBottom}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
            </div>)
            break;
            case ('meat'): 
            ingredient = <div className={classes.Meat}></div>
            break;
    }
    return (

    );
};

export default burgerIngredient;