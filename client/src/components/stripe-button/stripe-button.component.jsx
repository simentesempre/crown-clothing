import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_HZcqxYlEZfayOiHdDSTonEmY00kz5BD7ET'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(res => {
            alert('Payment succesful')
        }).catch(err => {
            console.log('Payment error: ', JSON.parse(err))
        })
    }

    return (
        <StripeCheckout 
            label="Pay now" 
            name="Crown Clothing" 
            billingAddress 
            shippingAddress 
            image="https://sendeyo.com/up/d/f3eb2117da" 
            description={`Your total is $${price}`} 
            amount={priceForStripe} 
            panelLabel="Pay Now" 
            token={onToken} 
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton