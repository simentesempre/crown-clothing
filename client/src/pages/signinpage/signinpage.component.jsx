import React from 'react'

import SignIn from '../../components/signin/signin.component'
import SignUp from '../../components/signup/signup.component'

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

