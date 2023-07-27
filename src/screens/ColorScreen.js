import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/Header'
import MainColor from '../components/Color/MainColor'
const ColorScreen = () => {
   return (
      <>
         <Sidebar />
         <main className='main-wrap'>
            <Header />
            <MainColor />
         </main>
      </>
   )
}

export default ColorScreen
