import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Product from '../Product/Product'

export default function Products() {

    const mobiles = [
        {
            id: 1,
            first_name: "Samsung Galaxy A51",
            cup: "Exynos Exynos 9611",
            ram: 6,
            rom: 4,
            battery: 4000,
            brand: 'samsung',
            status: ["new", "popular", "hotDeals", "5gSmartPhone"],
            frontCamera: 32,
            rearCamera: 48,
            Fingerprint: 1,
            faceUnlock: 0,
            img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
            , price: 27000
        },
        {
            id: 2,
            first_name: "Samsung Galaxy A51",
            cup: "Exynos Exynos 9611",
            ram: 6,
            rom: 4,
            battery: 4000,
            brand: 'samsung',
            status: ["new", "popular", "hotDeals", "5gSmartPhone"],
            frontCamera: 32,
            rearCamera: 48,
            Fingerprint: 1,
            faceUnlock: 0,
            img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
            , price: 27000
        },
        {
            id: 3,
            first_name: "Samsung Galaxy A51",
            cup: "Exynos Exynos 9611",
            ram: 6,
            rom: 4,
            battery: 4000,
            brand: 'samsung',
            status: ["new", "popular", "hotDeals", "5gSmartPhone"],
            frontCamera: 32,
            rearCamera: 48,
            Fingerprint: 1,
            faceUnlock: 0,
            img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
            , price: 27000
        },
        {
            id: 4,
            first_name: "Samsung Galaxy A51",
            cup: "Exynos Exynos 9611",
            ram: 6,
            rom: 4,
            battery: 4000,
            brand: 'samsung',
            status: ["new", "popular", "hotDeals", "5gSmartPhone"],
            frontCamera: 32,
            rearCamera: 48,
            Fingerprint: 1,
            faceUnlock: 0,
            img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
            , price: 27000
        },
        {
            id: 5,
            first_name: "Samsung Galaxy A51",
            cup: "Exynos Exynos 9611",
            ram: 6,
            rom: 4,
            battery: 4000,
            brand: 'samsung',
            status: ["new", "popular", "hotDeals", "5gSmartPhone"],
            frontCamera: 32,
            rearCamera: 48,
            Fingerprint: 1,
            faceUnlock: 0,
            img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
            , price: 27000
        },
        {
            id: 6,
            first_name: "Samsung Galaxy A51",
            cup: "Exynos Exynos 9611",
            ram: 6,
            rom: 4,
            battery: 4000,
            brand: 'samsung',
            status: ["new", "popular", "hotDeals", "5gSmartPhone"],
            frontCamera: 32,
            rearCamera: 48,
            Fingerprint: 1,
            faceUnlock: 0,
            img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
            , price: 27000
        },
        {
            id: 7,
            first_name: "Samsung Galaxy A51",
            cup: "Exynos Exynos 9611",
            ram: 6,
            rom: 4,
            battery: 4000,
            brand: 'samsung',
            status: ["new", "popular", "hotDeals", "5gSmartPhone"],
            frontCamera: 32,
            rearCamera: 48,
            Fingerprint: 1,
            faceUnlock: 0,
            img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
            , price: 27000
        },
        {
            id: 8,
            first_name: "Samsung Galaxy A51",
            cup: "Exynos Exynos 9611",
            ram: 6,
            rom: 4,
            battery: 4000,
            brand: 'samsung',
            status: ["new", "popular", "hotDeals", "5gSmartPhone"],
            frontCamera: 32,
            rearCamera: 48,
            Fingerprint: 1,
            faceUnlock: 0,
            img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
            , price: 27000
        },
    ]


    return (

        <div id='products'>
            <Container>
                <Typography sx={{ fontWeight: 600, m: { xs: 1, sm: 2, md: 3 }, textAlign: 'left' }} variant="h4" component="div" >
                    Choose <span className='color1'> Your Phone</span>
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
