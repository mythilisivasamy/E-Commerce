import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
//import Home from './views/Home';
import ProductDetails from './views/ProductDetails';
import ProductsList from './views/ProductsList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsList />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
