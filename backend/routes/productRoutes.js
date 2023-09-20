import express from 'express';
import Product from '../models/productModel.js';
import { CustomError } from '../middleware/errorHandler.js';
import asyncHandler from 'express-async-handler';
import { isAuth, isAdmin } from '../middleware/protectedRoute.js';
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

productRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.category = req.body.category;
      product.image = req.body.image;
      product.price = req.body.price;
      product.countInStock = req.body.countInStock;
      product.brand = req.body.brand;

      const updatedProduct = await product.save();
      res.status(201).json({
        message: 'Product Updated',
        statusCode: '201',
        product: updatedProduct,
      });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);
productRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  asyncHandler(async (req, res) => {
    console.log(req.params.id)
    const product = await Product.findById(req.params.id);
    if (product) {
      const deletedProduct = await product.deleteOne();
      res.send({
        message: 'Product Deleted',
        statusCode: '201',
        product: deletedProduct,
      });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

export default productRouter;
