import React, { useEffect } from 'react'
import './App.css'
import './responsive.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/productScreen'
import CategoriesScreen from './screens/CategoriesScreen'
import OrderScreen from './screens/OrderScreen'
import OrderDetailScreen from './screens/OrderDetailScreen'
import AddProduct from './screens/AddProduct'
import Login from './screens/LoginScreen'
import UsersScreen from './screens/UsersScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import CategoryEditScreen from './screens/CategoryEditScreen'
import CouponScreen from './screens/CouponScreen'
import ColorScreen from './screens/ColorScreen'
import CouponEditScreen from './screens/CouponEditScreen'
import NotFound from './screens/NotFound'
import PrivateRoute from './PrivateRouter'
import { useSelector, useDispatch } from 'react-redux'

import { listProducts } from './redux/actions/ProductActions'
import { listOrders } from './redux/actions/OrderActions'
function App() {
   const dispatch = useDispatch()

   const { userInfo } = useSelector((state) => state.userLogin)

   useEffect(() => {
      if (userInfo && userInfo.isAdmin) {
         dispatch(listProducts())
         dispatch(listOrders())
      }
   }, [dispatch, userInfo])

   return (
      <>
         <Router>
            <Switch>
               <PrivateRoute path='/' component={HomeScreen} exact />
               <PrivateRoute path='/products' component={ProductScreen} />
               <PrivateRoute path='/addproduct' component={AddProduct} />
               <PrivateRoute path='/product/:id/edit' component={ProductEditScreen} />

               <PrivateRoute path='/category/:id/edit' component={CategoryEditScreen} />
               <PrivateRoute path='/category' component={CategoriesScreen} />

               <PrivateRoute path='/orders' component={OrderScreen} />
               <PrivateRoute path='/order/:id' component={OrderDetailScreen} />

               <PrivateRoute path='/coupon/:id/edit' component={CouponEditScreen} />
               <PrivateRoute path='/coupon' component={CouponScreen} />

               <PrivateRoute path='/color/:id/edit' component={CouponEditScreen} />
               <PrivateRoute path='/color' component={ColorScreen} />

               <PrivateRoute path='/users' component={UsersScreen} />

               <Route path='/login' component={Login} />

               <Route path='*' component={NotFound} />
            </Switch>
         </Router>
      </>
   )
}

export default App
