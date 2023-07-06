import axios from 'axios'
import {
   COUPON_LIST_REQUEST,
   COUPON_LIST_SUCCESS,
   COUPON_LIST_FAILURE,
   COUPON_DELETE_REQUEST,
   COUPON_DELETE_SUCCESS,
   COUPON_DELETE_FAILURE,
   COUPON_CREATE_REQUEST,
   COUPON_CREATE_SUCCESS,
   COUPON_CREATE_FAILURE,
   COUPON_EDIT_REQUEST,
   COUPON_EDIT_SUCCESS,
   COUPON_EDIT_FAILURE,
   COUPON_UPDATE_REQUEST,
   COUPON_UPDATE_SUCCESS,
   COUPON_UPDATE_FAILURE,
} from './actionTypes'

export const listCoupon = () => async (dispatch) => {
   try {
      dispatch({ type: COUPON_LIST_REQUEST })

      const { data } = await axios.get('/api/coupon')

      dispatch({ type: COUPON_LIST_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: COUPON_LIST_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}

export const deleteCoupon = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: COUPON_DELETE_REQUEST })
      const {
         userLogin: { userInfo },
      } = getState()
      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
         },
      }
      const { data } = await axios.delete(`/api/coupon/${id}`, config)

      dispatch({ type: COUPON_DELETE_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: COUPON_DELETE_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}

export const createCoupon = (coupon) => async (dispatch, getState) => {
   try {
      dispatch({ type: COUPON_CREATE_REQUEST })
      const {
         userLogin: { userInfo },
      } = getState()

      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
         },
      }
      const { data } = await axios.post(`/api/coupon`, coupon, config)

      dispatch({ type: COUPON_CREATE_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: COUPON_CREATE_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}

export const editCoupon = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: COUPON_EDIT_REQUEST })
      const {
         userLogin: { userInfo },
      } = getState()

      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
         },
      }
      const { data } = await axios.get(`/api/coupon/${id}`, config)

      dispatch({ type: COUPON_EDIT_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: COUPON_EDIT_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}

export const updateCoupon = (coupon) => async (dispatch, getState) => {
   try {
      dispatch({ type: COUPON_UPDATE_REQUEST })
      const {
         userLogin: { userInfo },
      } = getState()

      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
         },
      }
      const { data } = await axios.put(`/api/coupon/${coupon._id}`, coupon, config)

      dispatch({ type: COUPON_UPDATE_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: COUPON_UPDATE_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}
