import { Button, Container, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'

export default function SendReview({ isCommentChange, setIsCommentChange }) {
    const [review, setReview] = useState({});
    const form = useRef(null)

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...review };
        newInfo[field] = value;
        // console.log(newInfo)
        setReview(newInfo);
    }

    const handleAddReview = (e) => {

        // send data to the server
        fetch('https://jerins-parlour-server.herokuapp.com/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Added')
                    setIsCommentChange(!isCommentChange)
                    form.current.reset();
                }
            })
        e.preventDefault()
    }

    return (
        <div style={{ backgroundColor: '#fff8f5', paddingTop: '20px' }}>
            <Container>
                <Typography variant="h4" component="div"
                    sx={{ my: 5 }}
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

                        label="Your Name"
                        variant="standard"
                        name='name'
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
            </Container>
        </div>
    )
}
