import { Alert, Button, CircularProgress, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../../img/croma_logo.png'
import googleLogo from './../../../img/Group 573.png'
import useAuth from './../../../hooks/useAuth'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
export default function Login() {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation()
    const history = useHistory()




    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);


    }

    return (
        <Container>
            <div style={{ marginTop: '150px' }}>
                <div >
                    <div>
                        <img alt='logo' width={180} src={logo} />
                    </div>
                    <h2>Login With</h2>



                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            required

                            type='email'
                            sx={{ width: '65%', m: 1 }}
                            label="Your Email"
                            variant="standard"
                            name='email'
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            required

                            sx={{ width: '65%', m: 1 }}
                            type='password'
                            label="Your Password"
                            variant="standard"
                            name='password'
                            onBlur={handleOnBlur}
                        />

                        <Button

                            sx={{ width: '65%', m: 1, color: '#FFDA00' }}
                            variant='contained'
                            type='submit'
                        >Login</Button>

                    </form>
                    <p>-----------------------------------------------</p>

                    {isLoading && <CircularProgress />}
                    {(user?.email && !authError) && <Alert severity='success'>User Login Successfully</Alert>}
                    {authError && <Alert severity='error'>{authError}</Alert>}

                    <Button
                        onClick={handleGoogleSignIn}
                        style={{ color: 'black', width: '65%', borderRadius: '100px' }}
                        variant="outlined" >

                        <img alt='googlelogo' style={{ margin: '10px' }} src={googleLogo} width='24' />
                        Continue With Google

                    </Button>
                    <br />
                    <br />
                    Don't have an account? <NavLink to='/register'>Create an account</NavLink>

                </div>
            </div>
        </Container>
    )
}
