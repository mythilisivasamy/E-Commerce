import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Reviews = () => {
    const dispatch=useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onSubmit = (formValues) => {
        
        try {
          dispatch(
            postReview({
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
            <Button
              type="submit"
              className="mb-2 btn-info align-items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              Post Review
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  </>
  )
}

export default Reviews
