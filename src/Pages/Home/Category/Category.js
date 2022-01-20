import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import newPhone from './../../../img/status/mxw_2048,f_auto.jpeg'
import popularPhone from './../../../img/status/mxw_2048,f_auto (1).jpeg'
import hotDealsPhone from './../../../img/status/mxw_2048,f_auto (2).jpeg'
import fiveGPhone from './../../../img/status/mxw_2048,f_auto (3).jpeg'
import { useHistory } from 'react-router-dom'

export default function Category() {

    const history = useHistory();
    const handleCategoryFilter = (e) => {
        const url = `/status/${e}`
        history.push(url);
    }

    return (
        <div>
            <Container>
                <Typography sx={{ fontWeight: 600, m: { xs: 1, sm: 2, md: 3 }, textAlign: 'left' }} variant="h4" component="div" >
                    Choose <span className='color1'> Your Type</span>
                </Typography>
                <Grid container spacing={2}>
                    <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6} lg={3} >
                        <img className="cursorPointer" onClick={() => handleCategoryFilter('new')} style={{ borderRadius: 20 }} width='100%' alt='status' src={newPhone} />
                    </Grid>
                    <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6} lg={3} >
                        <img className="cursorPointer" onClick={() => handleCategoryFilter('popular')} style={{ borderRadius: 20 }} width='100%' alt='status' src={popularPhone} />
                    </Grid>
                    <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6} lg={3} >
                        <img className="cursorPointer" onClick={() => handleCategoryFilter('hotDeals')} style={{ borderRadius: 20 }} width='100%' alt='status' src={hotDealsPhone} />
                    </Grid>
                    <Grid sx={{ borderRadius: 4 }} item xs={12} sm={6} lg={3} >
                        <img className="cursorPointer" onClick={() => handleCategoryFilter('5gSmartPhone')} style={{ borderRadius: 20 }} width='100%' alt='status' src={fiveGPhone} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
