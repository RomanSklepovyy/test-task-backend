const Order = require('../../models/order');

const getOrdersController = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).send(orders);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = getOrdersController;
