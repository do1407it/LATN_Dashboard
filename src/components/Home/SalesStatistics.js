import React from 'react'

const SaleStatistics = () => {
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
               <h5 className='card-title'>Sale statistics</h5>

               <iframe
                  style={iframeStyle}
                  src='https://charts.mongodb.com/charts-shopshoe_latn-zdvvq/embed/charts?id=6486cb32-7171-4c43-8c6b-122ef6055adb&maxDataAge=3600&theme=dark&autoRefresh=true'
                  title='Embedded Chart'
               />
            </article>
         </div>
      </div>
   )
}

export default SaleStatistics
