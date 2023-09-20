import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const SingletonProduct = (props) => {
  let rupeeIndian = Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });
  const { product } = props;
  const navigate = useNavigate();

  return (
    <Card className="card">
      <div className="card-header text-center text-center bg-white">
        <img
          src={`../${product.image}`}
          className="img-fluid"
          alt={product.name}
        />
      </div>
      <div className="card-body text-center  bg-light">
        <p className="card-text">Category: {product.category}</p>
        <p className="card-text">Brand: {product.brand}</p>

        <div className="card-text d-sm-block link-color">
          {rupeeIndian.format(product.price)}
        </div>
        <div>
          <span
            className="px-3"
            style={{ cursor: 'pointer' }}
            onClick={(e) => {
              props.handleDelete(product._id, e);
            }}
          >
            <i className="fa-solid fa-trash" />
          </span>
          <span
            className="px-3"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`edit/${product._id}`)}
          >
            <i className="fa-solid fa-edit" />
          </span>
        </div>
      </div>
    </Card>
  );
};

export default SingletonProduct;
