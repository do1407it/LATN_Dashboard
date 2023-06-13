import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
   // getProductDetailsReducer,
   getProductListReducer,
   productDeleteReducer,
   productCreateReducer,
   productEditReducer,
   productUpdateReducer,
   // productReviewReducer,
} from './reducers/Product'
import { orderListReducer, orderDetailsReducer } from './reducers/Orders'
// import { cartReducer } from './reducers/Cart'
import { userLoginReducer, getUsersReducer } from './reducers/User'

const reducer = combineReducers({
   userLogin: userLoginReducer,
   userList: getUsersReducer,
   productList: getProductListReducer,
   productDelete: productDeleteReducer,
   productCreate: productCreateReducer,
   productEdit: productEditReducer,
   productUpdate: productUpdateReducer,
   orderList: orderListReducer,
   orderDetail: orderDetailsReducer,
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
