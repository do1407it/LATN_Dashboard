import React from 'react'
import TopTotal from './TopTotal'
import LatestOrder from './LatestOrder'
import SaleStatistics from './SalesStatistics'
import ProductsStatistics from './ProductsStatistics'
import { useSelector } from 'react-redux'
const Main = () => {
   const { loading, error, orders } = useSelector((state) => state.orderList)
   const { products } = useSelector((state) => state.productList)

   return (
      <>
         <section className='content-main'>
            <div className='content-header'>
               <h2 className='content-title'> Dashboard </h2>
            </div>
            {/* Top Total */}
            <TopTotal orders={orders} products={products} />

            <div className='row'>
               {/* STATICS */}
               <SaleStatistics />
               <ProductsStatistics />
            </div>
         </section>
      </>
   )
}

export default Main
