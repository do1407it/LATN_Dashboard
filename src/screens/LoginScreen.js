import React, { useEffect, useState, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/LoadingError/Loading'
import Toast from '../components/LoadingError/Toast'
import Message from './../components/LoadingError/Error'
import { login } from '../redux/actions/UserActions'
import { toast } from 'react-toastify'

const Login = ({ history }) => {
   window.scrollTo(0, 0)
   const toastId = useRef(null)
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const dispatch = useDispatch()

   const userLogin = useSelector((state) => state.userLogin)
   const { error, loading, userInfo } = userLogin
   const Toastobjects = useMemo(
      () => ({
         pauseOnFocusLoss: false,
         draggable: false,
         pauseOnHover: false,
         autoClose: 2000,
      }),
      []
   )
   useEffect(() => {
      if (userInfo) {
         history.push('/')
      }
   }, [userInfo, history])

   const submitHandler = (e) => {
      e.preventDefault()
      dispatch(login(email, password))
   }
   return (
      <>
         <Toast />
         <div className='card shadow mx-auto' style={{ maxWidth: '380px', marginTop: '100px' }}>
            <div className='card-body'>
               {error && <Message variant='alert-danger'>{error}</Message>}
               {loading && <Loading />}
               <h4 className='card-title mb-4 text-center'>Sign in</h4>
               <form onSubmit={submitHandler}>
                  <div className='mb-3'>
                     <input
                        className='form-control'
                        placeholder='Email'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
                  <div className='mb-3'>
                     <input
                        className='form-control'
                        placeholder='Password'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </div>

                  <div className='mb-4'>
                     <button type='submit' className='btn btn-primary w-100'>
                        Login
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </>
   )
}

export default Login
