import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from '../../redux/actions/ProductActions'
import Message from '../LoadingError/Error'
import Loading from '../LoadingError/Loading'
import Toast from '../LoadingError/Toast'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddProductMain = () => {
   // eslint-disable-next-line react-hooks/exhaustive-deps
   const ToastObjects = {
      pauseOnFocusLoss: false,
      draggable: false,
      pauseOnHover: false,
      autoClose: 2000,
   }

   const dispatch = useDispatch()
   const [name, setName] = useState('')
   const [price, setPrice] = useState(0)
   const [image, setImage] = useState('')
   const [countInStock, setCountInStock] = useState(0)
   const [description, setDescription] = useState('')

   const { loading, error, success, product } = useSelector((state) => state.productCreate)

   useEffect(() => {
      if (product) {
         toast.success('Product Added', ToastObjects)
         dispatch({ type: 'PRODUCT_CREATE_RESET' })
         setName('')
         setPrice(0)
         setCountInStock(0)
         setDescription('')
         setImage('')
      }
   }, [dispatch, product, success, ToastObjects])
   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(
         createProduct({
            name,
            price,
            image,
            countInStock,
            description,
         })
      )
   }
   return (
      <>
         <Toast />
         <section className='content-main' style={{ maxWidth: '1200px' }}>
            <form onSubmit={handleSubmit}>
               <div className='content-header'>
                  <Link to='/products' className='btn btn-danger text-white'>
                     Go to products
                  </Link>
                  <h2 className='content-title'>Add product</h2>
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
                           {loading && <Loading />}
                           {error && <Message variant='alert-danger'>{error}</Message>}
                           <div className='mb-4'>
                              <label htmlFor='product_title' className='form-label'>
                                 Product title
                              </label>
                              <input
                                 type='text'
                                 placeholder='Type here'
                                 className='form-control'
                                 id='product_title'
                                 onChange={(e) => setName(e.target.value)}
                                 value={name}
                                 required
                              />
                           </div>
                           <div className='mb-4'>
                              <label htmlFor='product_price' className='form-label'>
                                 Price
                              </label>
                              <input
                                 type='number'
                                 placeholder='Type here'
                                 className='form-control'
                                 id='product_price'
                                 onChange={(e) => setPrice(e.target.value)}
                                 value={price}
                                 required
                              />
                           </div>
                           <div className='mb-4'>
                              <label htmlFor='product_price' className='form-label'>
                                 Count In Stock
                              </label>
                              <input
                                 type='number'
                                 placeholder='Type here'
                                 className='form-control'
                                 id='product_price'
                                 onChange={(e) => setCountInStock(e.target.value)}
                                 value={countInStock}
                                 required
                              />
                           </div>
                           <div className='mb-4'>
                              <label className='form-label'>Description</label>
                              <textarea
                                 placeholder='Type here'
                                 className='form-control'
                                 rows='7'
                                 onChange={(e) => setDescription(e.target.value)}
                                 value={description}
                                 required
                              ></textarea>
                           </div>
                           <div className='mb-4'>
                              <label className='form-label'>Images</label>
                              <input
                                 className='form-control'
                                 type='text'
                                 placeholder='Inter Image URL'
                                 onChange={(e) => setImage(e.target.value)}
                                 value={image}
                              />
                              <input className='form-control mt-3' type='file' />
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

export default AddProductMain
