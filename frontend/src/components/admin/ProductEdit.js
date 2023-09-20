import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {toast} from 'react-toastify';
import {
  selectAllProducts,
  updateProduct,
} from '../../features/products/productsSlice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useEffect, useState } from 'react';
import './ProductEdit.css';

const ProductEdit = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = params;
  const products = useSelector(selectAllProducts);
  const [product, setProduct] = useState(
    products.find((item) => item._id === id)
  );
  const [category, setCategory] = useState(product.category);
  const [brand, setBrand] = useState(product.brand);
  const [stock, setStock] = useState(product.countInStock);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState({
    preview: `../../${product.image}`,
    data: product.image,
  });
  const baseName = product.image.substring(0, product.image.lastIndexOf('/'));

  useEffect(() => {
    setProduct(products.find((item) => item._id === id));
  }, [id, products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productExcerpt = {
      id: `${id}`,
      category,
      brand,
      price,
      image: `${baseName}/${image.data.name}`,
      countInStock: stock,
    };
    dispatch(updateProduct(productExcerpt));
    toast.success('product updated');
    navigate(`../edit/${product._id}`);
  };
  const handleChangeCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };
  const handleChangeBrand = (e) => {
    e.preventDefault();
    setBrand(e.target.value);
  };

  const handleFileSelect = (event) => {
    const img = {
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0],
    };
    setImage(img);
  };

  return (
    <div>
      <Card className="card">
        <Form onSubmit={handleSubmit}>
          <div className="upload-box">
            <div className="dropZoneContainer">
              <input
                name="pic"
                type="file"
                id="pic_upload"
                className="FileUpload"
                accept=".jpg,.png,.gif"
                onChange={handleFileSelect}
              />
              <div className="dropZoneOverlay">
                {image.preview && (
                  <img
                    src={image.preview}
                    width="150"
                    height="150"
                    alt="product-pic"
                  />
                )}
                <br />
                {image.data.name}
              </div>
            </div>
          </div>

          <div className="card-body  bg-light">
            <Row className="mx-2">
              <Col xs={12}>
                <p className="fw-bold">Change Category</p>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id="saree"
                    label="Saree"
                    value="saree"
                    checked={category === 'saree'}
                    onChange={(e) => handleChangeCategory(e)}
                  />
                </div>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id="kurtha"
                    label="kurtha"
                    value="kurtha"
                    checked={category === 'kurtha'}
                    onChange={(e) => handleChangeCategory(e)}
                  />
                </div>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id="shirt"
                    label="Shirt"
                    value="Shirt"
                    checked={category === 'Shirt'}
                    onChange={(e) => handleChangeCategory(e)}
                  />
                </div>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id="Ethnic"
                    label="Ethnic"
                    value="Ethnic"
                    checked={category === 'Ethnic'}
                    onChange={(e) => handleChangeCategory(e)}
                  />
                </div>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id="Casuals"
                    label="Casuals"
                    value="Casuals"
                    checked={category === 'Casuals'}
                    onChange={(e) => handleChangeCategory(e)}
                  />
                </div>
              </Col>
            </Row>
            <Row className="mx-2">
              <Col xs={12}>
                <p className="fw-bold">change Brand</p>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id="adidas"
                    label="Adidas"
                    value="Adidas"
                    checked={brand === 'Adidas'}
                    onChange={(e) => handleChangeBrand(e)}
                  />
                </div>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id="pantalooms"
                    label="pantalooms"
                    value="pantalooms"
                    checked={brand === 'pantalooms'}
                    onChange={(e) => handleChangeBrand(e)}
                  />
                </div>

                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id="Trends"
                    label="Trends"
                    value="Trends"
                    checked={brand === 'Trends'}
                    onChange={(e) => handleChangeBrand(e)}
                  />
                </div>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id="Max"
                    label="Max"
                    value="Max"
                    checked={brand === 'Max'}
                    onChange={(e) => handleChangeBrand(e)}
                  />
                </div>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id="Lilliput"
                    label="Lilliput"
                    value="Lilliput"
                    checked={brand === 'Lilliput'}
                    onChange={(e) => handleChangeBrand(e)}
                  />
                </div>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id="Allen Solly"
                    label="Allen Solly"
                    value="Allen Solly"
                    checked={brand === 'Allen Solly'}
                    onChange={(e) => handleChangeBrand(e)}
                  />
                </div>
              </Col>
            </Row>
            <Row className="mx-2">
              <div className="card-text d-sm-block link-color">
                <Form.Group className="mb-3" controlId="formCount">
                  <Form.Label column sm="2">
                    Count In Stock
                  </Form.Label>

                  <Form.Control
                    type="number"
                    defaultValue={product.countInStock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPricetext">
                  <Form.Label column sm="2">
                    Price
                  </Form.Label>

                  <Form.Control
                    type="number"
                    defaultValue={product.price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>
              </div>
            </Row>
            <Row className="mx-2">
              <Col xs={12}>
                <Button type="submit" className="mb-2 btn-info d-block mx-auto">
                  Update
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default ProductEdit;
