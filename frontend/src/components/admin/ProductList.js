import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProduct,
  selectAllProducts,
  selectStatus,
} from '../../features/products/productsSlice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingletonProduct from './SingletonProduct';
import LoadingBox from '../LoadingBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Sidebar from '../Sidebar';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ProductList = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const products$ = useSelector(selectAllProducts);
  const [products, setProducts] = useState(products$);
  

  useEffect(() => {
    setProducts(products$);
  }, [products$]);

  const handleDelete = (id) => {
    try {
      dispatch(deleteProduct(id)).unwrap();
      toast.success('deleted successfully');
    } catch (err) {}
  };
  const handleChangeCategory = (category) => {
    const filteredCategory = products$
      .slice()
      .filter((product) => product.category === category);
    setProducts(filteredCategory);
  };
  const handleChangeBrand = (brand) => {
    const filteredBrand = products$
      .slice()
      .filter((product) => product.brand === brand);
    setProducts(filteredBrand);
  };
  return (
    <div>
      {status === 'loading' ? (
        <LoadingBox />
      ) : (
        <ListGroup horizontal>
          <ListGroup.Item>
            <div>
              <div>
                <div className="container feature mt-2">
                  <Row>
                    {products$.length === 0 && (
                      <h3 className="text-center">
                        No Products In the Database
                      </h3>
                    )}
                    {products.map((product) => (
                      <Col key={product.slug} sm={12} className="mb-3">
                        <SingletonProduct
                          product={product}
                          handleDelete={handleDelete}
                        ></SingletonProduct>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </div>
          </ListGroup.Item>
          <Sidebar
                  handleChangeCategory={handleChangeCategory}
                  handleChangeBrand={handleChangeBrand}
                />
        </ListGroup>
      )}
    </div>
  );
};
export default ProductList;
