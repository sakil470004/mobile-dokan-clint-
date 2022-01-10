import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Box } from '@mui/system';


export default function DashboardHomeCard(props) {
    const {   mobileName, img, action } = props.product;

    return (
        <Card sx={{  border: 0, boxShadow: 0, textAlign: 'left' }}>
            <Box sx={{display:'flex',justifyContent:'space-between',ml:1,mr:1}}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '60px' }}
                    image={img}
                    alt={mobileName}
                />
              
                <Button sx={{px:3}}
                size='small'
                 variant='outlined'>{action}</Button>
            </Box>
            <CardContent>
                <Typography variant="h5" component="div">
                    { mobileName}
                </Typography>
              
{/* 
                <Typography variant="body2" color="text.secondary">
                    {description}

                </Typography> */}

                {props.children}
            </CardContent>
        </Card>
    )
}
