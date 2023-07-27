import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from '../../redux/actions/ProductActions'
import Message from '../LoadingError/Error'
import Loading from '../LoadingError/Loading'
import Toast from '../LoadingError/Toast'
import { listCategories } from '../../redux/actions/CategoryActions'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import convertBase64 from '../../utils/convertBase64'

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
   const [url, setUrl] = useState('')
   const [countInStock, setCountInStock] = useState(0)
   const [description, setDescription] = useState('')
   const [category, setCategory] = useState('')

   const { loading, error, success, product } = useSelector((state) => state.productCreate)
   const { categories } = useSelector((state) => state.categoryList)

   useEffect(() => {
      dispatch(listCategories())
   }, [dispatch])

   useEffect(() => {
      if (product) {
         toast.success('Product Added', ToastObjects)
         dispatch({ type: 'PRODUCT_CREATE_RESET' })
         setName('')
         setPrice(0)
         setCountInStock(0)
         setDescription('')
         setCategory('')
      }
   }, [dispatch, product, success, ToastObjects])

   const submitHandler = (e) => {
      e.preventDefault()
      if (price <= 0) toast.error('Price must be greater than 0', ToastObjects)
      else if (countInStock <= 0) toast.error('Count In Stock must be greater than 0', ToastObjects)
      else
         dispatch(
            createProduct({
               name,
               price,
               image: url,
               countInStock,
               description,
               category,
            })
         )
   }

   const handleImageUpload = async (e) => {
      const file = e.target.files[0]
      const base64 = await convertBase64(file)
      setUrl(base64)
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
                                 onChange={(e) => {
                                    if (e.target.value < 0) {
                                       toast.error('Price must be greater than 0', ToastObjects)
                                       setPrice(0)
                                    } else setPrice(e.target.value)
                                 }}
                                 value={price}
                                 required
                              />
                           </div>
                           <div className='mb-4'>
                              {/* select category */}
                              <label htmlFor='product_price' className='form-label'>
                                 Category
                              </label>
                              <select
                                 className='form-select'
                                 aria-label='Default select example'
                                 onChange={(e) => setCategory(e.target.value)}
                                 value={category}
                                 required
                              >
                                 <option value=''>Select Category</option>
                                 {categories &&
                                    categories.map((category) => (
                                       <option key={category._id} value={category._id}>
                                          {category?.title}
                                       </option>
                                    ))}
                              </select>
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
                                 onChange={(e) => {
                                    if (e.target.value < 0) {
                                       toast.error(
                                          'Count In Stock must be greater than 0',
                                          ToastObjects
                                       )
                                       setCountInStock(0)
                                    } else setCountInStock(e.target.value)
                                 }}
                                 value={countInStock}
                                 required
                              />
                           </div>
                           {/* size */}

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
                              {/* <input
                                 className='form-control'
                                 type='text'
                                 placeholder='Inter Image URL'
                                 onChange={(e) => setImageLink(e.target.value)}
                                 value={imageLink}
                              /> */}
                              <input
                                 className='form-control mt-3'
                                 type='file'
                                 required
                                 onChange={handleImageUpload}
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

export default AddProductMain
