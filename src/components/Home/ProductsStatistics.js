import React from 'react'

const ProductsStatistics = () => {
   const iframeStyle = {
      background: '#21313C',
      border: 'none',
      borderRadius: '2px',
      boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
      width: '640px',
      height: '480px',
   }

   return (
      <div className='col-xl-6 col-lg-12'>
         <div className='card mb-4 shadow-sm'>
            <article className='card-body'>
               <h5 className='card-title'>Products statistics</h5>
               <iframe
                  style={iframeStyle}
                  src='https://charts.mongodb.com/charts-shopshoe_latn-zdvvq/embed/charts?id=6486cdf3-e3ca-467e-8579-9ed1b981a150&maxDataAge=3600&theme=dark&autoRefresh=true'
                  title='Embedded Chart'
               />
            </article>
         </div>
      </div>
   )
}

export default ProductsStatistics
