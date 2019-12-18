import React from 'react'

import SignIn from '../../components/signin/signin.component.jsx'
import SignUp from '../../components/signup/signup.component.jsx'

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

