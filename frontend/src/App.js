import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import ProductDetails from './views/ProductDetails';
import ProductsList from './views/ProductsList';
import Login from './views/Login';
import Cart from './views/Cart';
import Signup from './views/Signup';
import ShippingAddress from './views/ShippingAddress';
import UserProfile from './views/UserProfile';
import OrderHistory from './views/OrderHistory';
import PlaceOrder from './views/PlaceOrder';
import Payment from './views/Payment';
import OrderScreen from './views/OrderScreen';
import ScrollToTop from './components/ScrollToTop';
import Dashboard from './views/Dashboard';
import ProductList from './components/admin/ProductList';
import UserList from './components/admin/UserList';
import OrderList from './components/admin/OrderList';
import ProductEdit from './components/admin/ProductEdit';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product">
            <Route index element={<ProductsList />} />
            <Route path=":slug" element={<ProductDetails />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shipping" element={<ShippingAddress />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/order/:id" element={<OrderScreen />} />
          <Route path="admin" element={<Dashboard />}>
            <Route index element={<ProductList />} />
            <Route path="userList" element={<UserList />} />
            <Route path="orderList" element={<OrderList />} />
            <Route path="edit/:id" element={<ProductEdit />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
