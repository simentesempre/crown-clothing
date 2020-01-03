import React from 'react'
import { connect } from 'react-redux'

import { clearItemsFromCart, addItemToCart, removeItemFromCart } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'

const CheckoutItem = ({item, clearItemsFromCart, addItemToCart, removeItemFromCart}) => {
    const {name, quantity, price, imageUrl } = item
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt={name} src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow" onClick={()=>removeItemFromCart(item)}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={()=>addItemToCart(item)}>&#10095;</span>
            </span>
            <span className="price">{price}</span>
            <div onClick={()=>clearItemsFromCart(item)} className="remove-button">&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemsFromCart: item => dispatch(clearItemsFromCart(item)), 
    addItemToCart: item => dispatch(addItemToCart(item)), 
    removeItemFromCart: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)