import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../../img/croma_logo.png'
import googleLogo from './../../../img/Group 573.png'
import useAuth from './../../../hooks/useAuth'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
export default function Login() {
    const { signInWithGoogle } = useAuth();

    const location = useLocation()
    const history = useHistory()

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
       

    }

    return (
        <div style={{ marginTop: '200px' }}>
            <div >
                <div>
                    <img alt='logo' width={180} src={logo} />
                </div>
                <h2>Login With</h2>

                <Button
                    onClick={handleGoogleSignIn}
                    style={{ color: 'black', width: '400px', borderRadius: '100px' }}
                    variant="outlined" >

                    <img alt='googlelogo' style={{ margin: '10px' }} src={googleLogo} width='24' />
                    Continue With Google

                </Button>
                <br />
                <br />
                Don't have an account? <NavLink to='/register'>Create an account</NavLink>

            </div>
        </div>
    )
}
