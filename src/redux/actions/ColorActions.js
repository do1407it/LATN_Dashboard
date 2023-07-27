import axios from 'axios'
import {
   COLOR_LIST_REQUEST,
   COLOR_LIST_SUCCESS,
   COLOR_LIST_FAILURE,
   COLOR_CREATE_REQUEST,
   COLOR_CREATE_SUCCESS,
   COLOR_CREATE_FAILURE,
   COLOR_DELETE_REQUEST,
   COLOR_DELETE_SUCCESS,
   COLOR_DELETE_FAILURE,
} from './actionTypes'

export const listColors = () => async (dispatch, getState) => {
   try {
      dispatch({ type: COLOR_LIST_REQUEST })
      const {
         userLogin: { userInfo },
      } = getState()
      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
         },
      }
      const { data } = await axios.get('/api/color', config)

      dispatch({
         type: COLOR_LIST_SUCCESS,
         payload: data,
      })
   } catch (error) {
      dispatch({
         type: COLOR_LIST_FAILURE,
         payload: error.response?.data?.message ? error.response.data.message : error.message,
      })
   }
}

export const createColor = (color) => async (dispatch, getState) => {
   try {
      dispatch({ type: COLOR_CREATE_REQUEST })
      const {
         userLogin: { userInfo },
      } = getState()
      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
         },
      }
      const { data } = await axios.post('/api/color', color, config)

      dispatch({ type: COLOR_CREATE_SUCCESS, payload: data })
      dispatch(listColors())
   } catch (error) {
      dispatch({
         type: COLOR_CREATE_FAILURE,
         payload: error.response?.data?.message ? error.response.data.message : error.message,
      })
   }
}

export const deleteColor = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: COLOR_DELETE_REQUEST })
      const {
         userLogin: { userInfo },
      } = getState()
      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
         },
      }
      const { data } = await axios.delete(`/api/color/${id}`, config)

      dispatch({ type: COLOR_DELETE_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: COLOR_DELETE_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      })
   }
}

