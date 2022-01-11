import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

export default function Review(props) {
    const { name, message, rate } = props.review;
    return (
        <Card sx={{ border: 0, boxShadow: 0, textAlign: 'left' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                    <Rating name="half-rating-read" value={parseInt(rate) / 2}
                        precision={0.5} readOnly />
                </Typography>

                <Typography style={{ maxHeight: 80, overflowY: 'auto' }} variant="body2" color="text.secondary">
                    {message}

                </Typography>
            </CardContent>

        </Card>
    )
}
