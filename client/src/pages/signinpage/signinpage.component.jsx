import React from 'react'

import SignIn from '../../components/signin/signin.component.jsx.js'
import SignUp from '../../components/signup/signup.component.jsx.js'

import './signinpage.styles.scss'

const SignInPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )

}

export default SignInPage

