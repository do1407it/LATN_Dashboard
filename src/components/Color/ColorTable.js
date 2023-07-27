import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listColors, deleteColor } from '../../redux/actions/ColorActions'
import Loading from '../LoadingError/Loading'
import Message from '../LoadingError/Error'
import moment from 'moment'

const ColorTable = () => {
   const dispatch = useDispatch()

   const { loading, error, color } = useSelector((state) => state.colorList)
   const { success } = useSelector((state) => state.colorDelete)
   const { success: successCreate } = useSelector((state) => state.colorCreate)

   useEffect(() => {
      if (success) {
         dispatch({ type: 'COLOR_DELETE_RESET' })
      } else if (successCreate) {
         dispatch({ type: 'COLOR_CREATE_RESET' })
      }
      dispatch(listColors())
   }, [dispatch, success, successCreate])

   useEffect(() => {
      dispatch(listColors())
   }, [dispatch])
   return (
      <>
         <div className='col-md-12 col-lg-8'>
            <table className='table'>
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Color name</th>
                     <th>Color value</th>
                     <th className='text-end'>Action</th>
                  </tr>
               </thead>
               {/* Table Data */}
               <tbody>
                  {loading && <Loading />}
                  {error && <Message variant='alert-danger'>{error}</Message>}
                  {color &&
                     color.map((color) => (
                        <tr>
                           <td>{color?._id}</td>
                           <td>{color?.name}</td>
                           <td>
                              <div
                                 style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: `${color?.color}`,
                                    borderRadius: '50%',
                                    border: '1px solid',
                                    margin: '0 auto',
                                 }}
                              ></div>
                           </td>

                           <td className='text-end'>
                              <div className='dropdown'>
                                 <Link to='#' data-bs-toggle='dropdown' className='btn btn-light'>
                                    <i className='fas fa-ellipsis-h'></i>
                                 </Link>
                                 <div className='dropdown-menu'>
                                    <Link
                                       className='dropdown-item'
                                       to={`/color/${color?._id}/edit`}
                                    >
                                       Edit info
                                    </Link>
                                    <button
                                       onClick={() => dispatch(deleteColor(color?._id))}
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

export default React.memo(ColorTable)
