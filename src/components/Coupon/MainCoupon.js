import React from 'react'
import CreateCoupon from './CreateCoupon'
import CouponTable from './CouponTable'

const MainCoupon = () => {
   return (
      <section className='content-main'>
         <div className='content-header'>
            <h2 className='content-title'>Coupon</h2>
         </div>

         <div className='card shadow-sm'>
            <div className='card-body'>
               <div className='row'>
                  {/* Create category */}
                  <CreateCoupon />
                  {/* Categories table */}
                  <CouponTable />
               </div>
            </div>
         </div>
      </section>
   )
}

export default MainCoupon
