import React from 'react'

import { connect } from 'react-redux'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import './checkout.styles.scss'

const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.length ? cartItems.map(cartItem=>(
                <CheckoutItem key={cartItem.id} item={cartItem} />
            )) : <span>No products</span>
        }
        <div className="total"><span>TOTAL: ${cartTotal}</span></div>
        <StripeCheckoutButton price={cartTotal} />
    </div>
)

const mapStateToProps = ({cart: { cartItems }}) => ({
    cartItems,
    cartTotal: cartItems.reduce((prev, curr) => {
        return prev + (curr.price * curr.quantity)
    }, 0)
})

export default connect(mapStateToProps)(CheckoutPage)