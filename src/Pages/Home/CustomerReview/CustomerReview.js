import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Review from '../Review/Review'

export default function CustomerReview() {
    const [reviews, setReviews] = useState([])



    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    },  []);



    return (
        <div id='reviewWeGot'>
            <Box sx={{ flexGrow: 1, my: 5 }}>
                <Container>

                    <Typography sx={{ fontWeight: 600, m: 2, textAlign: 'left' }} variant="h4" component="div" >
                        Review <span className='color1'> We Got</span>
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }}
                        style={{ maxHeight: 400, overflowY: 'auto' }}
                        columns={{ xs: 4, sm: 8, md: 12 }}>
                        {reviews.map((review, index) => (
                            <Grid item xs={4} sm={4} md={4} key={index}>

                                <Review
                                    review={review}
                                    key={review._id}
                                >

                                </Review>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}
