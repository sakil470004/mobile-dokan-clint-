import {  Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Product from '../Home/Product/Product';
import NavigationTop from '../Shared/NavigationTop/NavigationTop';

export default function AllProduct() {
    const [mobiles, setMobiles] = useState([]);

    useEffect(() => {
        fetch('https://mobile-dokan-server-indol.vercel.app/products')
            .then(res => res.json())
            .then(data => setMobiles(data))

    }, [])


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
                            key={mobile._id}
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
