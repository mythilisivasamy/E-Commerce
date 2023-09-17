import express from 'express';
import Product from '../models/productModel.js';
import { CustomError } from '../middleware/errorHandler.js';
const productRouter = express.Router();

productRouter.get('/', async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    const error = new CustomError(`Could not get the products`, 500);
    next(error);
  }
});
productRouter.post('/saveReview/:id', async (req, res, next) => {
  const review = req.body;
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (product) {
      product.reviews.push(review);
      const updatedProduct = await product.save();
      res.status(200).json({
        reviews: updatedProduct.reviews,
        message: 'Review Posted',
        statusCode: '201',
      });
    }
  } catch (err) {
    const error = new CustomError(`Could not post the review`, 404);
    next(error);
  }
});
productRouter.get('/fetchReview/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (product) {
      res.status(200).json({
        reviews: product.reviews,
        message: 'Review sent',
        statusCode: '201',
      });
    }
  } catch (err) {
    const error = new CustomError(`Could not post the review`, 404);
    next(error);
  }
});

export default productRouter;
