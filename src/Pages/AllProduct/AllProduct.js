import {  Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Product from '../Home/Product/Product';
import NavigationTop from '../Shared/NavigationTop/NavigationTop';

export default function AllProduct() {
    const [mobiles, setMobiles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setMobiles(data))

    }, [])

    // const mobiles = [
    //     {
    //         id: 1,
    //         first_name: "Samsung Galaxy A51",
    //         cup: "Exynos Exynos 9611",
    //         ram: 6,
    //         rom: 4,
    //         battery: 4000,
    //         brand: 'samsung',
    //         status: ["new", "popular", "hotDeals", "5gSmartPhone"],
    //         frontCamera: 32,
    //         rearCamera: 48,
    //         Fingerprint: 1,
    //         faceUnlock: 0,
    //         img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
    //         , price: 27000
    //     },
    //     {
    //         id: 2,
    //         first_name: "Samsung Galaxy A51",
    //         cup: "Exynos Exynos 9611",
    //         ram: 6,
    //         rom: 4,
    //         battery: 4000,
    //         brand: 'samsung',
    //         status: ["new", "popular", "hotDeals", "5gSmartPhone"],
    //         frontCamera: 32,
    //         rearCamera: 48,
    //         Fingerprint: 1,
    //         faceUnlock: 0,
    //         img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
    //         , price: 27000
    //     },


    return (

        <div id='products'>
            <NavigationTop />
            <Container>
                <Typography sx={{ fontWeight: 600, m: { xs: 1, sm: 2, md: 3 } }} variant="h4" component="div" >
                    Get's <span className='color1'> Yours One</span>
                </Typography>
                <Grid container spacing={4}>

                    {mobiles.map(mobile =>

                        <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6} md={4} lg={3}
                            key={mobile.id}
                        >
                            <Product
                                mobile={mobile}

                            />
                        </Grid>
                    )
                    }




                </Grid>

            </Container>
        </div>

    )
}
