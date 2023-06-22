import {
   CATEGORY_LIST_REQUEST,
   CATEGORY_LIST_SUCCESS,
   CATEGORY_LIST_FAILURE,
   CATEGORY_DELETE_REQUEST,
   CATEGORY_DELETE_SUCCESS,
   CATEGORY_DELETE_FAILURE,
   CATEGORY_DELETE_RESET,
   CATEGORY_CREATE_REQUEST,
   CATEGORY_CREATE_SUCCESS,
   CATEGORY_CREATE_FAILURE,
   CATEGORY_CREATE_RESET,
   CATEGORY_EDIT_REQUEST,
   CATEGORY_EDIT_SUCCESS,
   CATEGORY_EDIT_FAILURE,
   CATEGORY_EDIT_RESET,
   CATEGORY_UPDATE_REQUEST,
   CATEGORY_UPDATE_SUCCESS,
   CATEGORY_UPDATE_FAILURE,
   CATEGORY_UPDATE_RESET,
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

export const categoryCreateReducer = (state = { categories: [] }, action) => {
   const { type, payload } = action
   switch (type) {
      case CATEGORY_CREATE_REQUEST:
         return { loading: true }
      case CATEGORY_CREATE_SUCCESS:
         return { loading: false, success: true, category: payload }
      case CATEGORY_CREATE_FAILURE:
         return { loading: false, error: payload }
      case CATEGORY_CREATE_RESET:
         return {}
      default:
         return state
   }
}

export const categoryEditReducer = (state = { categories: [] }, action) => {
   const { type, payload } = action
   switch (type) {
      case CATEGORY_EDIT_REQUEST:
         return { loading: true }
      case CATEGORY_EDIT_SUCCESS:
         return { loading: false, success: true, category: payload }
      case CATEGORY_EDIT_FAILURE:
         return { loading: false, error: payload }
      case CATEGORY_EDIT_RESET:
         return {}
      default:
         return state
   }
}

export const categoryUpdateReducer = (state = { categories: [] }, action) => {
   const { type, payload } = action
   switch (type) {
      case CATEGORY_UPDATE_REQUEST:
         return { loading: true }
      case CATEGORY_UPDATE_SUCCESS:
         return { loading: false, success: true, category: payload }
      case CATEGORY_UPDATE_FAILURE:
         return { loading: false, error: payload }
      case CATEGORY_UPDATE_RESET:
         return {}
      default:
         return state
   }
}
