import { Alert, Button, Container, Snackbar, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import useAuth from '../../../hooks/useAuth';

export default function SendReview() {
    const [review, setReview] = useState({});
    const { user } = useAuth()
    const form = useRef(null)

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

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...review };
        newInfo[field] = value;
        // console.log(newInfo)
        setReview(newInfo);
    }

    const handleAddReview = (e) => {
        const newInfo = { ...review, name: user.displayName };
        // send data to the server
        fetch('https://mobile-dokan-server-indol.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newInfo)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // alert('Review Added')
                    handleClick()
                    form.current.reset();
                }
            })
        e.preventDefault()
    }

    return (
        <div style={{ paddingTop: '20px' }}>
            <Container>
                <Typography variant="h4" component="div"
                    sx={{ my: 2 }}

                >

                    Send Review From Here

                </Typography>
                <form
                    onSubmit={handleAddReview}
                    ref={form}
                >
                    <TextField
                        required
                        sx={{ width: '50%', m: 1 }}

                        label="Give Rate out of 10"
                        variant="standard"
                        name='rate'
                        type='number'
                        onBlur={handleOnBlur}
                    />

                    <TextareaAutosize
                        maxRows={4}
                        required
                        onBlur={handleOnBlur}
                        aria-label="100px"
                        name='message'
                        placeholder="Enter your message"
                        style={{ width: '50%', height: '100px', margin: '10px' }}
                    />
                    <Button type='submit' variant='outline' sx={{ width: '50%', my: 3 }}>Submit</Button>
                </form>
                {/* snackbar code */}
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Review Added
                    </Alert>
                </Snackbar>
                {/* end of snackbar code */}
            </Container>
        </div>
    )
}
