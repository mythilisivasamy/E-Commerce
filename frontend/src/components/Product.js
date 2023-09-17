import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, selectAllCartItems } from '../features/cart/cartSlice';
import { toast } from 'react-toastify';

const Product = (props) => {
  let rupeeIndian = Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });
  const cartItems = useSelector(selectAllCartItems);
  const { product, display } = props;
  const dispatch = useDispatch();
  const addToCartHandler = (product) => {
    const cartItem = cartItems.find((item) => item._id === product._id);
    if (cartItem) {
      toast.info('Product already added');
      return;
    }
    try {
      dispatch(addCartItem(product));
    } catch (err) {
      alert(err);
    }
  };
  return (
    <Card className={display ? display : 'card'}>
      <div className="card-header text-center text-center bg-white">
        <img src={product.image} className="img-fluid" alt={product.name} />
      </div>
      <div className="card-body text-start  bg-light">
        <Link to={`/product/${product.slug}`} className="link-color">
          <span className="card-title">{product.name}</span>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="card-text d-sm-block link-color">
          {rupeeIndian.format(product.price)}
        </div>
        {product.countInStock === 0 ? (
          <Button className="pro-btn d-sm-block" variant="flush" disabled>
            Out of stock
          </Button>
        ) : (
          <button
            className="pro-btn d-sm-block"
            onClick={() => addToCartHandler(product)}
          >
            <span>Add to cart</span>
            <span>
              <FontAwesomeIcon
                style={{ color: 'white' }}
                icon={faCartShopping}
              />
            </span>{' '}
          </button>
        )}
      </div>
    </Card>
  );
};

export default Product;
