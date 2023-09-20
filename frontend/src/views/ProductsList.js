import { useSelector } from 'react-redux';
import {
  selectAllProducts,
  selectError,
  selectStatus,
} from '../features/products/productsSlice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
const ProductsList = () => {
  const [page, setPage] = useState(1);
  const perPage = 8;
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const products$ = useSelector(selectAllProducts);
  const [offset, setOffset] = useState(perPage * (page - 1));
  const [products, setProducts] = useState(
    products$.slice(offset, perPage * page)
  );
  const numOfPages = Math.round(products$.length / perPage);
  useEffect(() => {
    setOffset(perPage * (page - 1));
    setProducts(products$.slice(offset, perPage * page));
  }, [page, perPage, products$, offset]);

  const handleSetPage = (page) => {
    setPage(page);
    window.scrollTo(0, 0);
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

  const pageItems = () => {
    const pageItems = [];
    for (let i = 1; i <= numOfPages; i++) {
      pageItems.push(
        <Pagination.Item
          key={i}
          active={page === i ? true : false}
          linkStyle={{ backgroundColor: '#fff' }}
        >
          <Link to={`/product?p=${i}`} onClick={() => handleSetPage(i)}>
            {i}
          </Link>
        </Pagination.Item>
      );
    }
    return pageItems;
  };

  return (
    <div>
      <div>
        {status === 'loading' ? (
          <LoadingBox />
        ) : status === 'error' ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="container feature mt-2">
            <Row>
              <Col xs={12} sm={2}>
                <Sidebar
                  handleChangeCategory={handleChangeCategory}
                  handleChangeBrand={handleChangeBrand}
                />
              </Col>
              <Col xs={12} sm={10}>
                <Row>
                  {products.map((product) => (
                    <Col
                      key={product.slug}
                      sm={6}
                      md={4}
                      lg={3}
                      className="mb-3"
                    >
                      <Product product={product}></Product>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        )}
      </div>
      <div>
        <Pagination className="justify-content-center mt-3">
          <Pagination.First disabled={page <= 1 ? true : false}>
            <Link
              to={`/product?p=${page - 1}`}
              onClick={() => handleSetPage(page - 1)}
            >
              Prev
            </Link>
          </Pagination.First>
          {pageItems()}
          <Pagination.Last disabled={page === numOfPages ? true : false}>
            <Link
              to={`/product?p=${page + 1}`}
              onClick={() => handleSetPage(page + 1)}
            >
              Next
            </Link>
          </Pagination.Last>
        </Pagination>
      </div>
    </div>
  );
};
export default ProductsList;
