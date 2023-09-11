import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchOrder, selectOrder } from '../features/cart/cartSlice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import PayPalButtons from 'react-bootstrap/PayPalButtons'
import MessageBox from '../components/MessageBox';
import { useEffect } from 'react';

const OrderScreen = () => {
  const params = useParams();
  // const navigate=useNavigate();
  const { id: orderId } = params;
  const order = useSelector(selectOrder);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrder(orderId));
  }, [orderId, dispatch]);

  return (
    <div>
      <h5 className="fs-4 fw-400">Order:{orderId}</h5>
      <Row className="mt-2">
        <Col sm={6} md={8}>
          <Card>
            <Card.Header>Shipping Address</Card.Header>
            <Card.Body>
              <p>
                <span className="text-bold">Name : </span>
                {order.shippingAddress.fullName}
              </p>
              <p>
                <span className="text-bold">Address : </span>
                {`${order.shippingAddress.address},${order.shippingAddress.city},${order.shippingAddress.postalCode}`}
              </p>
              {order.isDelivered ? (
                <MessageBox variant="success">
                  Delivered at {order.deliveredAt}
                </MessageBox>
              ) : (
                <MessageBox variant="danger">Not Delivered</MessageBox>
              )}
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Header>
              Payment Method:
              <strong>{order.paymentMethod}</strong>
            </Card.Header>
            <Card.Body>
              {order.isPaid ? (
                <MessageBox variant="success">
                  Paid at {order.deliveredAt}
                </MessageBox>
              ) : (
                <MessageBox variant="danger">Not Paid</MessageBox>
              )}
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Header>Items in Cart</Card.Header>
            <Card.Body>
              {order.orderItems.map((item) => (
                <Row key={item._id}>
                  <Col sm={12} md={3} className="text-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded img-thumbnail"
                    />
                  </Col>
                  <Col sm={12} md={3} className="text-center">
                    <Link to={`/product/${item.slug}`}>
                      <p>{item.name}</p>
                    </Link>
                  </Col>
                  <Col sm={12} md={3} className="text-center">
                    <p>{item.quantity}</p>
                  </Col>
                  <Col sm={12} md={3} className="text-center">
                    <p>Rs.{item.price}</p>
                  </Col>
                  <hr />
                </Row>
              ))}
            </Card.Body>
            <Card.Footer>
              <Row className="mt-2">
                <Col>
                  <Link to="/cart">Edit</Link>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm={6} md={4}>
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
                      {order.orderItems.reduce(
                        (tot, item) => tot + item.quantity,
                        0
                      )}{' '}
                      item
                      {order.orderItems.reduce(
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
                    <span>Rs.{order.itemsPrice}</span>
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6}>
                  <p className="fs-5">Shipping</p>
                </Col>
                <Col sm={12} md={6}>
                  <h5>Rs.{order.shippingPrice}</h5>
                </Col>
              </Row>

              <hr />
              <Row>
                <Col sm={12} md={6}>
                  <p className="fs-5">Total</p>
                </Col>
                <Col sm={12} md={6}>
                  <h5>Rs.{order.totalPrice}</h5>
                </Col>
              </Row>

              <div className="d-flex justify-content-around align-items-center">
                <PayPalButtons
                  createOrder={createOrder}
                  onApprove={onApprove}
                  onError={onError}
                ></PayPalButtons>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OrderScreen;
