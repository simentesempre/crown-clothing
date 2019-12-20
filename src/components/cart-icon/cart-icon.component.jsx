import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingCartIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce((prev, curr)=>{
        return prev + curr.quantity 
    }, 0)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)