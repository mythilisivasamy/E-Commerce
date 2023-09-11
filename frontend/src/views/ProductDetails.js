import { useNavigate, useParams } from 'react-router-dom';
import { selectProductBySlug } from '../features/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from '../components/Rating';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import { addCartItem, selectAllCartItems } from '../features/cart/cartSlice';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectAllCartItems);
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;
  const product$ = useSelector((state) => selectProductBySlug(state, slug));
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(product$);
  }, [product$]);

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
            src={`../${product.image}`}
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
              <span className="fs-5">Price:Rs.{product.price}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <img
                className="img-fluid img-thumbnail"
                src={`../${product.image}`}
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
                    <Col>{product.price}</Col>
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
    </div>
  );
};

export default ProductDetails;
