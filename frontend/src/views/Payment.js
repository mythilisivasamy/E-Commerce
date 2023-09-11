import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  savePaymentMethod,
  selectPaymentMethod,
} from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Payment = () => {
  const paymentMethod = useSelector(selectPaymentMethod);
  const [paymentMethodName, setPaymentMethod] = useState(paymentMethod);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(savePaymentMethod(paymentMethodName));
      navigate('/placeOrder');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container small-container  h-50">
      <h3 className="my-3">Payment Method</h3>
      <Form onSubmit={submitHandler}>
        <div className="mb-3">
          <Form.Check
            type="radio"
            id="PayPal"
            label="PayPal"
            value="PayPal"
            checked={paymentMethodName === 'PayPal'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <Form.Check
            type="radio"
            id="Stripe"
            label="Stripe"
            value="Stripe"
            checked={paymentMethodName === 'Stripe'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <Button className="mb-2 btn-info" type="submit">
            Continue
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Payment;
