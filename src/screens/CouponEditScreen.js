import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/Header'
import EditCouponMain from '../components/Coupon/EditCouponMain'

const CouponEditScreen = ({ match }) => {
   const categoryId = match.params.id

   return (
      <>
         <Sidebar />
         <main className='main-wrap'>
            <Header />

            <EditCouponMain categoryId={categoryId} />
         </main>
      </>
   )
}
export default CouponEditScreen
