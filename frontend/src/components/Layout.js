import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <ToastContainer autoClose={1000} />
      <Header />
      <div className="container pt-1">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
