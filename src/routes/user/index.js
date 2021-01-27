const express = require('express');
const { celebrate } = require('celebrate');
const loginController = require('../../controllers/user/loginController');
const registerController = require('../../controllers/user/registerController');
const loginValidatorSchema = require('./validators/loginValidator');
const signupValidator = require('./validators/signupValidator');

const router = new express.Router();

router.post('/users/login', celebrate(loginValidatorSchema), loginController);

router.post('/users/signup', celebrate(signupValidator), registerController);

module.exports = router;
