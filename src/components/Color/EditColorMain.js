import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Toast from '../LoadingError/Toast'
import Message from '../LoadingError/Error'
import Loading from '../LoadingError/Loading'
import { toast } from 'react-toastify'

import { editCategory, updateCategory } from '../../redux/actions/CategoryActions'

const ToastObjects = {
   pauseOnFocusLoss: false,
   draggable: false,
   pauseOnHover: false,
   autoClose: 2000,
}

const EditColorMain = ({ categoryId }) => {
   const dispatch = useDispatch()
   const [name, setName] = useState('')
   const [description, setDescription] = useState('')

   const {
      loading: loadingEdit,
      error: errorEdit,
      category,
   } = useSelector((state) => state.categoryEdit)

   const {
      loading: loadingUpdate,
      error: errorUpdate,
      success: successUpdate,
   } = useSelector((state) => state.categoryUpdate)

   useEffect(() => {
      if (successUpdate) {
         toast.success('Product updated successfully', ToastObjects)
         dispatch({ type: 'CATEGORY_UPDATE_RESET' })
         dispatch(editCategory(categoryId))
      } else {
         if (!category || category._id !== categoryId) {
            dispatch(editCategory(categoryId))
         } else {
            setName(category.title)
            setDescription(category.description)
         }
      }
   }, [dispatch, categoryId, category, successUpdate])

   const submitHandler = (e) => {
      e.preventDefault()
      dispatch(updateCategory({ _id: categoryId, title: name, description }))
   }
   return (
      <>
         <Toast />

         <section className='content-main' style={{ maxWidth: '1200px' }}>
            <form onSubmit={submitHandler}>
               <div className='content-header'>
                  <Link to='/category' className='btn btn-danger text-white'>
                     Go to categories
                  </Link>
                  <h2 className='content-title'>Update Coupon</h2>
                  <div>
                     <button type='submit' className='btn btn-primary'>
                        Publish now
                     </button>
                  </div>
               </div>

               <div className='row mb-4'>
                  <div className='col-xl-8 col-lg-8'>
                     <div className='card mb-4 shadow-sm'>
                        <div className='card-body'>
                           {/* {loadingUpdate && <Loading />} */}
                           {/* {errorUpdate && <Message variant='alert-danger'>{errorUpdate}</Message>} */}
                           <div className='mb-4'>
                              <label htmlFor='product_title' className='form-label'>
                                 Code Coupon
                              </label>
                              <input
                                 type='text'
                                 placeholder='Type here'
                                 className='form-control'
                                 id='product_title'
                                 value={name}
                                 onChange={(e) => setName(e.target.value)}
                                 required
                              />
                           </div>

                           <div className='mb-4'>
                              <label className='form-label'>Description</label>
                              <textarea
                                 placeholder='Type here'
                                 className='form-control'
                                 rows='7'
                                 required
                                 value={description}
                                 onChange={(e) => setDescription(e.target.value)}
                              ></textarea>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </section>
      </>
   )
}

export default EditColorMain
