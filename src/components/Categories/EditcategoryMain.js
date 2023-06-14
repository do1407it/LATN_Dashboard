import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Toast from '../LoadingError/Toast'
import Message from '../LoadingError/Error'
import Loading from '../LoadingError/Loading'
import { toast } from 'react-toastify'

import { editProduct, updateProduct } from '../../redux/actions/ProductActions'

const ToastObjects = {
   pauseOnFocusLoss: false,
   draggable: false,
   pauseOnHover: false,
   autoClose: 2000,
}

const EditCateogryMain = ({ productId }) => {
   return (
      <>
         <Toast />

         <section className='content-main' style={{ maxWidth: '1200px' }}>
            <form>
               <div className='content-header'>
                  <Link to='/products' className='btn btn-danger text-white'>
                     Go to products
                  </Link>
                  <h2 className='content-title'>Update Product</h2>
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
                                 Product title
                              </label>
                              <input
                                 type='text'
                                 placeholder='Type here'
                                 className='form-control'
                                 id='product_title'
                                 // value={name}
                                 // onChange={(e) => setName(e.target.value)}
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
                                 // value={price}
                                 // onChange={(e) => setPrice(e.target.value)}
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
                                 // value={countInStock}
                                 // onChange={(e) => setCountInStock(e.target.value)}
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
                                 // value={description}
                                 // onChange={(e) => setDescription(e.target.value)}
                              ></textarea>
                           </div>
                           <div className='mb-4'>
                              <label className='form-label'>Images</label>
                              <input
                                 className='form-control'
                                 type='text'
                                 // value={image}
                                 // onChange={(e) => setImage(e.target.value)}
                              />
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

export default EditCateogryMain
