import React from 'react'
import Header from '../components/Header'
import Main from '../components/Home/Main'
import Sidebar from './../components/sidebar'
import ChartTest from './ChartTest'

const HomeScreen = () => {
   return (
      <>
         <Sidebar />
         <main className='main-wrap'>
            <Header />
            <Main />
            <ChartTest />
         </main>
      </>
   )
}

export default HomeScreen
