import { Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import img1 from './../../../img/decision/mxw_2048,f_au.png'
import img2 from './../../../img/decision/mxw_2048,f_aut.png'

export default function BuyDecision() {
    return (
        <div>
            <Container >
                <Divider sx={{ m: 2 }} className='background1' />
                <Grid container spacing={3}>
                    <Grid className='cursorPointer' sx={{ borderRadius: 4 }} item xs={12} md={6} >
                        <img style={{ borderRadius: 20 }} width='100%' alt='status' src={img1} />
                    </Grid>

                    <Grid className='cursorPointer' sx={{ borderRadius: 4 }} item xs={12} md={6} >
                        <img style={{ borderRadius: 20 }} width='100%' alt='status' src={img2} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
