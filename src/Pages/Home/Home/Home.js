import React from 'react'
import NavigationTop from '../../Shared/NavigationTop/NavigationTop'
import Advantages from '../Advantages/Advantages'
import Category from '../Category/Category'
import DemoCarousel from './../DemoCarousel/DemoCarousel'
import BuyDecision from './../BuyDecision/BuyDecision'
export default function Home() {
    return (
        <div>
           <NavigationTop/>
           <DemoCarousel/>
           <div className='demo-carousel'></div>
           <Category/>
           <Advantages/>
           <BuyDecision/>
        </div>
    )
}
