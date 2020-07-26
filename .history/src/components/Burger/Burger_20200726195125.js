import React,{Component} from 'react'
import BurgerIngredient from './Burgeringredient/Burgeringredient'
import Layout from '../Layout/Layout';

class Burger extends Component {
   render()  {
    return (
        <BurgerIngredient type='bread-top'/>
    )
       

   }
}

export default Burger;