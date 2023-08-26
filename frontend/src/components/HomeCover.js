import './HomeCover.css';
const HomeCover = () => {
  return (
    <div className="container py-3 bg-white" id="main">
      <div className="d-flex flex-column-reverse flex-md-row justify-content-between">
        <div className="mx-auto d-block">
          <div className="d-flex  align-items-start flex-column  my-2">
            <h4>Summer Offer</h4>
            <h3>40 - 70% OFF</h3>
            <h5>On All Products</h5>
            <p>
              Save more with coupons & upto <span>70%</span> Off
            </p>
            <a href="./">
              <button className="btn mb-2">Shop Now</button>
            </a>
            <h5 className="mt-3">
              <strong>
                <em>Find . Explore . Buy </em>
              </strong>
            </h5>
            <h5 className="mt-3">
              <strong>
                <em>Everything you need & Nothing you don't</em>
              </strong>
            </h5>
          </div>
        </div>
        <div>
          <img
            src="./images/banner.jpg"
            alt="banner-img"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCover;
