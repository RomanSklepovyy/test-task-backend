const express = require('express');
const { celebrate } = require('celebrate');
const createOrderController = require('../../controllers/order/createOrderController');
const getOrdersController = require('../../controllers/order/getOrdersController');
const deleteOrderController = require('../../controllers/order/deleteOrderController');
const createOrderValidator = require('./validators/createOrderValidator');
const deleteOrderValidator = require('./validators/deleteOrderValidator');

const router = new express.Router();

router.get('/orders', getOrdersController);

router.post('/orders', celebrate(createOrderValidator), createOrderController);

router.delete('/orders/:id', celebrate(deleteOrderValidator), deleteOrderController);

module.exports = router;
