import {
   COUPON_LIST_REQUEST,
   COUPON_LIST_SUCCESS,
   COUPON_LIST_FAILURE,
   COUPON_DELETE_REQUEST,
   COUPON_DELETE_SUCCESS,
   COUPON_DELETE_FAILURE,
   COUPON_DELETE_RESET,
   COUPON_CREATE_REQUEST,
   COUPON_CREATE_SUCCESS,
   COUPON_CREATE_FAILURE,
   COUPON_CREATE_RESET,
   COUPON_EDIT_REQUEST,
   COUPON_EDIT_SUCCESS,
   COUPON_EDIT_FAILURE,
   COUPON_EDIT_RESET,
   COUPON_UPDATE_REQUEST,
   COUPON_UPDATE_SUCCESS,
   COUPON_UPDATE_FAILURE,
   COUPON_UPDATE_RESET,
} from '../actions/actionTypes'

export const couponListReducer = (state = { coupon: [] }, action) => {
   const { type, payload } = action
   switch (type) {
      case COUPON_LIST_REQUEST:
         return { loading: true, coupon: [] }
      case COUPON_LIST_SUCCESS:
         return { loading: false, coupon: payload }
      case COUPON_LIST_FAILURE:
         return { loading: false, error: payload }
      default:
         return state
   }
}

export const couponDelete = (state = { coupon: [] }, action) => {
   const { type, payload } = action
   switch (type) {
      case COUPON_DELETE_REQUEST:
         return { loading: true, coupon: [] }
      case COUPON_DELETE_SUCCESS:
         return { loading: false, success: true, coupon: payload }
      case COUPON_DELETE_FAILURE:
         return { loading: false, error: payload }
      case COUPON_DELETE_RESET:
         return {}
      default:
         return state
   }
}

export const couponCreateReducer = (state = { coupon: [] }, action) => {
   const { type, payload } = action
   switch (type) {
      case COUPON_CREATE_REQUEST:
         return { loading: true }
      case COUPON_CREATE_SUCCESS:
         return { loading: false, success: true, COUPON: payload }
      case COUPON_CREATE_FAILURE:
         return { loading: false, error: payload }
      case COUPON_CREATE_RESET:
         return {}
      default:
         return state
   }
}

export const couponEditReducer = (state = { coupon: [] }, action) => {
   const { type, payload } = action
   switch (type) {
      case COUPON_EDIT_REQUEST:
         return { loading: true }
      case COUPON_EDIT_SUCCESS:
         return { loading: false, success: true, COUPON: payload }
      case COUPON_EDIT_FAILURE:
         return { loading: false, error: payload }
      case COUPON_EDIT_RESET:
         return {}
      default:
         return state
   }
}

export const couponUpdateReducer = (state = { coupon: [] }, action) => {
   const { type, payload } = action
   switch (type) {
      case COUPON_UPDATE_REQUEST:
         return { loading: true }
      case COUPON_UPDATE_SUCCESS:
         return { loading: false, success: true, COUPON: payload }
      case COUPON_UPDATE_FAILURE:
         return { loading: false, error: payload }
      case COUPON_UPDATE_RESET:
         return {}
      default:
         return state
   }
}
