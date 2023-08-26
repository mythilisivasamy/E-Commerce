import './Slider.css';
const Slider = () => {
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
              <div className="card ">
                <div className="card-header text-center text-center bg-white">
                  <img
                    src="./images/women/kurtha-1.jpg"
                    className="img-fluid"
                    alt="Kurtha"
                  />
                </div>
                <div className="card-body text-center  bg-light">
                  <h5 className="card-title">Kurtha</h5>
                  <h5>$15</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="pro-btn">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: 'white' }}
                    ></i>
                    <a href="./">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="card d-none d-sm-block">
                <div className="card-header text-center bg-white">
                  <img
                    src="./images/women/saree-2.jpg"
                    className="img-fluid"
                    alt="sarees"
                  />
                </div>
                <div className="card-body text-center bg-light">
                  <h5 className="card-title">Saree</h5>
                  <h5>$25</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="pro-btn">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: 'white' }}
                    ></i>
                    <a href="./">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="card  d-none d-md-block">
                <div className="card-header text-center bg-white">
                  <img
                    src="./images/women/leggings-4.jpg"
                    className="img-fluid"
                    alt="leggings"
                  />
                </div>
                <div className="card-body text-center bg-light">
                  <h5 className="card-title">Leggings</h5>
                  <h5>$10</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="pro-btn">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: 'white' }}
                    ></i>
                    <a href="./">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="card d-none d-lg-block">
                <div className="card-header text-center bg-white">
                  <img
                    src="./images/women/tops-4.jpg"
                    className="img-fluid"
                    alt="Tops"
                  />
                </div>
                <div className="card-body  text-center bg-light">
                  <h5 className="card-title">Tops</h5>
                  <h5>$25</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="pro-btn">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: 'white' }}
                    ></i>
                    <a href="./">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="card d-none d-lg-block">
                <div className="card-header text-center bg-white">
                  <img
                    src="./images/women/saree-3.jpg"
                    className="img-fluid"
                    alt="Tops"
                  />
                </div>
                <div className="card-body text-center bg-light">
                  <h5 className="card-title">Tops</h5>
                  <h5>$25</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="pro-btn">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: 'white' }}
                    ></i>
                    <a href="./">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex">
              <div className="card d-block">
                <div className="card-header text-center bg-white">
                  <img
                    src="./images/kids/ethnic-4.jpg"
                    className="img-fluid"
                    alt="Ethnic wear"
                  />
                </div>
                <div className="card-body text-center bg-light">
                  <h5 className="card-title">Ethnic Wear</h5>
                  <h5>$15</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="pro-btn">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: 'white' }}
                    ></i>
                    <a href="./">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="card d-none d-sm-block">
                <div className="card-header text-center bg-white">
                  <img
                    src="./images/kids/casual-4.jpg"
                    className="img-fluid"
                    alt="casuals-pic"
                  />
                </div>
                <div className="card-body text-center bg-light">
                  <h5 className="card-title">Casuals</h5>
                  <h5>$35</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="pro-btn">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: 'white' }}
                    ></i>
                    <a href="./">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <div className="card-header text-center bg-white">
                  <img
                    src="./images/kids/party-5.jpg"
                    className="img-fluid"
                    alt="partyWear-Pic"
                  />
                </div>
                <div className="card-body text-center bg-light">
                  <h5 className="card-title">Party wear</h5>
                  <h5>$45</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="pro-btn">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: 'white' }}
                    ></i>
                    <a href="./">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="card d-none d-lg-block">
                <div className="card-header text-center bg-white">
                  <img
                    src="./images/kids/skirt-5.jpg"
                    className="img-fluid"
                    alt="Skirt"
                  />
                </div>
                <div className="card-body text-center bg-light">
                  <h5 className="card-title">Skirts</h5>
                  <h5>$15</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="pro-btn">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: 'white' }}
                    ></i>
                    <a href="./">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="card d-none d-lg-block">
                <div className="card-header text-center bg-white">
                  <img
                    src="./images/kids/ethnic-2.jpg"
                    className="img-fluid"
                    alt="Skirt"
                  />
                </div>
                <div className="card-body text-center bg-light">
                  <h5 className="card-title">Skirts</h5>
                  <h5>$15</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="pro-btn">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: 'white' }}
                    ></i>
                    <a href="./">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex">
              <div className="card d-block">
                <div className="card-header text-center bg-white">
                  <img
                    src="./images/men/casual-2.jpg"
                    className="img-fluid"
                    alt="casuals"
                  />
                </div>
                <div className="card-body text-center bg-light">
                  <h5 className="card-title">Casuals</h5>
                  <h5>$15</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="pro-btn">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: 'white' }}
                    ></i>
                    <a href="./">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="card d-none d-sm-block">
                <div className="card-header text-center bg-white">
                  <img
                    src="./images/men/casual-5.jpg"
                    className="img-fluid"
                    alt="Dhoti"
                  />
                </div>
                <div className="card-body text-center bg-light">
                  <h5 className="card-title">Dhoti</h5>
                  <h5>$15</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="pro-btn">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: 'white' }}
                    ></i>
                    <a href="./">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <div className="card-header text-center bg-white">
                  <img
                    src="./images/men/suit-4.jpg"
                    className="img-fluid"
                    alt="suits"
                  />
                </div>
                <div className="card-body text-center bg-light">
                  <h5 className="card-title">Suits</h5>
                  <h5>$35</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="pro-btn">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: 'white' }}
                    ></i>
                    <a href="./">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="card d-none d-lg-block">
                <div className="card-header text-center bg-white">
                  <img
                    src="./images/men/t-shirt-4.jpg"
                    className="img-fluid"
                    alt="T-Shirts"
                  />
                </div>
                <div className="card-body text-center bg-light">
                  <h5 className="card-title">T-Shirts</h5>
                  <h5>$15</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="pro-btn">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: 'white' }}
                    ></i>
                    <a href="./">Add to cart</a>
                  </div>
                </div>
              </div>
              <div className="card d-none d-lg-block">
                <div className="card-header text-center bg-white">
                  <img
                    src="./images/men/t-shirt-2.jpg"
                    className="img-fluid"
                    alt="T-Shirts"
                  />
                </div>
                <div className="card-body text-center bg-light">
                  <h5 className="card-title">T-Shirts</h5>
                  <h5>$15</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="pro-btn">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: 'white' }}
                    ></i>
                    <a href="./">Add to cart</a>
                  </div>
                </div>
              </div>
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
