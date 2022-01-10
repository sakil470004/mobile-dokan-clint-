import React, { useEffect, useState } from 'react'
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';



import DashboardHomeCard from './DashboardHomeCard';
import useAuth from '../../../hooks/useAuth';



export default function DashboardHome() {
    const [products, setProducts] = useState([])
    const { user } = useAuth()
    useEffect(() => {

        fetch(`https://mobile-dokan-server.herokuapp.com/userProducts?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data));


    }, [user.email])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>


        {/* {products &&<h1>You did not enter any Product</h1>} */}
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ sm: 4, md: 8 ,lg:12}}>

                    {products.map((product, index) => (
                        <Grid item sm={4} md={4} lg={4}
                            key={index}
                        >
                            <DashboardHomeCard
                                product={product}
                            >

                            </DashboardHomeCard>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    )
}
