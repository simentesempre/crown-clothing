import React, { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './signin.styles.scss'

const SignIn = () => {
    
    const [userCredentials, setUserCredentials] = useState({
        email:'',
        password:''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = userCredentials
        try {
            await auth.signInWithEmailAndPassword(email, password)
            setUserCredentials({
                email:'',
                password:''
            })
        } catch(err){
            console.error(err)
        }
    }

    const handleChange = (e) => {
        const {value, name} = e.target
        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }
 
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in using your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} label="email" name="email" type="email" value={userCredentials.email} required />
                <FormInput handleChange={handleChange} label="password" name="password" type="password" value={userCredentials.password} required />
                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
    
}

export default SignIn