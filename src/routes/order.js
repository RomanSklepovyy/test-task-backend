const express = require('express');
const Order = require('../models/order');

const router = new express.Router();

router.get('/orders', (req, res) => {
   try {
      res.status(200).send();
   } catch (e) {
      console.log(e.message);
   }
});

router.post('/order', async (req, res) => {
   try {
      const order = new Order({ ...req.body } );
      await order.save();
      res.status(201).send();
   } catch (e) {
      console.log(e.message);
   }
})

module.exports = router;