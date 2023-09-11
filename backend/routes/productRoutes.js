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

export default productRouter;
