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
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ProductList = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const products$ = useSelector(selectAllProducts);
  const [products, setProducts] = useState(products$);
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();

  useEffect(() => {
    setProducts(products$);
  }, [products$]);

  const handleDelete = (id) => {
    try {
      dispatch(deleteProduct(id)).unwrap();
      toast.success('deleted successfully');
    } catch (err) {}
  };
  const handleChangeCategory = (e) => {
    const filteredCategory = products$
      .slice()
      .filter((product) => product.category === e.target.value);
    setProducts(filteredCategory);
    setCategory(e.target.value);
    setBrand('');
  };
  const handleChangeBrand = (e) => {
    const filteredBrand = products$
      .slice()
      .filter((product) => product.brand === e.target.value);
    setProducts(filteredBrand);
    setBrand(e.target.value);
    setCategory('');
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
          <ListGroup.Item>
            <Form>
              <Row className="mx-2">
                <Col xs={12}>
                  <p className="fw-bold">Filter by Category</p>
                  <div className="mb-3">
                    <Form.Check
                      type="radio"
                      id="saree"
                      label="Saree"
                      value="saree"
                      checked={category === 'saree'}
                      onChange={(e) => handleChangeCategory(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Check
                      type="radio"
                      id="kurtha"
                      label="kurtha"
                      value="kurtha"
                      checked={category === 'kurtha'}
                      onChange={(e) => handleChangeCategory(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Check
                      type="radio"
                      id="shirt"
                      label="Shirt"
                      value="Shirt"
                      checked={category === 'Shirt'}
                      onChange={(e) => handleChangeCategory(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Check
                      type="radio"
                      id="Ethnic"
                      label="Ethnic"
                      value="Ethnic"
                      checked={category === 'Ethnic'}
                      onChange={(e) => handleChangeCategory(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Check
                      type="radio"
                      id="Casuals"
                      label="Casuals"
                      value="Casuals"
                      checked={category === 'Casuals'}
                      onChange={(e) => handleChangeCategory(e)}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mx-2">
                <Col xs={12}>
                  <p className="fw-bold">Filter by Brand</p>
                  <div className="mb-3">
                    <Form.Check
                      type="radio"
                      id="adidas"
                      label="Adidas"
                      value="Adidas"
                      checked={brand === 'Adidas'}
                      onChange={(e) => handleChangeBrand(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Check
                      type="radio"
                      id="pantalooms"
                      label="pantalooms"
                      value="pantalooms"
                      checked={brand === 'pantalooms'}
                      onChange={(e) => handleChangeBrand(e)}
                    />
                  </div>

                  <div className="mb-3">
                    <Form.Check
                      type="radio"
                      id="Trends"
                      label="Trends"
                      value="Trends"
                      checked={brand === 'Trends'}
                      onChange={(e) => handleChangeBrand(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Check
                      type="radio"
                      id="Max"
                      label="Max"
                      value="Max"
                      checked={brand === 'Max'}
                      onChange={(e) => handleChangeBrand(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Check
                      type="radio"
                      id="Lilliput"
                      label="Lilliput"
                      value="Lilliput"
                      checked={brand === 'Lilliput'}
                      onChange={(e) => handleChangeBrand(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Check
                      type="radio"
                      id="Allen Solly"
                      label="Allen Solly"
                      value="Allen Solly"
                      checked={brand === 'Allen Solly'}
                      onChange={(e) => handleChangeBrand(e)}
                    />
                  </div>
                </Col>
              </Row>
            </Form>
          </ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
};
export default ProductList;
