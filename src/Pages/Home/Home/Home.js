import React from 'react'
import NavigationTop from '../../Shared/NavigationTop/NavigationTop'
import Category from '../Category/Category'
import DemoCarousel from './../DemoCarousel/DemoCarousel'
export default function Home() {
    return (
        <div>
           <NavigationTop/>
           <DemoCarousel/>
           <div className='demo-carousel'></div>
           <Category/>
        </div>
    )
}
