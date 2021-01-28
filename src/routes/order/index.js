const express = require('express');
const { celebrate } = require('celebrate');
const createOrderController = require('../../controllers/order/createOrderController');
const getOrdersController = require('../../controllers/order/getOrdersController');
const deleteOrderController = require('../../controllers/order/deleteOrderController');
const getOrderController = require('../../controllers/order/getOrderController');
const updateOrderController = require('../../controllers/order/updateOrderController');
const auth = require('../../middleware/auth');
const createOrderValidator = require('./validators/createOrderValidator');
const idOrderValidator = require('./validators/idOrderValidator');
const updateOrderValidator = require('./validators/updateOrderValidator');

const router = new express.Router();

router.get('/orders', auth, getOrdersController);

router.get('/orders/:id', auth, celebrate(idOrderValidator), getOrderController);

router.post('/orders', auth, celebrate(createOrderValidator), createOrderController);

router.put('/orders/:id', auth, celebrate(updateOrderValidator), updateOrderController);

router.delete('/orders/:id', auth, celebrate(idOrderValidator), deleteOrderController);

module.exports = router;
