import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import newPhone from './../../../img/status/mxw_2048,f_auto.jpeg'
import popularPhone from './../../../img/status/mxw_2048,f_auto (1).jpeg'
import hotDealsPhone from './../../../img/status/mxw_2048,f_auto (2).jpeg'
import fiveGPhone from './../../../img/status/mxw_2048,f_auto (3).jpeg'

export default function Category() {
    return (
        <div>
            <Container>
                <Typography sx={{ fontWeight: 600, m: {xs:0,sm:2,md:3},textAlign:'left' }} variant="h4" component="div" >
                   Choose Your Type
                </Typography>
                <Grid container spacing={2}>
                    <Grid sx={{ borderRadius: 4,p:{xs:0,sm:1,md:4,lg:0} }} item xs={12} sm={6} lg={3} >
                        <img style={{ borderRadius: 20 }} width='100%' alt='status' src={newPhone} />
                    </Grid>
                    <Grid sx={{ borderRadius: 4,p:{xs:0,sm:1,md:4,lg:0} }} item xs={12} sm={6} lg={3} >
                        <img style={{ borderRadius: 20 }} width='100%' alt='status' src={popularPhone} />
                    </Grid>
                    <Grid sx={{ borderRadius: 4,p:{xs:0,sm:1,md:4,lg:0} }} item xs={12} sm={6} lg={3} >
                        <img style={{ borderRadius: 20 }} width='100%' alt='status' src={hotDealsPhone} />
                    </Grid>
                    <Grid sx={{ borderRadius: 4,p:{xs:0,sm:1,md:4,lg:0} }} item xs={12} sm={6} lg={3} >
                        <img style={{ borderRadius: 20 }} width='100%' alt='status' src={fiveGPhone} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
