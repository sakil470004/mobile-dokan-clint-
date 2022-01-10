import { Button, Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import NavigationTop from '../Shared/NavigationTop/NavigationTop';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import Footer from '../Shared/Footer/Footer';
import BuyNowModule from './BuyNowModule';

export default function ShowProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { img, brand, first_name, frontCamera, rearCamera, price, battery, ram, rom ,cup} = product;

    // model 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    useEffect(() => {
        const uri = `http://localhost:5000/products/${productId}`;
        // console.log(uri)
        fetch(uri)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId])

    return (
        <div>
            <NavigationTop />

            <Container sx={{ mt: 2 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <img src={img} alt={first_name} width='100%'
                        />

                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        <Box >
                            <Typography sx={{ fontWeight: 600, m: { xs: 1, sm: 2, md: 3 }, textAlign: 'left' }} variant="h3" component="div" >
                                {first_name}
                            </Typography>

                            <Typography sx={{ color: '#48a7a3', fontWeight: 600, m: { xs: 1, sm: 2, md: 3 }, textAlign: 'left' }} variant="h3" component="div" >
                                {price} <span style={{ fontSize: '30px' }}>
                                    <MonetizationOnOutlinedIcon />
                                </span>
                            </Typography>
                            <Typography sx={{ fontWeight: 600, m: { xs: 1, sm: 2, md: 3 }, textAlign: 'left' }} variant="h5" component="div" >
                                {brand} LTD

                            </Typography>
                            <Button
                                onClick={handleOpen}
                                variant='outlined'
                                color="inherit"
                                sx={{ '&:hover': { background: '#FFDA00' } }}
                            >Buy Now</Button>
                            {/* go to module now and send it server */}
                            <BuyNowModule open={open} handleClose={handleClose} first_name={first_name}  price={price} img={img}/>
 
                        </Box>
                    </Grid>
                </Grid>
                <Divider />
                <Typography sx={{ fontWeight: 600, m: { xs: 1, sm: 2, md: 3 }, textAlign: 'left' }} variant="h3" component="div" >
                    See <span style={{ color: '#FFDA00' }}>Full Details
                    </span>
                </Typography>
                <Divider />
                <Box>
                    <Container>
                        <Typography sx={{ fontWeight: 600, m: { xs: 1, sm: 2, md: 3 }, textAlign: 'center' }} variant="h4" component="div" >
                            {first_name}
                        </Typography>

                        <Grid container sx={{ fontSize: '20px', p: 3 }} spacing={2}>
                            <Grid item xs={6} sx={{ textAlign: 'left' }}>
                                Front Camera
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                {frontCamera} MP
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container sx={{ fontSize: '20px', p: 3 }} spacing={2}>
                            <Grid item xs={6} sx={{ textAlign: 'left' }}>
                                Rear Camera
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                {rearCamera} MP
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container sx={{ fontSize: '20px', p: 3 }} spacing={2}>
                            <Grid item xs={6} sx={{ textAlign: 'left' }}>
                                Battery
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                {battery} mAh
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container sx={{ fontSize: '20px', p: 3 }} spacing={2}>
                            <Grid item xs={6} sx={{ textAlign: 'left' }}>
                                Ram
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                {ram} GB
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container sx={{ fontSize: '20px', p: 3 }} spacing={2}>
                            <Grid item xs={6} sx={{ textAlign: 'left' }}>
                                Rom
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                {rom} GB
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container sx={{ fontSize: '20px', p: 3 }} spacing={2}>
                            <Grid item xs={6} sx={{ textAlign: 'left' }}>
                                Brand
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                {brand}
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container sx={{ fontSize: '20px', p: 3 }} spacing={2}>
                            <Grid item xs={6} sx={{ textAlign: 'left' }}>
                                Processor
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                {cup}
                            </Grid>
                        </Grid>

                    </Container>
                </Box>
            </Container>
            <Footer />
        </div>
    )
}
