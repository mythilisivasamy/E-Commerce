import express from 'express';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';

// api
const router = express.Router();
router.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});

export default router;
