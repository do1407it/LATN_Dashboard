import axios from 'axios'
import {
   CATEGORY_LIST_REQUEST,
   CATEGORY_LIST_SUCCESS,
   CATEGORY_LIST_FAILURE,
   CATEGORY_DELETE_REQUEST,
   CATEGORY_DELETE_SUCCESS,
   CATEGORY_DELETE_FAILURE,
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
