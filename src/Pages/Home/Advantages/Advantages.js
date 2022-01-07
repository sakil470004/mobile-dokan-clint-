import React from 'react'
import { Container, Divider, Grid, Typography } from '@mui/material'

import img1 from './../../../img/croma advantages/mxw_2048,f_auto.jpeg'
import img2 from './../../../img/croma advantages/mxw_2048,f_auto (1).jpeg'
import img3 from './../../../img/croma advantages/mxw_2048,f_auto (2).jpeg'
import img4 from './../../../img/croma advantages/mxw_2048,f_auto (3).jpeg'
export default function Advantages() {
    return (
        <div>
            <Container>
                <Typography sx={{ fontWeight: 600, m: { xs: 1, sm: 2, md: 3 }, textAlign: 'left' }} variant="h4" component="div" >
                    Gearbest <span className='color1'> Advantages</span>
                </Typography>
                <Grid container spacing={2}>
                    <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6} lg={3} >
                        <img style={{ borderRadius: 20 }} width='100%' alt='status' src={img1} />
                    </Grid>
                    <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6} lg={3} >
                        <img style={{ borderRadius: 20 }} width='100%' alt='status' src={img2} />
                    </Grid>
                    <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6} lg={3} >
                        <img style={{ borderRadius: 20 }} width='100%' alt='status' src={img3} />
                    </Grid>
                    <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6} lg={3} >
                        <img style={{ borderRadius: 20 }} width='100%' alt='status' src={img4} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
