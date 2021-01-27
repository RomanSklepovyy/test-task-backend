const express = require('express');
const { celebrate } = require('celebrate');
const createOrderController = require('../../controllers/order/createOrderController');
const getOrdersController = require('../../controllers/order/getOrdersController');
const deleteOrderController = require('../../controllers/order/deleteOrderController');
const getOrderController = require('../../controllers/order/getOrderController');
const createOrderValidator = require('./validators/createOrderValidator');
const idOrderValidator = require('./validators/idOrderValidator');

const router = new express.Router();

router.get('/orders', getOrdersController);

router.get('/orders/:id', celebrate(idOrderValidator), getOrderController);

router.post('/orders', celebrate(createOrderValidator), createOrderController);

router.delete('/orders/:id', celebrate(idOrderValidator), deleteOrderController);

module.exports = router;
