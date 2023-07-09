import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listCoupon, deleteCoupon } from '../../redux/actions/CouponActions'
import Loading from '../LoadingError/Loading'
import Message from '../LoadingError/Error'
import moment from 'moment'

const CategoriesTable = () => {
   const dispatch = useDispatch()

   const { loading, error, coupon } = useSelector((state) => state.couponList)
   const { success } = useSelector((state) => state.couponDelete)
   const { success: successCreate } = useSelector((state) => state.couponCreate)

   useEffect(() => {
      if (success) {
         dispatch({ type: 'COUPON_DELETE_RESET' })
      } else if (successCreate) {
         dispatch({ type: 'COUPON_CREATE_RESET' })
      }
      dispatch(listCoupon())
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
                     <th>Code name</th>
                     <th>Discount</th>
                     <th>Expiration Date</th>
                     <th>Count In Stock</th>
                     <th>Description</th>
                     <th className='text-end'>Action</th>
                  </tr>
               </thead>
               {/* Table Data */}
               <tbody>
                  {loading && <Loading />}
                  {error && <Message variant='alert-danger'>{error}</Message>}
                  {coupon &&
                     coupon.map((coupon) => (
                        <tr>
                           {/* <td>
                                    <div className='form-check'>
                                       <input className='form-check-input' type='checkbox' value='' />
                                    </div>
                                 </td> */}
                           <td>{coupon?._id}</td>
                           <td>{coupon?.code}</td>
                           <td>{coupon?.discount}</td>
                           <td>{moment(coupon?.expirationDate).format('DD/MM/YYYY')}</td>
                           <td>{coupon?.countInStock}</td>
                           <td>{coupon?.description}</td>
                           <td className='text-end'>
                              <div className='dropdown'>
                                 <Link to='#' data-bs-toggle='dropdown' className='btn btn-light'>
                                    <i className='fas fa-ellipsis-h'></i>
                                 </Link>
                                 <div className='dropdown-menu'>
                                    <Link
                                       className='dropdown-item'
                                       to={`/coupon/${coupon?._id}/edit`}
                                    >
                                       Edit info
                                    </Link>
                                    <button
                                       onClick={() => dispatch(deleteCoupon(coupon?._id))}
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
