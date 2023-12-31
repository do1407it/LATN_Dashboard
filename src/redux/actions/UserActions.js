import axios from 'axios'
import {
   USER_LOGIN_REQUEST,
   USER_LOGIN_SUCCESS,
   USER_LOGIN_FAILURE,
   USER_LOGOUT,
   USER_DETAILS_REQUEST,
   USER_DETAILS_SUCCESS,
   USER_DETAILS_FAILURE,
   USER_UPDATE_PROFILE_REQUEST,
   USER_UPDATE_PROFILE_SUCCESS,
   USER_UPDATE_PROFILE_FAILURE,
   USER_LIST_REQUEST,
   USER_LIST_SUCCESS,
   USER_LIST_FAILURE,
} from './actionTypes'

export const login = (email, password) => async (dispatch) => {
   try {
      dispatch({ type: USER_LOGIN_REQUEST })

      const config = { headers: { 'Content-Type': 'application/json' } }

      const { data } = await axios.post('/api/users/login', { email, password }, config)
      if (data?.isAdmin) {
         dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
         })
         localStorage.setItem('userInfo', JSON.stringify(data))
      } else {
         dispatch({
            type: USER_LOGIN_FAILURE,
            payload: 'You are not Admin',
         })
         localStorage.removeItem('userInfo')
      }
   } catch (error) {
      dispatch({
         type: USER_LOGIN_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}

export const logout = () => (dispatch) => {
   localStorage.removeItem('userInfo')
   dispatch({ type: USER_LOGOUT })
   dispatch({ type: 'USER_DETAILS_RESET' })
   dispatch({ type: 'ORDER_LIST_MY_RESET' })
   dispatch({ type: 'USER_LIST_RESET' })

   document.location.href = '/login'
}

export const register = (name, email, password) => async (dispatch) => {
   try {
      dispatch({ type: 'USER_REGISTER_REQUEST' })

      const config = { headers: { 'Content-Type': 'application/json' } }

      const { data } = await axios.post('/api/users', { name, email, password }, config)

      dispatch({
         type: 'USER_REGISTER_SUCCESS',
         payload: data,
      })

      dispatch({
         type: USER_LOGIN_SUCCESS,
         payload: data,
      })

      localStorage.setItem('userInfo', JSON.stringify(data))
   } catch (error) {
      dispatch({
         type: 'USER_REGISTER_FAILURE',
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}

export const getUserDetails = () => async (dispatch, getState) => {
   try {
      dispatch({ type: USER_DETAILS_REQUEST })

      const {
         userLogin: { userInfo },
      } = getState()

      const config = {
         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` },
      }

      const { data } = await axios.get(`/api/users/profile`, config)

      dispatch({
         type: USER_DETAILS_SUCCESS,
         payload: data,
      })
   } catch (error) {
      const message =
         error.response && error.response.data.message ? error.response.data.message : error.message
      if (message === 'Not authorized, token failed') {
         dispatch(logout())
      }
      dispatch({
         type: USER_DETAILS_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
   try {
      dispatch({ type: USER_UPDATE_PROFILE_REQUEST })

      const {
         userLogin: { userInfo },
      } = getState()

      const config = {
         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` },
      }

      const { data } = await axios.put(`/api/users/profile`, user, config)

      dispatch({
         type: USER_UPDATE_PROFILE_SUCCESS,
         payload: data,
      })
      dispatch({
         type: USER_LOGIN_SUCCESS,
         payload: data,
      })
      localStorage.setItem('userInfo', JSON.stringify(data))
   } catch (error) {
      const message =
         error.response && error.response.data.message ? error.response.data.message : error.message
      if (message === 'Not authorized, token failed') {
         dispatch(logout())
      }
      dispatch({
         type: USER_UPDATE_PROFILE_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}

export const listUsers = () => async (dispatch, getState) => {
   try {
      dispatch({ type: USER_LIST_REQUEST })

      const {
         userLogin: { userInfo },
      } = getState()

      const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }

      const { data } = await axios.get(`/api/users`, config)

      dispatch({
         type: USER_LIST_SUCCESS,
         payload: data,
      })
   } catch (error) {
      const message =
         error.response && error.response.data.message ? error.response.data.message : error.message
      if (message === 'Not authorized, token failed') {
         dispatch(logout())
      }
      dispatch({
         type: USER_LIST_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}
