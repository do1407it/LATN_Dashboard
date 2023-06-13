import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'
import { listProducts } from '../../redux/actions/ProductActions'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from '../../components/pagination'
import useQuery from '../../hook/useQuery'
import { useHistory } from 'react-router-dom'
import Message from '../LoadingError/Error'
import Loading from '../LoadingError/Loading'

const MainProducts = () => {
   const dispatch = useDispatch()
   const history = useHistory()
   const [search, setSearch] = useState('')
   const query = useQuery()
   const pageNumber = query.get('pageNumber') || 1
   const keyword = query.get('keyword') || ''
   const { loading, error, products } = useSelector((state) => state.productList)
   const { success } = useSelector((state) => state.productDelete)

   const handleSearch = (e) => {
      e.preventDefault()
      if (search.trim().length > 0) {
         history.push(`/products?keyword=${search}`)
      } else {
         history.push(`/products?pageNumber=${pageNumber}`)
      }
   }

   useEffect(() => {
      dispatch(listProducts(keyword, pageNumber))
   }, [dispatch, keyword, pageNumber, success])

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
                     {/* code form search */}
                     <form className='d-flex' onSubmit={handleSearch}>
                        <input
                           className='form-control me-2'
                           type='search'
                           placeholder='Search'
                           aria-label='Search'
                           onChange={(e) => setSearch(e.target.value)}
                           value={search}
                        />
                        <button className='btn btn-outline-success' type='submit'>
                           Search
                        </button>
                     </form>
                  </div>
                  <div className='col-lg-2 col-6 col-md-3'>
                     <select className='form-select'>
                        <option>All category</option>
                        <option>Electronics</option>
                        <option>Clothings</option>
                        <option>Something else</option>
                     </select>
                  </div>
                  <div className='col-lg-2 col-6 col-md-3'>
                     <select className='form-select'>
                        <option>Latest added</option>
                        <option>Cheap first</option>
                        <option>Most viewed</option>
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
