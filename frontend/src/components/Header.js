import './Header.css';
import MyNavBar from './MyNavBar';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { selectAllCartItems } from '../features/cart/cartSlice';
import Badge from 'react-bootstrap/Badge';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo, signout } from '../features/users/usersSlice';
import { useState } from 'react';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <span className="btn btn-bg-none" onClick={handleShow}>
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
                <Dropdown>
                  <Dropdown.Toggle
                    variant="flush"
                    className="text-white"
                    id="dropdown-basic"
                  >
                    {userInfo.userName}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/profile">Profile</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/orderHistory"> Order History</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <span onClick={clickHandler}>Logout</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <li className="nav-item">
                  {numOfCartItems$ === 0 ? (
                    <Link
                      className="nav-link text-white fs-6 fw-bold"
                      to="/login?redirect="
                    >
                      Login
                    </Link>
                  ) : (
                    <Link
                      className="nav-link text-white fs-6 fw-bold"
                      to="/login?redirect=/shipping"
                    >
                      Login
                    </Link>
                  )}
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
      <Offcanvas show={show} onHide={handleClose} id="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-bg-info">
          <Stack direction="Vertical" gap={2}>
            <div className="p-2">
              <NavLink className="nav-link" to="/" onClick={handleClose}>
                Home
              </NavLink>
            </div>
            <div className="p-2">
              <NavLink className="nav-link" to="/product" onClick={handleClose}>
                All Products
              </NavLink>
            </div>
            <div className="p-2">
              <NavLink className="nav-link" to="/product" onClick={handleClose}>
                Women
              </NavLink>
            </div>
            <div className="p-2">
              <NavLink className="nav-link" to="/product" onClick={handleClose}>
                Men
              </NavLink>
            </div>
            <div className="p-2">
              <NavLink className="nav-link" to="/product" onClick={handleClose}>
                Kids
              </NavLink>
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;
