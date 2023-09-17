import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import MessageBox from '../components/MessageBox';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  selectOrder,
  payRequest,
  payFail,
  paySuccess,
} from '../features/cart/cartSlice';
import LoadingBox from '../components/LoadingBox';

const OrderScreen = () => {
  const params = useParams();
  const { id: orderId } = params;
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const dispatch = useDispatch();
  const order = useSelector(selectOrder);
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }
  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        dispatch(payRequest());
        const { data } = await axios.put(
          `/api/orders/${order._id}/pay`,
          details,
          {
            headers: { authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch(paySuccess(data));
        toast.success('Order is paid');
      } catch (err) {
        dispatch(payFail());
        toast.error('Order Failed');
      }
    });
  }

  function onError(err) {
    toast.error('order failed');
  }

  useEffect(() => {
    if (!order.isPaid) {
      paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
    }
  }, [order, paypalDispatch]);
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
                      src={'.' + item.image}
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
              {isPending && <LoadingBox />}
              <ListGroup>
                <ListGroup.Item>
                  <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                  />
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OrderScreen;
