import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { saveShippingAddress } from '../features/cart/cartSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ShippingAddress = () => {
  const shippingAddress = JSON.parse(localStorage.getItem('shippingAddress'));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (shippingAddress) {
      let controls = Object.keys(shippingAddress);
      controls.forEach((control) => {
        setValue(`${control}`, `${shippingAddress[control]}`);
      });
    }
  }, [shippingAddress, setValue]);

  const onSubmit = (formValues) => {
    try {
      dispatch(saveShippingAddress({ ...formValues }));
      navigate('/payment');
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <h3 className="text-center mt-3 fs-5">Shipping Address</h3>
      <div className="col-10 col-xs-10 col-sm-8 col-md-6 col-lg-5 mx-auto d-block text-bg-light">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mx-2">
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  {...register('fullName', {
                    required: {
                      value: true,
                      message: 'Name is required',
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: 'Alphabets only allowed',
                    },
                  })}
                  placeholder="Enter Name"
                />
                <p className="error">{errors.fullName?.message}</p>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mx-2">
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  {...register('address', {
                    required: {
                      value: true,
                      message: 'Address is required',
                    },
                    pattern: {
                      value: /^[A-Za-z0-9\s]+$/,
                      message: 'AlphaNumeric only allowed',
                    },
                  })}
                  placeholder="Enter your Address"
                />
                <p className="error">{errors.address?.message}</p>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mx-2">
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  {...register('city', {
                    required: {
                      value: true,
                      message: 'City is required',
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: 'Alphabets only allowed',
                    },
                  })}
                  placeholder="Enter City"
                />
                <p className="error">{errors.city?.message}</p>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mx-2">
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="postalCode">
                <Form.Label>postalCode</Form.Label>
                <Form.Control
                  type="text"
                  name="postalCode"
                  {...register('postalCode', {
                    required: {
                      value: true,
                      message: 'Postal Code is required',
                    },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Number only allowed',
                    },
                  })}
                  placeholder="Enter postalCode"
                />
                <p className="error">{errors.postalCode?.message}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  {...register('country', {
                    required: {
                      value: true,
                      message: 'Country is required',
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: 'Alphabets only allowed',
                    },
                  })}
                  placeholder="Enter country"
                />
              </Form.Group>
              <p className="error">{errors.country?.message}</p>
            </Col>
          </Row>
          <Row className="mx-2">
            <Col xs={12}>
              <Button
                type="submit"
                className="mb-2 btn-info align-items-center"
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default ShippingAddress;
