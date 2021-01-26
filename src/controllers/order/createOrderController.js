const Order = require('../../models/order');

const createOrderController = async (req, res) => {
  try {
    const order = new Order({ ...req.body });
    await order.save();
    res.status(201).send(order);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = createOrderController;
