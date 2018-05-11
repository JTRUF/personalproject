import React, {Component} from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

class Checkout extends Component{

  onToken = (token) => {
      token.card = void 0;  // not storing card information
      axios.post('/api/charge', {token, amount: this.props.amount}).then(res => {
          alert('Thank you for your payment'); window.location.reload();
      }).catch( err => console.log(err))
  }

  render(){
  return(
        <div>
            <StripeCheckout
                token = {this.onToken}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
                amount = {this.props.amount}>
                <button style={{backgroundColor: 'white', height: 'fitContent', width: 'fitContent', padding: 5, fontSize: 15}}>Purchase</button>
            </StripeCheckout>
        </div>
        )
    }
}

export default Checkout;