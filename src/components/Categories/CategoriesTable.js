import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listCategories, deleteCategory } from '../../redux/actions/CategoryActions'
import Loading from '../LoadingError/Loading'
import Message from '../LoadingError/Error'

const CategoriesTable = () => {
   const dispatch = useDispatch()

   const { loading, error, categories } = useSelector((state) => state.categoryList)
   const { success } = useSelector((state) => state.categoryDelete)
   const { success: successCreate } = useSelector((state) => state.categoryCreate)

   useEffect(() => {
      if (success) {
         dispatch({ type: 'CATEGORY_DELETE_RESET' })
      } else if (successCreate) {
         dispatch({ type: 'CATEGORY_CREATE_RESET' })
      }
      dispatch(listCategories())
   }, [dispatch, success, successCreate])

   return (
      <>
         <div className='col-md-12 col-lg-8'>
            <table className='table'>
               <thead>
                  <tr>
                     {/* <th>
                        <div className='form-check'>
                           <input className='form-check-input' type='checkbox' value='' />
                        </div>
                     </th> */}
                     <th>ID</th>
                     <th>Name</th>
                     <th>Description</th>
                     <th className='text-end'>Action</th>
                  </tr>
               </thead>
               {/* Table Data */}
               <tbody>
                  {loading && <Loading />}
                  {error && <Message variant='alert-danger'>{error}</Message>}
                  {categories &&
                     categories.map((category) => (
                        <tr key={category?._id}>
                           {/* <td>
                              <div className='form-check'>
                                 <input className='form-check-input' type='checkbox' value='' />
                              </div>
                           </td> */}
                           <td>{category?._id}</td>
                           <td>
                              <b>{category?.title}</b>
                           </td>
                           <td>
                              {category?.description.length > 100
                                 ? category?.description.substring(0, 100) + '...'
                                 : category?.description}
                           </td>
                           <td className='text-end'>
                              <div className='dropdown'>
                                 <Link to='#' data-bs-toggle='dropdown' className='btn btn-light'>
                                    <i className='fas fa-ellipsis-h'></i>
                                 </Link>
                                 <div className='dropdown-menu'>
                                    <Link
                                       className='dropdown-item'
                                       to={`/category/${category._id}/edit`}
                                    >
                                       Edit info
                                    </Link>
                                    <button
                                       onClick={() => dispatch(deleteCategory(category._id))}
                                       className='dropdown-item text-danger'
                                    >
                                       Delete
                                    </button>
                                 </div>
                              </div>
                           </td>
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
      </>
   )
}

export default React.memo(CategoriesTable)
