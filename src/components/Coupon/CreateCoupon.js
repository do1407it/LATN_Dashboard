import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCoupon } from '../../redux/actions/CouponActions'
import Loading from '../LoadingError/Loading'
import Message from '../LoadingError/Error'

const CreateCoupon = () => {
   const dispatch = useDispatch()
   const [code, setCode] = useState('')
   const [discount, setDiscount] = useState(0)
   const [expirationDate, setExpirationDate] = useState(new Date().toISOString().slice(0, 10))
   const [countInStock, setCountInStock] = useState(0)
   const [description, setDescription] = useState('')
   const handleDateChange = (e) => {
      const selectedDate = e.target.value
      const currentDate = new Date()
      const nextTwoWeeks = new Date()
      nextTwoWeeks.setDate(currentDate.getDate() + 6)

      if (
         selectedDate >= currentDate.toISOString().slice(0, 10) &&
         selectedDate <= nextTwoWeeks.toISOString().slice(0, 10)
      )
         setExpirationDate(selectedDate)
   }
   const { loading, error, success } = useSelector((state) => state.couponCreate)
   useEffect(() => {
      if (success) {
         setCode('')
         setDescription('')
      }
   }, [dispatch, success])

   const handleCreateCoupon = (e) => {
      e.preventDefault()
      dispatch(createCoupon({ code, discount, expirationDate, countInStock, description }))
   }
   return (
      <div className='col-md-12 col-lg-4'>
         {loading && <Loading />}
         {error && <Message variant='alert-danger'>{error}</Message>}

         <form onSubmit={handleCreateCoupon}>
            <div className='mb-4'>
               <label htmlFor='product_name' className='form-label'>
                  Code Coupon
               </label>
               <input
                  type='text'
                  placeholder='Type here'
                  className='form-control py-3'
                  id='product_name'
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
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
                  value={discount}
                  onChange={(e) => {
                     const inputVal = parseInt(e.target.value)
                     if (inputVal >= 0) {
                        setDiscount(inputVal)
                     }
                  }}
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
                  value={expirationDate}
                  onChange={handleDateChange}
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
                  value={countInStock}
                  onChange={(e) => {
                     const inputVal = parseInt(e.target.value)
                     if (inputVal >= 0) {
                        setCountInStock(inputVal)
                     }
                  }}
               />
            </div>
            <div className='mb-4'>
               <label className='form-label'>Description</label>
               <textarea
                  placeholder='Type here'
                  className='form-control'
                  rows='4'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
               ></textarea>
            </div>

            <div className='d-grid'>
               <button className='btn btn-primary py-3'>Create Coupon</button>
            </div>
         </form>
      </div>
   )
}

export default React.memo(CreateCoupon)
