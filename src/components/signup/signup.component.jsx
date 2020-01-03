import React, { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './signup.styles.scss'

const SignUp = () => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email:'',
        password:'',
        confirmPassword:''
    })

    const { displayName, email, password, confirmPassword } = userCredentials

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            console.log('Passwords don\'t match')
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            setUserCredentials({
                displayName: '',
                email:'',
                password:'',
                confirmPassword:''
            })
        } catch(err) {
            console.error(err)
        }
    }

    
    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                    type="text" 
                    name="displayName" 
                    value={displayName} 
                    onChange={handleChange} 
                    label="Display Name" 
                    required></FormInput>
                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={handleChange} 
                    label="Email" 
                    required></FormInput>
                <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={handleChange} 
                    label="Password" 
                    required></FormInput>
                <FormInput 
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    onChange={handleChange} 
                    label="Confirm Password" 
                    required></FormInput>
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp