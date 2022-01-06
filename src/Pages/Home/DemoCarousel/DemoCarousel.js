import React from 'react';
import './DemoCarouse.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from './../../../img/banner/mxw_2048,f_auto (1).jpeg'
import img2 from './../../../img/banner/mxw_2048,f_auto (2).jpeg'
import img3 from './../../../img/banner/mxw_2048,f_auto (3).jpeg'
import img4 from './../../../img/banner/mxw_2048,f_auto.jpeg'
import { Container } from '@mui/material';

export default function DemoCarousel() {

    return (
        <Container >

            <Carousel autoPlay emulateTouch={true} infiniteLoop={true}
                showThumbs={false} showIndicators={false}
            >
                <div className='carouselBannerImage'>
                    <img alt='banner' src={img1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className='carouselBannerImage'>
                    <img alt='banner' src={img2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div className='carouselBannerImage'>
                    <img alt='banner' src={img3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div className='carouselBannerImage'>
                    <img alt='banner' src={img4} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </Container>
    );
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>