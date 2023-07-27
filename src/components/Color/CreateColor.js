import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createColor } from '../../redux/actions/ColorActions'
import Loading from '../LoadingError/Loading'
import Message from '../LoadingError/Error'

const CreateColor = () => {
   const dispatch = useDispatch()
   const [colorName, setColorName] = useState('')
   const [colorCode, setColorCode] = useState(null)
   const colors = ['red', 'blue', 'green', 'yellow', 'black', 'orange', 'pink', 'gray']

   const { loading, error, success } = useSelector((state) => state.colorCreate)

   console.log(success);
   useEffect(() => {
      if (success) {
         setColorName('')
      }
   }, [dispatch, success])

   const handleCreateCoupon = (e) => {
      e.preventDefault()
      dispatch(createColor({ name: colorName, color: colorCode }))
   }
   return (
      <div className='col-md-12 col-lg-4'>
         {loading && <Loading />}
         {error && <Message variant='alert-danger'>{error}</Message>}

         <form onSubmit={handleCreateCoupon}>
            <div className='mb-4'>
               <label htmlFor='product_name' className='form-label'>
                  Color name
               </label>
               <input
                  type='text'
                  placeholder='Type here'
                  className='form-control py-3'
                  id='product_name'
                  value={colorName}
                  onChange={(e) => setColorName(e.target.value)}
               />
            </div>
            <div className='mb-4'>
               <label htmlFor='product_name' className='form-label'>
                  Color value
               </label>
               <div className='row'>
                  {colors.map((color) => (
                     <div
                        onClick={() => {
                           setColorCode(color)
                           alert('Chọn màu: ' + color)
                        }}
                        style={{
                           width: '20px',
                           height: '20px',
                           backgroundColor: `${color}`,
                           borderRadius: '50%',
                           border: '1px solid',
                           margin: '0 auto',
                        }}
                     ></div>
                  ))}
               </div>
            </div>
            <div className='d-grid'>
               <button className='btn btn-primary py-3'>Create color</button>
            </div>
         </form>
      </div>
   )
}

export default React.memo(CreateColor)
