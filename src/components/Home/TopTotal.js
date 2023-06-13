import React from 'react'

const TopTotal = ({ orders, products }) => {
   let totalSales = 0
   let totalOrders = 0
   let totalProducts = 0

   if (orders) {
      orders.forEach((order) => {
         totalSales += order?.totalPrice
         totalOrders += 1
      })

      products?.products.forEach((product) => {
         totalProducts += 1
      })
   }

   return (
      <div className='row'>
         <div className='col-lg-4'>
            <div className='card card-body mb-4 shadow-sm'>
               <article className='icontext'>
                  <span className='icon icon-sm rounded-circle alert-primary'>
                     <i className='text-primary fas fa-usd-circle'></i>
                  </span>
                  <div className='text'>
                     <h6 className='mb-1'>Total Sales</h6> <span>${totalSales ?? 0}</span>
                  </div>
               </article>
            </div>
         </div>
         <div className='col-lg-4'>
            <div className='card card-body mb-4 shadow-sm'>
               <article className='icontext'>
                  <span className='icon icon-sm rounded-circle alert-success'>
                     <i className='text-success fas fa-bags-shopping'></i>
                  </span>
                  <div className='text'>
                     <h6 className='mb-1'>Total Orders</h6>
                     <span>{totalOrders ?? 0}</span>
                  </div>
               </article>
            </div>
         </div>
         <div className='col-lg-4'>
            <div className='card card-body mb-4 shadow-sm'>
               <article className='icontext'>
                  <span className='icon icon-sm rounded-circle alert-warning'>
                     <i className='text-warning fas fa-shopping-basket'></i>
                  </span>
                  <div className='text'>
                     <h6 className='mb-1'>Total Products</h6>
                     <span>{totalProducts ?? 0}</span>
                  </div>
               </article>
            </div>
         </div>
      </div>
   )
}

export default TopTotal
