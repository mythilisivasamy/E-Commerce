import { useNavigate, useParams } from 'react-router-dom';
import {
  fetchReview,
  saveReview,
  selectProductBySlug,
  selectStatus,
} from '../features/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from '../components/Rating';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import { addCartItem, selectAllCartItems } from '../features/cart/cartSlice';
import { toast } from 'react-toastify';
import LoadingBox from '../components/LoadingBox';

const ProductDetails = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  let rupeeIndian = Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectAllCartItems);
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;
  const product$ = useSelector((state) => selectProductBySlug(state, slug));
  const [product, setProduct] = useState({});
  useEffect(() => {
    if (status === 'succeeded') {
      dispatch(fetchReview);
    }
    setProduct(product$);
  }, [product$, dispatch, status]);

  const handleSubmit = (formValues) => {
    if (!userInfo) {
      navigate('/login');
    } else {
      try {
        const review = {
          ...formValues,
          name: userInfo.userName,
          id: product$._id,
        };
        dispatch(saveReview(review));
      } catch (err) {
        toast.error(err);
      }
    }
  };
  const addToCartHandler = (product) => {
    const cartItem = cartItems.find((item) => item._id === product._id);
    if (cartItem) {
      navigate('/cart');
      return;
    }
    try {
      dispatch(addCartItem(product));
      navigate('/cart');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="bg-white">
      <Row>
        <Col md={5} variant="top" className="text-center">
          <img
            className="img-large img-fluid"
            src={product.image}
            alt={product.name}
          />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                numReviews={product.numReviews}
                rating={product.rating}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="fs-5">
                Price: {rupeeIndian.format(product.price)}
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <img
                className="img-fluid img-thumbnail"
                src={product.image}
                alt={product.name}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              Description:
              <p className="fw-bold">{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col> {rupeeIndian.format(product.price)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Out of Stock</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroupItem className="feature">
                    <Button
                      onClick={() => addToCartHandler(product)}
                      className="pro-btn"
                    >
                      Add to Cart
                    </Button>
                  </ListGroupItem>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="mt-3">
        <ListGroup>
          {product.reviews && <h5>Reviews</h5>}
          {product.reviews ? (
            product.reviews.map((review) => (
              <ListGroup.Item key={review._id}>
                <strong>{review.name}</strong>
                <Rating rating={review.rating}></Rating>
                <p>Posted At : {review.createdAt.substring(0, 10)}</p>
                <p>Comment : {review.comment}</p>
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>
              <h5>There is no review</h5>
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
      <div className="text-center">
        {status === 'loading' && <LoadingBox />}

        <h3 className="mt-3 fs-5">Write the Customer Review</h3>
      </div>
      <div className="col-10 col-xs-10 col-sm-8 col-md-6 col-lg-5 mx-auto d-block text-bg-light">
        <Form onSubmit={() => handleSubmit({ rating, comment })}>
          <Row className="mx-2">
            <Col xs={12}>
              <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Select onChange={(e) => setRating(e.target.value)}>
                  <option>Select Rating</option>
                  <option value="1">1_Poor</option>
                  <option value="2">2-Fair</option>
                  <option value="3">3-Good</option>
                  <option value="4">4-Very Good</option>
                  <option value="5">5-Excellent</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mx-2">
            <Col xs={12}>
              <Form.Group className="mb-3">
                <Form.Label>Enter Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setComment(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mx-2">
            <Col xs={12}>
              <Button
                type="submit"
                className="mb-2 btn-info align-items-center"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default ProductDetails;
