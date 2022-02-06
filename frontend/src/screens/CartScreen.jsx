import React, { useEffect } from 'react'
import { Link, useParams, useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button } from 'react-bootstrap'
import ErrorMessage from '../components/ErrorMessage'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = () => {
  const productId = useParams().id

  // const { productId } = useParams()
  const history = useHistory()
  const location = useLocation()

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const { cartItems } = useSelector((state) => state.cart)

  //console.log(cartItems)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <Row>
      <Col md={9}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <ErrorMessage>
            Your cart is empty <Link to='/'>Go back</Link>
          </ErrorMessage>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={2} className='my-4'>
                    <Link
                      to={`/product/${item.product}`}
                      style={{ textDecoration: 'none' }}
                    >
                      {item.name}
                    </Link>
                  </Col>
                  <Col md={2} className='my-4'>
                    {item.price} LE
                  </Col>
                  <Col md={2} className='my-3'>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {Array.from(
                        Array(parseInt(item.countInStock)).keys()
                      ).map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2} className='my-3'>
                    <Button
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={3}>
        <ListGroup>
          <ListGroup.Item>
            <h4>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h4>
            {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)} LE
          </ListGroup.Item>
          <ListGroup.Item>
            <div className='d-grid gap-2'>
              <Button
                onClick={checkoutHandler}
                variant='success'
                disabled={cartItems.length === 0}
              >
                Proceed To Checkout
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  )
}

export default CartScreen
