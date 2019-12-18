import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './signin.styles.scss'

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }

    handleChange = (e) => {
        const {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { email, password } = this.state
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in using your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="email" name="email" type="email" value={email} required />
                    <FormInput handleChange={this.handleChange} label="password" name="password" type="password" value={password} required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn