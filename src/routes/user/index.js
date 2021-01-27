const express = require('express');
const { celebrate } = require('celebrate');
const loginController = require('../../controllers/user/loginController');
const loginValidatorSchema = require('./loginValidator');

const router = new express.Router();

router.post('/users/login', celebrate(loginValidatorSchema), loginController);

module.exports = router;
