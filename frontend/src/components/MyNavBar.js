import { Link } from 'react-router-dom';
const MyNavBar = () => {
  return (
    <ul className="nav flex-row justify-content-center ">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/product">
          All Products
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="./#"
        >
          Women
        </Link>
        <ul className="dropdown-menu bg-light">
          <li>
            <Link className="nav-link" to="/product">
              All Dresses
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/product">
              Sarees
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/product">
              Kurtha
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/product">
              Tops
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/product">
              Leggings
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="./#"
        >
          Men
        </Link>
        <ul className="dropdown-menu bg-light">
          <li>
            <Link className="nav-link" to="/product">
              All Dresses
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/product">
              T-Shirt
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/product">
              Casuals
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/product">
              Dhoties
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/product">
              Suits
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="./#"
        >
          Kids
        </Link>
        <ul className="dropdown-menu bg-light">
          <li>
            <Link className="nav-link" to="/product">
              All Dresses
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/product">
              Skirts
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/product">
              Ethnic Wear
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/product">
              Party wear
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/product">
              Casuals
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default MyNavBar;
