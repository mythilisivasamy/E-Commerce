import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllCartItems,
  removeCartItem,
  addCartItem,
} from '../features/cart/cartSlice';
import MessageBox from '../components/MessageBox';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { selectUserInfo } from '../features/users/usersSlice';

const Cart = () => {
  const navigate = useNavigate();
  let rupeeIndian = Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });
  const cartItems = useSelector(selectAllCartItems);
  const subTotal = cartItems.reduce(
    (a, item) => item.quantity * item.price + a,
    0
  );
  const shippingCost = cartItems.length > 0 ? 100 : 0;
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [userInfo, navigate]);
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
    <div className="container h-80 my-2">
      <Row className="my-2">
        <Col sm={8}>
          <Card>
            <Card.Header className="bg-light text-center fw-bold">
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
                      <Col sm={12} md={3} className="text-center">
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
                          <h6> {rupeeIndian.format(item.price)}</h6>
                          <p>
                            <i
                              className="fa-solid fa-trash"
                              style={{ color: '#0097b2', cursor: 'pointer' }}
                              onClick={() => handleRemoveItem(item)}
                            ></i>
                          </p>
                        </div>
                      </Col>
                      <Col sm={12} md={4} className="add-delete text-center">
                        <span className="px-2">
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
                              style={{ color: '#000' }}
                            ></i>
                          </button>
                        </span>

                        <span className="px-2 fw-bold">{item.quantity}</span>
                        <span className="px-2">
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
                              style={{ color: '#000' }}
                            ></i>
                          </button>
                        </span>
                      </Col>
                      <hr className="my-2" />
                    </Row>
                  ))}
                </>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <Card.Header className="text-center fw-bold">Summary</Card.Header>
            <Card.Body>
              <Row>
                <Col sm={12} md={6}>
                  <p className="fw-bold">
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
                  <h6>
                    <span> {rupeeIndian.format(subTotal)}</span>
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6}>
                  <p className="fw-bold">Shipping</p>
                </Col>
                <Col sm={12} md={6}>
                  <h6> {rupeeIndian.format(shippingCost)}</h6>
                </Col>
              </Row>

              <hr />
              <Row>
                <Col sm={12} md={6}>
                  <p className="fw-bold">Total</p>
                </Col>
                <Col sm={12} md={6}>
                  <h6> {rupeeIndian.format(subTotal + shippingCost)}</h6>
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
