import './Header.css';
import MyNavBar from './MyNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <div id="header">
      <div className="container-fluid" id="header-top">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3">
            <img
              src="./images/logo.png"
              className="logo img-fluid"
              alt="logo"
            />

            <div id="menu-bar" className="d-block d-sm-none">
              <span
                data-bs-toggle="offcanvas"
                className="btn btn-bg-none"
                data-bs-target="#demo"
              >
                <div id="menu-bar1"></div>
                <div id="menu-bar2"></div>
                <div id="menu-bar3"></div>
              </span>
            </div>
          </div>
          <div
            className="col-12 col-sm-6  col-md-6 col-lg-6 my-2"
            id="header-middle"
          >
            <span className="search">
              <input type="text" name="keyword" />
              <button className="normal">Search</button>
            </span>
          </div>
          <div
            className="col-12 col-sm-6  col-md-3 col-lg-3 pt-2 my-2"
            id="header-right"
          >
            <nav>
              <a href="./">Login</a>
              <a href="./">
              <FontAwesomeIcon className="cart" icon={faCartShopping} />
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div
        className="container-fluid  bg-light d-none d-sm-block"
        id="nav-band"
      >
        <div className="row">
          <div className="col">
            <MyNavBar />
          </div>
        </div>
      </div>

      <div className="offcanvas offcanvas-start offcanvas-lg" id="demo">
        <div className="offcanvas-header d-flex justify-content-between">
          <h3>Menu</h3>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body text-bg-light">
          <ul className="nav flex-column justify-content-between ">
            <li className="nav-item">
              <a className="nav-link active" href="./">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./">
                All Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="./">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="./">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="./">
                Kids
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="./">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="./">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
