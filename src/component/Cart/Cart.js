import React, {Component} from 'react';
import './Cart.css';

class Cart extends Component {
    constructor() {
        super()
    }
render() {
    return (
    <div>
        {/* <Cart_Item_Row/> */}
        <div>
            <p>Subtotal</p>
            <input className="subtotal" placeholder="$"/>
            <button>
                Purchase
            </button>
        </div>
    </div>
        )
    } 
}
export default Cart;