import express from 'express';
import Order from '../models/orderModel.js';
import asyncHandler from 'express-async-handler';
import { isAuth } from '../middleware/protectedRoute.js';
import { CustomError } from '../middleware/errorHandler.js';

const orderRouter = express.Router();
orderRouter.post('/', isAuth, (req, res, next) => {
  const newOrder = new Order({
    orderItems: req.body.orderItems.map((item) => ({
      ...item,
      product: item._id,
    })),
    shippingAddress: req.body.shippingAddress,
    paymentMethod: req.body.paymentMethod,
    itemsPrice: req.body.itemsPrice,
    shippingPrice: req.body.shippingPrice,
    totalPrice: req.body.totalPrice,
    user: req.user._id,
  });
  newOrder
    .save()
    .then((order) => {
      res.status(201).json(order);
    })

    .catch(() => {
      const error = new CustomError(`Could not get the products`, 500);
      next(error);
    });
});

orderRouter.get(
  '/:id',
  isAuth,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

export default orderRouter;
