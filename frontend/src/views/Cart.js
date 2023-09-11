import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  selectAllCartItems,
  removeCartItem,
  addCartItem,
} from '../features/cart/cartSlice';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Cart = () => {
  const cartItems = useSelector(selectAllCartItems);
  const subTotal = cartItems.reduce(
    (a, item) => item.quantity * item.price + a,
    0
  );
  const shippingCost = cartItems.length > 0 ? 100 : 0;
  
  const dispatch = useDispatch();
  const handleRemoveItem = (product) => {
    try {
      dispatch(removeCartItem(product));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateCart = (product) => {
    if (product.quantity > product.countInStock - 1) {
      toast.error('Product Out of Stock');
    }
    try {
      dispatch(addCartItem(product));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container h-80 mt-2">
      <Row>
        <Col sm={7}>
          <Card>
            <Card.Header className="bg-light text-center fs-4">
              Items in Cart
            </Card.Header>
            <Card.Body>
              {cartItems.length === 0 ? (
                <MessageBox>
                  Cart is empty.<Link to="/">Goto Shopping</Link>
                </MessageBox>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <Row key={item._id}>
                      <Col sm={12} md={2} className="text-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        />
                      </Col>
                      <Col sm={12} md={5} className="text-center">
                        <div>
                          <Link to={`/product/${item.slug}`}>
                            <p>{item.name}</p>
                          </Link>
                          <h6>Rs.{item.price}</h6>
                          <p className="bg-white">
                            <button onClick={() => handleRemoveItem(item)}>
                              <i
                                className="fa-solid fa-trash"
                                style={{ color: '#0097b2' }}
                              ></i>
                            </button>
                          </p>
                        </div>
                      </Col>
                      <Col sm={12} md={5} className="text-center">
                        <ListGroup horizontal>
                          <ListGroup.Item>
                            <button
                              onClick={() =>
                                handleUpdateCart({
                                  ...item,
                                  quantity: item.quantity - 1,
                                })
                              }
                              disabled={item.quantity === 1}
                            >
                              <i
                                className="fa-solid fa-minus"
                                style={{ color: '#0097b2' }}
                              ></i>
                            </button>
                          </ListGroup.Item>

                          <ListGroup.Item>{item.quantity}</ListGroup.Item>
                          <ListGroup.Item>
                            <button
                              onClick={() =>
                                handleUpdateCart({
                                  ...item,
                                  quantity: item.quantity + 1,
                                })
                              }
                              disabled={item.quantity >= item.countInStock}
                            >
                              <i
                                className="fa-solid fa-plus"
                                style={{ color: '#0097b2' }}
                              ></i>
                            </button>
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                      <hr />
                    </Row>
                  ))}
                </>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col sm={5}>
          <Card>
            <Card.Header className="text-center fs-4">Summary</Card.Header>
            <Card.Body>
              <Row>
                <Col sm={12} md={6}>
                  <p className="fs-5">
                    SubTotal
                    <br />
                    <span>
                      ({' '}
                      {cartItems.reduce((tot, item) => tot + item.quantity, 0)}{' '}
                      item
                      {cartItems.reduce(
                        (tot, item) => tot + item.quantity,
                        0
                      ) === 1
                        ? ''
                        : 's'}{' '}
                      )
                    </span>
                  </p>
                </Col>
                <Col sm={12} md={6}>
                  <h5>
                    <span>Rs.{subTotal}</span>
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6}>
                  <p className="fs-5">Shipping</p>
                </Col>
                <Col sm={12} md={6}>
                  <h5>Rs.{shippingCost}</h5>
                </Col>
              </Row>

              <hr />
              <Row>
                <Col sm={12} md={6}>
                  <p className="fs-5">Total</p>
                </Col>
                <Col sm={12} md={6}>
                  <h5>Rs.{subTotal + shippingCost}</h5>
                </Col>
              </Row>

              <div className="d-flex justify-content-around align-items-center">
                <Link to="/login?redirect=/shipping">
                  <button className="btn btn-info">Checkout</button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
