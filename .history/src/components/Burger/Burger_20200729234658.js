import React from 'react'
import BurgerIngredient from './Burgeringredient/Burgeringredient'
import classes from './Burger.css'

const burger = (props) => {
    const transformedIngredient = Object.keys(props.ingredients).map(igKey => {
        return Array(props.ingredients[igKey]).map((_,i) => {
           return  <BurgerIngredient key={igKey + i} type={igKey} />
        });

    });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredient}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
       

}

export default burger;