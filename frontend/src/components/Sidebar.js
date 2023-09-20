import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Sidebar(props) {
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();

  return (
    <ListGroup.Item>
      <Form>
        <Row className="mx-2">
          <Col xs={12}>
            <p className="fw-bold">Filter by Category</p>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="saree"
                label="Saree"
                value="saree"
                checked={category === 'saree'}
                onChange={(e) => {
                  props.handleChangeCategory(e.target.value);
                  setCategory('');
                  setBrand('');
                }}
              />
            </div>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="kurtha"
                label="kurtha"
                value="kurtha"
                checked={category === 'kurtha'}
                onChange={(e) => {
                  props.handleChangeCategory(e.target.value);
                  setCategory(e.target.value);
                  setBrand('');
                }}
              />
            </div>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="shirt"
                label="Shirt"
                value="Shirt"
                checked={category === 'Shirt'}
                onChange={(e) => {
                  props.handleChangeCategory(e.target.value);
                  setCategory(e.target.value);
                  setBrand('');
                }}
              />
            </div>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="Ethnic"
                label="Ethnic"
                value="Ethnic"
                checked={category === 'Ethnic'}
                onChange={(e) => {
                  props.handleChangeCategory(e.target.value);
                  setCategory(e.target.value);
                  setBrand('');
                }}
              />
            </div>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="Casuals"
                label="Casuals"
                value="Casuals"
                checked={category === 'Casuals'}
                onChange={(e) => {
                  props.handleChangeCategory(e.target.value);
                  setCategory(e.target.value);
                  setBrand('');
                }}
              />
            </div>
          </Col>
        </Row>
        <Row className="mx-2">
          <Col xs={12}>
            <p className="fw-bold">Filter by Brand</p>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="adidas"
                label="Adidas"
                value="Adidas"
                checked={brand === 'Adidas'}
                onChange={(e) => {
                  props.handleChangeBrand(e.target.value);
                  setBrand(e.target.value);
                  setCategory('');
                }}
              />
            </div>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="pantalooms"
                label="pantalooms"
                value="pantalooms"
                checked={brand === 'pantalooms'}
                onChange={(e) => {
                  props.handleChangeBrand(e.target.value);
                  setBrand(e.target.value);
                  setCategory('');
                }}
              />
            </div>

            <div className="mb-3">
              <Form.Check
                type="radio"
                id="Trends"
                label="Trends"
                value="Trends"
                checked={brand === 'Trends'}
                onChange={(e) => {
                  props.handleChangeBrand(e.target.value);
                  setBrand(e.target.value);
                  setCategory('');
                }}
              />
            </div>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="Max"
                label="Max"
                value="Max"
                checked={brand === 'Max'}
                onChange={(e) => {
                  props.handleChangeBrand(e.target.value);
                  setBrand(e.target.value);
                  setCategory('');
                }}
              />
            </div>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="Lilliput"
                label="Lilliput"
                value="Lilliput"
                checked={brand === 'Lilliput'}
                onChange={(e) => {
                  props.handleChangeBrand(e.target.value);
                  setBrand(e.target.value);
                  setCategory('');
                }}
              />
            </div>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="Allen Solly"
                label="Allen Solly"
                value="Allen Solly"
                checked={brand === 'Allen Solly'}
                onChange={(e) => {
                  props.handleChangeBrand(e.target.value);
                  setBrand(e.target.value);
                  setCategory('');
                }}
              />
            </div>
          </Col>
        </Row>
      </Form>
    </ListGroup.Item>
  );
}

export default Sidebar;
