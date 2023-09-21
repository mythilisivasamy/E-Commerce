import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchProducts, setStatus } from './features/products/productsSlice';
import reportWebVitals from './reportWebVitals';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
store.dispatch(fetchProducts());
store.dispatch(setStatus);
const initialOptions = {
  clientId:
    'Ae_1KBHGZdQjch9rfGHcloHNTLc37mkvr0kG2J2Nxh-YxV2LFcFNHjK5IJ387m0EWG5vDD9bXuxy-c3r',
  currency: 'USD',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PayPalScriptProvider deferLoading="true" options={initialOptions}>
      <App />
    </PayPalScriptProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
