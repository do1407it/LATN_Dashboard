import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/Header'
import EditcategoryMain from '../components/Categories/EditcategoryMain'

const CategoryEditScreen = ({ match }) => {
   const categoryId = match.params.id

   return (
      <>
         <Sidebar />
         <main className='main-wrap'>
            <Header />

            <EditcategoryMain categoryId={categoryId} />
         </main>
      </>
   )
}
export default CategoryEditScreen
