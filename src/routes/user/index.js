const express = require('express');
const { celebrate } = require('celebrate');
const loginController = require('../../controllers/user/loginController');
const registerController = require('../../controllers/user/registerController');
const logoutController = require('../../controllers/user/logoutController');
const refreshTokenController = require('../../controllers/user/refreshTokenController.js');
const changePasswordController = require('../../controllers/user/changePasswordController');
const auth = require('../../middleware/auth');
const loginValidatorSchema = require('./validators/loginValidator');
const signupValidator = require('./validators/signupValidator');
const authValidatorSchema = require('../../utils/authValidatorSchema');
const changePasswordSchema = require('./validators/changePasswordValidator');

const router = new express.Router();

router.post('/users/login', celebrate(loginValidatorSchema), loginController);

router.post('/users/signup', celebrate(signupValidator), registerController);

router.post('/users/logout', celebrate(authValidatorSchema), auth, logoutController);

router.post('/users/token', celebrate(authValidatorSchema), refreshTokenController);

router.post('/users/password', celebrate(authValidatorSchema), auth, celebrate(changePasswordSchema), changePasswordController);

module.exports = router;
