import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import {
  createOrder,
  selectAllItems,
  selectOrder,
  selectStatusCode,
} from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const PlaceOrder = () => {
  const shippingAddress = JSON.parse(localStorage.getItem('shippingAddress'));
  const statusCode = useSelector(selectStatusCode);
  const order = useSelector(selectOrder);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(selectAllItems);
  const subTotal = cart.cartItems.reduce(
    (a, item) => item.quantity * item.price + a,
    0
  );
  const shippingCost = cart.cartItems.length > 0 ? 100 : 0;
  localStorage.setItem('itemsPrice', subTotal);
  localStorage.setItem('totalPrice', subTotal + shippingCost);

  useEffect(() => {
    try {
      if (statusCode === '201') {
        navigate(`/order/${order._id}`);
      }
    } catch (err) {
      toast.error('Could not place order');
    }
  }, [statusCode, navigate, order]);

  const placeOrderHandler = () => {
    console.log(
      localStorage.getItem('itemsPrice'),
      localStorage.getItem('totalPrice')
    );
    const order = {
      orderItems: cart.cartItems,
      shippingAddress: cart.shippingAddress,
      paymentMethod: cart.paymentMethod,
      itemsPrice: Number(cart.itemsPrice),
      shippingPrice: Number(cart.shippingPrice),
      totalPrice: Number(cart.totalPrice),
    };

    dispatch(createOrder(order)).unwrap();
  };

  return (
    <div>
      <h5 className="fs-4 fw-400">Preview Order</h5>
      <Row className="mt-2">
        <Col sm={6} md={8}>
          <Card>
            <Card.Header>Shipping Address</Card.Header>
            <Card.Body>
              <p>
                <span className="text-bold">Name : </span>
                {shippingAddress.fullName}
              </p>
              <p>
                <span className="text-bold">Address : </span>
                {`${shippingAddress.address},${shippingAddress.city},${shippingAddress.postalCode}`}
              </p>
              <Button
                className="mb-2 btn-info"
                onClick={() => navigate('/shipping')}
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Header>
              Payment Method:
              <strong>{localStorage.getItem('paymentMethod')}</strong>
            </Card.Header>
            <Card.Body>
              <Button
                className="mb-2 btn-info"
                onClick={() => navigate('/payment')}
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Header>Items in Cart</Card.Header>
            <Card.Body>
              {cart.cartItems.map((item) => (
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
                      {cart.cartItems.reduce(
                        (tot, item) => tot + item.quantity,
                        0
                      )}{' '}
                      item
                      {cart.cartItems.reduce(
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
                <button className="btn btn-info" onClick={placeOrderHandler}>
                  Place Order
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default PlaceOrder;

/* const ORDER={
        orderItems:[{
            slug:'',
            name:'',
            quantity:0,
            image:'',
            product:'ref(product)'
        }],
        shippingAddress:{},
        paymentMethod:'',
        paymentResult:{},
        itemsPrice:0,
        shippingPrice:0,
        totalPrice:0,
        user:ref(User)
        isPaid:'false',
        paidAt:'date',
        isDelivered:false,
        deliveredAt:'date'
        } */
