import axios from 'axios'
import {
   CATEGORY_LIST_REQUEST,
   CATEGORY_LIST_SUCCESS,
   CATEGORY_LIST_FAILURE,
   CATEGORY_DELETE_REQUEST,
   CATEGORY_DELETE_SUCCESS,
   CATEGORY_DELETE_FAILURE,
   CATEGORY_CREATE_REQUEST,
   CATEGORY_CREATE_SUCCESS,
   CATEGORY_CREATE_FAILURE,
   CATEGORY_EDIT_REQUEST,
   CATEGORY_EDIT_SUCCESS,
   CATEGORY_EDIT_FAILURE,
   CATEGORY_UPDATE_REQUEST,
   CATEGORY_UPDATE_SUCCESS,
   CATEGORY_UPDATE_FAILURE,
} from './actionTypes'

export const listCategories = () => async (dispatch, getState) => {
   try {
      dispatch({ type: CATEGORY_LIST_REQUEST })
      const {
         userLogin: { userInfo },
      } = getState()
      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
         },
      }
      const { data } = await axios.get('/api/category', config)

      dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: CATEGORY_LIST_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}

export const deleteCategory = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CATEGORY_DELETE_REQUEST })
      const {
         userLogin: { userInfo },
      } = getState()
      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
         },
      }
      const { data } = await axios.delete(`/api/category/${id}`, config)

      dispatch({ type: CATEGORY_DELETE_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: CATEGORY_DELETE_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}

export const createCategory = (category) => async (dispatch, getState) => {
   try {
      dispatch({ type: CATEGORY_CREATE_REQUEST })
      const {
         userLogin: { userInfo },
      } = getState()

      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
         },
      }
      const { data } = await axios.post(`/api/category`, category, config)

      dispatch({ type: CATEGORY_CREATE_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: CATEGORY_CREATE_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}

export const editCategory = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CATEGORY_EDIT_REQUEST })
      const {
         userLogin: { userInfo },
      } = getState()

      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
         },
      }
      const { data } = await axios.get(`/api/category/${id}`, config)

      dispatch({ type: CATEGORY_EDIT_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: CATEGORY_EDIT_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}

export const updateCategory = (category) => async (dispatch, getState) => {
   try {
      dispatch({ type: CATEGORY_UPDATE_REQUEST })
      const {
         userLogin: { userInfo },
      } = getState()

      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
         },
      }
      const { data } = await axios.put(`/api/category/${category._id}`, category, config)

      dispatch({ type: CATEGORY_UPDATE_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: CATEGORY_UPDATE_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}
