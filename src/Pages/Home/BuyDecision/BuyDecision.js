import { Container, Divider, Grid } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import img1 from './../../../img/decision/mxw_2048,f_au.png'
import img2 from './../../../img/decision/mxw_2048,f_aut.png'

export default function BuyDecision() {
    const history = useHistory();

    const handleByGuide = () => {
        const url = '/buyGuide'
        history.push(url);
    }
    const handleByGuideFormExpert = () => {
        const url = '/buyGuideFromExpert'
        history.push(url);
    }

    return (
        <div>
            <Container >
                <Divider sx={{ m: 2 }} className='background1' />
                <Grid container spacing={3}>
                    <Grid onClick={handleByGuide} className='cursorPointer' sx={{ borderRadius: 4 }} item xs={12} md={6} >
                        <img style={{ borderRadius: 20 }} width='100%' alt='status' src={img1} />
                    </Grid>

                    <Grid onClick={handleByGuideFormExpert} className='cursorPointer' sx={{ borderRadius: 4 }} item xs={12} md={6} >
                        <img style={{ borderRadius: 20 }} width='100%' alt='status' src={img2} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
