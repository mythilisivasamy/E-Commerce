const MyNavBar = () => {
  return (
    <ul className="nav flex-row justify-content-center ">
                    <li className="nav-item">
                        <a className="nav-link" href="./index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./all-products.html">All Products</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href='./#'>Women</a>
                        <ul className="dropdown-menu bg-light">
                            <li><a className="dropdown-item" href="./women.html">All Dresses</a></li>
                            <li ><a className="dropdown-item"  href="./women.html#saree">Sarees</a></li>
                            <li><a className="dropdown-item" href="./women.html#kurtha">Kurtha</a></li>
                            <li><a className="dropdown-item" href="./women.html#tops">Tops</a></li>
                            <li><a className="dropdown-item" href="./women.html#leggings">Leggings</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="./#">Men</a>
                        <ul className="dropdown-menu bg-light">
                            <li><a className="dropdown-item" href="./men.html">All Dresses</a></li>
                            <li><a className="dropdown-item" href="./men.html#tshirt">T-Shirt</a></li>
                            <li><a className="dropdown-item" href="./men.html#casual">Casuals</a></li>
                            <li><a className="dropdown-item" href="./men.html#dhoti">Dhoties</a></li>
                            <li><a className="dropdown-item" href="./men.html#suit">Suits</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="./#">Kids</a>
                    <ul className="dropdown-menu bg-light">
                        <li><a className="dropdown-item" href="./kids.html">All Dresses</a></li>
                        <li><a className="dropdown-item" href="./kids.html#skirt">Skirts</a></li>
                        <li><a className="dropdown-item" href="./kids.html#ethnic">Ethnic Wear</a></li>
                        <li><a className="dropdown-item" href="./kids.html#party">Party wear</a></li>
                        <li><a className="dropdown-item" href="./kids.html#casual">Casuals</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="./contact.html">Contacts</a>
                    </li>
                </ul>
  )
}

export default MyNavBar
