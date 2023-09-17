import express from 'express';
import bcryptjs from 'bcryptjs';
import UserModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import { isAuth } from '../middleware/protectedRoute.js';
import { CustomError } from '../middleware/errorHandler.js';
const userRouter = express.Router();
userRouter.post('/signup', (req, res) => {
  const { firstName, lastName, email, password, resetToken, isAdmin } =
    req.body;

  UserModel.findOne({ email: email })
    .then((userInDB) => {
      if (userInDB) {
        return res.status(203).json({
          message: 'User with this email already exist',
          statusCode: '203',
        });
      }
      bcryptjs.hash(password, 16).then((hashedpwd) => {
        const user = new UserModel({
          firstName,
          lastName,
          email,
          password: hashedpwd,
          resetToken,
          isAdmin,
        });
        user
          .save()
          .then(() => {
            res.status(201).json({
              email,
              password,
              message: 'User Signed Up Successfully',
              statusCode: '201',
            });
          })
          .catch((err) => {
            return res.status(501).json({ message: 'Signup failed' + err });
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

userRouter.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((userInDB) => {
      if (!userInDB) {
        return res.status(202).json({
          message: 'Invalid Email',
          statusCode: '202',
        });
      }
      bcryptjs.compare(password, userInDB.password).then((isMatched) => {
        if (isMatched) {
          const jwtToken = jwt.sign(
            { _id: userInDB._id },
            process.env.JWT_SECRET
          );
          res.status(201).json({
            userInfo: {
              token: jwtToken,
              userName: userInDB.firstName,
            },
            message: 'User Logged In Successfully',
            statusCode: '201',
          });
        } else {
          res
            .status(202)
            .json({ message: 'Invalid Password', statusCode: '202' });
        }
      });
    })
    .catch(() => {
      const err = new CustomError(`Internal server error`, 500);
      next(err);
    });
});
userRouter.put('/profile', isAuth, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await UserModel.findById(req.user._id);
  if (user) {
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    const hashedpwd = await bcryptjs.hash(password, 16);
    user.password = hashedpwd;
    const updatedUser = await user.save();
    return res.status(201).json({
      message: 'User profile updated',
      statusCode: '201',
      user: updatedUser,
    });
  } else {
    return res.status(404).json('User not found');
  }
});

export default userRouter;
