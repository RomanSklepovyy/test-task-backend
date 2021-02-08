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
const authValidatorSchema = require('../../utils/authValidatorSchema');
const deleteOrdersController = require('../../controllers/order/deleteOrdersController');

const router = new express.Router();

router.get(
  '/orders',
  celebrate(authValidatorSchema),
  auth,
  getOrdersController,
);

router.get(
  '/orders/:id',
  celebrate(authValidatorSchema),
  auth,
  celebrate(idOrderValidator),
  getOrderController,
);

router.post(
  '/orders',
  celebrate(authValidatorSchema),
  auth,
  celebrate(createOrderValidator),
  createOrderController,
);

router.put(
  '/orders/:id',
  celebrate(authValidatorSchema),
  auth,
  celebrate(updateOrderValidator),
  updateOrderController,
);

router.delete(
  '/orders/:id',
  celebrate(authValidatorSchema),
  auth,
  celebrate(idOrderValidator),
  deleteOrderController,
);

router.delete(
  '/orders',
  auth,
  deleteOrdersController,
);

module.exports = router;
