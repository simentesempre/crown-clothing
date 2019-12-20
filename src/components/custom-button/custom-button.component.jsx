import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...others}) => {
    return (
        <button 
            className={`${isGoogleSignIn && 'google-sign-in'} ${inverted && 'inverted'} custom-button`} 
            {...others}>
                {children}
            </button>
    )
}

export default CustomButton