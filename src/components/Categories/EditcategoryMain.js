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

const EditCateogryMain = ({ categoryId }) => {
   const dispatch = useDispatch()
   const [title, setTitle] = useState('')
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
            setTitle(category.title)
            setDescription(category.description)
         }
         if (errorUpdate) {
            toast.error(errorUpdate, ToastObjects)
            dispatch({ type: 'CATEGORY_UPDATE_RESET' })
            dispatch(editCategory(categoryId))
         }
      }
   }, [dispatch, categoryId, category, successUpdate, errorUpdate])

   const submitHandler = (e) => {
      e.preventDefault()
      dispatch(updateCategory({ _id: categoryId, title: title.trim(), description }))
   }

   return (
      <>
         <Toast />
         {loadingEdit && <Loading />}
         {errorEdit && <Message variant='danger'>{errorEdit}</Message>}

         <section className='content-main' style={{ maxWidth: '1200px' }}>
            <form onSubmit={submitHandler}>
               <div className='content-header'>
                  <Link to='/category' className='btn btn-danger text-white'>
                     Go to category
                  </Link>
                  <h2 className='content-title'>Update Category</h2>
                  <div>
                     <button type='submit' className='btn btn-primary'>
                        Publish now
                     </button>
                  </div>
               </div>

               <form>
                  <div className='mb-4'>
                     <label htmlFor='product_name' className='form-label'>
                        Name
                     </label>
                     <input
                        type='text'
                        placeholder='Type here'
                        className='form-control py-3'
                        id='product_name'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                     />
                  </div>
                  <div className='mb-4'>
                     <label htmlFor='product_name' className='form-label'>
                        Description
                     </label>
                     <input
                        type='text'
                        placeholder='Type here'
                        className='form-control py-3'
                        id='product_name'
                        value={description ?? ''}
                        onChange={(e) => setDescription(e.target.value)}
                     />
                  </div>
               </form>
            </form>
         </section>
      </>
   )
}

export default EditCateogryMain
