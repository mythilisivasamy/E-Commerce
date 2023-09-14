import { useSelector } from 'react-redux';
import './Slider.css';
import { selectAllProducts } from '../features/products/productsSlice';
import Product from './Product';
const Slider = () => {
  const classnames=['d-block','d-none d-sm-block','d-none d-md-block','d-none d-lg-block','d-none d-lg-block']
  const products = useSelector(selectAllProducts);
  const kurtha = products.filter((product) => product.category === 'kurtha');
  const ethnic = products.filter((product) => product.category === 'Ethnic');
  const casuals = products.filter((product) => product.category === 'Casuals');
  return (
    <div className="container bg-white feature">
      <h3 className="text-center mb-3">Featured Products</h3>
      <div
        id="feature-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex">
              {kurtha.map((item,idx) => (
                <Product key={item.slug} product={item} display={classnames[idx]}></Product>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex">
              {ethnic.map((item,idx) => (
                <Product key={item.slug} product={item} display={classnames[idx]}></Product>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex">
              {casuals.map((item,idx) => (
                <Product key={item.slug} product={item} display={classnames[idx]}></Product>
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#feature-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#feature-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
