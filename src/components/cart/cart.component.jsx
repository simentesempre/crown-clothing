import React from 'react'

import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
 
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart.styles.scss'

const Cart = ({cartItems, history, toggleCartHidden}) => {

    const handleClick = () => {
        toggleCartHidden()
        history.push('/checkout')
    }

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    (cartItems.length) ? 
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )) : (
                        <span className="empty-message">No items in your cart</span>
                    )
                }
            </div>
            <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart: { cartItems }}) => ({
    cartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))