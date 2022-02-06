import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Row, Col, Image, ListGroup, Form } from 'react-bootstrap'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

const ProductScreen = () => {
  const [qty, setQty] = useState(1)
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  const dispatch = useDispatch()

  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    dispatch(listProductDetails(id))

    //const { data } = await axios.get(`/api/products/${idUrl.id}`)
  }, [dispatch, id])

  const addToCartHandler = () => {
    history.push(`/cart/${id}?qty=${qty}`)
  }

  return (
    <React.Fragment>
      <Link to='/'>
        <Button variant='light'>Go Back</Button>
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage variant='danger'>{error}</ErrorMessage>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product.image} rounded fluid />
          </Col>
          <Col md={3} className='my-5'>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>Price: {product.price} LE</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={2} className='my-5 offset-md-1'>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <strong>{product.price} LE</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty:</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {Array.from(
                          Array(parseInt(product.countInStock)).keys()
                        ).map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <div className='d-grid gap-2'>
                  <Button
                    onClick={addToCartHandler}
                    variant='success'
                    disabled={product.countInStock === 0}
                  >
                    Add To Card
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </React.Fragment>
  )
}

export default ProductScreen
