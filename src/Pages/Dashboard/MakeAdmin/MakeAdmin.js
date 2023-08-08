import { Alert, Button, Snackbar, TextField } from '@mui/material';
import React, { useState } from 'react'


export default function MakeAdmin() {
    const [email, setEmail] = useState('');

    // const { token } = useAuth();

    // snackbar code
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // end of snackbar code




    const handleOnBlur = e => {
        setEmail(e.target.value)
        // console.log(e)
    }
    const handleAdminSubmit = e => {
        // need lowerCase for server understand
        const user = { email: email.toLocaleLowerCase() }
        fetch('https://mobile-dokan-server-indol.vercel.app/users/admin', {
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
                    handleClick()
                } else {
                    alert('something wrong')
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
                <Button size='small' type='submit' variant='contained' sx={{ backgroundColor: '#FFDA00', color: 'black', borderRadius: '15px', m: 2 }}>Make Admin</Button>
            </form>

            {/* snackbar code */}
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Admin Make successfully
                </Alert>
            </Snackbar>
            {/* end of snackbar code */}

        </div>
    )
}
