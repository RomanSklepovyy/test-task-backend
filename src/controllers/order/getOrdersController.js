const Order = require('../../models/order');

const getOrdersController = async (req, res) => {
  try {
    const { _id } = req.user;
    const orders = await Order.find({ userId: _id });
    res.status(200).send(orders);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = getOrdersController;
