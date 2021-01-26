const express = require('express');
const { celebrate } = require('celebrate');
const createOrderController = require('../../controllers/order/createOrderController');
const getOrdersController = require('../../controllers/order/getOrdersController');
const orderValidator = require('./orderValidator');

const router = new express.Router();

router.get('/orders', getOrdersController);

router.post('/order', celebrate(orderValidator), createOrderController);

module.exports = router;
