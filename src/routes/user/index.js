const express = require('express');
const { celebrate } = require('celebrate');
const loginController = require('../../controllers/user/loginController');
const registerController = require('../../controllers/user/registerController');
const logoutController = require('../../controllers/user/logoutController');
const refreshTokenController = require('../../controllers/user/refreshTokenController.js');
const auth = require('../../middleware/auth');
const loginValidatorSchema = require('./validators/loginValidator');
const signupValidator = require('./validators/signupValidator');

const router = new express.Router();

router.post('/users/login', celebrate(loginValidatorSchema), loginController);

router.post('/users/signup', celebrate(signupValidator), registerController);

router.post('/users/logout', auth, logoutController);

router.post('/users/token', refreshTokenController);

module.exports = router;
