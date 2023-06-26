import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'
import { listProducts } from '../../redux/actions/ProductActions'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from '../../components/pagination'
import useQuery from '../../hook/useQuery'
import { listCategories } from '../../redux/actions/CategoryActions'

import { useHistory } from 'react-router-dom'
import Message from '../LoadingError/Error'
import Loading from '../LoadingError/Loading'

const MainProducts = () => {
   const dispatch = useDispatch()
   const history = useHistory()

   const [search, setSearch] = useState('')
   const [category, setCategory] = useState('')

   const query = useQuery()
   const pageNumber = query.get('pageNumber') || 1
   const keyword = query.get('keyword') || ''

   const { loading, error, products } = useSelector((state) => state.productList)
   const { success } = useSelector((state) => state.productDelete)
   const { categories } = useSelector((state) => state.categoryList)

   const handleSearch = (e) => {
      e.preventDefault()
      if (search.trim().length > 0) {
         history.push(`/products?keyword=${search}`)
      } else {
         history.push(`/products?pageNumber=${pageNumber}`)
      }
   }

   useEffect(() => {
      dispatch(listProducts(keyword, pageNumber, category))
      dispatch(listCategories())
   }, [dispatch, keyword, pageNumber, success, category])

   return (
      <section className='content-main'>
         <div className='content-header'>
            <h2 className='content-title'>Products</h2>
            <div>
               <Link to='/addproduct' className='btn btn-primary'>
                  Create new
               </Link>
            </div>
         </div>

         <div className='card mb-4 shadow-sm'>
            <header className='card-header bg-white '>
               <div className='row gx-3 py-3'>
                  <div className='col-lg-4 col-md-6 me-auto '>
                     <form className='d-flex' onSubmit={handleSearch}>
                        <input
                           className='form-control me-2'
                           type='search'
                           placeholder='Type search'
                           aria-label='Search'
                           onChange={(e) => setSearch(e.target.value)}
                           value={search}
                        />
                        <button className='btn btn-outline-primary' type='submit'>
                           Search
                        </button>
                     </form>
                  </div>
                  <div className='col-lg-2 col-6 col-md-3'>
                     <select
                        className='form-select'
                        aria-label='Default select example'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                     >
                        <option value=''>All Category</option>
                        {categories &&
                           categories.map((category) => (
                              <option key={category._id} value={category._id}>
                                 {category.title}
                              </option>
                           ))}
                     </select>
                  </div>
               </div>
            </header>

            <div className='card-body'>
               <div className='row'>
                  {/* Products */}
                  {loading ? (
                     <Loading />
                  ) : error ? (
                     <Message variant='alert-danger '>{error}</Message>
                  ) : products && products?.products?.length > 0 ? (
                     products?.products?.map((product) => (
                        <Product key={product._id} product={product} />
                     ))
                  ) : (
                     <Message variant='alert-danger '>No products found</Message>
                  )}
               </div>

               {/* Pagination */}
               {!error && <Pagination />}
            </div>
         </div>
      </section>
   )
}

export default React.memo(MainProducts)
