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
                  <Link to='/coupon' className='btn btn-danger text-white'>
                     Go to coupon
                  </Link>
                  <h2 className='content-title'>Update Coupon</h2>
                  <div>
                     <button type='submit' className='btn btn-primary'>
                        Publish now
                     </button>
                  </div>
               </div>

               <form>
                  <div className='mb-4'>
                     <label htmlFor='product_name' className='form-label'>
                        Code Coupon
                     </label>
                     <input
                        type='text'
                        placeholder='Type here'
                        className='form-control py-3'
                        id='product_name'
                        // value={code}
                        // onChange={(e) => setCode(e.target.value)}
                     />
                  </div>
                  <div className='mb-4'>
                     <label htmlFor='product_name' className='form-label'>
                        Discount
                     </label>
                     <input
                        type='number'
                        placeholder='Type here'
                        className='form-control py-3'
                        id='product_name'
                        // value={discount}
                        // onChange={(e) => {
                        //    const inputVal = parseInt(e.target.value)
                        //    if (inputVal >= 0) {
                        //       setDiscount(inputVal)
                        //    }
                        // }}
                     />
                  </div>
                  <div className='mb-4'>
                     <label htmlFor='product_name' className='form-label'>
                        Expiration Date
                     </label>
                     <input
                        type='date'
                        placeholder='Type here'
                        className='form-control py-3'
                        id='product_name'
                        // format to YYYY-MM-DD
                        // min={new Date().toISOString().slice(0, 10)}
                        // max={moment().add(6, 'days').format('YYYY-MM-DD')}
                        // value={expirationDate}
                        // onChange={handleDateChange}
                     />
                  </div>
                  <div className='mb-4'>
                     <label htmlFor='product_name' className='form-label'>
                        Count In Stock
                     </label>
                     <input
                        type='number'
                        placeholder='Type here'
                        className='form-control py-3'
                        id='product_name'
                        // value={countInStock}
                        // onChange={(e) => {
                        //    const inputVal = parseInt(e.target.value)
                        //    if (inputVal >= 0) {
                        //       setCountInStock(inputVal)
                        //    }
                        // }}
                     />
                  </div>
                  <div className='mb-4'>
                     <label className='form-label'>Description</label>
                     <textarea
                        placeholder='Type here'
                        className='form-control'
                        rows='4'
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
                     ></textarea>
                  </div>

                  <div className='d-grid'>
                     <button className='btn btn-primary py-3'>Update Coupon</button>
                  </div>
               </form>
            </form>
         </section>
      </>
   )
}

export default EditCateogryMain
