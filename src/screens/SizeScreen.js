import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/Header'
import MainCoupon from '../components/Coupon/MainCoupon'
const CouponScreen = () => {
   return (
      <>
         <Sidebar />
         <main className='main-wrap'>
            <Header />
            <MainCoupon />
         </main>
      </>
   )
}

export default CouponScreen
