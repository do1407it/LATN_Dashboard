import {
   CATEGORY_LIST_REQUEST,
   CATEGORY_LIST_SUCCESS,
   CATEGORY_LIST_FAILURE,
   CATEGORY_DELETE_REQUEST,
   CATEGORY_DELETE_SUCCESS,
   CATEGORY_DELETE_FAILURE,
   CATEGORY_DELETE_RESET,
} from '../actions/actionTypes'

export const categoryListReducer = (state = { categories: [] }, action) => {
   const { type, payload } = action
   switch (type) {
      case CATEGORY_LIST_REQUEST:
         return { loading: true, categories: [] }
      case CATEGORY_LIST_SUCCESS:
         return { loading: false, categories: payload }
      case CATEGORY_LIST_FAILURE:
         return { loading: false, error: payload }
      default:
         return state
   }
}

export const categoryDelete = (state = { categories: [] }, action) => {
   const { type, payload } = action
   switch (type) {
      case CATEGORY_DELETE_REQUEST:
         return { loading: true, categories: [] }
      case CATEGORY_DELETE_SUCCESS:
         return { loading: false, success: true, categories: payload }
      case CATEGORY_DELETE_FAILURE:
         return { loading: false, error: payload }
      case CATEGORY_DELETE_RESET:
         return {}
      default:
         return state
   }
}
