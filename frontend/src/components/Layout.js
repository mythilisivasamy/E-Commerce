import Header from './Header';
import Footer from './Footer';
import { Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='container pt-5'>
      <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
