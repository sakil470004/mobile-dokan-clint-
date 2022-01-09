import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Review from '../Review/Review'

export default function CustomerReview({
    //  comments, setComments, isCommentChange 
}) {



    // useEffect(() => {
    //     fetch('https://jerins-parlour-server.herokuapp.com/comment')
    //         .then(res => res.json())
    //         .then(data => {
    //             setComments(data);
    //         })
    // }, [isCommentChange, setComments]);

    const reviews = [
        {
            'name': 'Mynul',
            'id': 1,
            'message': 'hoooooooooooo'
        },
        {
            'name': 'sakil',
            'id': 1,
            'message': 'hoooooooooooo'
        },
        {
            'name': 'Nayeem',
            'id': 1,
            'message': 'hoooooooooooo'
        },
        {
            'name': 'Tareq',
            'id': 1,
            'message': 'hoooooooooooo'
        }
    ]

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
