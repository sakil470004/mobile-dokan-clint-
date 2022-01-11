import { Button, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Product from '../Product/Product'

export default function Products() {
    const [mobiles, setMobiles] = useState([]);

    useEffect(() => {
        fetch('https://mobile-dokan-server.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                data = data.slice(0, 8);
                setMobiles(data)

            })

    }, [])



    return (

        <div id='products'>
            <Container>
                <Typography sx={{ fontWeight: 600, m: { xs: 1, sm: 2, md: 3 }, textAlign: 'left' }} variant="h4" component="div" >
                    Choose <span className='color1'> Your Phone</span>
                </Typography>
                <Grid container spacing={4} style={{ marginBottom: '10px' }}>

                    {mobiles.map(mobile =>

                        <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6} md={4} lg={3}
                            key={mobile._id}
                        >
                            <Product
                                mobile={mobile}

                            />
                        </Grid>
                    )}
                </Grid>
                <NavLink
                    style={{ color: 'black', textDecoration: 'none' }} to='/allProduct'><Button style={{ backgroundColor: '#FFDA00', borderRadius: '10px' }} className='color1' color='inherit'>Show More</Button></NavLink>
            </Container>
        </div>

    )
}
