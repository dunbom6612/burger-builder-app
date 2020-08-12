import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }
    
    cancelClickHandler = () => {
        this.props.history.goBack();
    }
    continueClickHandler =() => {
        this.props.history.push('/checkout/contact-data');
    }

    render(){
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} cancelClick={this.cancelClickHandler} 
                continueClick={this.continueClickHandler}/>
            </div>
        )
    }

}

export default Checkout;