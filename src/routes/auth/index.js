const express = require('express');
const { celebrate } = require('celebrate');
const loginController = require('../../controllers/auth/loginController');
const registerController = require('../../controllers/auth/registerController');
const logoutController = require('../../controllers/auth/logoutController');
const refreshTokenController = require('../../controllers/auth/refreshTokenController.js');
const changePasswordController = require('../../controllers/auth/changePasswordController');
const auth = require('../../middleware/auth');
const loginValidatorSchema = require('./validators/loginValidator');
const signupValidator = require('./validators/signupValidator');
const authValidatorSchema = require('../../utils/authValidatorSchema');
const changePasswordSchema = require('./validators/changePasswordValidator');

const router = new express.Router();

router.post('/auth/login', celebrate(loginValidatorSchema), loginController);

router.post('/auth/signup', celebrate(signupValidator), registerController);

router.post('/auth/logout', celebrate(authValidatorSchema), auth, logoutController);

router.post('/auth/token', celebrate(authValidatorSchema), refreshTokenController);

router.post(
  '/users/password',
  celebrate(authValidatorSchema),
  auth, celebrate(changePasswordSchema),
  changePasswordController,
);

module.exports = router;
