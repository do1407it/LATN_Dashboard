import {
   COLOR_LIST_REQUEST,
   COLOR_LIST_SUCCESS,
   COLOR_LIST_FAILURE,
   COLOR_CREATE_REQUEST,
   COLOR_CREATE_SUCCESS,
   COLOR_CREATE_FAILURE,
   COLOR_CREATE_RESET,
   COLOR_DELETE_REQUEST,
   COLOR_DELETE_SUCCESS,
   COLOR_DELETE_FAILURE,
   COLOR_DELETE_RESET,
} from '../actions/actionTypes'

export const colorListReducer = (state = { color: [] }, action) => {
   const { type, payload } = action
   switch (type) {
      case COLOR_LIST_REQUEST:
         return { loading: true, color: [] }
      case COLOR_LIST_SUCCESS:
         return { loading: false, color: payload }
      case COLOR_LIST_FAILURE:
         return { loading: false, error: payload }
      default:
         return state
   }
}

export const colorCreateReducer = (state = {}, action) => {
   const { type, payload } = action
   switch (type) {
      case COLOR_CREATE_REQUEST:
         return { loading: true }
      case COLOR_CREATE_SUCCESS:
         return { loading: false, success: true, color: payload }
      case COLOR_CREATE_FAILURE:
         return { loading: false, error: payload }
      case COLOR_CREATE_RESET:
         return {}
      default:
         return state
   }
}

export const colorDeleteReducer = (state = {}, action) => {
   const { type, payload } = action
   switch (type) {
      case COLOR_DELETE_REQUEST:
         return { loading: true }
      case COLOR_DELETE_SUCCESS:
         return { loading: false, success: true }
      case COLOR_DELETE_FAILURE:
         return { loading: false, error: payload }
      case COLOR_DELETE_RESET:
         return {}
      default:
         return state
   }
}

