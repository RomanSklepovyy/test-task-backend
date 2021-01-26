const express = require('express');
const Order = require('../models/order');

const router = new express.Router();

router.get('/orders', (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.post('/order', async (req, res) => {
  try {
    const order = new Order({ ...req.body });
    await order.save();
    res.status(201).send();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
