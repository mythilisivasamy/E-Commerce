import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoadingBox from '../components/LoadingBox';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectUserStatusCode,
  updateProfile,
  selectUserMessage,
  signout,
  selectUserInfo,
  setStatusCode,
} from '../features/users/usersSlice';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const statusCode = useSelector(selectUserStatusCode);
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector(selectUserMessage);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (statusCode === '201') {
      try {
        dispatch(setStatusCode());
        dispatch(signout());
        toast.success('Profile Updated Successfully');
        navigate('/login?redirect=');
      } catch (err) {
        toast.error(err );
      }
    }

    if (!userInfo) {
      navigate('/login');
    }
  }, [statusCode, dispatch, navigate, userInfo]);

  const onSubmit = (formValues) => {
    if (formValues.password !== confirmPassword) {
      toast.error('Password Mismatch');
      return;
    }
    try {
      dispatch(
        updateProfile({
          ...formValues,
        })
      ).unwrap();
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <div className="text-center">
        {message === 'Verifying' ? (
          <LoadingBox />
        ) : statusCode === '202' ? (
          <span className="text-center  fs-5 text-danger">{message}</span>
        ) : (
          <></>
        )}
      </div>
      <h3 className="text-center mt-3 fs-5">User Profile</h3>
      <div className="col-10 col-xs-10 col-sm-8 col-md-6 col-lg-5 mx-auto d-block text-bg-light">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mx-2">
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="fname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  {...register('firstName', {
                    required: {
                      value: true,
                      message: 'First Name is required',
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: 'Alphabets only allowed',
                    },
                  })}
                  placeholder="Enter your First Name"
                />
                <p className="error">{errors.firstName?.message}</p>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mx-2">
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="lname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  {...register('lastName', {
                    required: {
                      value: true,
                      message: 'Last Name is required',
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: 'Alphabets only allowed',
                    },
                  })}
                  placeholder="Enter your Last Name"
                />
                <p className="error">{errors.lastName?.message}</p>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mx-2">
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email is required',
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                      message: 'Invalid Email Format',
                    },
                  })}
                  placeholder="name@example.com"
                />
                <p className="error">{errors.email?.message}</p>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mx-2">
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                    pattern: {
                      value: /^[ A-Za-z0-9_@./#&+-]*$/,
                      message: 'Weak Password',
                    },
                  })}
                  placeholder="Enter password"
                  autoComplete="false"
                />
                <p className="error">{errors.password?.message}</p>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mx-2">
            <Col>
              <Form.Group className="mb-3" controlId="confirmpassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Enter password"
                  autoComplete="false"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mx-2">
            <Col xs={12}>
              <Button
                type="submit"
                className="mb-2 btn-info align-items-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default UserProfile;
