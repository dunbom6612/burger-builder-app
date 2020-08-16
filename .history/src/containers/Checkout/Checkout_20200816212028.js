import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { Route } from "react-router-dom";
import { connect} from 'react-redux';

class Checkout extends Component {


  cancelClickHandler = () => {
    this.props.history.goBack();
  };
  continueClickHandler = () => {
    this.props.history.push("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ings}
          cancelClick={this.cancelClickHandler}
          continueClick={this.continueClickHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients
  };
};


export default connect(mapStateToProps)(Checkout);
