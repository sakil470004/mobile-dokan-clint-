import React from 'react'
import NavigationTop from '../../Shared/NavigationTop/NavigationTop'
import Advantages from '../Advantages/Advantages'
import Category from '../Category/Category'
import DemoCarousel from './../DemoCarousel/DemoCarousel'
import BuyDecision from './../BuyDecision/BuyDecision'
import Footer from '../../Shared/Footer/Footer'
import Products from '../Products/Products'
export default function Home() {
    // ["new", "popular","hotDeals","5gSmartPhone"]
    // const mobiles = [
    //     {
    //         id: 1,
    //         first_name: "Samsung Galaxy A51",
    //         cup: "Exynos Exynos 9611",
    //         ram: 6,
    //         rom: 4,
    //         battery: 4000,
    //         brand: 'samsung',
    //         status: ["new", "popular", "hotDeals", "5gSmartPhone"],
    //         frontCamera: 32,
    //         rearCamera: 48,
    //         Fingerprint: 1,
    //         faceUnlock: 0,
    //         img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
    //     },
    //     {
    //         id: 2,
    //         first_name: "Samsung Galaxy A51",
    //         cup: "Exynos Exynos 9611",
    //         ram: 6,
    //         rom: 4,
    //         battery: 4000,
    //         brand: 'samsung',
    //         status: ["new", "popular", "hotDeals", "5gSmartPhone"],
    //         frontCamera: 32,
    //         rearCamera: 48,
    //         Fingerprint: 1,
    //         faceUnlock: 0,
    //         img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
    //     },
    //     {
    //         id: 3,
    //         first_name: "Samsung Galaxy A51",
    //         cup: "Exynos Exynos 9611",
    //         ram: 6,
    //         rom: 4,
    //         battery: 4000,
    //         brand: 'samsung',
    //         status: ["new", "popular", "hotDeals", "5gSmartPhone"],
    //         frontCamera: 32,
    //         rearCamera: 48,
    //         Fingerprint: 1,
    //         faceUnlock: 0,
    //         img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
    //     },
    //     {
    //         id: 4,
    //         first_name: "Samsung Galaxy A51",
    //         cup: "Exynos Exynos 9611",
    //         ram: 6,
    //         rom: 4,
    //         battery: 4000,
    //         brand: 'samsung',
    //         status: ["new", "popular", "hotDeals", "5gSmartPhone"],
    //         frontCamera: 32,
    //         rearCamera: 48,
    //         Fingerprint: 1,
    //         faceUnlock: 0,
    //         img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
    //     },
    //     {
    //         id: 5,
    //         first_name: "Samsung Galaxy A51",
    //         cup: "Exynos Exynos 9611",
    //         ram: 6,
    //         rom: 4,
    //         battery: 4000,
    //         brand: 'samsung',
    //         status: ["new", "popular", "hotDeals", "5gSmartPhone"],
    //         frontCamera: 32,
    //         rearCamera: 48,
    //         Fingerprint: 1,
    //         faceUnlock: 0,
    //         img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
    //     },
    //     {
    //         id: 6,
    //         first_name: "Samsung Galaxy A51",
    //         cup: "Exynos Exynos 9611",
    //         ram: 6,
    //         rom: 4,
    //         battery: 4000,
    //         brand: 'samsung',
    //         status: ["new", "popular", "hotDeals", "5gSmartPhone"],
    //         frontCamera: 32,
    //         rearCamera: 48,
    //         Fingerprint: 1,
    //         faceUnlock: 0,
    //         img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
    //     },
    //     {
    //         id: 7,
    //         first_name: "Samsung Galaxy A51",
    //         cup: "Exynos Exynos 9611",
    //         ram: 6,
    //         rom: 4,
    //         battery: 4000,
    //         brand: 'samsung',
    //         status: ["new", "popular", "hotDeals", "5gSmartPhone"],
    //         frontCamera: 32,
    //         rearCamera: 48,
    //         Fingerprint: 1,
    //         faceUnlock: 0,
    //         img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
    //     },
    //     {
    //         id: 8,
    //         first_name: "Samsung Galaxy A51",
    //         cup: "Exynos Exynos 9611",
    //         ram: 6,
    //         rom: 4,
    //         battery: 4000,
    //         brand: 'samsung',
    //         status: ["new", "popular", "hotDeals", "5gSmartPhone"],
    //         frontCamera: 32,
    //         rearCamera: 48,
    //         Fingerprint: 1,
    //         faceUnlock: 0,
    //         img: 'https://i.ibb.co/SnsLfcJ/mxw-2048-f-auto.png'
    //     },
    // ]
    return (
        <div>
            <NavigationTop />
            <DemoCarousel />
            <div className='demo-carousel'></div>
            <Category />
            <Advantages />
            <BuyDecision />
            <Products/>
            <Footer />
        </div>
    )
}
