import { Alert, Button, CircularProgress, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useHistory } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import logo from './../../../img/croma_logo.png'


export default function Register() {
    const [loginData, setLoginData] = useState({})

    const { user, registerUser, isLoading, authError } = useAuth()

    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleRegisterSubmit = (e) => {
    //    console.log(loginData)
        if (loginData.password !== loginData.password2) {
            alert('your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        setLoginData({})
        e.preventDefault();
    }
    return (
        <Container>
            <div style={{ marginTop: '150px' }}>
                <img alt='logo' width={180} src={logo} />
            </div>
            <h2>Register</h2>
            {!isLoading && <form onSubmit={handleRegisterSubmit}>
                <TextField
                    required
                    sx={{ width: '65%', m: 1 }}

                    label="Your Name"
                    variant="standard"
                    name='name'
                    onBlur={handleOnBlur}
                />
                <TextField
                    required

                    sx={{ width: '65%', m: 1 }}

                    label="Your Email"
                    variant="standard"
                    name='email'
                    type='email'
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
                <TextField
                    required

                    sx={{ width: '65%', m: 1 }}
                    type='password'

                    label="Confirm Password"
                    variant="standard"
                    name='password2'
                    onBlur={handleOnBlur}
                />

                <Button
                    sx={{ width: '65%', m: 1, color: '#FFDA00' }}
                    variant='contained'
                    type='submit'
                >Register</Button>
                <NavLink

                    style={{ textDecoration: 'none' }}
                    to='/login'
                >
                    <Button
                        sx={{ width: '65%', m: 1 }}
                        variant='text'
                        type=''
                    >Already Registered? Please Login</Button></NavLink>
            </form>}
            {isLoading && <CircularProgress />}
            {(user.email && !authError) && <Alert severity='success'>User Created Successfully</Alert>}
            {authError && <Alert severity='error'>{authError}</Alert>}


        </Container>
    )
}