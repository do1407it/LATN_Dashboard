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
   REVIEW_CREATE_RESET,
   PRODUCT_DELETE_REQUEST,
   PRODUCT_DELETE_SUCCESS,
   PRODUCT_DELETE_FAILURE,
   PRODUCT_CREATE_REQUEST,
   PRODUCT_CREATE_SUCCESS,
   PRODUCT_CREATE_FAILURE,
   PRODUCT_CREATE_RESET,
   PRODUCT_EDIT_REQUEST,
   PRODUCT_EDIT_SUCCESS,
   PRODUCT_EDIT_FAILURE,
   PRODUCT_EDIT_RESET,
   PRODUCT_UPDATE_REQUEST,
   PRODUCT_UPDATE_SUCCESS,
   PRODUCT_UPDATE_FAILURE,
   PRODUCT_UPDATE_RESET,
} from '../actions/actionTypes'

export const getProductListReducer = (state = { products: { products: [] } }, action) => {
   const { type, payload } = action
   switch (type) {
      case PRODUCT_LIST_REQUEST:
         return { loading: true, products: { products: [] } }
      case PRODUCT_LIST_SUCCESS:
         return {
            loading: false,
            products: payload,
         }
      case PRODUCT_LIST_FAILURE:
         return { loading: false, error: payload }
      default:
         return state
   }
}

export const getProductDetailsReducer = (state = { product: { reviews: [] } }, action) => {
   const { type, payload } = action
   switch (type) {
      case PRODUCT_DETAILS_REQUEST:
         return { ...state, loading: true }
      case PRODUCT_DETAILS_SUCCESS:
         return { loading: false, product: payload }
      case PRODUCT_DETAILS_FAIL:
         return { loading: false, error: payload }
      default:
         return state
   }
}

export const productReviewReducer = (state = {}, action) => {
   const { type, payload } = action
   switch (type) {
      case REVIEW_CREATE_REQUEST:
         return { loading: true }
      case REVIEW_CREATE_SUCCESS:
         return { loading: false, success: true, review: payload }
      case REVIEW_CREATE_FAILURE:
         return { loading: false, error: payload }
      case REVIEW_CREATE_RESET:
         return {}
      default:
         return state
   }
}

export const productDeleteReducer = (state = {}, action) => {
   switch (action.type) {
      case PRODUCT_DELETE_REQUEST:
         return { loading: true }
      case PRODUCT_DELETE_SUCCESS:
         return { loading: false, success: true }
      case PRODUCT_DELETE_FAILURE:
         return { loading: false, error: action.payload }
      default:
         return state
   }
}

export const productCreateReducer = (state = {}, action) => {
   const { type, payload } = action
   switch (type) {
      case PRODUCT_CREATE_REQUEST:
         return { loading: true }
      case PRODUCT_CREATE_SUCCESS:
         return { loading: false, success: true, product: payload }
      case PRODUCT_CREATE_FAILURE:
         return { loading: false, error: payload }
      case PRODUCT_CREATE_RESET:
         return {}
      default:
         return state
   }
}

export const productEditReducer = (state = { product: { reviews: [] } }, action) => {
   const { type, payload } = action
   switch (type) {
      case PRODUCT_EDIT_REQUEST:
         return { loading: true }
      case PRODUCT_EDIT_SUCCESS:
         return { loading: false, success: true, product: payload }
      case PRODUCT_EDIT_FAILURE:
         return { loading: false, error: payload }
      case PRODUCT_EDIT_RESET:
         return {}
      default:
         return state
   }
}

export const productUpdateReducer = (state = {}, action) => {
   const { type, payload } = action
   switch (type) {
      case PRODUCT_UPDATE_REQUEST:
         return { loading: true }
      case PRODUCT_UPDATE_SUCCESS:
         return { loading: false, success: true, product: payload }
      case PRODUCT_UPDATE_FAILURE:
         return { loading: false, error: payload }
      case PRODUCT_UPDATE_RESET:
         return {}
      default:
         return state
   }
}
