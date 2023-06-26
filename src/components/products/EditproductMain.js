import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Toast from './../LoadingError/Toast'
import Message from '../LoadingError/Error'
import Loading from '../LoadingError/Loading'
import { toast } from 'react-toastify'

import { editProduct, updateProduct } from '../../redux/actions/ProductActions'
import { listCategories } from '../../redux/actions/CategoryActions'

const ToastObjects = {
   pauseOnFocusLoss: false,
   draggable: false,
   pauseOnHover: false,
   autoClose: 2000,
}

const EditProductMain = ({ productId }) => {
   const dispatch = useDispatch()

   const [name, setName] = useState('')
   const [price, setPrice] = useState(0)
   const [image, setImage] = useState('')
   const [category, setCategory] = useState('')
   const [countInStock, setCountInStock] = useState(0)
   const [description, setDescription] = useState('')

   const { loading, error, product } = useSelector((state) => state.productEdit)
   const { categories } = useSelector((state) => state.categoryList)

   useEffect(() => {
      dispatch(listCategories())
   }, [dispatch])
   const {
      loading: loadingUpdate,
      error: errorUpdate,
      success: successUpdate,
   } = useSelector((state) => state.productUpdate)

   useEffect(() => {
      if (successUpdate) {
         toast.success('Product updated successfully', ToastObjects)
         dispatch({ type: 'PRODUCT_UPDATE_RESET' })
         dispatch(editProduct(productId))
      } else {
         if (!product || product._id !== productId) {
            dispatch(editProduct(productId))
         } else {
            setName(product.name)
            setPrice(product.price)
            setImage(product.image)
            setCountInStock(product.countInStock)
            setDescription(product.description)
            setCategory(product?.category?._id)
         }
      }
   }, [dispatch, product, productId, successUpdate])
   console.log(category)
   const submitHandler = (e) => {
      e.preventDefault()
      if (price <= 0) toast.error('Price must be greater than 0', ToastObjects)

      else
         dispatch(
            updateProduct({
               _id: productId,
               name,
               price,
               image,
               countInStock,
               category,
               description,
            })
         )
   }

   return (
      <>
         <Toast />

         <section className='content-main' style={{ maxWidth: '1200px' }}>
            <form onSubmit={submitHandler}>
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
                           {loadingUpdate && <Loading />}
                           {errorUpdate && <Message variant='alert-danger'>{errorUpdate}</Message>}
                           <div className='mb-4'>
                              <label htmlFor='product_title' className='form-label'>
                                 Product title
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
                              <label htmlFor='product_price' className='form-label'>
                                 Price
                              </label>
                              <input
                                 type='number'
                                 placeholder='Type here'
                                 className='form-control'
                                 id='product_price'
                                 value={price}
                                 onChange={(e) => setPrice(e.target.value)}
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
                                 value={countInStock}
                                 onChange={(e) => setCountInStock(e.target.value)}
                                 required
                              />
                           </div>
                           <div className='mb-4'>
                              <select
                                 className='form-select'
                                 aria-label='Default select example'
                                 value={category}
                                 onChange={(e) => setCategory(e.target.value)}
                                 required
                              >
                                 {categories &&
                                    categories.map((category) => (
                                       <option key={category._id} value={category?._id}>
                                          {category?.title}
                                       </option>
                                    ))}
                              </select>
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
                           {/* img */}
                           <div className='mb-4'>
                              <img src={image} alt={name} width={100} height={100} />
                           </div>
                           <div className='mb-4'>
                              <label className='form-label'>Images</label>
                              <input
                                 className='form-control'
                                 type='text'
                                 value={image}
                                 onChange={(e) => setImage(e.target.value)}
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

export default EditProductMain
