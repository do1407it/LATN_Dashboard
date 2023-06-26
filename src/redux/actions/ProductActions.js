import axios from 'axios'
import {
   PRODUCT_LIST_REQUEST,
   PRODUCT_LIST_SUCCESS,
   PRODUCT_LIST_FAILURE,
   PRODUCT_DETAILS_REQUEST,
   PRODUCT_DETAILS_SUCCESS,
   PRODUCT_DETAILS_FAIL,
   REVIEW_CREATE_REQUEST,
   REVIEW_CREATE_SUCCESS,
   REVIEW_CREATE_FAILURE,
   PRODUCT_DELETE_REQUEST,
   PRODUCT_DELETE_SUCCESS,
   PRODUCT_DELETE_FAILURE,
   PRODUCT_CREATE_REQUEST,
   PRODUCT_CREATE_SUCCESS,
   PRODUCT_CREATE_FAILURE,
   PRODUCT_EDIT_REQUEST,
   PRODUCT_EDIT_SUCCESS,
   PRODUCT_EDIT_FAILURE,
   PRODUCT_UPDATE_REQUEST,
   PRODUCT_UPDATE_SUCCESS,
   PRODUCT_UPDATE_FAILURE,
} from './actionTypes'
import { logout } from './UserActions'

export const listProducts =
   (keyword = '', pageNumber = 1, category = '') =>
   async (dispatch) => {
      try {
         dispatch({
            type: PRODUCT_LIST_REQUEST,
         })

         const { data } = await axios.get(
            `/api/products?keyword=${keyword}&pageNumber=${pageNumber}&category=${category}`
         )

         dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
         })
      } catch (error) {
         dispatch({
            type: PRODUCT_LIST_FAILURE,
            payload:
               error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
         })
      }
   }

export const productDetail = (id) => async (dispatch) => {
   try {
      const { data } = await axios.get(`/api/product/${id}`)
      dispatch({
         type: PRODUCT_DETAILS_REQUEST,
      })
      dispatch({
         type: PRODUCT_DETAILS_SUCCESS,
         payload: data,
      })
   } catch (error) {
      dispatch({
         type: PRODUCT_DETAILS_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}

export const productReview = (productId, review) => async (dispatch, getState) => {
   try {
      dispatch({ type: REVIEW_CREATE_REQUEST })

      const {
         userLogin: { userInfo },
      } = getState()

      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
         },
      }

      await axios.post(`/api/${productId}/reviews`, review, config)
      dispatch({ type: REVIEW_CREATE_SUCCESS, payload: 'Review Added' })
   } catch (error) {
      const message =
         error.response && error.response.data.message ? error.response.data.message : error.message
      if (message === 'Not authorized, token failed') {
         dispatch(logout())
      }
      dispatch({
         type: REVIEW_CREATE_FAILURE,
         payload: message,
      })
   }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: PRODUCT_DELETE_REQUEST })

      const {
         userLogin: { userInfo },
      } = getState()

      const config = {
         headers: {
            Authorization: `Bearer ${userInfo.token}`,
         },
      }

      await axios.delete(`/api/${id}`, config)

      dispatch({ type: PRODUCT_DELETE_SUCCESS })
   } catch (error) {
      const message =
         error.response && error.response.data.message ? error.response.data.message : error.message
      if (message === 'Not authorized, token failed') {
         dispatch(logout())
      }
      dispatch({
         type: PRODUCT_DELETE_FAILURE,
         payload: message,
      })
   }
}

export const createProduct = (payload) => async (dispatch, getState) => {
   try {
      dispatch({ type: PRODUCT_CREATE_REQUEST })

      const {
         userLogin: { userInfo },
      } = getState()

      const config = {
         headers: {
            Authorization: `Bearer ${userInfo.token}`,
         },
      }

      const { data } = await axios.post(`/api/products`, payload, config)

      dispatch({
         type: PRODUCT_CREATE_SUCCESS,
         payload: data,
      })
   } catch (error) {
      const message =
         error.response && error.response.data.message ? error.response.data.message : error.message
      if (message === 'Not authorized, token failed') {
         dispatch(logout())
      }
      dispatch({
         type: PRODUCT_CREATE_FAILURE,
         payload: message,
      })
   }
}

export const editProduct = (id) => async (dispatch) => {
   try {
      dispatch({ type: PRODUCT_EDIT_REQUEST })
      const { data } = await axios.get(`/api/product/${id}`)
      dispatch({ type: PRODUCT_EDIT_SUCCESS, payload: data })
   } catch (error) {
      const message =
         error.response && error.response.data.message ? error.response.data.message : error.message
      if (message === 'Not authorized, token failed') {
         dispatch(logout())
      }
      dispatch({
         type: PRODUCT_EDIT_FAILURE,
         payload: message,
      })
   }
}

export const updateProduct = (product) => async (dispatch, getState) => {
   try {
      dispatch({ type: PRODUCT_UPDATE_REQUEST })

      const {
         userLogin: { userInfo },
      } = getState()

      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
         },
      }

      const { data } = await axios.put(`/api/${product._id}`, product, config)

      dispatch({
         type: PRODUCT_UPDATE_SUCCESS,
         payload: data,
      })
   } catch (error) {
      const message =
         error.response && error.response.data.message ? error.response.data.message : error.message
      if (message === 'Not authorized, token failed') {
         dispatch(logout())
      }
      dispatch({
         type: PRODUCT_UPDATE_FAILURE,
         payload: message,
      })
   }
}
