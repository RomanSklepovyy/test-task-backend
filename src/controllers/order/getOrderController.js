const Order = require('../../models/order');

const getOrderController = async (req, res) => {
  try {
    const { _id } = req.user;
    const order = await Order.findOne({ _id: req.params.id, owner: _id });
    if (!order) {
      res.status(404).send();
      return;
    }
    res.status(200).send(order);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = getOrderController;
