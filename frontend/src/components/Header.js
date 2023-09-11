import './Header.css';
import MyNavBar from './MyNavBar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { selectAllCartItems } from '../features/cart/cartSlice';
import Badge from 'react-bootstrap/Badge';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo, signout } from '../features/users/usersSlice';
const Header = () => {
  const cartItems = useSelector(selectAllCartItems);
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const numOfCartItems$ = cartItems.reduce((a, item) => a + item.quantity, 0);
  const clickHandler = () => {
    dispatch(signout());
  };

  return (
    <div id="header">
      <div className="container-fluid" id="header-top">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3">
            <img
              src="../images/logo.png"
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
            <ul className="nav flex-row justify-content-center ">
              {userInfo ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white fs-6 fw-bold"
                    data-bs-toggle="dropdown"
                    href="./#"
                  >
                    {userInfo.userName}
                  </a>
                  <ul className="dropdown-menu bg-light">
                    <li>
                      <a className="dropdown-item fs-6 " href="./#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item fs-6" href="./#">
                        Order History
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fs-6"
                        onClick={clickHandler}
                        to="/"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link text-white fs-6 fw-bold"
                    to="/login?redirect=/shipping"
                  >
                    Login
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link text-white fs-6 fw-bold" to="/cart">
                  <FontAwesomeIcon className="cart" icon={faCartShopping} />
                  {numOfCartItems$ > 0 && (
                    <Badge pill bg="success">
                      {numOfCartItems$}
                    </Badge>
                  )}
                </Link>
              </li>
            </ul>
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
