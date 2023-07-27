import React from 'react'
import CreateColor from './CreateColor'
import ColorTable from './ColorTable'

const MainColor = () => {
   return (
      <section className='content-main'>
         <div className='content-header'>
            <h2 className='content-title'>Color</h2>
         </div>

         <div className='card shadow-sm'>
            <div className='card-body'>
               <div className='row'>
                  {/* Create category */}
                  <CreateColor />
                  {/* Categories table */}
                  <ColorTable />
               </div>
            </div>
         </div>
      </section>
   )
}

export default MainColor
