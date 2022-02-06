import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import OrderListScreen from './screens/OrderListScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/product/:id'>
            <ProductScreen />
          </Route>
          <Route path='/cart/:id?'>
            {/* id is optional     */}
            <CartScreen />
          </Route>
          <Route path='/login'>
            <LoginScreen />
          </Route>
          <Route path='/register'>
            <RegisterScreen />
          </Route>
          <Route path='/profile'>
            <ProfileScreen />
          </Route>
          <Route path='/shipping'>
            <ShippingScreen />
          </Route>
          <Route path='/payment'>
            <PaymentScreen />
          </Route>
          <Route path='/placeorder'>
            <PlaceOrderScreen />
          </Route>
          <Route path='/order/:id'>
            <OrderScreen />
          </Route>
          <Route path='/admin/orderlist'>
            <OrderListScreen />
          </Route>
          <Route path='/admin/userlist'>
            <UserListScreen />
          </Route>
          <Route path='/admin/user/:id/edit'>
            <UserEditScreen />
          </Route>
          <Route path='/admin/productlist'>
            <ProductListScreen />
          </Route>
          <Route path='/admin/product/:id/edit'>
            <ProductEditScreen />
          </Route>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
