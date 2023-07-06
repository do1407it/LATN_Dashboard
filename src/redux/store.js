import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
   getProductListReducer,
   productDeleteReducer,
   productCreateReducer,
   productEditReducer,
   productUpdateReducer,
} from './reducers/Product'

import { orderListReducer, orderDetailsReducer, orderDelivedReducer } from './reducers/Orders'
import { userLoginReducer, getUsersReducer } from './reducers/User'
import {
   categoryListReducer,
   categoryDelete,
   categoryCreateReducer,
   categoryEditReducer,
   categoryUpdateReducer,
} from './reducers/Category'

import {
   couponListReducer,
   couponDelete,
   couponCreateReducer,
   couponEditReducer,
   couponUpdateReducer,
} from './reducers/Coupon'

const reducer = combineReducers({
   userLogin: userLoginReducer,
   userList: getUsersReducer,

   productList: getProductListReducer,
   productDelete: productDeleteReducer,
   productCreate: productCreateReducer,
   productEdit: productEditReducer,
   productUpdate: productUpdateReducer,

   categoryList: categoryListReducer,
   categoryDelete: categoryDelete,
   categoryCreate: categoryCreateReducer,
   categoryEdit: categoryEditReducer,
   categoryUpdate: categoryUpdateReducer,

   couponList: couponListReducer,
   couponDelete: couponDelete,
   couponCreate: couponCreateReducer,
   couponEdit: couponEditReducer,
   couponUpdate: couponUpdateReducer,

   orderList: orderListReducer,
   orderDetail: orderDetailsReducer,
   orderDeliver: orderDelivedReducer,
})

// Local Storage
const userInfoFromStorage = localStorage.getItem('userInfo')
   ? JSON.parse(localStorage.getItem('userInfo'))
   : null

const initialState = {
   userLogin: { userInfo: userInfoFromStorage },
}
const middeware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middeware)))

export default store
