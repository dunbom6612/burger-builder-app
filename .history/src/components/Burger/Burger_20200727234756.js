import React from 'react'
import BurgerIngredient from './Burgeringredient/Burgeringredient'

const burger = (props) => {
    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top'/>
            <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='meat'/>
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
       

}

export default burger;