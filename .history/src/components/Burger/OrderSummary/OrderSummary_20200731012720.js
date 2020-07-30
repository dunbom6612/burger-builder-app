import React from 'react';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredient).map(igKey => {
        return <li><span>{igKey}</span>: {props.ingredient[igKey]}
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
        </Aux>
    )
};



export default orderSummary;
