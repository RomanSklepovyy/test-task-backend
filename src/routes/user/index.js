const express = require('express');
const { celebrate } = require('celebrate');
const auth = require('../../middleware/auth');
const authValidatorSchema = require('../../utils/authValidatorSchema');
const getUserController = require('../../controllers/user/getUserController');

const router = new express.Router();

router.get('/users/', celebrate(authValidatorSchema), auth, getUserController);

module.exports = router;
