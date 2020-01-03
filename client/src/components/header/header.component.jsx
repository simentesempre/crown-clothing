import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import Cart from '../cart/cart.component'

import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to={`/`}>
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to={`/shop`}>SHOP</Link>
                <Link className="option" to={`/contacts`}>CONTACTS</Link>
                {
                    currentUser ? (
                        <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                    ) : (
                        <Link className="option" to={`/signin`}>SIGN IN</Link>
                    ) 
                }
                <CartIcon />
            </div>
            {
                !hidden && <Cart />
            }
        </div>
    )
}

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)