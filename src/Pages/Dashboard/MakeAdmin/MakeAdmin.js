import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react'


export default function MakeAdmin() {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    // const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value)
        // console.log(e)
    }
    const handleAdminSubmit = e => {
// need lowerCase for server understand
        const user = { email: email.toLocaleLowerCase() }
        fetch('https://mobile-dokan-server.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    alert('created Successfully')
                    setSuccess(true)
                } else {
                    alert('something wrong')
                    setSuccess(false)

                }
                // empty input field
                // for name field need must and here name is email  
                e.target.email.value = ''
                setEmail('')
            })


        e.preventDefault();
    }
    return (
        <div>
            <h1>Make an Admin</h1>
            <form onSubmit={handleAdminSubmit}
                style={{ display: 'flex', justifyContent: 'center' }}

            >
                <TextField
                    required
                    sx={{ width: '50%' }}
                    label="Email"
                    variant="standard"
                    type='email'
                    name='email'

                    onBlur={handleOnBlur}
                />
                <Button size='small' type='submit' variant='contained' sx={{ backgroundColor: '#FFDA00',color:'black', borderRadius: '15px', m: 2 }}>Make Admin</Button>
            </form>
            {success && <Alert severity='success'>Made Admin Successfully</Alert>}
            {/* {!success && <Alert severity='error'>Problem occurred Making admin</Alert>} */}
        </div>
    )
}
