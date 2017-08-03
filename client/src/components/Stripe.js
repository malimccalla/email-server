import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Stripe extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        name={'Walk Tall'}
        description="@generalroots"
        image="https://pbs.twimg.com/profile_images/669133764207976448/m3MKvWMn.jpg"
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        panelLabel="Pay"
      >
        <button className="btn">Buy Album</button>
      </StripeCheckout>
    );
  }
}

Stripe.propTypes = {
  handleToken: PropTypes.func.isRequired,
};

export default connect(null, actions)(Stripe);
