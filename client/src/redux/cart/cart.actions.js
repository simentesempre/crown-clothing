import { CartActionTypes } from './cart.types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemToCart = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItemFromCart = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemsFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEMS,
    payload: item
})