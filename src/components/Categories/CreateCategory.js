import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCategory } from '../../redux/actions/CategoryActions'
import Loading from '../LoadingError/Loading'
import Message from '../LoadingError/Error'
const CreateCategory = () => {
   const dispatch = useDispatch()
   const [name, setName] = useState('')
   const [description, setDescription] = useState('')

   const { loading, error, success } = useSelector((state) => state.categoryCreate)
   useEffect(() => {
      if (success) {
         setName('')
         setDescription('')
      }
   }, [dispatch, success])
   const handleCreateCategory = (e) => {
      e.preventDefault()
      dispatch(createCategory({ title: name.trim(), description: description.trim() }))
   }
   return (
      <div className='col-md-12 col-lg-4'>
         {loading && <Loading />}
         {error && <Message variant='alert-danger'>{error}</Message>}

         <form onSubmit={handleCreateCategory}>
            <div className='mb-4'>
               <label htmlFor='product_name' className='form-label'>
                  Name
               </label>
               <input
                  type='text'
                  placeholder='Type here'
                  className='form-control py-3'
                  id='product_name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
            </div>
            {/* <div className='mb-4'>
               <label className='form-label'>Images</label>
               <input className='form-control' type='file' />
            </div> */}
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
               <button className='btn btn-primary py-3'>Create category</button>
            </div>
         </form>
      </div>
   )
}

export default React.memo(CreateCategory)
