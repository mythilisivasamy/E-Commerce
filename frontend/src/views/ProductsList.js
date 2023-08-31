import { useSelector } from 'react-redux';
import {
  selectAllProducts,
  selectError,
  selectStatus,
} from '../features/products/productsSlice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
const ProductsList = () => {
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const products = useSelector(selectAllProducts);
  console.log(`products ${products}`);

  return (
    <div>
      {status === 'loading' ? (
        <LoadingBox />
      ) : status === 'error' ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="container feature">
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};
export default ProductsList;
