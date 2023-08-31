import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { product } = props;
  return (
    <Card className="card">
      <Card.Header className="card-header">
        <Link to={`/product/${product.slug}`}>
          <img src={product.image} className="img-fluid" alt={product.name} />
        </Link>
      </Card.Header>

      <Card.Body className="card-body">
        <Link to={`/product/${product.slug}`}>
          <Card.Title className="card-title">{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text className="card-title">Rs.{product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button className="pro-btn" variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button className="pro-btn">
            <span>Add to cart</span>
            <span>
              <FontAwesomeIcon icon={faCartShopping} />
            </span>{' '}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
